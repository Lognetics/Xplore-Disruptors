import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ImageBanner } from "@/components/site/media";
import { hashSeed } from "@/lib/images";
import { cn } from "@/lib/utils";

type Action = { label: string; href: string; variant?: "primary" | "glass" };

/** Cinematic hero for inner pages: breadcrumb + eyebrow + title + actions. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  actions,
  align = "left",
  image = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  breadcrumb?: string;
  actions?: Action[];
  align?: "left" | "center";
  image?: boolean;
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-32 pb-12 sm:px-6 sm:pt-40 sm:pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(46,123,255,0.16),transparent_70%)]" />
      <div className={cn("mx-auto max-w-4xl", align === "center" && "text-center")}>
        <Reveal>
          <nav className={cn("flex items-center gap-1 text-xs text-muted", align === "center" && "justify-center")}>
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground/80">{breadcrumb ?? eyebrow ?? "Page"}</span>
          </nav>
          {eyebrow && (
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.3em] text-gradient">{eyebrow}</p>
          )}
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className={cn("mt-5 max-w-2xl text-base text-muted sm:text-lg", align === "center" && "mx-auto")}>
              {subtitle}
            </p>
          )}
          {actions && actions.length > 0 && (
            <div className={cn("mt-8 flex flex-wrap gap-3", align === "center" && "justify-center")}>
              {actions.map((a) => (
                <Link
                  key={a.label}
                  href={a.href}
                  className={cn(
                    "inline-flex h-12 items-center gap-2 rounded-2xl px-6 font-semibold transition-transform hover:scale-[1.03]",
                    a.variant === "glass"
                      ? "glass hover:bg-white/10"
                      : "bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] text-white shadow-[0_12px_40px_-10px_var(--neon-blue)]",
                  )}
                >
                  {a.label}
                </Link>
              ))}
            </div>
          )}
        </Reveal>
      </div>
      {image && <ImageBanner offset={hashSeed((breadcrumb ?? eyebrow ?? "xplore") + "hero")} />}
    </section>
  );
}
