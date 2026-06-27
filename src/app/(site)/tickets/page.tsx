import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { Tickets } from "@/components/site/tickets";
import { FAQAccordion } from "@/components/site/faq-accordion";
import { CTABand } from "@/components/site/cta-band";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Tickets",
  description: "From free festival access to executive and investor passes.",
};

const FAQS = [
  { q: "Is there a free ticket?", a: "Yes. A free pass gives you access to the expo, exhibitions and main-stage keynotes. Upgrade any time for masterclasses, lounges and matchmaking." },
  { q: "Can I upgrade my ticket later?", a: "Absolutely. You can upgrade from your dashboard at any point, subject to availability." },
  { q: "Are group or student discounts available?", a: "Yes — student passes and group rates are available. Contact our team for group bookings." },
  { q: "What's included with a VIP or Executive pass?", a: "Priority seating, VC lounge access, speaker meet-and-greets and curated AI-powered networking, plus everything in lower tiers." },
  { q: "Is the ticket refundable or transferable?", a: "Tickets are transferable to another attendee. Refund terms are outlined at checkout and in our Terms." },
];

export default function TicketsPage() {
  return (
    <>
      <PageHero
        eyebrow="Be in the room"
        breadcrumb="Tickets"
        title={<>Choose your <span className="text-gradient">access</span></>}
        subtitle={`${SITE.edition.dates} · ${SITE.edition.venue}, ${SITE.edition.city}. From free festival access to executive and investor passes — there's a way in for everyone.`}
        actions={[{ label: "Get free ticket", href: "#tickets" }, { label: "Partner with us", href: "/partners", variant: "glass" }]}
      />
      <Tickets />
      <Section eyebrow="Good to know" title="Ticket FAQ">
        <FAQAccordion items={FAQS} />
      </Section>
      <CTABand title="Your seat at the future is waiting" primary={{ label: "Get your ticket", href: "#tickets" }} secondary={{ label: "Questions? Contact us", href: "/contact" }} />
    </>
  );
}
