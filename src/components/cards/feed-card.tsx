"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Bookmark } from "lucide-react";
import type { FeedItem } from "@/lib/mock";

const kindLabel = {
  story: { text: "Story", className: "bg-brand-500/15 text-brand-400" },
  tech: { text: "Trending", className: "bg-violet-500/15 text-violet-500" },
  opportunity: { text: "Opportunity", className: "bg-accent-500/15 text-accent-500" },
} as const;

export function FeedCard({ item }: { item: FeedItem }) {
  const k = kindLabel[item.kind];
  return (
    <motion.article whileTap={{ scale: 0.99 }} className="glass-card flex gap-3 overflow-hidden rounded-3xl p-3">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl">
        <Image src={item.cover} alt="" fill sizes="96px" className="object-cover" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
        <div>
          <span className={`inline-block rounded-full px-2 py-0.5 text-[0.65rem] font-bold ${k.className}`}>
            {k.text}
          </span>
          <h3 className="mt-1.5 line-clamp-2 font-display text-sm font-bold leading-snug">{item.title}</h3>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[0.7rem] text-muted">{item.meta}</span>
          <button aria-label="Save" className="text-muted hover:text-brand-500">
            <Bookmark className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
