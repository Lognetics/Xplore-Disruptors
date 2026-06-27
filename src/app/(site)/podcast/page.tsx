import { Play, Headphones } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CTABand } from "@/components/site/cta-band";
import { Reveal } from "@/components/ui/reveal";

export const metadata = {
  title: "Podcast",
  description: "Long-form conversations with the builders of Africa's future.",
};

const EPISODES = [
  { ep: "EP 12", title: "Scaling fintech across African borders", guest: "Founder, pan-African payments", len: "48 min" },
  { ep: "EP 11", title: "What investors really look for in 2026", guest: "Partner, growth fund", len: "52 min" },
  { ep: "EP 10", title: "Building applied AI for local languages", guest: "AI researcher", len: "41 min" },
  { ep: "EP 09", title: "From hackathon to high-growth startup", guest: "Repeat founder", len: "37 min" },
  { ep: "EP 08", title: "Policy, regulation and the digital economy", guest: "Public-sector innovator", len: "45 min" },
  { ep: "EP 07", title: "Climate tech on the frontier", guest: "Cleantech founder", len: "39 min" },
];

const PLATFORMS = ["Spotify", "Apple Podcasts", "YouTube", "Google Podcasts"];

export default function PodcastPage() {
  return (
    <>
      <PageHero
        eyebrow="Xplore podcast"
        breadcrumb="Podcast"
        title={<>Voices of <span className="text-gradient">the builders</span></>}
        subtitle="Long-form conversations with the founders, investors and operators building Africa's future — every week."
        actions={[{ label: "Listen now", href: "#episodes" }, { label: "Suggest a guest", href: "/contact", variant: "glass" }]}
      />
      <Section id="episodes" eyebrow="Episodes" title="Latest episodes">
        <div className="mx-auto max-w-3xl space-y-3">
          {EPISODES.map((e, i) => (
            <Reveal key={e.ep} delay={(i % 4) * 0.04}>
              <div className="flex items-center gap-4 rounded-2xl glass-card p-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(120deg,var(--neon-blue),var(--neon-violet))]">
                  <Play className="h-5 w-5 fill-white text-white" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-[var(--neon-cyan)]">{e.ep} · {e.len}</p>
                  <h3 className="truncate font-display text-base font-bold">{e.title}</h3>
                  <p className="truncate text-xs text-muted">{e.guest}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="Listen anywhere" title="Available on your favourite platform">
        <div className="flex flex-wrap justify-center gap-3">
          {PLATFORMS.map((p) => (
            <span key={p} className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
              <Headphones className="h-4 w-4 text-[var(--neon-cyan)]" /> {p}
            </span>
          ))}
        </div>
      </Section>
      <CTABand title="Want to be on the show?" primary={{ label: "Suggest a guest", href: "/contact" }} secondary={{ label: "More media", href: "/news" }} />
    </>
  );
}
