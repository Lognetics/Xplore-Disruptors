"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Section } from "@/components/site/section";
import { ECOSYSTEM } from "@/lib/content";

export function Ecosystem() {
  return (
    <Section
      id="ecosystem"
      eyebrow="More than an event"
      title={<>The <span className="text-gradient">Xplore ecosystem</span></>}
      subtitle="A year-round operating system for African innovation — fifteen platforms, one mission."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {ECOSYSTEM.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: (i % 5) * 0.04, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
          >
            <Link href={`/ecosystem/${b.slug}`} className="group flex h-full flex-col gap-2 rounded-2xl glass-card p-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 transition-colors group-hover:bg-[var(--neon-blue)]/15">
                <b.icon className="h-5 w-5 text-[var(--neon-cyan)]" strokeWidth={1.7} />
              </span>
              <h3 className="font-display text-sm font-bold leading-tight">{b.name}</h3>
              <p className="text-[0.7rem] leading-snug text-muted">{b.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
