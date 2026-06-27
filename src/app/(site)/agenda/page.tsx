import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { AgendaTabs, type Day } from "@/components/site/agenda-tabs";
import { CTABand } from "@/components/site/cta-band";

export const metadata = {
  title: "Agenda",
  description: "Three days, multiple stages — keynotes, pitches, masterclasses and more.",
};

const DAYS: Day[] = [
  {
    label: "Day 1", date: "Opening",
    items: [
      { time: "09:00", tag: "Keynote", title: "Opening Ceremony & Welcome", desc: "The festival begins on the main stage." },
      { time: "10:30", tag: "Panel", title: "The State of African Innovation", desc: "Founders and investors on where the continent stands." },
      { time: "12:00", tag: "Expo", title: "Tech Expo Opens", desc: "Hundreds of startups and exhibitors go live." },
      { time: "14:00", tag: "Masterclass", title: "Applied AI for African Markets", desc: "Hands-on with production AI systems." },
      { time: "16:00", tag: "Pitch", title: "Startup Pitch Arena — Heats", desc: "The first round of the competition." },
      { time: "19:00", tag: "Social", title: "Welcome Mixer", desc: "Network with builders from 30+ countries." },
    ],
  },
  {
    label: "Day 2", date: "Deep Dive",
    items: [
      { time: "09:30", tag: "Keynote", title: "The Future of Fintech", desc: "Payments and capital rails for a billion people." },
      { time: "11:00", tag: "VC Lounge", title: "Investor Roundtables", desc: "Curated introductions for founders & funds." },
      { time: "13:00", tag: "Track", title: "Green Tech & Climate", desc: "Solutions for the continent's climate frontier." },
      { time: "15:00", tag: "Pitch", title: "Startup Pitch Arena — Semifinals", desc: "The field narrows." },
      { time: "17:00", tag: "Masterclass", title: "Scaling Across Borders", desc: "Going pan-African and global." },
      { time: "20:00", tag: "Social", title: "Creator Economy Night", desc: "Entertainment meets innovation." },
    ],
  },
  {
    label: "Day 3", date: "Finale",
    items: [
      { time: "10:00", tag: "Keynote", title: "HealthTech for a Billion", desc: "Diagnostics and care, reimagined." },
      { time: "12:00", tag: "Pitch", title: "Startup Pitch Arena — Grand Finals", desc: "The continent's best compete for funding." },
      { time: "14:30", tag: "Panel", title: "Policy & The Digital Economy", desc: "Governments and builders, in the same room." },
      { time: "16:30", tag: "Awards", title: "XPLORE Awards Ceremony", desc: "Honouring the year's disruptors." },
      { time: "18:30", tag: "Social", title: "Closing & After Party", desc: "Celebrate the future being built." },
    ],
  },
];

export default function AgendaPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda"
        breadcrumb="Agenda"
        title={<>Three days. <span className="text-gradient">Multiple stages.</span></>}
        subtitle="Keynotes, pitch battles, masterclasses, roundtables and after-parties — build your personal schedule across the festival."
        actions={[{ label: "Get your ticket", href: "/tickets" }, { label: "See speakers", href: "/speakers", variant: "glass" }]}
      />
      <Section eyebrow="Programme" title="What's on">
        <AgendaTabs days={DAYS} />
        <p className="mt-8 text-center text-xs text-muted">Agenda is indicative and subject to change. Final programme announced closer to the event.</p>
      </Section>
      <CTABand title="Don't miss a session" subtitle="Secure your pass and build your personal agenda." />
    </>
  );
}
