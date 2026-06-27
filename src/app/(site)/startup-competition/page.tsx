import { Coins, Users, Rocket, Mic } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { InfoGrid } from "@/components/site/info-grid";
import { Timeline } from "@/components/site/timeline";
import { CTABand } from "@/components/site/cta-band";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Startup Competition",
  description: "Pitch on the biggest stage in African tech and compete for funding.",
};

const PRIZES = [
  { title: "$100k+ in opportunity", desc: "Investment, grants and in-kind support for winners.", icon: Coins },
  { title: "Investor access", desc: "Pitch directly to 500+ global investors and funds.", icon: Users },
  { title: "Main-stage spotlight", desc: "Present to 20,000+ attendees and the world's media.", icon: Mic },
];

const TRACKS = SITE.tracks.map((t) => ({ title: t, desc: `Compete in the ${t} track.`, icon: Rocket }));

const PROCESS = [
  { time: "Apply", title: "Submit your startup", desc: "Tell us about your team, product and traction." },
  { time: "Screen", title: "Selection", desc: "Our panel selects the most promising teams." },
  { time: "Heats", title: "Pitch rounds", desc: "Pitch live across the festival's three days." },
  { time: "Finals", title: "Grand finale", desc: "The best compete on the main stage for the prize." },
];

export default function StartupCompetitionPage() {
  return (
    <>
      <PageHero
        eyebrow="Startup competition"
        breadcrumb="Startup Competition"
        title={<>Pitch on the <span className="text-gradient">biggest stage</span> in African tech</>}
        subtitle="The Live Startup Pitch Arena puts the continent's boldest founders in front of investors, mentors and the world — competing for funding and global visibility."
        actions={[{ label: "Apply to pitch", href: "/contact" }, { label: "View agenda", href: "/agenda", variant: "glass" }]}
      />
      <Section eyebrow="Why compete" title="What's at stake">
        <InfoGrid items={PRIZES} cols={3} />
      </Section>
      <Section eyebrow="Tracks" title="Compete in your category">
        <InfoGrid items={TRACKS} cols={3} />
      </Section>
      <Section eyebrow="How it works" title="From application to the main stage">
        <Timeline items={PROCESS} />
      </Section>
      <Section eyebrow="Eligibility" title="Who can apply">
        <div className="mx-auto max-w-2xl rounded-3xl glass-card p-7 text-sm leading-relaxed text-muted">
          Early-stage startups building technology products for African markets are welcome to apply.
          You should have a working prototype or MVP, a committed founding team, and a clear vision for scale.
          Applications are open to teams from across the continent and the diaspora.
        </div>
      </Section>
      <CTABand title="Think you've got what it takes?" primary={{ label: "Apply to pitch", href: "/contact" }} secondary={{ label: "Get a ticket", href: "/tickets" }} />
    </>
  );
}
