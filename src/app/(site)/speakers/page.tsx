import { Mic } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { Speakers } from "@/components/site/speakers";
import { InfoGrid } from "@/components/site/info-grid";
import { CTABand } from "@/components/site/cta-band";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Speakers",
  description: "500+ founders, investors and visionaries take the Xplore stage.",
};

const FORMATS = [
  { title: "Keynotes", desc: "Headline talks from the leaders defining the next decade of technology." },
  { title: "Fireside chats", desc: "Intimate, candid conversations with founders and investors." },
  { title: "Panels", desc: "Cross-sector debates on the issues shaping Africa's future." },
  { title: "Masterclasses", desc: "Hands-on sessions to level up your craft." },
];

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        eyebrow="Featured speakers"
        breadcrumb="Speakers"
        title={<>The voices <span className="text-gradient">shaping tomorrow</span></>}
        subtitle="500+ founders, investors, policymakers and visionaries take the stage across three days. The 2026 lineup is revealing soon."
        actions={[{ label: "Apply to speak", href: "/contact" }, { label: "See the agenda", href: "/agenda", variant: "glass" }]}
      />
      <Speakers />
      <Section eyebrow="On stage" title="Session formats">
        <InfoGrid items={FORMATS.map((f) => ({ ...f, icon: Mic }))} cols={4} />
      </Section>
      <CTABand
        title="Have a story worth telling?"
        subtitle={`Apply to speak at ${SITE.name} ${SITE.edition.year}.`}
        primary={{ label: "Apply to speak", href: "/contact" }}
        secondary={{ label: "Get a ticket", href: "/tickets" }}
      />
    </>
  );
}
