"use client";

import Image from "next/image";
import { UserPlus, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import type { Person } from "@/lib/mock";

export function PersonCard({ person }: { person: Person }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="glass-card flex w-full flex-col items-center rounded-3xl p-5 text-center"
    >
      <div className="relative">
        <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-brand-500/40">
          <Image src={person.avatar} alt={person.name} fill sizes="80px" className="object-cover" />
        </div>
        <span className="absolute -bottom-1 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-[linear-gradient(110deg,var(--brand-500),var(--violet-600))] px-2 py-0.5 text-[0.65rem] font-bold text-white shadow">
          <Sparkles className="h-3 w-3" /> {person.match}%
        </span>
      </div>
      <h3 className="mt-4 font-display text-base font-bold leading-tight">{person.name}</h3>
      <p className="text-xs text-muted">{person.role}</p>
      <p className="text-xs font-medium text-foreground/80">{person.org}</p>
      <div className="mt-3 flex flex-wrap justify-center gap-1.5">
        {person.tags.map((t) => (
          <span key={t} className="rounded-full bg-foreground/5 px-2 py-0.5 text-[0.65rem] font-medium text-muted">
            {t}
          </span>
        ))}
      </div>
      <button className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-foreground/5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-brand-500 hover:text-white">
        <UserPlus className="h-4 w-4" /> Connect
      </button>
    </motion.div>
  );
}
