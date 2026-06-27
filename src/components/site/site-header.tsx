"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { MEGA_MENU, HEADER_LINKS } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

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
          "mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 transition-all duration-300 sm:px-6",
          scrolled && "mt-2 max-w-6xl rounded-2xl border border-border bg-[rgba(8,11,22,0.72)] backdrop-blur-xl",
        )}
      >
        <Link href="/" aria-label="Xplore home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop mega-menu */}
        <nav className="ml-2 hidden items-center gap-0.5 lg:flex">
          {MEGA_MENU.map((group) => (
            <div key={group.label} className="group/m relative">
              <Link
                href={group.href ?? "#"}
                className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {group.label}
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover/m:rotate-180" />
              </Link>
              <div className="invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition-all duration-200 group-hover/m:visible group-hover/m:opacity-100 group-focus-within/m:visible group-focus-within/m:opacity-100">
                <div className="overflow-hidden rounded-2xl border border-border bg-[rgba(8,11,22,0.95)] p-2 shadow-2xl backdrop-blur-xl">
                  {group.items.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-white/5"
                    >
                      <span className="block text-sm font-semibold text-foreground">{it.label}</span>
                      {it.desc && <span className="block text-xs text-muted">{it.desc}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {HEADER_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/contact" className="hidden rounded-full px-3 py-2 text-sm font-medium text-muted hover:text-foreground xl:inline-flex">
            Contact
          </Link>
          <Link
            href="/tickets"
            className="hidden h-10 items-center gap-1.5 rounded-xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] px-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Get Ticket <ArrowRight className="h-4 w-4" />
          </Link>
          <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className="glass inline-flex h-10 w-10 items-center justify-center rounded-xl lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile accordion menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-4 mt-2 max-h-[78vh] overflow-y-auto rounded-2xl border border-border bg-[rgba(8,11,22,0.96)] p-2 backdrop-blur-xl lg:hidden"
          >
            {MEGA_MENU.map((group) => {
              const isOpen = openGroup === group.label;
              return (
                <div key={group.label} className="border-b border-border/60 last:border-0">
                  <button
                    onClick={() => setOpenGroup(isOpen ? null : group.label)}
                    className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold"
                  >
                    {group.label}
                    <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pb-2"
                      >
                        {group.items.map((it) => (
                          <Link
                            key={it.href}
                            href={it.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-6 py-2.5 text-sm text-foreground/85 hover:bg-white/5"
                          >
                            {it.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <div className="flex gap-2 p-2">
              {HEADER_LINKS.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="glass flex-1 rounded-xl py-2.5 text-center text-sm font-semibold">
                  {l.label}
                </Link>
              ))}
            </div>
            <Link
              href="/tickets"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] px-4 py-3 text-sm font-semibold text-white"
            >
              Get Free Ticket <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
