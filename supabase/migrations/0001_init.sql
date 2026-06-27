-- ============================================================
-- Xplore Disruptors — initial schema
-- Profiles, role taxonomy, events, registrations, connections.
-- Row Level Security enabled on every table.
-- ============================================================

-- Roles a member can hold on the platform.
do $$ begin
  create type public.user_role as enum (
    'attendee','founder','investor','speaker','sponsor',
    'exhibitor','volunteer','media','partner','organizer','admin'
  );
exception when duplicate_object then null; end $$;

create type public.event_type as enum (
  'conference','hackathon','competition','masterclass','networking','awards','expo'
);

-- ---------- profiles ----------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  headline text,
  role public.user_role not null default 'attendee',
  organization text,
  avatar_url text,
  bio text,
  city text,
  country text,
  interests text[] default '{}',
  innovation_score int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Profiles are viewable by everyone"
  on public.profiles for select using (true);
create policy "Users can insert their own profile"
  on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update their own profile"
  on public.profiles for update using (auth.uid() = id);

-- Auto-create a profile row when a new auth user signs up.
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    new.raw_user_meta_data->>'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- events ----------
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  type public.event_type not null default 'conference',
  summary text,
  starts_at timestamptz,
  ends_at timestamptz,
  venue text,
  city text,
  cover_url text,
  capacity int,
  is_live boolean not null default false,
  is_published boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.events enable row level security;

create policy "Published events are public"
  on public.events for select using (is_published = true);

-- ---------- event registrations ----------
create table if not exists public.event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  user_id uuid not null references public.profiles(id) on delete cascade,
  ticket_type text not null default 'standard',
  checked_in boolean not null default false,
  created_at timestamptz not null default now(),
  unique (event_id, user_id)
);

alter table public.event_registrations enable row level security;

create policy "Users manage their own registrations"
  on public.event_registrations for all
  using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- ---------- connections (networking graph) ----------
create type public.connection_status as enum ('pending','accepted','declined');

create table if not exists public.connections (
  id uuid primary key default gen_random_uuid(),
  requester_id uuid not null references public.profiles(id) on delete cascade,
  addressee_id uuid not null references public.profiles(id) on delete cascade,
  status public.connection_status not null default 'pending',
  created_at timestamptz not null default now(),
  unique (requester_id, addressee_id),
  check (requester_id <> addressee_id)
);

alter table public.connections enable row level security;

create policy "Users can see connections they are part of"
  on public.connections for select
  using (auth.uid() = requester_id or auth.uid() = addressee_id);
create policy "Users can request connections"
  on public.connections for insert with check (auth.uid() = requester_id);
create policy "Either party can update a connection"
  on public.connections for update
  using (auth.uid() = requester_id or auth.uid() = addressee_id);

create index if not exists idx_events_published on public.events (is_published, starts_at);
create index if not exists idx_registrations_user on public.event_registrations (user_id);
create index if not exists idx_connections_addressee on public.connections (addressee_id, status);
