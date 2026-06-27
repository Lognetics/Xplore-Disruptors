import { Sparkles, Filter } from "lucide-react";
import { PageHeader } from "@/components/shell/page-header";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { PersonCard } from "@/components/cards/person-card";
import { PEOPLE } from "@/lib/mock";

const ROLES = ["AI Matches", "Investors", "Founders", "Mentors", "Researchers", "Nearby"];

export const metadata = { title: "Network" };

export default function NetworkPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-4 md:px-6">
      <PageHeader
        eyebrow="Network"
        title="AI-powered matchmaking"
        subtitle="We surface the right founders, investors and mentors for you — ranked by shared goals, thesis and interests."
      />

      <Reveal className="px-4 md:px-0">
        <GlassCard glow className="flex items-center gap-4 p-5">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(120deg,var(--brand-500),var(--violet-600))]">
            <Sparkles className="h-6 w-6 text-white" />
          </span>
          <div>
            <p className="font-display text-base font-bold">142 high-fit people near you</p>
            <p className="text-sm text-muted">Based on your profile, sessions saved, and goals for this edition.</p>
          </div>
        </GlassCard>
      </Reveal>

      <div className="no-scrollbar flex items-center gap-2 overflow-x-auto px-4 md:px-0">
        <button className="glass inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold">
          <Filter className="h-4 w-4" /> Filters
        </button>
        {ROLES.map((r, i) => (
          <span
            key={r}
            className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold ${
              i === 0 ? "bg-[linear-gradient(110deg,var(--brand-500),var(--violet-600))] text-white" : "glass text-muted"
            }`}
          >
            {r}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 px-4 sm:grid-cols-3 md:grid-cols-4 md:px-0">
        {PEOPLE.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.04} className="flex">
            <PersonCard person={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
