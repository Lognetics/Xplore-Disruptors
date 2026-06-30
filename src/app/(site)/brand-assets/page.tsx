import Link from "next/link";
import Image from "next/image";
import { Download, Check, X } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CTABand } from "@/components/site/cta-band";
import { Reveal } from "@/components/ui/reveal";

export const metadata = {
  title: "Brand Assets",
  description: "Logos, colours and guidelines for using the Xplore brand.",
};

const COLORS = [
  { name: "Neon Blue", hex: "#2E7BFF" },
  { name: "Electric Violet", hex: "#8B5CF6" },
  { name: "Cyan", hex: "#22D3EE" },
  { name: "Magenta", hex: "#C026D3" },
  { name: "Deep Black", hex: "#03040A" },
];

const DOS = ["Use the logo with clear space around it", "Use on dark backgrounds for best contrast", "Use the approved gradient and colours"];
const DONTS = ["Don't stretch, rotate or recolour the mark", "Don't add shadows or outlines", "Don't place on busy backgrounds"];

export default function BrandAssetsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brand assets"
        breadcrumb="Brand Assets"
        title={<>The Xplore <span className="text-gradient">brand</span></>}
        subtitle="Download official logos and follow our guidelines so the brand stays consistent everywhere it appears."
        actions={[{ label: "Download logo pack", href: "/downloads" }, { label: "Press kit", href: "/press-kit", variant: "glass" }]}
      />

      <Section eyebrow="Logo" title="The mark & lockup">
        <div className="grid gap-4 sm:grid-cols-2">
          <Reveal>
            <div className="flex aspect-[16/9] flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-[#03040a] p-8">
              <Image src="/brand/xplore-logo.png" alt="Xplore Disruptors logo" width={760} height={301} className="h-auto w-full max-w-[15rem] object-contain" />
              <span className="text-xs text-muted">On dark · primary</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex aspect-[16/9] flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-white p-8">
              <Image src="/brand/xplore-logo.png" alt="Xplore Disruptors logo" width={760} height={301} className="h-auto w-full max-w-[15rem] object-contain" />
              <span className="text-xs text-[#5b6577]">On light</span>
            </div>
          </Reveal>
        </div>
        <div className="mt-6 flex justify-center">
          <Link href="/downloads" className="inline-flex h-11 items-center gap-2 rounded-xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] px-5 text-sm font-semibold text-white">
            <Download className="h-4 w-4" /> Download logo pack (SVG + PNG)
          </Link>
        </div>
      </Section>

      <Section eyebrow="Palette" title="Brand colours">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {COLORS.map((c) => (
            <Reveal key={c.name}>
              <div className="overflow-hidden rounded-2xl glass-card">
                <div className="h-24 w-full" style={{ background: c.hex }} />
                <div className="p-3">
                  <p className="text-sm font-semibold">{c.name}</p>
                  <p className="text-xs uppercase text-muted">{c.hex}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Guidelines" title="Do's & don'ts">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl glass-card p-6">
              <h3 className="mb-3 font-display font-bold text-[var(--neon-cyan)]">Do</h3>
              <ul className="space-y-2.5">
                {DOS.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-foreground/85"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon-cyan)]" /> {d}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-3xl glass-card p-6">
              <h3 className="mb-3 font-display font-bold text-accent-500">Don&apos;t</h3>
              <ul className="space-y-2.5">
                {DONTS.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-foreground/85"><X className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" /> {d}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABand title="Partnering or covering Xplore?" primary={{ label: "Get the press kit", href: "/press-kit" }} secondary={{ label: "Contact us", href: "/contact" }} />
    </>
  );
}
