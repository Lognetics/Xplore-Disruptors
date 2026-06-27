"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { EventCard } from "@/components/cards/event-card";
import { EVENTS } from "@/lib/mock";
import { cn } from "@/lib/utils";

const TABS = ["All", "Live", "Upcoming", "Hackathon", "Awards"] as const;
type Tab = (typeof TABS)[number];

function filter(tab: Tab) {
  if (tab === "All") return EVENTS;
  if (tab === "Live") return EVENTS.filter((e) => e.live);
  if (tab === "Upcoming") return EVENTS.filter((e) => !e.live);
  return EVENTS.filter((e) => e.type.toLowerCase() === tab.toLowerCase());
}

export function EventsBrowser() {
  const [tab, setTab] = useState<Tab>("All");
  const list = filter(tab);

  return (
    <div className="space-y-4">
      <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 md:px-0">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              tab === t ? "text-white" : "glass text-muted hover:text-foreground",
            )}
          >
            {tab === t && (
              <motion.span
                layoutId="events-tab"
                className="absolute inset-0 rounded-full bg-[linear-gradient(110deg,var(--brand-500),var(--violet-600))]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{t}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-4 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-0">
        {list.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
        {list.length === 0 && (
          <p className="col-span-full py-10 text-center text-sm text-muted">No events in this view yet.</p>
        )}
      </div>
    </div>
  );
}
