"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import { motion } from "motion/react";
import type { EventItem } from "@/lib/mock";
import { compact } from "@/lib/utils";

const accentDot = {
  brand: "bg-brand-500",
  accent: "bg-accent-500",
  violet: "bg-violet-500",
} as const;

export function EventCard({ event, className }: { event: EventItem; className?: string }) {
  return (
    <motion.div whileTap={{ scale: 0.98 }} className={className}>
      <Link
        href={`/events/${event.id}`}
        className="group block overflow-hidden rounded-3xl glass-card"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={event.cover}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 80vw, 320px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <span className="glass rounded-full px-2.5 py-1 text-[0.7rem] font-semibold text-white">
              {event.type}
            </span>
            {event.live && (
              <span className="inline-flex items-center gap-1 rounded-full bg-red-500 px-2.5 py-1 text-[0.7rem] font-bold text-white">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" /> LIVE
              </span>
            )}
          </div>
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <h3 className="font-display text-base font-bold leading-tight drop-shadow">{event.title}</h3>
            <div className="mt-1 flex items-center gap-3 text-[0.72rem] text-white/85">
              <span className="inline-flex items-center gap-1">
                <span className={`h-1.5 w-1.5 rounded-full ${accentDot[event.accent]}`} />
                {event.date} · {event.time}
              </span>
              <span className="inline-flex items-center gap-1">
                <Users className="h-3.5 w-3.5" /> {compact(event.attendees)}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 px-4 py-2.5 text-xs text-muted">
          <MapPin className="h-3.5 w-3.5" />
          <span className="truncate">{event.venue}, {event.city}</span>
        </div>
      </Link>
    </motion.div>
  );
}
