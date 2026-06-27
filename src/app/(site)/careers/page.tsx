import Link from "next/link";
import { ArrowUpRight, Rocket, Globe2, HeartPulse } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { InfoGrid } from "@/components/site/info-grid";
import { CTABand } from "@/components/site/cta-band";
import { Reveal } from "@/components/ui/reveal";

export const metadata = {
  title: "Careers",
  description: "Build the digital infrastructure of African innovation with us.",
};

const WHY = [
  { title: "Mission that matters", desc: "Build the operating system for a continent's innovation economy.", icon: Globe2 },
  { title: "Move fast, ship far", desc: "Small teams, big ownership, real impact at scale.", icon: Rocket },
  { title: "People-first", desc: "Remote-friendly, growth-focused and genuinely human.", icon: HeartPulse },
];

const ROLES = [
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Remote · Africa", type: "Full-time" },
  { title: "Product Designer", team: "Design", location: "Abuja / Remote", type: "Full-time" },
  { title: "Community Manager", team: "Community", location: "Remote", type: "Full-time" },
  { title: "Partnerships Lead", team: "Growth", location: "Lagos / Remote", type: "Full-time" },
  { title: "Events Producer", team: "Operations", location: "Abuja", type: "Contract" },
  { title: "Content & Editorial Lead", team: "Media", location: "Remote", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        breadcrumb="Careers"
        title={<>Build Xplore <span className="text-gradient">with us</span></>}
        subtitle="We're assembling a team obsessed with building the digital infrastructure of African innovation. Come build the future from the inside."
        actions={[{ label: "See open roles", href: "#roles" }, { label: "Drop us a note", href: "/contact", variant: "glass" }]}
      />
      <Section eyebrow="Why Xplore" title="What it's like to work here">
        <InfoGrid items={WHY} cols={3} />
      </Section>
      <Section id="roles" eyebrow="Open roles" title="Join the team">
        <div className="mx-auto max-w-3xl space-y-3">
          {ROLES.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 0.04}>
              <Link href="/contact" className="group flex items-center gap-4 rounded-2xl glass-card p-5 transition-colors hover:bg-white/[0.06]">
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-bold">{r.title}</h3>
                  <p className="text-xs text-muted">{r.team} · {r.location} · {r.type}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-[var(--neon-cyan)]" />
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Don&apos;t see your role? <Link href="/contact" className="font-semibold text-[var(--neon-cyan)]">Reach out anyway</Link>.
        </p>
      </Section>
      <CTABand title="Help build Africa's innovation OS" primary={{ label: "Get in touch", href: "/contact" }} secondary={{ label: "About Xplore", href: "/about" }} />
    </>
  );
}
