import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import type { Post } from "@/lib/posts";

export function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((p, i) => (
        <Reveal key={p.slug} delay={(i % 3) * 0.05}>
          <Link href={`/blog/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-3xl glass-card">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image src={p.cover} alt="" fill sizes="(max-width:768px) 100vw, 380px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-[var(--neon-blue)]/25 px-2.5 py-1 text-[0.65rem] font-bold text-[var(--neon-cyan)] backdrop-blur">{p.tag}</span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs text-muted">{p.date}</p>
              <h3 className="mt-1.5 font-display text-lg font-bold leading-snug group-hover:text-gradient">{p.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-muted">{p.excerpt}</p>
              <span className="mt-4 text-sm font-semibold text-[var(--neon-cyan)]">Read article →</span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
