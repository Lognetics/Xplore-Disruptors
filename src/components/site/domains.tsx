"use client";

import { motion } from "motion/react";
import { Section } from "@/components/site/section";
import { DOMAINS } from "@/lib/content";

export function Domains() {
  return (
    <Section
      id="future"
      eyebrow="The Future of Africa"
      title={<>The frontiers we&apos;re <span className="text-gradient">building on</span></>}
      subtitle="Every industry that will define the next century — converging in one place."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {DOMAINS.map((d, i) => (
          <motion.div
            key={d.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="ring-gradient group relative overflow-hidden rounded-3xl glass-card p-5"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[var(--neon-blue)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
            <d.icon className="h-8 w-8 text-[var(--neon-cyan)] transition-colors group-hover:text-[var(--neon-violet)]" strokeWidth={1.6} />
            <h3 className="mt-4 font-display text-base font-bold leading-tight">{d.label}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">{d.blurb}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
