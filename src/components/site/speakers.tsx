"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Mic, ArrowRight } from "lucide-react";
import { Section } from "@/components/site/section";
import { GALLERY } from "@/lib/mock";

const SLOTS = [
  { track: "Keynote", role: "Global Tech Leader" },
  { track: "AI", role: "AI Pioneer" },
  { track: "Fintech", role: "Unicorn Founder" },
  { track: "Capital", role: "Venture Partner" },
  { track: "Policy", role: "Government Innovator" },
  { track: "Creative", role: "Creator-Economy Voice" },
];

export function Speakers() {
  return (
    <Section
      id="speakers"
      eyebrow="Featured speakers"
      title={<>The voices <span className="text-gradient">shaping tomorrow</span></>}
      subtitle="500+ founders, investors and visionaries take the stage. The 2026 lineup is revealing soon."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {SLOTS.map((s, i) => (
          <motion.div
            key={s.role}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-3xl border border-border"
          >
            <div className="relative aspect-[3/4]">
              <Image
                src={GALLERY[(i * 3) % GALLERY.length].src}
                alt=""
                fill
                sizes="(max-width:768px) 45vw, 200px"
                className="object-cover opacity-70 grayscale transition-all duration-500 group-hover:opacity-90 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3">
              <span className="inline-block rounded-full bg-[var(--neon-blue)]/20 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-[var(--neon-cyan)]">
                {s.track}
              </span>
              <p className="mt-1 font-display text-sm font-bold leading-tight">{s.role}</p>
              <p className="text-[0.65rem] text-muted">Announcing soon</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <a href="#" className="glass inline-flex h-11 items-center gap-2 rounded-2xl px-5 text-sm font-semibold hover:bg-white/10">
          <Mic className="h-4 w-4" /> Apply to speak <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}
