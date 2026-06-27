"use client";

import { motion } from "motion/react";
import { Check, ArrowRight, Star } from "lucide-react";
import { Section } from "@/components/site/section";
import { TICKETS, TICKET_TYPES } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Tickets() {
  return (
    <Section
      id="tickets"
      eyebrow="Be in the room"
      title={<>Choose your <span className="text-gradient">access</span></>}
      subtitle="From free festival access to executive and investor passes — there's a way in for everyone."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {TICKETS.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "relative flex flex-col rounded-3xl p-6",
              t.featured
                ? "ring-gradient bg-[linear-gradient(160deg,rgba(46,123,255,0.16),rgba(139,92,246,0.12))]"
                : "glass-card",
            )}
          >
            {t.featured && (
              <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] px-3 py-1 text-[0.65rem] font-bold text-white">
                <Star className="h-3 w-3 fill-current" /> Most popular
              </span>
            )}
            <h3 className="font-display text-lg font-bold">{t.name}</h3>
            <p className="text-xs text-muted">{t.tagline}</p>
            <div className="mt-4 font-display text-3xl font-bold text-gradient">{t.price}</div>
            <ul className="mt-5 flex-1 space-y-2.5">
              {t.perks.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--neon-cyan)]" />
                  {p}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className={cn(
                "mt-6 inline-flex h-11 items-center justify-center gap-1.5 rounded-xl text-sm font-semibold transition-transform hover:scale-[1.02]",
                t.featured
                  ? "bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] text-white"
                  : "glass hover:bg-white/10",
              )}
            >
              Get {t.name} <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted">
        Also available:{" "}
        {TICKET_TYPES.filter((t) => !TICKETS.some((x) => x.name === t)).map((t, i, a) => (
          <span key={t} className="text-foreground/80">
            {t}{i < a.length - 1 ? " · " : ""}
          </span>
        ))}
      </p>
    </Section>
  );
}
