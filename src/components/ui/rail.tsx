import { cn } from "@/lib/utils";

/** Horizontal snap-scrolling rail for cards (touch-friendly, hidden scrollbar). */
export function Rail({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("no-scrollbar snap-x-rail flex gap-3 overflow-x-auto px-4 pb-1 md:px-0", className)}>
      {children}
    </div>
  );
}
