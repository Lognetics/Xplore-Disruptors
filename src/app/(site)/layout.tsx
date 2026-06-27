import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="top" className="relative min-h-dvh overflow-x-clip">
      {/* Ambient cinematic backdrop */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 bg-background">
        <div className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:60px_60px] [mask-image:radial-gradient(70%_60%_at_50%_30%,#000,transparent)]" />
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-[var(--neon-blue)] opacity-[0.12] blur-[120px]" />
      </div>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
