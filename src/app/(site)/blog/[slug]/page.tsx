import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/site/section";
import { PostGrid } from "@/components/site/post-grid";
import { CTABand } from "@/components/site/cta-band";
import { Reveal } from "@/components/ui/reveal";
import { POSTS, postBySlug } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return { title: "Article" };
  return { title: post.title, description: post.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const backHref = post.category === "news" ? "/news" : "/blog";

  return (
    <>
      <article className="px-5 pt-32 sm:px-6 sm:pt-40">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link href={backHref} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to {post.category === "news" ? "newsroom" : "blog"}
            </Link>
            <div className="mt-5 flex items-center gap-3 text-xs text-muted">
              <span className="rounded-full bg-[var(--neon-blue)]/15 px-2.5 py-1 font-bold text-[var(--neon-cyan)]">{post.tag}</span>
              <span>{post.date}</span>
            </div>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{post.title}</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-border">
              <Image src={post.cover} alt="" fill sizes="(max-width:768px) 100vw, 768px" className="object-cover" priority />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 space-y-5">
              {post.body.map((p, i) => (
                <p key={i} className={i === 0 ? "text-lg leading-relaxed text-foreground/90" : "leading-relaxed text-muted"}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </article>

      <Section eyebrow="Keep reading" title="More from Xplore">
        <PostGrid posts={more} />
      </Section>

      <CTABand title="Build the future with us" subtitle="Join the largest tech festival in Africa." />
    </>
  );
}
