import { GraduationCap, Megaphone, Trophy, Network } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { InfoGrid } from "@/components/site/info-grid";
import { Timeline } from "@/components/site/timeline";
import { CTABand } from "@/components/site/cta-band";

export const metadata = {
  title: "Campus Ambassadors",
  description: "Lead the innovation movement on your campus.",
};

const DO = [
  { title: "Build a community", desc: "Start an innovation club and grow it on your campus.", icon: Network },
  { title: "Spread the word", desc: "Represent Xplore and rally builders to the festival.", icon: Megaphone },
  { title: "Run mini-events", desc: "Host workshops, watch parties and local hackathons.", icon: GraduationCap },
];

const PERKS = [
  { title: "Free festival pass", desc: "Plus travel support for top performers.", icon: Trophy },
  { title: "Leadership training", desc: "Develop real organising and community skills.", icon: GraduationCap },
  { title: "Exclusive network", desc: "Join ambassadors from 30+ countries.", icon: Network },
  { title: "Certificate & swag", desc: "Recognition and branded gear.", icon: Trophy },
];

const PROCESS = [
  { time: "01", title: "Apply online", desc: "Tell us about you and your campus." },
  { time: "02", title: "Get onboarded", desc: "Receive your toolkit and goals." },
  { time: "03", title: "Lead & earn", desc: "Drive impact and unlock rewards." },
];

export default function CampusAmbassadorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Campus ambassadors"
        breadcrumb="Campus Ambassadors"
        title={<>Lead the movement <span className="text-gradient">on your campus</span></>}
        subtitle="Become the face of Xplore at your university — build a community of innovators and unlock exclusive rewards and experiences."
        actions={[{ label: "Apply now", href: "/contact" }]}
      />
      <Section eyebrow="The role" title="What ambassadors do">
        <InfoGrid items={DO} cols={3} />
      </Section>
      <Section eyebrow="Rewards" title="What you'll get">
        <InfoGrid items={PERKS} cols={4} />
      </Section>
      <Section eyebrow="How to join" title="Three steps to leading">
        <Timeline items={PROCESS} />
      </Section>
      <CTABand title="Ready to lead on your campus?" primary={{ label: "Apply now", href: "/contact" }} secondary={{ label: "Volunteer instead", href: "/volunteer" }} />
    </>
  );
}
