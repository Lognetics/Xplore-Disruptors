import { Hero } from "@/components/site/hero";
import { TrustMarquee } from "@/components/site/trust-marquee";
import { StatsSection } from "@/components/site/stats";
import { MapSection } from "@/components/site/map-section";
import { Mission } from "@/components/site/mission";
import { Domains } from "@/components/site/domains";
import { Ecosystem } from "@/components/site/ecosystem";
import { Experience } from "@/components/site/experience";
import { Speakers } from "@/components/site/speakers";
import { Gallery } from "@/components/site/gallery";
import { Features } from "@/components/site/features";
import { Tickets } from "@/components/site/tickets";
import { Partners } from "@/components/site/partners";
import { CTA } from "@/components/site/cta";
import { ImageShowcase } from "@/components/site/media";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <StatsSection />
      <ImageShowcase eyebrow="On the ground in Abuja" offset={1} count={3} className="py-12" />
      <MapSection />
      <Mission />
      <ImageShowcase eyebrow="The energy of the festival floor" offset={8} count={3} className="py-12" />
      <Domains />
      <Ecosystem />
      <ImageShowcase eyebrow="One continent, one community" offset={14} count={3} className="py-12" />
      <Experience />
      <Speakers />
      <Gallery />
      <Features />
      <ImageShowcase eyebrow="Moments that moved the continent" offset={20} count={3} className="py-12" />
      <Tickets />
      <Partners />
      <CTA />
    </>
  );
}
