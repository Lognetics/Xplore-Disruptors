import { Reveal } from "@/components/ui/reveal";

export type TimelineItem = { time: string; title: string; desc?: string; tag?: string };

/** Vertical timeline used for agenda / our-story / program schedules. */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="absolute bottom-2 left-[7.5rem] top-2 hidden w-px bg-border sm:block" />
      <ol className="space-y-3">
        {items.map((it, i) => (
          <Reveal key={`${it.time}-${it.title}`} delay={(i % 6) * 0.04}>
            <li className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <div className="shrink-0 pt-3 font-display text-sm font-bold tabular-nums text-muted sm:w-28 sm:text-right">
                {it.time}
              </div>
              <div className="relative sm:pl-8">
                <span className="absolute left-[-0.3rem] top-5 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--neon-blue)] ring-4 ring-[var(--neon-blue)]/15 sm:block" />
                <div className="rounded-2xl glass-card p-4">
                  {it.tag && (
                    <span className="inline-block rounded-full bg-[var(--neon-blue)]/15 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-[var(--neon-cyan)]">
                      {it.tag}
                    </span>
                  )}
                  <h3 className="mt-1 font-display text-base font-bold">{it.title}</h3>
                  {it.desc && <p className="mt-1 text-sm text-muted">{it.desc}</p>}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
