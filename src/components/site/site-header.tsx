"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Future", href: "#future" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Experience", href: "#experience" },
  { label: "Speakers", href: "#speakers" },
  { label: "Tickets", href: "#tickets" },
  { label: "Partners", href: "#partners" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 transition-all duration-300 sm:px-6",
          scrolled && "mt-2 max-w-6xl rounded-2xl border border-border bg-[rgba(8,11,22,0.7)] backdrop-blur-xl",
        )}
      >
        <a href="#top" aria-label="Xplore home" className="shrink-0">
          <Logo />
        </a>

        <nav className="ml-2 hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href="#tickets"
            className="hidden h-10 items-center gap-1.5 rounded-xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] px-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Get Ticket <ArrowRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-border bg-[rgba(8,11,22,0.92)] p-2 backdrop-blur-xl lg:hidden"
          >
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/90 hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#tickets"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] px-4 py-3 text-sm font-semibold text-white"
            >
              Get Free Ticket <ArrowRight className="h-4 w-4" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
