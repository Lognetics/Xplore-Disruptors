import { AuroraBackground } from "@/components/ui/aurora-background";
import { DesktopHeader } from "@/components/shell/desktop-header";
import { MobileTopBar } from "@/components/shell/mobile-topbar";
import { BottomNav } from "@/components/shell/bottom-nav";

/**
 * App chrome: aurora backdrop + responsive headers + bottom nav.
 * Adds bottom padding on mobile so content clears the floating tab bar.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-dvh flex-col">
      <AuroraBackground />
      <DesktopHeader />
      <MobileTopBar />
      <main className="flex-1 pb-28 md:pb-0">{children}</main>
      <BottomNav />
    </div>
  );
}
