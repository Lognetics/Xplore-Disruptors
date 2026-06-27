import {
  Brain, Bot, Atom, Leaf, Rocket, Banknote, HeartPulse, Zap,
  GraduationCap, Sprout, ShieldCheck, Globe2,
  Trophy, FlaskConical, TrendingUp, Coins, School, Building2,
  Podcast, BookOpen, Tv, Briefcase, LineChart, Cpu,
  type LucideIcon,
} from "lucide-react";

/** Section 5 — The Future of Africa: domains, each an animated card. */
export type Domain = { label: string; icon: LucideIcon; blurb: string };
export const DOMAINS: Domain[] = [
  { label: "Artificial Intelligence", icon: Brain, blurb: "Foundation models built for African languages and markets." },
  { label: "Robotics", icon: Bot, blurb: "Autonomous systems engineered on the continent." },
  { label: "Quantum", icon: Atom, blurb: "Next-generation compute for unsolved problems." },
  { label: "Climate", icon: Leaf, blurb: "Green tech tackling the continent's climate frontier." },
  { label: "Space", icon: Rocket, blurb: "Satellites, earth observation and the orbital economy." },
  { label: "Fintech", icon: Banknote, blurb: "Payments and capital rails for a billion people." },
  { label: "Health", icon: HeartPulse, blurb: "Diagnostics and care, reimagined and accessible." },
  { label: "Energy", icon: Zap, blurb: "Distributed power for an electrifying continent." },
  { label: "Education", icon: GraduationCap, blurb: "Learning that scales to every campus and phone." },
  { label: "Agriculture", icon: Sprout, blurb: "Agritech feeding the fastest-growing population." },
  { label: "Cybersecurity", icon: ShieldCheck, blurb: "Defending Africa's digital economy by design." },
  { label: "Digital Economy", icon: Globe2, blurb: "The infrastructure of a connected continent." },
];

/** Section 6 — The Xplore Ecosystem (sub-brands). */
export type EcoBrand = {
  slug: string;
  name: string;
  icon: LucideIcon;
  desc: string;
  long: string;
  offerings: string[];
};
export const ECOSYSTEM: EcoBrand[] = [
  { slug: "summit", name: "XPLORE Summit", icon: Globe2, desc: "The flagship festival.", long: "The continent's largest gathering of founders, investors, governments and innovators — the beating heart of the Xplore ecosystem.", offerings: ["Main-stage keynotes", "Startup pitch arena", "Investor lounge", "Tech expo & exhibitions"] },
  { slug: "awards", name: "XPLORE Awards", icon: Trophy, desc: "Honouring the disruptors.", long: "A continental recognition programme celebrating the founders, builders and institutions redefining Africa's future.", offerings: ["Founder of the Year", "Breakthrough Startup", "Investor of the Year", "Public-sector Innovation"] },
  { slug: "labs", name: "XPLORE Labs", icon: FlaskConical, desc: "Deep-tech R&D.", long: "An applied research arm working at the frontier — AI, robotics, climate and quantum — turning research into deployable products.", offerings: ["Applied AI research", "Hardware prototyping", "University partnerships", "Open datasets"] },
  { slug: "ventures", name: "XPLORE Ventures", icon: TrendingUp, desc: "Building & backing startups.", long: "A venture studio and accelerator that builds, funds and scales the most promising teams across the continent.", offerings: ["Pre-seed studio", "12-week accelerator", "Hands-on operating support", "Follow-on access"] },
  { slug: "capital", name: "XPLORE Capital", icon: Coins, desc: "Funding the frontier.", long: "The investment platform connecting African startups to a global network of angels, VCs and institutional capital.", offerings: ["Syndicated deals", "Investor matchmaking", "Due-diligence room", "Cap-table tooling"] },
  { slug: "startup-school", name: "XPLORE Startup School", icon: School, desc: "Founders, trained.", long: "An intensive founder programme teaching the craft of building, from idea to product-market fit to fundraising.", offerings: ["Founder bootcamps", "Mentor network", "Fundraising clinics", "Demo days"] },
  { slug: "academy", name: "XPLORE Academy", icon: GraduationCap, desc: "Future-skills for all.", long: "Future-skills training in AI, data, cloud and product — accessible to every campus and phone on the continent.", offerings: ["AI & data tracks", "Industry certifications", "Scholarships", "Hiring partners"] },
  { slug: "foundation", name: "XPLORE Foundation", icon: Building2, desc: "Innovation for impact.", long: "The non-profit arm channelling innovation toward the continent's biggest social challenges.", offerings: ["Grants & scholarships", "Community labs", "Digital-inclusion drives", "Impact research"] },
  { slug: "podcast", name: "XPLORE Podcast", icon: Podcast, desc: "Voices of the builders.", long: "Long-form conversations with the founders, investors and operators building Africa's future.", offerings: ["Weekly episodes", "Founder deep-dives", "Investor AMAs", "Live recordings"] },
  { slug: "magazine", name: "XPLORE Magazine", icon: BookOpen, desc: "Stories of innovation.", long: "A digital and print publication chronicling the rise of African technology and the people behind it.", offerings: ["Cover stories", "Founder profiles", "Sector deep-dives", "Annual review"] },
  { slug: "tv", name: "XPLORE TV", icon: Tv, desc: "The festival, streamed.", long: "Broadcast and on-demand coverage bringing the festival's stages to millions across the continent and beyond.", offerings: ["Live stage streams", "On-demand talks", "Original series", "Highlight reels"] },
  { slug: "jobs", name: "XPLORE Jobs", icon: Briefcase, desc: "Talent meets opportunity.", long: "The careers marketplace connecting Africa's best technology talent with the companies building the future.", offerings: ["Curated roles", "Talent profiles", "Hiring events", "Verified employers"] },
  { slug: "research", name: "XPLORE Research", icon: LineChart, desc: "Data on the ecosystem.", long: "The data and insights engine producing authoritative reports on Africa's innovation economy.", offerings: ["Sector reports", "Funding data", "Ecosystem maps", "Custom research"] },
  { slug: "innovation-index", name: "XPLORE Innovation Index", icon: TrendingUp, desc: "Ranking what's rising.", long: "A definitive index ranking the cities, startups and sectors driving African innovation forward.", offerings: ["City rankings", "Startup leaderboards", "Sector momentum", "Annual index"] },
  { slug: "ai", name: "XPLORE AI", icon: Cpu, desc: "Intelligence, embedded.", long: "The intelligence layer powering the platform — matchmaking, recommendations, translation and assistance.", offerings: ["AI matchmaking", "Personal agendas", "Live translation", "AI assistant"] },
];

