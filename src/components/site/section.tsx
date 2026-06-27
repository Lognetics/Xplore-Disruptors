import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

/** Standard cinematic section wrapper with centered eyebrow + heading. */
export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  align = "center",
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-7xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28", className)}>
      {(eyebrow || title) && (
        <Reveal className={cn("mb-12 max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gradient">{eyebrow}</p>
          )}
          {title && (
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
          )}
          {subtitle && <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}
