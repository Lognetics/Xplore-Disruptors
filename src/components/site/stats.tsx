import { StatCounter } from "@/components/ui/stat-counter";
import { Reveal } from "@/components/ui/reveal";
import { STATS } from "@/lib/site";

export function StatsSection() {
  return (
    <section id="stats" className="relative mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-16 sm:px-6">
      <div className="glass-card rounded-3xl p-8 sm:p-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="text-center">
              <div className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem]">
                <span className="text-gradient">
                  <StatCounter value={s.value} suffix={s.suffix} prefix={"prefix" in s ? s.prefix : ""} />
                </span>
              </div>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-muted">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
