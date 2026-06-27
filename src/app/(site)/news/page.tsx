import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { PostGrid } from "@/components/site/post-grid";
import { CTABand } from "@/components/site/cta-band";
import { postsByCategory } from "@/lib/posts";

export const metadata = {
  title: "Newsroom",
  description: "Press releases and announcements from Xplore Disruptors.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsroom"
        breadcrumb="Newsroom"
        title={<>The latest from <span className="text-gradient">Xplore</span></>}
        subtitle="Official announcements, press releases and festival news. For media enquiries and accreditation, visit our press kit."
        actions={[{ label: "Press kit", href: "/press-kit" }, { label: "Media enquiries", href: "/contact", variant: "glass" }]}
      />
      <Section>
        <PostGrid posts={postsByCategory("news")} />
      </Section>
      <CTABand title="Covering Xplore?" subtitle="Get accredited and access our full media resources." primary={{ label: "Get press access", href: "/press-kit" }} secondary={{ label: "Contact media team", href: "/contact" }} />
    </>
  );
}
