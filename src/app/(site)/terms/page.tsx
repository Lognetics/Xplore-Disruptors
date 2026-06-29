import { PageHero } from "@/components/site/page-hero";
import { Prose } from "@/components/site/prose";
import { ImageShowcase } from "@/components/site/media";
import { SITE } from "@/lib/site";

export const metadata = { title: "Terms of Service" };

const SECTIONS = [
  { heading: "Acceptance of terms", body: [`By accessing ${SITE.name} or purchasing a ticket, you agree to these Terms of Service. If you do not agree, please do not use our services.`] },
  { heading: "Tickets & registration", body: ["Tickets are issued for personal use and are transferable to another attendee. Refund eligibility is shown at checkout. We reserve the right to refuse entry in line with our code of conduct."] },
  { heading: "Code of conduct", body: ["All attendees, speakers, partners and exhibitors agree to behave professionally and respectfully. Harassment or disruptive behaviour may result in removal without refund."] },
  { heading: "Content & intellectual property", body: ["All Xplore branding, content and materials are owned by Lognetics or its licensors. You may not reproduce them without permission. By submitting content, you grant us a licence to use it in connection with the event."] },
  { heading: "Changes to the event", body: ["Programme, speakers and venue details may change. We will communicate material changes where possible but are not liable for circumstances beyond our control."] },
  { heading: "Limitation of liability", body: ["To the extent permitted by law, Xplore and Lognetics are not liable for indirect or consequential losses arising from your use of our services or attendance."] },
  { heading: "Contact", body: [`Questions about these Terms? Email ${SITE.contact.email}.`] },
];

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" breadcrumb="Terms" title="Terms of Service" subtitle="The terms governing your use of Xplore Disruptors." />
      <Prose sections={SECTIONS} updated="June 2026" />
      <ImageShowcase offset={13} count={3} className="py-16" />
    </>
  );
}
