import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export type InfoItem = { title: string; desc?: string; icon?: LucideIcon };

/** Responsive grid of glass info cards (offerings, features, benefits). */
export function InfoGrid({ items, cols = 3 }: { items: InfoItem[]; cols?: 2 | 3 | 4 }) {
  return (
    <div
      className={cn(
        "grid gap-4",
        cols === 2 && "sm:grid-cols-2",
        cols === 3 && "sm:grid-cols-2 lg:grid-cols-3",
        cols === 4 && "sm:grid-cols-2 lg:grid-cols-4",
      )}
    >
      {items.map((it, i) => (
        <Reveal key={it.title} delay={(i % cols) * 0.05}>
          <div className="h-full rounded-3xl glass-card p-6">
            {it.icon && (
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--neon-blue)]/12">
                <it.icon className="h-5 w-5 text-[var(--neon-cyan)]" strokeWidth={1.7} />
              </span>
            )}
            <h3 className="mt-4 font-display text-lg font-bold leading-tight">{it.title}</h3>
            {it.desc && <p className="mt-2 text-sm leading-relaxed text-muted">{it.desc}</p>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
