import { Megaphone, Target, Users, BarChart3 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { Partners } from "@/components/site/partners";
import { InfoGrid } from "@/components/site/info-grid";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { CTABand } from "@/components/site/cta-band";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Partners",
  description: "Put your brand at the center of African innovation.",
};

const WHY = [
  { title: "Unrivalled reach", desc: "20,000+ attendees and 100,000 registrations across 30+ countries.", icon: Users },
  { title: "The right audience", desc: "Founders, investors, governments and enterprise decision-makers.", icon: Target },
  { title: "Always-on exposure", desc: "On-site, on-stream and across Xplore's media all year.", icon: Megaphone },
  { title: "Measurable ROI", desc: "Lead capture, booth analytics and campaign reporting.", icon: BarChart3 },
];

const FAQS = [
  { q: "What partnership tiers are available?", a: "Title, Platinum, Gold and Community tiers — each with escalating brand presence, activation and access. We also build bespoke packages." },
  { q: "Can we host our own activation or stage?", a: "Yes. Higher tiers include branded activations, stage slots and dedicated spaces designed with our team." },
  { q: "Do partners get leads and analytics?", a: "Partners receive lead capture, booth analytics and a post-event ROI report." },
  { q: "How do we get started?", a: `Download the sponsorship deck or email ${SITE.contact.partnerships} and our team will design a package with you.` },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnership portal"
        breadcrumb="Partners"
        title={<>Put your brand at the <span className="text-gradient">center of African innovation</span></>}
        subtitle="Reach the founders, investors and policymakers building the continent's future — and align your brand with its most ambitious platform."
        actions={[{ label: "Become a partner", href: "/contact" }, { label: "Download deck", href: "/downloads", variant: "glass" }]}
      />
      <Section eyebrow="Why partner" title="Where ambition meets audience">
        <InfoGrid items={WHY} cols={4} />
      </Section>
      <Partners />
      <Section eyebrow="Questions" title="Partnership FAQ">
        <FAQAccordion items={FAQS} />
      </Section>
      <CTABand
        title="Let's build something the continent remembers"
        subtitle="Our partnerships team will design a package around your goals."
        primary={{ label: "Talk to our team", href: "/contact" }}
        secondary={{ label: "Download deck", href: "/downloads" }}
      />
    </>
  );
}
