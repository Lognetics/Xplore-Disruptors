"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { QUICK_ACCESS } from "@/lib/site";

export function QuickAccess() {
  return (
    <div className="grid grid-cols-4 gap-2.5 px-4 md:px-0">
      {QUICK_ACCESS.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.03, type: "spring", stiffness: 320, damping: 24 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={item.href}
            className="glass-card flex aspect-square flex-col items-center justify-center gap-1.5 rounded-2xl p-1 text-center"
          >
            <span className="text-2xl">{item.emoji}</span>
            <span className="text-[0.62rem] font-semibold leading-tight text-foreground/80">{item.label}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
