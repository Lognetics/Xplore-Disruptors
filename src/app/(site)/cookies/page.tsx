import { PageHero } from "@/components/site/page-hero";
import { Prose } from "@/components/site/prose";
import { ImageShowcase } from "@/components/site/media";
import { SITE } from "@/lib/site";

export const metadata = { title: "Cookie Policy" };

const SECTIONS = [
  { heading: "What are cookies", body: ["Cookies are small text files stored on your device that help websites function and understand how they are used."] },
  { heading: "How we use cookies", body: [`${SITE.name} uses cookies to keep you signed in, remember your preferences, measure traffic and improve your experience.`] },
  { heading: "Types of cookies we use", body: ["Essential cookies (required for the site to work), preference cookies (remember your settings), and analytics cookies (help us understand usage). We use trusted analytics tools to measure performance."] },
  { heading: "Managing cookies", body: ["You can control or delete cookies through your browser settings. Disabling some cookies may affect how the site works."] },
  { heading: "Contact", body: [`Questions about our use of cookies? Email ${SITE.contact.email}.`] },
];

export default function CookiesPage() {
  return (
    <>
      <PageHero eyebrow="Legal" breadcrumb="Cookies" title="Cookie Policy" subtitle="How and why we use cookies." />
      <Prose sections={SECTIONS} updated="June 2026" />
      <ImageShowcase offset={23} count={3} className="py-16" />
    </>
  );
}
