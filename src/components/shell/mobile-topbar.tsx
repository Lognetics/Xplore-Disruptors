"use client";

import Link from "next/link";
import { Bell } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

/** Compact sticky header for mobile (desktop uses DesktopHeader instead). */
export function MobileTopBar() {
  return (
    <div className="sticky top-0 z-40 md:hidden">
      <div className="glass flex h-14 items-center gap-3 border-b border-border px-4 safe-t">
        <Link href="/" aria-label="Xplore home">
          <Logo compact showSub={false} />
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/dashboard"
            aria-label="Notifications"
            className="glass relative inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-accent-500" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
