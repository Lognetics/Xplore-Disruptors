import { Search, TrendingUp, MapPin, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/shell/page-header";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { FeedCard } from "@/components/cards/feed-card";
import { FEED } from "@/lib/mock";

const CATEGORIES = [
  { label: "Startups", emoji: "🚀" },
  { label: "Investors", emoji: "💰" },
  { label: "Speakers", emoji: "🎤" },
  { label: "Hackathons", emoji: "💻" },
  { label: "Universities", emoji: "🎓" },
  { label: "Communities", emoji: "🌍" },
  { label: "Jobs", emoji: "💼" },
  { label: "Funding", emoji: "📈" },
  { label: "Accelerators", emoji: "⚡" },
  { label: "Research", emoji: "🔬" },
  { label: "Products", emoji: "📦" },
  { label: "Opportunities", emoji: "🎯" },
];

const TRENDING = ["African LLMs", "Climate fintech", "Agentic AI", "Open banking", "Solar microgrids", "Web3 identity"];

export const metadata = { title: "Explore" };

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-5xl space-y-7 pb-4 md:px-6">
      <PageHeader
        eyebrow="Discover"
        title="Explore the ecosystem"
        subtitle="Search across people, startups, investors, events, opportunities and the entire African innovation graph."
      >
        <div className="glass-card mt-4 flex items-center gap-2 rounded-2xl px-4 py-3">
          <Search className="h-5 w-5 text-muted" />
          <input
            placeholder="Search everything…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
          />
          <kbd className="hidden rounded-md bg-foreground/5 px-1.5 py-0.5 text-[0.65rem] text-muted md:inline">⌘K</kbd>
        </div>
      </PageHeader>

      <section className="space-y-3 px-4 md:px-0">
        <h2 className="px-1 font-display text-lg font-bold">Browse categories</h2>
        <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-6">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.02}>
              <GlassCard interactive className="flex aspect-square flex-col items-center justify-center gap-2 p-2 text-center">
                <span className="text-2xl">{c.emoji}</span>
                <span className="text-xs font-semibold">{c.label}</span>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-3 px-4 md:px-0">
        <h2 className="inline-flex items-center gap-2 px-1 font-display text-lg font-bold">
          <TrendingUp className="h-5 w-5 text-accent-500" /> Trending now
        </h2>
        <div className="flex flex-wrap gap-2">
          {TRENDING.map((t) => (
            <span key={t} className="glass rounded-full px-3.5 py-1.5 text-sm font-medium">#{t}</span>
          ))}
        </div>
      </section>

      <section className="space-y-3 px-4 md:px-0">
        <h2 className="inline-flex items-center gap-2 px-1 font-display text-lg font-bold">
          <Sparkles className="h-5 w-5 text-violet-500" /> Recommended for you
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {FEED.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.05}>
              <FeedCard item={f} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal className="px-4 md:px-0">
        <GlassCard className="flex items-center gap-3 p-4">
          <MapPin className="h-5 w-5 text-brand-500" />
          <div className="text-sm">
            <p className="font-semibold">Map view</p>
            <p className="text-muted">Explore innovation hubs across 30+ African cities — coming soon.</p>
          </div>
        </GlassCard>
      </Reveal>
    </div>
  );
}
