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
      <div className="grid grid-cols-3 gap-2.5 sm:gap-3 lg:grid-cols-5">
        {ECOSYSTEM.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: (i % 5) * 0.04, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
          >
            <Link href={`/ecosystem/${b.slug}`} className="group flex h-full flex-col gap-1.5 rounded-2xl glass-card p-3 sm:gap-2 sm:p-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-[var(--neon-blue)]/15 sm:h-10 sm:w-10 sm:rounded-xl">
                <b.icon className="h-4 w-4 text-[var(--neon-cyan)] sm:h-5 sm:w-5" strokeWidth={1.7} />
              </span>
              <h3 className="font-display text-xs font-bold leading-tight sm:text-sm">{b.name}</h3>
              <p className="hidden text-[0.7rem] leading-snug text-muted sm:block">{b.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
