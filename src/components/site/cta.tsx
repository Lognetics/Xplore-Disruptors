import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { imageSet } from "@/lib/images";
import { SITE } from "@/lib/site";

export function CTA() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-6">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border p-10 text-center sm:p-16">
          <Image src={imageSet(26, 1)[0].src} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-25" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(130deg,rgba(46,123,255,0.82),rgba(139,92,246,0.78)_45%,rgba(192,38,211,0.72))]" />
          <div className="absolute -left-20 -top-20 -z-10 h-72 w-72 rounded-full bg-[var(--neon-blue)] opacity-25 blur-[100px]" />
          <div className="absolute -bottom-24 -right-16 -z-10 h-72 w-72 rounded-full bg-[var(--neon-violet)] opacity-25 blur-[100px]" />

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--neon-cyan)]">{SITE.edition.dates} · {SITE.edition.city}</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Africa is now. <span className="text-gradient">Don&apos;t just watch the future — build it.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted">{SITE.connector}.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/tickets" className="group inline-flex h-12 items-center gap-2 rounded-2xl bg-[linear-gradient(110deg,var(--neon-blue),var(--neon-violet))] px-7 font-semibold text-white shadow-[0_14px_44px_-10px_var(--neon-blue)] transition-transform hover:scale-[1.03]">
              <Sparkles className="h-4 w-4" /> Get your free ticket
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/partners" className="glass inline-flex h-12 items-center gap-2 rounded-2xl px-7 font-semibold hover:bg-white/10">
              Partner with us
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
