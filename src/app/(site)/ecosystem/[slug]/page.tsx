import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CTABand } from "@/components/site/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { ECOSYSTEM, ecoBySlug } from "@/lib/content";

export function generateStaticParams() {
  return ECOSYSTEM.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = ecoBySlug(slug);
  if (!brand) return { title: "Ecosystem" };
  return { title: brand.name, description: brand.long };
}

export default async function EcoBrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = ecoBySlug(slug);
  if (!brand) notFound();

  const related = ECOSYSTEM.filter((e) => e.slug !== brand.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow="Xplore ecosystem"
        breadcrumb={brand.name}
        title={<><span className="text-gradient">{brand.name}</span></>}
        subtitle={brand.long}
        actions={[{ label: "Get involved", href: "/contact" }, { label: "All platforms", href: "/ecosystem", variant: "glass" }]}
      />

      <Section eyebrow="What we offer" title={`Inside ${brand.name}`}>
        <div className="grid gap-4 sm:grid-cols-2">
          {brand.offerings.map((o, i) => (
            <Reveal key={o} delay={(i % 2) * 0.06}>
              <div className="flex items-start gap-3 rounded-2xl glass-card p-5">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--neon-blue)]/15">
                  <Check className="h-4 w-4 text-[var(--neon-cyan)]" />
                </span>
                <span className="text-sm font-medium">{o}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Explore more" title="Other platforms in the ecosystem">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {related.map((r) => (
            <Link key={r.slug} href={`/ecosystem/${r.slug}`} className="group flex h-full flex-col gap-2 rounded-2xl glass-card p-4">
              <r.icon className="h-6 w-6 text-[var(--neon-cyan)]" strokeWidth={1.7} />
              <span className="font-display text-sm font-bold leading-tight">{r.name}</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--neon-cyan)]">
                Explore <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTABand title={`Build with ${brand.name}`} subtitle="Reach out to learn how to get involved." primary={{ label: "Get in touch", href: "/contact" }} secondary={{ label: "Back to ecosystem", href: "/ecosystem" }} />
    </>
  );
}
