import { Check } from "lucide-react";
import { Section } from "@/components/site/section";
import { Reveal } from "@/components/ui/reveal";
import { FEATURES } from "@/lib/content";

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="Powered by intelligence"
      title={<>An <span className="text-gradient">AI-native</span> festival platform</>}
      subtitle="Your entire Xplore experience — networking, scheduling, check-in — runs on an AI layer built for scale."
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f} delay={(i % 3) * 0.05}>
            <div className="flex items-center gap-3 rounded-2xl glass-card px-5 py-4">
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--neon-blue)]/15">
                <Check className="h-4 w-4 text-[var(--neon-cyan)]" />
              </span>
              <span className="text-sm font-medium">{f}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
