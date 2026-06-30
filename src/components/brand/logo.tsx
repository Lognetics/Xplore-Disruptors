import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The XPLORE "X" mark — sharp geometric blades with a center notch,
 * rendered with the brand blue→orange gradient.
 */
export function XMark({ className }: { className?: string }) {
  const id = "xplore-x-grad";
  return (
    <svg viewBox="0 0 64 64" className={cn("h-8 w-8", className)} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--brand-400)" />
          <stop offset="0.55" stopColor="var(--brand-600)" />
          <stop offset="1" stopColor="var(--accent-500)" />
        </linearGradient>
      </defs>
      {/* top-left → bottom-right blade, notched in the middle */}
      <path
        d="M6 7 L20 7 L34 26 L27 35 Z M37 39 L44 30 L58 57 L44 57 Z"
        fill={`url(#${id})`}
      />
      {/* top-right → bottom-left blade */}
      <path
        d="M44 7 L58 7 L26 57 L12 57 L30 33 Z"
        fill={`url(#${id})`}
        opacity="0.92"
      />
    </svg>
  );
}

/** Full lockup: the official XPLORE wordmark (+ optional DISRUPTORS subline). */
export function Logo({
  className,
  showSub = true,
  compact = false,
}: {
  className?: string;
  showSub?: boolean;
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <Image
        src="/brand/xplore-logo-web.png"
        alt="Xplore Disruptors"
        width={760}
        height={292}
        priority
        className={cn("w-auto", compact ? "h-6" : "h-8")}
      />
      {showSub && (
        <span className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-muted sm:block">
          Disruptors
        </span>
      )}
    </span>
  );
}
