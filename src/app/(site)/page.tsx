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

export default function LandingPage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <StatsSection />
      <MapSection />
      <Mission />
      <Domains />
      <Ecosystem />
      <Experience />
      <Speakers />
      <Gallery />
      <Features />
      <Tickets />
      <Partners />
      <CTA />
    </>
  );
}
