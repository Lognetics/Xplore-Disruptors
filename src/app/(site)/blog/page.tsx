import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { PostGrid } from "@/components/site/post-grid";
import { CTABand } from "@/components/site/cta-band";
import { postsByCategory } from "@/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Ideas and insights on building the future of African innovation.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Xplore blog"
        breadcrumb="Blog"
        title={<>Ideas that <span className="text-gradient">ignite</span></>}
        subtitle="Perspectives on AI, fintech, systems and the craft of building enterprise technology for Africa and the world."
        actions={[{ label: "Subscribe", href: "/contact" }, { label: "Visit newsroom", href: "/news", variant: "glass" }]}
      />
      <Section>
        <PostGrid posts={postsByCategory("blog")} />
      </Section>
      <CTABand title="Never miss an insight" subtitle="Get the best of the Xplore blog in your inbox." primary={{ label: "Subscribe", href: "/contact" }} secondary={{ label: "Read the newsroom", href: "/news" }} />
    </>
  );
}
