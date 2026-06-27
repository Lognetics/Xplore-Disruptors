import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { Experience } from "@/components/site/experience";
import { InfoGrid } from "@/components/site/info-grid";
import { CTABand } from "@/components/site/cta-band";

export const metadata = {
  title: "The Experience",
  description: "Sixteen immersive zones — every scroll feels like entering the future.",
};

const ZONES = [
  { title: "Innovation Expo", desc: "Hundreds of startups and products on the floor." },
  { title: "Robotics Zone", desc: "Live demos of autonomous machines built in Africa." },
  { title: "AI Zone", desc: "Hands-on with the models powering the continent." },
  { title: "Drone Zone", desc: "Aerial tech, logistics and live flight demos." },
  { title: "Space Zone", desc: "Satellites, earth observation and the orbital economy." },
  { title: "VC Lounge", desc: "Where founders and investors do deals." },
  { title: "Future Lab", desc: "Tomorrow's breakthroughs, today." },
  { title: "Creator Economy", desc: "Where culture and technology collide." },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="The experience"
        breadcrumb="Experience"
        title={<>Sixteen worlds in <span className="text-gradient">one festival</span></>}
        subtitle="Every hall, every stage, every zone is designed to feel like stepping into the future of African innovation."
        actions={[{ label: "Get your ticket", href: "/tickets" }, { label: "View agenda", href: "/agenda", variant: "glass" }]}
      />
      <Experience />
      <Section eyebrow="Explore the zones" title="Where you'll spend your days">
        <InfoGrid items={ZONES} cols={4} />
      </Section>
      <CTABand title="Come experience the future" />
    </>
  );
}
