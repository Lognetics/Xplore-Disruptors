import { PageHero } from "@/components/site/page-hero";
import { Prose } from "@/components/site/prose";
import { SITE } from "@/lib/site";

export const metadata = { title: "Privacy Policy" };

const SECTIONS = [
  { heading: "Introduction", body: [`This Privacy Policy explains how ${SITE.name}, operated by Lognetics, collects, uses and protects your personal information when you use our website, app and attend our events.`] },
  { heading: "Information we collect", body: ["We collect information you provide directly — such as your name, email, organization and preferences when you register, buy a ticket or contact us — as well as usage data collected automatically through cookies and analytics."] },
  { heading: "How we use your information", body: ["We use your information to deliver and improve the festival experience, process registrations and tickets, power networking and matchmaking, send you relevant updates, and keep the platform secure."] },
  { heading: "Sharing", body: ["We do not sell your personal data. We may share it with trusted service providers who help us operate the event, and with partners only where you have opted in (for example, when you visit a sponsor booth)."] },
  { heading: "Your rights", body: ["You may access, correct or delete your personal data, and opt out of marketing communications at any time. Contact us to exercise these rights."] },
  { heading: "Data security", body: ["We apply enterprise-grade safeguards to protect your information. No method of transmission is fully secure, but we work continuously to protect your data."] },
  { heading: "Contact", body: [`For any privacy questions, email ${SITE.contact.email}.`] },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" breadcrumb="Privacy" title="Privacy Policy" subtitle="How we collect, use and protect your information." />
      <Prose sections={SECTIONS} updated="June 2026" />
    </>
  );
}
