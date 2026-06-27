"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Download, CalendarCheck, ArrowRight } from "lucide-react";
import { Section } from "@/components/site/section";
import { SITE } from "@/lib/site";

const TIERS = [
  { name: "Title Partner", note: "Continental headline presence", glow: true },
  { name: "Platinum", note: "Main-stage & expo dominance" },
  { name: "Gold", note: "Premium brand activation" },
  { name: "Community", note: "Ecosystem & startup support" },
];

const REASONS = [
  { k: "20,000+", v: "decision-makers & builders in the room" },
  { k: "100,000", v: "registrations across digital channels" },
  { k: "30+", v: "countries of reach and media coverage" },
];

export function Partners() {
  return (
    <Section
      id="partners"
      eyebrow="Partnership portal"
      title={<>Put your brand at the <span className="text-gradient">center of African innovation</span></>}
      subtitle="Reach the founders, investors and policymakers building the continent's future."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-3xl p-6 ${t.glow ? "ring-gradient bg-[linear-gradient(160deg,rgba(46,123,255,0.16),rgba(139,92,246,0.1))]" : "glass-card"}`}
            >
              <h3 className="font-display text-xl font-bold">{t.name}</h3>
              <p className="mt-1 text-sm text-muted">{t.note}</p>
              <Link href="/contact" className="mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--neon-cyan)] hover:gap-3">
                Explore tier <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="glass-card flex flex-col justify-between rounded-3xl p-6">
          <div className="space-y-5">
            {REASONS.map((r) => (
              <div key={r.v}>
                <div className="font-display text-2xl font-bold text-gradient">{r.k}</div>
                <div className="text-xs text-muted">{r.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-2">
            <Link href="/downloads" className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] text-sm font-semibold text-white">
              <Download className="h-4 w-4" /> Sponsorship deck
            </Link>
            <a href={`mailto:${SITE.contact.partnerships}`} className="glass flex h-11 items-center justify-center gap-2 rounded-xl text-sm font-semibold hover:bg-white/10">
              <CalendarCheck className="h-4 w-4" /> Book a meeting
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
