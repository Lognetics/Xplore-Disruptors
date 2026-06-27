import Image from "next/image";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { CTABand } from "@/components/site/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { GALLERY } from "@/lib/mock";

export const metadata = {
  title: "Gallery",
  description: "Relive the energy of Africa's largest tech festival.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovation gallery"
        breadcrumb="Gallery"
        title={<>Moments that <span className="text-gradient">moved the continent</span></>}
        subtitle="30,000 builders. One stage. Explore the photo story of Africa's largest tech festival."
        actions={[{ label: "Get your ticket", href: "/tickets" }]}
      />
      <Section>
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
          {GALLERY.map((img, i) => (
            <Reveal key={img.id} delay={(i % 6) * 0.03}>
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <Image
                  src={img.src}
                  alt="Xplore Disruptors"
                  width={800}
                  height={img.orientation === "portrait" ? 1100 : 600}
                  className="w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTABand title="Be in the next gallery" subtitle="Join 30,000+ builders at the next edition." />
    </>
  );
}
