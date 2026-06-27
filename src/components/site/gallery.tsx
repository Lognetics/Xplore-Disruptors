import Image from "next/image";
import { Section } from "@/components/site/section";
import { GALLERY, type GalleryImage } from "@/lib/mock";

function Row({ images, reverse }: { images: GalleryImage[]; reverse?: boolean }) {
  const loop = [...images, ...images];
  return (
    <div className="group flex w-max gap-4">
      <div
        className="flex gap-4 animate-marquee"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {loop.map((img, i) => (
          <div
            key={`${img.id}-${i}`}
            className="relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl border border-border sm:h-52 sm:w-80"
          >
            <Image src={img.thumb} alt="Xplore Disruptors" fill sizes="320px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const a = GALLERY.slice(0, 10);
  const b = GALLERY.slice(10, 20);
  return (
    <Section
      id="gallery"
      eyebrow="Innovation gallery"
      title={<>Moments that <span className="text-gradient">moved the continent</span></>}
      subtitle="30,000 builders. One stage. Relive the energy of Africa's largest tech festival."
    >
      <div className="relative -mx-5 space-y-4 overflow-hidden sm:-mx-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />
        <Row images={a} />
        <Row images={b} reverse />
      </div>
    </Section>
  );
}
