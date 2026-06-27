import Link from "next/link";
import { FileText, Download } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CTABand } from "@/components/site/cta-band";
import { Reveal } from "@/components/ui/reveal";

export const metadata = {
  title: "Research",
  description: "Authoritative reports and data on Africa's innovation economy.",
};

const REPORTS = [
  { title: "State of African Tech 2026", desc: "The definitive annual report on funding, sectors and momentum.", tag: "Annual report" },
  { title: "Africa AI Readiness Index", desc: "How prepared the continent's industries are for the AI era.", tag: "Index" },
  { title: "Fintech & Financial Inclusion", desc: "The data behind Africa's payments revolution.", tag: "Sector" },
  { title: "Climate Tech Landscape", desc: "Mapping the startups tackling the climate frontier.", tag: "Sector" },
  { title: "Investor Sentiment Survey", desc: "What 500+ investors think about the year ahead.", tag: "Survey" },
  { title: "Talent & Skills Report", desc: "The supply and demand of Africa's tech talent.", tag: "Workforce" },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Xplore research"
        breadcrumb="Research"
        title={<>Data on the <span className="text-gradient">innovation economy</span></>}
        subtitle="Authoritative reports, indices and whitepapers tracking the rise of African technology — produced by XPLORE Research."
        actions={[{ label: "Browse reports", href: "#reports" }, { label: "Request custom research", href: "/contact", variant: "glass" }]}
      />
      <Section id="reports" eyebrow="Library" title="Reports & whitepapers">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REPORTS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.05}>
              <Link href="/contact" className="group flex h-full flex-col rounded-3xl glass-card p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--neon-blue)]/12">
                  <FileText className="h-5 w-5 text-[var(--neon-cyan)]" />
                </span>
                <span className="mt-4 text-[0.65rem] font-bold uppercase tracking-wider text-muted">{r.tag}</span>
                <h3 className="mt-1 font-display text-lg font-bold leading-tight">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{r.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--neon-cyan)]">
                  <Download className="h-4 w-4" /> Download
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABand title="Need bespoke insights?" subtitle="Commission custom research from the XPLORE Research team." primary={{ label: "Request research", href: "/contact" }} secondary={{ label: "Innovation Index", href: "/ecosystem/innovation-index" }} />
    </>
  );
}