export function ecoBySlug(slug: string) {
  return ECOSYSTEM.find((e) => e.slug === slug);
}

/** Section 7 — Experience zones. */
export const EXPERIENCES = [
  "Innovation Expo", "Robotics", "Hackathon", "Pitch Competition", "VC Lounge",
  "Government Pavilion", "Future Lab", "Product Launches", "Masterclasses",
  "Networking", "Entertainment", "After Party", "AI Zone", "Drone Zone",
  "Space Zone", "Creator Economy",
] as const;

/** Section 13 — Ticket tiers (featured set shown as cards). */
export type Ticket = { name: string; price: string; tagline: string; perks: string[]; featured?: boolean };
export const TICKETS: Ticket[] = [
  { name: "Free", price: "₦0", tagline: "Experience the festival", perks: ["Expo & exhibition access", "Main stage keynotes", "Community networking"] },
  { name: "Professional", price: "Pro", tagline: "For builders & operators", perks: ["All Free access", "Masterclasses & panels", "Startup pitch arena", "Digital badge"] },
  { name: "VIP", price: "VIP", tagline: "Front-row to the future", perks: ["Priority seating", "VC lounge access", "Speaker meet & greets", "Curated AI matchmaking"], featured: true },
  { name: "Investor", price: "Invite", tagline: "Meet the deal flow", perks: ["Investor lounge", "Curated startup intros", "Private roundtables", "Due-diligence room"] },
];

export const TICKET_TYPES = [
  "Free", "Student", "Professional", "VIP", "Executive", "Investor",
  "Government", "Corporate", "Media", "Volunteer", "Speaker", "Exhibitor",
] as const;

/** Premium platform features (showcase grid). */
export const FEATURES = [
  "AI Event Assistant", "AI Networking & Matchmaking", "Live Translation · 80+ languages",
  "Personal Schedule Builder", "QR Tickets & Digital Badge", "NFT Attendance Certificate",
  "3D Virtual Venue", "Facial Check-in", "Gamification & Innovation Score",
  "Live Polls & Audience Q&A", "Investor Matching", "AI Session Summaries",
] as const;
