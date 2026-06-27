import { Star, Rocket, Coins, Building2, Sparkles, Globe2 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { InfoGrid } from "@/components/site/info-grid";
import { Timeline } from "@/components/site/timeline";
import { CTABand } from "@/components/site/cta-band";

export const metadata = {
  title: "Awards",
  description: "Honouring the founders and institutions redefining Africa's future.",
};

const CATEGORIES = [
  { title: "Founder of the Year", desc: "The visionary leading from the front.", icon: Star },
  { title: "Breakthrough Startup", desc: "The company that redefined its category.", icon: Rocket },
  { title: "Investor of the Year", desc: "Backing the boldest bets on Africa.", icon: Coins },
  { title: "Public-Sector Innovation", desc: "Government driving real digital change.", icon: Building2 },
  { title: "AI Innovation", desc: "The most impactful applied-AI product.", icon: Sparkles },
  { title: "Pan-African Impact", desc: "Scaling solutions across borders.", icon: Globe2 },
];

const PROCESS = [
  { time: "Nominations", title: "Open call", desc: "Anyone can nominate a founder, startup or institution." },
  { time: "Shortlist", title: "Expert panel", desc: "A jury of operators and investors selects finalists." },
  { time: "Voting", title: "Community + jury", desc: "Winners chosen by a blend of public and jury votes." },
  { time: "Ceremony", title: "Awards night", desc: "Winners revealed live on the festival's final evening." },
];

export default function AwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="XPLORE Awards"
        breadcrumb="Awards"
        title={<>Honouring the <span className="text-gradient">disruptors</span></>}
        subtitle="A continental recognition programme celebrating the founders, builders and institutions redefining Africa's future."
        actions={[{ label: "Submit a nomination", href: "/contact" }, { label: "See past winners", href: "/gallery", variant: "glass" }]}
      />
      <Section eyebrow="Categories" title="What we celebrate">
        <InfoGrid items={CATEGORIES} cols={3} />
      </Section>
      <Section eyebrow="How it works" title="From nomination to the stage">
        <Timeline items={PROCESS} />
      </Section>
      <CTABand title="Know a disruptor who deserves the stage?" primary={{ label: "Submit a nomination", href: "/contact" }} secondary={{ label: "Get a ticket", href: "/tickets" }} />
    </>
  );
}
