"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { PRIMARY_NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/** Native-app-style bottom tab bar — mobile only. */
export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2 md:hidden">
      <div className="glass mx-auto flex max-w-md items-stretch justify-between rounded-[1.75rem] px-2 py-1.5 shadow-glass">
        {PRIMARY_NAV.map((item) => {
          const active = isActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-1 py-2"
            >
              {active && (
                <motion.span
                  layoutId="bottom-nav-active"
                  className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,var(--brand-500),var(--violet-600))] opacity-15"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon
                className={cn(
                  "relative h-[1.35rem] w-[1.35rem] transition-colors",
                  active ? "text-brand-500" : "text-muted",
                )}
                strokeWidth={active ? 2.4 : 1.9}
              />
              <span
                className={cn(
                  "relative text-[0.625rem] font-semibold transition-colors",
                  active ? "text-foreground" : "text-muted",
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
