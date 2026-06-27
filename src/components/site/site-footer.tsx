import { Mail, Phone, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { SITE } from "@/lib/site";

const COLUMNS = [
  { title: "Festival", links: ["About", "Mission & Vision", "Speakers", "Agenda", "Exhibitors", "Awards"] },
  { title: "Ecosystem", links: ["XPLORE Labs", "XPLORE Ventures", "XPLORE Academy", "Startup School", "Research", "Innovation Index"] },
  { title: "Participate", links: ["Get Tickets", "Become a Partner", "Pitch Competition", "Hackathon", "Volunteer", "Campus Ambassadors"] },
  { title: "Resources", links: ["Download Brochure", "Sponsorship Deck", "Press Kit", "Brand Assets", "Blog", "Newsroom"] },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-blue)] to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[120%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(46,123,255,0.18),transparent)]" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6">
        {/* Newsletter */}
        <div className="glass-card flex flex-col items-start justify-between gap-5 rounded-3xl p-7 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold">Join the movement</h3>
            <p className="mt-1 text-sm text-muted">Get innovation stories, speaker drops and ticket releases in your inbox.</p>
          </div>
          <form className="flex w-full max-w-md items-center gap-2">
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="h-12 flex-1 rounded-xl border border-border bg-white/5 px-4 text-sm outline-none placeholder:text-muted focus:border-[var(--neon-blue)]"
            />
            <button className="inline-flex h-12 shrink-0 items-center gap-1.5 rounded-xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] px-5 text-sm font-semibold text-white">
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Link columns */}
        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">{SITE.visionLine}</p>
            <div className="mt-4 space-y-1.5 text-sm text-muted">
              <a href={`tel:${SITE.contact.phone}`} className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4" /> {SITE.contact.phone}
              </a>
              <a href={`mailto:${SITE.contact.email}`} className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> {SITE.contact.email}
              </a>
            </div>
            <div className="mt-4 flex gap-2">
              <a href={SITE.socials.x} className="glass inline-flex h-9 items-center rounded-lg px-3 text-xs font-semibold hover:bg-white/10">X / Twitter</a>
              <a href={SITE.socials.instagram} className="glass inline-flex h-9 items-center rounded-lg px-3 text-xs font-semibold hover:bg-white/10">Instagram</a>
            </div>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-foreground">{col.title}</h4>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted transition-colors hover:text-foreground">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>© 2025 XPLORE Disruptors by Lognetics. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
