import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ImageShowcase } from "@/components/site/media";
import { hashSeed } from "@/lib/images";

/** Reusable gradient CTA band for the bottom of inner pages. */
export function CTABand({
  title,
  subtitle,
  primary = { label: "Get your free ticket", href: "/tickets" },
  secondary = { label: "Become a partner", href: "/partners" },
}: {
  title: React.ReactNode;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  const seed = hashSeed((typeof title === "string" ? title : primary.href) + "cta");
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6">
      <ImageShowcase offset={seed} count={3} className="mb-12 !px-0" />
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border p-10 text-center sm:p-14">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(130deg,rgba(46,123,255,0.2),rgba(139,92,246,0.16)_50%,rgba(192,38,211,0.14))]" />
          <div className="absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-[var(--neon-blue)] opacity-25 blur-[100px]" />
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{title}</h2>
          {subtitle && <p className="mx-auto mt-4 max-w-xl text-base text-muted">{subtitle}</p>}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primary.href} className="group inline-flex h-12 items-center gap-2 rounded-2xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] px-7 font-semibold text-white shadow-[0_14px_44px_-10px_var(--neon-blue)] transition-transform hover:scale-[1.03]">
              {primary.label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href={secondary.href} className="glass inline-flex h-12 items-center gap-2 rounded-2xl px-7 font-semibold hover:bg-white/10">
              {secondary.label}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
