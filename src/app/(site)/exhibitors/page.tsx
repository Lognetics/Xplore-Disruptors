import { Store, Users, BarChart3, Megaphone, Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { InfoGrid } from "@/components/site/info-grid";
import { Timeline } from "@/components/site/timeline";
import { CTABand } from "@/components/site/cta-band";
import { Reveal } from "@/components/ui/reveal";

export const metadata = {
  title: "Exhibitors",
  description: "Reserve your booth at Africa's largest tech festival.",
};

const WHY = [
  { title: "20,000+ visitors", desc: "Put your product in front of founders, investors and buyers.", icon: Users },
  { title: "Qualified leads", desc: "Capture and qualify leads with built-in QR lead scanning.", icon: BarChart3 },
  { title: "Brand exposure", desc: "On-site, on-stream and across Xplore's media channels.", icon: Megaphone },
];

const PACKAGES = [
  { name: "Startup Booth", price: "Starter", perks: ["3x2m exhibition space", "Listing in the app", "2 exhibitor passes", "Lead capture"] },
  { name: "Standard Booth", price: "Growth", perks: ["6x3m custom space", "Featured app listing", "5 exhibitor passes", "Lead capture + analytics"], featured: true },
  { name: "Pavilion", price: "Enterprise", perks: ["Custom-built pavilion", "Main-floor placement", "10+ passes", "Branded activation & stage slot"] },
];

const PROCESS = [
  { time: "01", title: "Apply", desc: "Tell us about your company and goals." },
  { time: "02", title: "Choose your booth", desc: "Pick a package and location on the 3D venue map." },
  { time: "03", title: "Upload assets", desc: "Submit your branding and product materials." },
  { time: "04", title: "Go live", desc: "Manage leads and appointments from your dashboard." },
];

export default function ExhibitorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Exhibition portal"
        breadcrumb="Exhibitors"
        title={<>Showcase your product to <span className="text-gradient">a continent</span></>}
        subtitle="Reserve your stand at Africa's largest tech festival and meet the founders, investors and buyers shaping the market."
        actions={[{ label: "Apply to exhibit", href: "/contact" }, { label: "Download brochure", href: "/downloads", variant: "glass" }]}
      />
      <Section eyebrow="Why exhibit" title="Reach the whole ecosystem in one place">
        <InfoGrid items={WHY} cols={3} />
      </Section>
      <Section eyebrow="Packages" title="Choose your booth">
        <div className="grid gap-4 md:grid-cols-3">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.06}>
              <div className={`flex h-full flex-col rounded-3xl p-6 ${p.featured ? "ring-gradient bg-[linear-gradient(160deg,rgba(46,123,255,0.16),rgba(139,92,246,0.1))]" : "glass-card"}`}>
                <Store className="h-7 w-7 text-[var(--neon-cyan)]" />
                <h3 className="mt-4 font-display text-lg font-bold">{p.name}</h3>
                <p className="text-xs uppercase tracking-wider text-muted">{p.price}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {p.perks.map((x) => (
                    <li key={x} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon-cyan)]" /> {x}
                    </li>
                  ))}
                </ul>
                <a href="/contact" className={`mt-6 inline-flex h-11 items-center justify-center rounded-xl text-sm font-semibold ${p.featured ? "bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] text-white" : "glass hover:bg-white/10"}`}>
                  Reserve {p.name}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section eyebrow="How it works" title="From application to show floor">
        <Timeline items={PROCESS} />
      </Section>
      <CTABand title="Claim your space on the floor" primary={{ label: "Apply to exhibit", href: "/contact" }} secondary={{ label: "Talk to sales", href: "/contact" }} />
    </>
  );
}
