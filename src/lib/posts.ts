import { GALLERY } from "@/lib/mock";

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: "blog" | "news";
  tag: string;
  excerpt: string;
  cover: string;
  body: string[];
};

const cover = (i: number) => GALLERY[i % GALLERY.length].src;

const lorem = (title: string): string[] => [
  `${title} — a perspective from the Xplore Disruptors editorial team on what it means for founders, operators and investors building across Africa.`,
  "Africa's innovation economy is moving faster than ever. As capital, talent and infrastructure converge, the questions that matter are shifting from whether to build to how to build well — and at scale.",
  "Across the ecosystem, the teams winning are the ones treating technology not as a feature but as an operating model: designing for distribution, for trust, and for the realities of African markets.",
  "At Xplore, we bring these conversations to one stage — connecting the people, capital and ideas that turn ambition into outcomes. This is how the future gets built: deliberately, collaboratively, and out in the open.",
];

/** Real Xplore / Lognetics article titles, plus festival announcements. */
export const POSTS: Post[] = [
  { slug: "ai-integration-operational-redesign", title: "AI Integration Is Not a Tool Upgrade. It's an Operational Redesign", date: "Feb 1, 2026", category: "blog", tag: "AI", excerpt: "Why bolting AI onto old processes fails — and what redesigning operations around it really takes.", cover: cover(1), body: lorem("AI Integration Is Not a Tool Upgrade") },
  { slug: "systems-thinking-changes-enterprises", title: "Why Systems Thinking Changes Enterprises", date: "Jan 30, 2026", category: "blog", tag: "Strategy", excerpt: "The shift from point solutions to systems is the difference between progress and noise.", cover: cover(4), body: lorem("Why Systems Thinking Changes Enterprises") },
  { slug: "decision-leaders-get-wrong-scaling-ai", title: "The Decision Most Leaders Get Wrong Before Scaling AI", date: "Jan 27, 2026", category: "blog", tag: "AI", excerpt: "The make-or-break choice happens long before deployment.", cover: cover(7), body: lorem("The Decision Most Leaders Get Wrong Before Scaling AI") },
  { slug: "beyond-the-ai-hype", title: "Beyond the AI Hype: Building Enterprise Systems That Actually Work", date: "Jan 22, 2026", category: "blog", tag: "Engineering", excerpt: "What it takes to ship enterprise AI that survives contact with reality.", cover: cover(10), body: lorem("Beyond the AI Hype") },
  { slug: "why-ai-initiatives-fail-after-approval", title: "Why Most AI Initiatives Fail After Approval, Not Before", date: "Jan 20, 2026", category: "blog", tag: "AI", excerpt: "Approval is the easy part. Execution is where most initiatives quietly die.", cover: cover(13), body: lorem("Why Most AI Initiatives Fail After Approval") },
  { slug: "traditional-software-vs-ai-systems", title: "Traditional Software vs AI Systems", date: "Jan 14, 2026", category: "blog", tag: "Engineering", excerpt: "How building AI systems fundamentally differs from building traditional software.", cover: cover(16), body: lorem("Traditional Software vs AI Systems") },
  { slug: "fintech-ai-future-of-finance", title: "How Fintech Is Harnessing AI to Redefine the Future of Finance", date: "Aug 27, 2025", category: "blog", tag: "Fintech", excerpt: "AI is rewriting the rails of African finance — here's how.", cover: cover(19), body: lorem("How Fintech Is Harnessing AI to Redefine the Future of Finance") },
  { slug: "xplore-2025-visionaries-redefine-future", title: "Xplore Disruptors 2025: Where Visionaries Redefine the Future", date: "Nov 12, 2025", category: "news", tag: "Festival", excerpt: "Inside the edition that brought the continent's boldest builders together.", cover: cover(2), body: lorem("Xplore Disruptors 2025: Where Visionaries Redefine the Future") },
  { slug: "xplore-2026-announced", title: "XPLORE 2026 Announced — The Rise of Tech Disruptors", date: "Jan 6, 2026", category: "news", tag: "Announcement", excerpt: "The largest tech festival in Africa returns to Abuja in 2026.", cover: cover(5), body: lorem("XPLORE 2026 Announced") },
  { slug: "call-for-startups-2026", title: "Call for Startups: 2026 Pitch Arena Applications Open", date: "Jan 12, 2026", category: "news", tag: "Programs", excerpt: "Founders across the continent can now apply to pitch for funding.", cover: cover(8), body: lorem("Call for Startups: 2026 Pitch Arena Applications Open") },
];

export const postsByCategory = (c: Post["category"]) => POSTS.filter((p) => p.category === c);
export const postBySlug = (slug: string) => POSTS.find((p) => p.slug === slug);
