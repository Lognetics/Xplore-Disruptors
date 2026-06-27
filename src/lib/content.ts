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
export type EcoBrand = { name: string; icon: LucideIcon; desc: string };
export const ECOSYSTEM: EcoBrand[] = [
  { name: "XPLORE Summit", icon: Globe2, desc: "The flagship festival." },
  { name: "XPLORE Awards", icon: Trophy, desc: "Honouring the disruptors." },
  { name: "XPLORE Labs", icon: FlaskConical, desc: "Deep-tech R&D." },
  { name: "XPLORE Ventures", icon: TrendingUp, desc: "Building & backing startups." },
  { name: "XPLORE Capital", icon: Coins, desc: "Funding the frontier." },
  { name: "XPLORE Startup School", icon: School, desc: "Founders, trained." },
  { name: "XPLORE Academy", icon: GraduationCap, desc: "Future-skills for all." },
  { name: "XPLORE Foundation", icon: Building2, desc: "Innovation for impact." },
  { name: "XPLORE Podcast", icon: Podcast, desc: "Voices of the builders." },
  { name: "XPLORE Magazine", icon: BookOpen, desc: "Stories of innovation." },
  { name: "XPLORE TV", icon: Tv, desc: "The festival, streamed." },
  { name: "XPLORE Jobs", icon: Briefcase, desc: "Talent meets opportunity." },
  { name: "XPLORE Research", icon: LineChart, desc: "Data on the ecosystem." },
  { name: "XPLORE Innovation Index", icon: TrendingUp, desc: "Ranking what's rising." },
  { name: "XPLORE AI", icon: Cpu, desc: "Intelligence, embedded." },
];

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
