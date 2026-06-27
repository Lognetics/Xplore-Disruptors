import {
  CalendarClock, Users, Ticket, TrendingUp, Sparkles, MessageSquare,
  Trophy, ArrowUpRight, QrCode, Zap,
} from "lucide-react";
import { PageHeader } from "@/components/shell/page-header";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { PEOPLE } from "@/lib/mock";

export const metadata = { title: "Dashboard" };

const STATS = [
  { label: "Profile views", value: "1,284", delta: "+18%", icon: TrendingUp },
  { label: "Connections", value: "342", delta: "+12", icon: Users },
  { label: "Saved sessions", value: "27", delta: "+5", icon: CalendarClock },
  { label: "Tickets", value: "3", delta: "VIP", icon: Ticket },
];

const SCHEDULE = [
  { time: "09:00", title: "Disruptors Main Stage — Opening", tag: "Keynote", accent: "text-brand-500" },
  { time: "11:00", title: "Investor Roundtable", tag: "Networking", accent: "text-violet-500" },
  { time: "14:30", title: "Startup Pitch Battle — Finals", tag: "Competition", accent: "text-accent-500" },
];

const ACTIONS = [
  { label: "My Tickets", icon: QrCode },
  { label: "AI Assistant", icon: Sparkles },
  { label: "Messages", icon: MessageSquare },
  { label: "Achievements", icon: Trophy },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6 pb-4 md:px-6">
      <PageHeader eyebrow="Dashboard" title="Welcome back, Disruptor" subtitle="Your personalized innovation command center." />

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3 px-4 md:grid-cols-4 md:px-0">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.04}>
            <GlassCard className="p-4">
              <div className="flex items-center justify-between">
                <s.icon className="h-5 w-5 text-brand-500" />
                <span className="rounded-full bg-brand-500/10 px-2 py-0.5 text-[0.65rem] font-bold text-brand-500">{s.delta}</span>
              </div>
              <p className="mt-3 font-display text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted">{s.label}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-4 px-4 md:grid-cols-3 md:px-0">
        {/* Today's schedule */}
        <Reveal className="md:col-span-2">
          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold">Today&apos;s schedule</h2>
              <Button href="/events" variant="ghost" size="sm">View all</Button>
            </div>
            <ol className="mt-4 space-y-3">
              {SCHEDULE.map((s) => (
                <li key={s.time} className="flex items-center gap-4 rounded-2xl bg-foreground/[0.03] p-3">
                  <div className="font-display text-sm font-bold tabular-nums text-muted">{s.time}</div>
                  <div className="h-8 w-px bg-border" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-semibold">{s.title}</p>
                    <p className={`text-xs font-medium ${s.accent}`}>{s.tag}</p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted" />
                </li>
              ))}
            </ol>
          </GlassCard>
        </Reveal>

        {/* Innovation score */}
        <Reveal>
          <GlassCard glow className="flex h-full flex-col items-center justify-center p-5 text-center">
            <div
              className="relative grid h-32 w-32 place-items-center rounded-full"
              style={{ background: "conic-gradient(var(--brand-500) 0% 78%, color-mix(in oklab, var(--muted) 20%, transparent) 78% 100%)" }}
            >
              <div className="grid h-24 w-24 place-items-center rounded-full bg-surface">
                <div>
                  <p className="font-display text-3xl font-bold">78</p>
                  <p className="text-[0.6rem] uppercase tracking-wider text-muted">/ 100</p>
                </div>
              </div>
            </div>
            <p className="mt-4 inline-flex items-center gap-1.5 font-display font-bold">
              <Zap className="h-4 w-4 text-accent-500" /> Innovation Score
            </p>
            <p className="text-xs text-muted">Level 6 · Trailblazer</p>
          </GlassCard>
        </Reveal>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-4 gap-3 px-4 md:px-0">
        {ACTIONS.map((a, i) => (
          <Reveal key={a.label} delay={i * 0.04}>
            <GlassCard interactive className="flex flex-col items-center gap-2 p-4 text-center">
              <a.icon className="h-6 w-6 text-brand-500" />
              <span className="text-[0.7rem] font-semibold leading-tight">{a.label}</span>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      {/* Recommended people */}
      <Reveal className="px-4 md:px-0">
        <GlassCard className="p-5">
          <h2 className="font-display text-lg font-bold">Suggested connections</h2>
          <ul className="mt-3 divide-y divide-border">
            {PEOPLE.slice(0, 4).map((p) => (
              <li key={p.id} className="flex items-center gap-3 py-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{p.name}</p>
                  <p className="truncate text-xs text-muted">{p.role} · {p.org}</p>
                </div>
                <span className="rounded-full bg-brand-500/10 px-2 py-0.5 text-[0.65rem] font-bold text-brand-500">{p.match}%</span>
                <Button size="sm" variant="outline">Connect</Button>
              </li>
            ))}
          </ul>
        </GlassCard>
      </Reveal>
    </div>
  );
}
