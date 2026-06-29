import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { imageSet } from "@/lib/images";
import { cn } from "@/lib/utils";

/** A single stylish image box: gradient ring, glow, hover-zoom, corner pulse. */
export function ImageTile({
  src,
  alt = "Xplore Disruptors",
  caption,
  className,
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority,
}: {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("ring-gradient group relative overflow-hidden rounded-3xl border border-border shadow-[0_18px_50px_-20px_rgba(46,123,255,0.5)]", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(circle_at_30%_15%,rgba(46,123,255,0.28),transparent_60%)]" />
      <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_12px_var(--neon-cyan)]" />
      {caption && (
        <span className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white drop-shadow">{caption}</span>
      )}
    </div>
  );
}

/**
 * A stylish, staggered band of images. Used standalone in sections and inside
 * shared components (PageHero banner, CTABand) so every page carries imagery.
 */
export function ImageShowcase({
  eyebrow,
  offset = 0,
  count = 3,
  className,
  ratio = "aspect-[4/3]",
}: {
  eyebrow?: string;
  offset?: number;
  count?: number;
  className?: string;
  ratio?: string;
}) {
  const imgs = imageSet(offset, count);
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-6", className)}>
      {eyebrow && (
        <Reveal>
          <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-gradient">{eyebrow}</p>
        </Reveal>
      )}
      <div className={cn("grid grid-cols-1 gap-4", count >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2")}>
        {imgs.map((img, i) => (
          <Reveal key={`${img.id}-${i}`} delay={i * 0.06}>
            <ImageTile
              src={img.src}
              className={cn(ratio, count >= 3 && i % 3 === 1 && "sm:-translate-y-6", count >= 3 && i % 3 === 2 && "sm:translate-y-6")}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/** A single wide banner image (used by PageHero). */
export function ImageBanner({ offset = 0, className }: { offset?: number; className?: string }) {
  const img = imageSet(offset, 1)[0];
  return (
    <Reveal className={cn("mx-auto mt-10 w-full max-w-5xl", className)}>
      <ImageTile src={img.src} className="aspect-[16/7]" sizes="(max-width: 1024px) 100vw, 1024px" priority />
    </Reveal>
  );
}
