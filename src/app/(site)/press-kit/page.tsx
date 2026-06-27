import Link from "next/link";
import { Download, Camera, FileText, BadgeCheck, Mail } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { InfoGrid } from "@/components/site/info-grid";
import { CTABand } from "@/components/site/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { STATS, SITE } from "@/lib/site";
import { compact } from "@/lib/utils";

export const metadata = {
  title: "Press Kit",
  description: "Media accreditation, fast facts and assets for journalists.",
};

const ASSETS = [
  { title: "Logo pack", desc: "Primary, mono and icon marks in SVG & PNG.", icon: Download, href: "/brand-assets" },
  { title: "Fact sheet", desc: "Key facts, figures and boilerplate.", icon: FileText, href: "/downloads" },
  { title: "Photo library", desc: "High-resolution photos from past editions.", icon: Camera, href: "/gallery" },
];

export default function PressKitPage() {
  return (
    <>
      <PageHero
        eyebrow="Media center"
        breadcrumb="Press Kit"
        title={<>Press <span className="text-gradient">resources</span></>}
        subtitle="Everything journalists and media partners need to cover Africa's largest tech festival — facts, assets and accreditation."
        actions={[{ label: "Apply for accreditation", href: "/contact" }, { label: "Media enquiries", href: `mailto:${SITE.contact.email}`, variant: "glass" }]}
      />

      <Section eyebrow="Fast facts" title="The numbers at a glance">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((s) => (
            <Reveal key={s.label} className="rounded-2xl glass-card p-5 text-center">
              <div className="font-display text-2xl font-bold text-gradient">
                {"prefix" in s ? s.prefix : ""}{compact(s.value)}{s.suffix}
              </div>
              <div className="mt-1 text-xs text-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Downloads" title="Media assets">
        <InfoGrid items={ASSETS.map(({ title, desc, icon }) => ({ title, desc, icon }))} cols={3} />
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {ASSETS.map((a) => (
            <Link key={a.title} href={a.href} className="glass inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-white/10">
              <a.icon className="h-4 w-4 text-[var(--neon-cyan)]" /> {a.title}
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="Accreditation" title="Get media access">
        <Reveal>
          <div className="mx-auto flex max-w-2xl flex-col items-start gap-4 rounded-3xl glass-card p-7 sm:flex-row sm:items-center">
            <BadgeCheck className="h-9 w-9 shrink-0 text-[var(--neon-cyan)]" />
            <p className="flex-1 text-sm leading-relaxed text-muted">
              Working press can apply for accreditation to access the media center, interview rooms and priority seating.
              Reach our media team at{" "}
              <a href={`mailto:${SITE.contact.email}`} className="font-semibold text-foreground">{SITE.contact.email}</a>.
            </p>
            <Link href="/contact" className="inline-flex h-11 shrink-0 items-center gap-2 rounded-xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] px-5 text-sm font-semibold text-white">
              <Mail className="h-4 w-4" /> Apply
            </Link>
          </div>
        </Reveal>
      </Section>

      <CTABand title="Tell the story of African innovation" primary={{ label: "Get accredited", href: "/contact" }} secondary={{ label: "Brand assets", href: "/brand-assets" }} />
    </>
  );
}
