import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { CTABand } from "@/components/site/cta-band";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "FAQ",
  description: "Answers to the most common questions about Xplore Disruptors.",
};

const GENERAL = [
  { q: "What is Xplore Disruptors?", a: `${SITE.name} is the largest tech festival in Africa — a movement convening founders, investors, governments and innovators to accelerate the continent's digital future.` },
  { q: "When and where is the 2026 edition?", a: `${SITE.edition.dates}, at the ${SITE.edition.venue}, ${SITE.edition.city}.` },
  { q: "Who attends?", a: "Founders, investors, corporates, governments, students, creators, researchers and media from 30+ countries." },
];

const TICKETS = [
  { q: "How do I register?", a: "Head to the Tickets page, choose your pass, and complete registration. A free pass is available." },
  { q: "Can I upgrade later?", a: "Yes — upgrade any time from your dashboard, subject to availability." },
  { q: "Are tickets transferable?", a: "Tickets are transferable to another attendee. See our Terms for full details." },
];

const PARTICIPATE = [
  { q: "How do I apply to pitch?", a: "Visit the Startup Competition page and submit your application before the deadline." },
  { q: "Can I exhibit?", a: "Yes — choose a booth package on the Exhibitors page and reserve your space." },
  { q: "How do I become a partner?", a: `Visit the Partners page or email ${SITE.contact.partnerships}.` },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Help center"
        breadcrumb="FAQ"
        title={<>Frequently asked <span className="text-gradient">questions</span></>}
        subtitle="Everything you need to know about attending, participating in and partnering with Xplore Disruptors."
        actions={[{ label: "Still need help? Contact us", href: "/contact" }]}
      />
      <Section eyebrow="General" title="About the festival"><FAQAccordion items={GENERAL} /></Section>
      <Section eyebrow="Tickets" title="Registration & passes"><FAQAccordion items={TICKETS} /></Section>
      <Section eyebrow="Participate" title="Pitching, exhibiting & partnering"><FAQAccordion items={PARTICIPATE} /></Section>
      <CTABand title="Didn't find your answer?" primary={{ label: "Contact our team", href: "/contact" }} secondary={{ label: "Get a ticket", href: "/tickets" }} />
    </>
  );
}
