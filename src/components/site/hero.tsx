"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles, MapPin, CalendarDays, ChevronDown } from "lucide-react";
import { Countdown } from "@/components/site/countdown";
import { SITE } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 pt-24 pb-16">
      {/* Hero background video — autoplays muted, loops, with poster for instant paint */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/hero/poster.jpg"
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/media/hero/hero.mp4" type="video/mp4" />
      </video>
      {/* legibility wash + brand glow + bottom fade into the page */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(3,4,10,0.62),rgba(3,4,10,0.42)_45%,rgba(3,4,10,0.96))]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_50%_35%,rgba(46,123,255,0.16),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-background to-transparent" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold"
        >
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-[var(--neon-cyan)]" />
          {SITE.edition2026}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mt-6 font-display text-[2.6rem] font-bold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
        >
          <span className="block">{SITE.heroHeadline[0]}</span>
          <span className="block text-gradient">{SITE.heroHeadline[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease }}
          className="mt-5 max-w-2xl text-base text-muted sm:text-lg"
        >
          {SITE.superline} — {SITE.connector}.{" "}
          <span className="text-foreground/90">{SITE.tagline}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted"
        >
          <span className="inline-flex items-center gap-1.5"><CalendarDays className="h-4 w-4 text-[var(--neon-blue)]" /> {SITE.edition.dates}</span>
          <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-[var(--neon-violet)]" /> {SITE.edition.venue}, {SITE.edition.city}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link
            href="/tickets"
            className="group inline-flex h-12 items-center gap-2 rounded-2xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] px-6 font-semibold text-white shadow-[0_12px_40px_-10px_var(--neon-blue)] transition-transform hover:scale-[1.03]"
          >
            <Sparkles className="h-4 w-4" /> Get Free Ticket
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link href="/partners" className="glass inline-flex h-12 items-center gap-2 rounded-2xl px-6 font-semibold text-foreground transition-colors hover:bg-white/10">
            Become a Partner
          </Link>
          <Link href="/gallery" className="inline-flex h-12 items-center gap-2 rounded-2xl px-4 font-semibold text-muted transition-colors hover:text-foreground">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full glass"><Play className="h-4 w-4 fill-current" /></span>
            Watch Trailer
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-10 w-full max-w-md"
        >
          <Countdown targetISO={SITE.edition.startISO} />
        </motion.div>
      </div>

      <motion.a
        href="#stats"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted"
      >
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }} className="block">
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}
