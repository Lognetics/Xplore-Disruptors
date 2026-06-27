"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

const NEXT_EDITION = new Date("2026-11-14T09:00:00+01:00");

function greeting(h: number) {
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function useCountdown(target: Date) {
  const [parts, setParts] = useState<{ d: number; h: number; m: number; s: number } | null>(null);
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setParts({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return parts;
}

export function GreetingHero() {
  const [hour, setHour] = useState<number | null>(null);
  useEffect(() => setHour(new Date().getHours()), []);
  const cd = useCountdown(NEXT_EDITION);

  return (
    <section className="px-4 pt-4 md:px-0">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-sm text-muted">
          {hour === null ? "Welcome to Xplore" : `${greeting(hour)}, Disruptor`} 👋
        </p>
        <h1 className="mt-1 font-display text-2xl font-bold leading-tight tracking-tight md:text-4xl">
          {SITE.tagline}
        </h1>
      </motion.div>

      {/* AI daily brief */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="ring-gradient glass-card mt-4 rounded-3xl p-4"
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(110deg,var(--brand-500),var(--violet-600))]">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="text-sm font-semibold">Your AI Daily Brief</span>
          <span className="ml-auto text-[0.7rem] text-muted">updated just now</span>
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-foreground/85">
          3 founders matched your thesis overnight, the <strong>Startup Pitch Battle</strong> finals start at 2:30 PM,
          and a new <strong>$50K climate grant</strong> just opened. Tap to see your tailored plan for today.
        </p>
        <button className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">
          Open my day <ArrowRight className="h-4 w-4" />
        </button>
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-4 overflow-hidden rounded-3xl p-5 text-white"
        style={{ background: "linear-gradient(120deg, var(--brand-600), var(--violet-600) 55%, var(--accent-600))" }}
      >
        <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/15 blur-2xl" />
        <p className="text-xs font-semibold uppercase tracking-widest text-white/80">Next edition · Abuja</p>
        <p className="font-display text-lg font-bold">{SITE.edition.dates.replace("2025", "2026")}</p>
        <div className="mt-3 flex gap-2">
          {([["Days", cd?.d], ["Hrs", cd?.h], ["Min", cd?.m], ["Sec", cd?.s]] as const).map(([label, v]) => (
            <div key={label} className="flex-1 rounded-2xl bg-white/15 py-2 text-center backdrop-blur">
              <div className="font-display text-xl font-bold tabular-nums">
                {v === undefined ? "—" : String(v).padStart(2, "0")}
              </div>
              <div className="text-[0.6rem] uppercase tracking-wider text-white/75">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
