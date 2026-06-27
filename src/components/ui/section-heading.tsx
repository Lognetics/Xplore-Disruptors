import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  action,
  href,
  className,
}: {
  title: string;
  action?: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center justify-between gap-3 px-1", className)}>
      <h2 className="font-display text-lg font-bold tracking-tight md:text-xl">{title}</h2>
      {action && href && (
        <Link
          href={href}
          className="inline-flex items-center gap-0.5 text-sm font-semibold text-brand-500 hover:text-brand-400"
        >
          {action}
          <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
