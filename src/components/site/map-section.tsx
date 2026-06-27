import { Reveal } from "@/components/ui/reveal";
import { AfricaNetwork } from "@/components/site/africa-network";
import { SITE } from "@/lib/site";

const HIGHLIGHTS = [
  { k: "30+", v: "Countries represented" },
  { k: "Live", v: "Registrations across the continent" },
  { k: "1", v: "Connected innovation network" },
];

export function MapSection() {
  return (
    <section id="map" className="relative mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gradient">One continent, connected</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            A live network of Africa&apos;s innovators
          </h2>
          <p className="mt-4 max-w-lg text-base text-muted sm:text-lg">
            From Lagos to Nairobi, Cairo to Cape Town — {SITE.name} links founders, investors and builders
            into a single, continent-scale innovation graph.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {HIGHLIGHTS.map((h) => (
              <div key={h.v} className="glass-card rounded-2xl p-4">
                <div className="font-display text-2xl font-bold text-gradient">{h.k}</div>
                <div className="mt-1 text-xs text-muted">{h.v}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl glass-card">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,rgba(46,123,255,0.12),transparent_70%)]" />
            <AfricaNetwork />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
