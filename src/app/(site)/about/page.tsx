import { Target, Telescope, Rocket, Users, Globe2, Building2 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { InfoGrid } from "@/components/site/info-grid";
import { Timeline } from "@/components/site/timeline";
import { CTABand } from "@/components/site/cta-band";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "About",
  description: "The story, mission and vision behind Africa's largest tech festival.",
};

const STORY = [
  { time: "2023", title: "An idea is born", desc: "Lognetics sets out to build a platform that unifies Africa's fragmented innovation ecosystem." },
  { time: "2024", title: "The first edition", desc: "Thousands of founders, investors and builders converge for the inaugural festival." },
  { time: "2025", title: "Continental scale", desc: "20,000+ attendees, 5,000+ startups and 100,000 registrations across 30+ countries." },
  { time: "2026", title: "The Rise of Tech Disruptors", desc: "Xplore evolves into a year-round operating system for African innovation." },
];

const VALUES = [
  { title: "Radical collaboration", desc: "We build bridges across sectors, regions and generations.", icon: Users },
  { title: "Africa-first", desc: "Solutions designed for African markets, scaled to the world.", icon: Globe2 },
  { title: "Impact over hype", desc: "We merge innovation with measurable, lasting impact.", icon: Target },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Xplore"
        breadcrumb="About"
        title={<>More than a tech event. <span className="text-gradient">A movement.</span></>}
        subtitle={`${SITE.name} is a bold movement to shape the future of Africa through technology, innovation and radical collaboration — convened by ${SITE.convener} and powered by ${SITE.poweredBy}.`}
        actions={[{ label: "Get your ticket", href: "/tickets" }, { label: "Partner with us", href: "/partners", variant: "glass" }]}
      />

      <Section id="mission" eyebrow="Why we exist" title={<>Building the future, <span className="text-gradient">one disruptor at a time</span></>}>
        <div className="grid gap-5 md:grid-cols-3">
          <Reveal>
            <GlassCard glow className="h-full p-7">
              <Rocket className="h-7 w-7 text-[var(--neon-cyan)]" />
              <h3 className="mt-4 font-display text-xl font-bold">The movement</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{SITE.description}</p>
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

      <Section eyebrow="Our story" title="From an idea to a continental platform">
        <Timeline items={STORY} />
      </Section>

      <Section eyebrow="What we stand for" title="Our values">
        <InfoGrid items={VALUES} cols={3} />
      </Section>

      <Section eyebrow="Behind Xplore" title="Convened by Lognetics & Netics AI">
        <Reveal>
          <GlassCard className="flex flex-col gap-4 p-7 sm:flex-row sm:items-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--neon-blue)]/15">
              <Building2 className="h-7 w-7 text-[var(--neon-cyan)]" />
            </span>
            <p className="text-sm leading-relaxed text-muted">
              {SITE.name} is convened by <span className="text-foreground">{SITE.convener}</span> and powered by{" "}
              <span className="text-foreground">Lognetics</span> and <span className="text-foreground">Netics AI</span> —
              an enterprise technology group building the systems behind Africa&apos;s digital economy.
            </p>
          </GlassCard>
        </Reveal>
      </Section>

      <CTABand title="Be part of the rise of African innovation" subtitle={SITE.connector + "."} />
    </>
  );
}
