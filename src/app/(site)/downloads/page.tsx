import Link from "next/link";
import { FileText, Image as ImageIcon, Presentation, BookOpen, Download } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CTABand } from "@/components/site/cta-band";
import { Reveal } from "@/components/ui/reveal";

export const metadata = {
  title: "Downloads",
  description: "Brochures, decks and brand resources for Xplore Disruptors.",
};

const FILES = [
  { title: "Event Brochure", desc: "The full overview of Xplore 2026.", icon: BookOpen, href: "/contact" },
  { title: "Sponsorship Deck", desc: "Partnership tiers, reach and ROI.", icon: Presentation, href: "/partners" },
  { title: "Exhibitor Pack", desc: "Booth options, pricing and floor plan.", icon: FileText, href: "/exhibitors" },
  { title: "Brand Assets", desc: "Logos, colours and guidelines.", icon: ImageIcon, href: "/brand-assets" },
  { title: "Press Kit", desc: "Fact sheet and media resources.", icon: FileText, href: "/press-kit" },
  { title: "Fact Sheet", desc: "Key figures and boilerplate copy.", icon: FileText, href: "/press-kit" },
];

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        breadcrumb="Downloads"
        title={<>Downloads & <span className="text-gradient">resources</span></>}
        subtitle="Everything you need to plan your participation, partnership or coverage of Xplore Disruptors."
        actions={[{ label: "Contact the team", href: "/contact" }]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FILES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05}>
              <Link href={f.href} className="group flex h-full items-start gap-4 rounded-3xl glass-card p-6">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--neon-blue)]/12">
                  <f.icon className="h-6 w-6 text-[var(--neon-cyan)]" strokeWidth={1.7} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted">{f.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--neon-cyan)]">
                    <Download className="h-4 w-4" /> Get it
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABand title="Ready to take part?" />
    </>
  );
}
