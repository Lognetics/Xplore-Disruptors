import { Code2, Clock, Trophy, Users, Cpu } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { InfoGrid } from "@/components/site/info-grid";
import { Timeline } from "@/components/site/timeline";
import { CTABand } from "@/components/site/cta-band";

export const metadata = {
  title: "Hackathon",
  description: "48 hours to build the future — the Xplore Hackathon.",
};

const WHY = [
  { title: "48 hours, one mission", desc: "Build a working prototype against a real-world African challenge.", icon: Clock },
  { title: "Mentors on tap", desc: "Get unstuck fast with engineers, designers and founders.", icon: Users },
  { title: "Cash + cloud prizes", desc: "Win funding, credits and a fast-track to the accelerator.", icon: Trophy },
];

const THEMES = [
  { title: "AI for Good", desc: "Applied AI for health, education and agriculture.", icon: Cpu },
  { title: "Fintech", desc: "The next rails for payments and inclusion.", icon: Code2 },
  { title: "Climate", desc: "Tech for energy, water and resilience.", icon: Code2 },
];

const SCHEDULE = [
  { time: "Fri 18:00", title: "Kick-off & team forming", desc: "Meet your team and pick a challenge." },
  { time: "Fri 20:00", title: "Hacking begins", desc: "The clock starts." },
  { time: "Sat — all day", title: "Build + mentor clinics", desc: "Ship features, get unblocked." },
  { time: "Sun 12:00", title: "Submissions close", desc: "Tools down." },
  { time: "Sun 15:00", title: "Demos & judging", desc: "Pitch to the judges." },
  { time: "Sun 17:00", title: "Winners announced", desc: "Prizes and the road ahead." },
];

export default function HackathonPage() {
  return (
    <>
      <PageHero
        eyebrow="Xplore Hackathon"
        breadcrumb="Hackathon"
        title={<>48 hours to <span className="text-gradient">build the future</span></>}
        subtitle="Join hundreds of builders, designers and founders for a weekend of intense building against the continent's biggest challenges."
        actions={[{ label: "Register a team", href: "/contact" }, { label: "Read the rules", href: "/faq", variant: "glass" }]}
      />
      <Section eyebrow="Why join" title="Build, learn, win">
        <InfoGrid items={WHY} cols={3} />
      </Section>
      <Section eyebrow="Themes" title="Pick your challenge">
        <InfoGrid items={THEMES} cols={3} />
      </Section>
      <Section eyebrow="Schedule" title="The weekend, hour by hour">
        <Timeline items={SCHEDULE} />
      </Section>
      <CTABand title="Ready to ship something real?" primary={{ label: "Register a team", href: "/contact" }} secondary={{ label: "Get a ticket", href: "/tickets" }} />
    </>
  );
}
