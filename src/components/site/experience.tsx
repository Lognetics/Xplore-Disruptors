import Image from "next/image";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/ui/reveal";
import { EXPERIENCES } from "@/lib/content";
import { GALLERY } from "@/lib/mock";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="The experience"
      title={<>Sixteen worlds in <span className="text-gradient">one festival</span></>}
      subtitle="Every scroll, every hall, every stage — designed to feel like entering the future."
    >
      <div className="relative overflow-hidden rounded-3xl glass-card">
        <Image
          src={GALLERY[5]?.src ?? GALLERY[0].src}
          alt="Xplore Disruptors festival floor"
          width={1600}
          height={900}
          className="h-72 w-full object-cover opacity-60 sm:h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            {EXPERIENCES.map((x, i) => (
              <Reveal key={x} delay={i * 0.02}>
                <span className="glass inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-white/10">
                  {x}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
