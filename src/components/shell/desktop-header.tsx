"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { PRIMARY_NAV } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

/** Desktop top bar with primary nav — hidden on mobile (bottom nav takes over). */
export function DesktopHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 hidden md:block">
      <div className="glass border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">
          <Link href="/" aria-label="Xplore home">
            <Logo />
          </Link>

          <nav className="ml-4 hidden items-center gap-1 lg:flex">
            {PRIMARY_NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    active ? "bg-foreground/5 text-foreground" : "text-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button
              aria-label="Search"
              className="glass hidden h-10 w-64 items-center gap-2 rounded-full px-4 text-sm text-muted transition-colors hover:text-foreground xl:flex"
            >
              <Search className="h-4 w-4" />
              Search everything…
            </button>
            <button
              aria-label="Notifications"
              className="glass relative inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-foreground/5"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-accent-500" />
            </button>
            <ThemeToggle />
            <Button href="/dashboard" size="sm" className="ml-1">
              Sign in
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
