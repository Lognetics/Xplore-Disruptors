import { PageHero } from "@/components/site/page-hero";
import { Ecosystem } from "@/components/site/ecosystem";
import { CTABand } from "@/components/site/cta-band";

export const metadata = {
  title: "Ecosystem",
  description: "Fifteen platforms, one mission — the operating system of African innovation.",
};

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="The Xplore ecosystem"
        breadcrumb="Ecosystem"
        title={<>A year-round <span className="text-gradient">operating system</span> for African innovation</>}
        subtitle="Xplore is more than a festival. It's fifteen connected platforms working all year to build, fund, train and tell the story of Africa's innovators."
        actions={[{ label: "Get involved", href: "/contact" }, { label: "Partner with us", href: "/partners", variant: "glass" }]}
      />
      <Ecosystem />
      <CTABand title="Plug into the ecosystem" subtitle="Founders, investors, partners and talent — there's a place for you." />
    </>
  );
}
