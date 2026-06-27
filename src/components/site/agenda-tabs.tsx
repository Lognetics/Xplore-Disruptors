"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Timeline, type TimelineItem } from "@/components/site/timeline";
import { cn } from "@/lib/utils";

export type Day = { label: string; date: string; items: TimelineItem[] };

export function AgendaTabs({ days }: { days: Day[] }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="mx-auto mb-10 flex max-w-md justify-center gap-2">
        {days.map((d, i) => (
          <button
            key={d.label}
            onClick={() => setActive(i)}
            className={cn(
              "relative flex-1 rounded-2xl px-4 py-3 text-center transition-colors",
              active === i ? "text-white" : "glass text-muted hover:text-foreground",
            )}
          >
            {active === i && (
              <motion.span
                layoutId="agenda-tab"
                className="absolute inset-0 rounded-2xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative block font-display text-sm font-bold">{d.label}</span>
            <span className="relative block text-[0.65rem] opacity-80">{d.date}</span>
          </button>
        ))}
      </div>
      <Timeline items={days[active].items} />
    </div>
  );
}
