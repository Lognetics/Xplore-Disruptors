import { Phone, Mail, MapPin, Handshake, Mic, Newspaper } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { ContactForm } from "@/components/site/contact-form";
import { ImageShowcase } from "@/components/site/media";
import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Get in touch with the Xplore Disruptors team.",
};

const CHANNELS = [
  { title: "General", icon: Mail, value: SITE.contact.email, href: `mailto:${SITE.contact.email}` },
  { title: "Partnerships", icon: Handshake, value: SITE.contact.partnerships, href: `mailto:${SITE.contact.partnerships}` },
  { title: "Phone", icon: Phone, value: SITE.contact.phone, href: `tel:${SITE.contact.phone}` },
];

const QUICK = [
  { title: "Speaking", icon: Mic, href: "/speakers", label: "Apply to speak" },
  { title: "Media", icon: Newspaper, href: "/press-kit", label: "Press kit" },
  { title: "Partnerships", icon: Handshake, href: "/partners", label: "Partner with us" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        breadcrumb="Contact"
        title={<>Let&apos;s <span className="text-gradient">talk</span></>}
        subtitle="Questions about tickets, partnerships, speaking or media? Reach out and our team will get back to you."
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="space-y-4 lg:col-span-2">
            {CHANNELS.map((c) => (
              <Reveal key={c.title}>
                <a href={c.href} className="flex items-center gap-4 rounded-2xl glass-card p-5 hover:bg-white/[0.06]">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--neon-blue)]/12">
                    <c.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted">{c.title}</p>
                    <p className="font-semibold">{c.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal>
              <div className="flex items-center gap-4 rounded-2xl glass-card p-5">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--neon-blue)]/12">
                  <MapPin className="h-5 w-5 text-[var(--neon-cyan)]" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">Venue</p>
                  <p className="font-semibold">{SITE.edition.venue}, {SITE.edition.city}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
      <Section eyebrow="Quick links" title="Looking for something specific?">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {QUICK.map((q) => (
            <Reveal key={q.title}>
              <a href={q.href} className="flex items-center gap-4 rounded-3xl glass-card p-6 hover:bg-white/[0.06]">
                <q.icon className="h-7 w-7 text-[var(--neon-cyan)]" />
                <div>
                  <p className="font-display font-bold">{q.title}</p>
                  <p className="text-sm text-muted">{q.label}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
      <ImageShowcase eyebrow="Where the future gets built" offset={6} count={3} className="pb-16" />
    </>
  );
}
