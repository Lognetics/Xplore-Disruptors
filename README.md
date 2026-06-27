# Xplore Disruptors — Africa's Innovation Operating System

A premium **Progressive Web App** for Xplore Disruptors — Africa's largest tech festival —
built to feel like a native mobile app and a cinematic desktop workspace, running 365 days a year.

> _"Africa Is Rising, and So Are the Disruptors Shaping Tomorrow."_

This repo is **Phase 1: the PWA foundation + design system** — the skeleton every future module
(events, networking, dashboards, AI, admin) plugs into.

## Stack

| Concern        | Choice                                             |
| -------------- | -------------------------------------------------- |
| Framework      | Next.js 16 (App Router) · React 19 · TypeScript    |
| Styling        | Tailwind CSS v4 (CSS-first tokens)                 |
| Animation      | Motion (`motion/react`)                            |
| Icons          | lucide-react                                       |
| Theming        | next-themes (dark default, light, system)          |
| PWA            | Serwist (service worker, offline, installable)     |
| Backend        | Supabase (auth, Postgres, storage) — see below     |

## What's in Phase 1

- **Design system** — glassmorphism, animated aurora backgrounds, brand gradient, dark/light
  themes, premium type (Space Grotesk + Inter), the geometric **X** brand mark (SVG + generated icons).
- **App shell** — native-style mobile bottom navigation (Home / Explore / Events / Network /
  Dashboard), desktop top nav, theme toggle, safe-area handling.
- **Screens** (mock data + real event photos): app **Home** (dynamic greeting, AI daily brief,
  live countdown, quick access, event & people rails, innovation feed), **Explore**, **Events**
  (filterable), **Network** (AI matchmaking), **Dashboard** (stats, schedule, innovation score),
  and an **Offline** fallback.
- **PWA** — installable, `manifest.webmanifest`, maskable icons, offline service worker.
- **Supabase** — browser/server clients, session-refresh proxy, and an initial schema migration
  (`supabase/migrations/0001_init.sql`: profiles + roles, events, registrations, connections, RLS).

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000  (uses --webpack; required by Serwist)
npm run build && npm run start
```

### Asset pipelines

```bash
npm run gen:icons    # regenerate PWA/Apple icons from the brand mark
npm run gen:media    # re-curate + optimize event photos from .source-media/ -> public/media
```

Original photos/videos live in `.source-media/` (git-ignored). `npm run gen:media` produces a
curated, WebP-optimized subset in `public/media/gallery` plus `src/lib/gallery.json`.

## Supabase setup

1. Create a project (or reuse one), then copy `.env.example` to `.env.local` and fill:
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...   # publishable / anon key
   ```
2. Apply `supabase/migrations/0001_init.sql` (via the Supabase SQL editor, CLI, or MCP).

The app runs without Supabase configured — auth simply stays inactive until env is set.

> Xplore's data lives in an isolated `xplore` Postgres schema inside a shared Supabase project
> (the Supabase clients default to `db.schema: "xplore"`).

## Deploy to Vercel

1. **Import the repo** at [vercel.com/new](https://vercel.com/new) → select
   `Lognetics/Xplore-Disruptors`. Vercel auto-detects Next.js — no framework config needed.
2. **Add environment variables** (Settings → Environment Variables), for all environments:

   | Name                             | Value                                                       |
   | -------------------------------- | ----------------------------------------------------------- |
   | `NEXT_PUBLIC_SUPABASE_URL`       | `https://lcxqkrbpsutnqybadizk.supabase.co`                  |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY`  | `sb_publishable_09cCXkCdCbBnCV8vi2yIBg_lkZ5LhTG`            |

   Both are publishable (safe to expose to the browser).
3. **Deploy.** The build runs `npm run build` (which uses `--webpack` so the Serwist
   service worker is generated correctly — already wired in `package.json`).

The PWA is installable from the deployed URL (Add to Home Screen on mobile, install icon on desktop).

## Roadmap (beyond Phase 1)

Auth + onboarding → real event/ticketing data → networking & messaging → role dashboards
(founder, investor, speaker, sponsor, exhibitor, volunteer, organizer) → AI matchmaking →
content & community → gamification → admin/CRM. See the product vision for the full map.
