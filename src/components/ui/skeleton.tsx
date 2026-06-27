import { cn } from "@/lib/utils";

/** Shimmering skeleton placeholder for loading states. */
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("shimmer rounded-xl", className)} />;
}
