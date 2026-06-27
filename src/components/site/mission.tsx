import { Target, Telescope, Rocket } from "lucide-react";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/ui/reveal";
import { GlassCard } from "@/components/ui/glass-card";
import { SITE } from "@/lib/site";

export function Mission() {
  return (
    <Section
      id="mission"
      eyebrow="Why Xplore exists"
      title={<>The future isn&apos;t coming to Africa. <span className="text-gradient">It&apos;s being built here.</span></>}
      subtitle={SITE.motto}
    >
      <div className="grid gap-5 md:grid-cols-3">
        <Reveal>
          <GlassCard glow className="h-full p-7">
            <Rocket className="h-7 w-7 text-[var(--neon-cyan)]" />
            <h3 className="mt-4 font-display text-xl font-bold">The movement</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {SITE.name} is more than a tech event — it&apos;s a bold movement to shape the future of Africa
              through technology, innovation and radical collaboration.
            </p>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.08}>
          <GlassCard glow className="h-full p-7">
            <Target className="h-7 w-7 text-[var(--neon-blue)]" />
            <h3 className="mt-4 font-display text-xl font-bold">Our mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{SITE.mission}</p>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.16}>
          <GlassCard glow className="h-full p-7">
            <Telescope className="h-7 w-7 text-[var(--neon-violet)]" />
            <h3 className="mt-4 font-display text-xl font-bold">Our vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{SITE.vision}</p>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
