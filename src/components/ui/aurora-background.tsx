import { cn } from "@/lib/utils";

/**
 * Animated, AI-generated-feeling gradient backdrop.
 * Three blurred aurora blobs drift behind content; pointer-events disabled.
 */
export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute -left-[15%] top-[-10%] h-[55vh] w-[55vh] rounded-full opacity-60 blur-[90px] animate-aurora"
        style={{ background: "radial-gradient(circle, var(--brand-500), transparent 65%)" }}
      />
      <div
        className="absolute right-[-10%] top-[20%] h-[50vh] w-[50vh] rounded-full opacity-50 blur-[100px] animate-aurora"
        style={{ background: "radial-gradient(circle, var(--violet-500), transparent 65%)", animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-15%] left-[25%] h-[45vh] w-[45vh] rounded-full opacity-40 blur-[110px] animate-aurora"
        style={{ background: "radial-gradient(circle, var(--accent-500), transparent 65%)", animationDelay: "-12s" }}
      />
      {/* fine grain / vignette to keep it cinematic */}
      <div
        className="absolute inset-0 opacity-[0.5] dark:opacity-[0.7]"
        style={{ background: "radial-gradient(120% 80% at 50% 0%, transparent 40%, var(--background) 100%)" }}
      />
    </div>
  );
}
