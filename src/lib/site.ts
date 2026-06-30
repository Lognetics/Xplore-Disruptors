import {
  Home,
  Compass,
  CalendarDays,
  Users,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

/** Canonical brand + event facts (verbatim from xploredisruptors.com + press). */
export const SITE = {
  name: "Xplore Disruptors",
  shortName: "Xplore",
  domain: "xploredisruptors.com",
  edition2026: "XPLORE 2026 — The Rise of Tech Disruptors",
  // Big cinematic headline (redesign direction) + the site's own line as support.
  heroHeadline: ["Africa Isn't Catching Up.", "Africa Is Building The Future."],
  tagline: "Ideas That Ignite. People That Build.",
  superline: "The Largest Tech Festival in Africa",
  connector: "Connecting Africa's Innovators to the World",
  motto: "Africa is now. Xplore is here to accelerate the pace of innovation.",
  description:
    "The largest tech festival in Africa — unifying the continent's boldest builders, founders, investors and innovators to accelerate Africa's digital future.",
  mission:
    "To accelerate Africa's digital future by convening a world-class community of thinkers, doers, and trailblazers.",
  vision:
    "To stand as Africa's most transformative innovation platform — a dynamic launchpad for ideas, technologies, and talents that will redefine industries.",
  visionLine: "The operating system of Africa's innovation ecosystem.",
  convener: "Engr. Light Ihesiulo",
  poweredBy: "Lognetics · Netics AI",
  edition: {
    year: 2026,
    dates: "November 2026",
    startISO: "2026-11-13T09:00:00+01:00",
    venue: "World Trade Center",
    city: "Abuja, Nigeria",
  },
  contact: {
    phone: "+234 810 500 1830",
    email: "info@xploredisruptors.com",
    partnerships: "partnerships@xploredisruptors.com",
  },
  socials: {
    x: "https://x.com/xploredisruptor",
    instagram: "https://instagram.com/xplore.disruptors",
  },
  tracks: ["FinTech", "AI", "Green Tech", "HealthTech", "Creative Economy"],
} as const;

/** Headline statistics — official figures from xploredisruptors.com. */
export const STATS = [
  { label: "Attendees", value: 20000, suffix: "+" },
  { label: "Registrations", value: 100000, suffix: "" },
  { label: "Startups Featured", value: 5000, suffix: "+" },
  { label: "Global Mentors", value: 1000, suffix: "+" },
  { label: "Countries", value: 30, suffix: "+" },
  { label: "Investment Opportunity", value: 100000, suffix: "+", prefix: "$" },
] as const;

/** Bottom-navigation destinations (mobile-first, mirrored on desktop). */
export type NavItem = { href: string; label: string; icon: LucideIcon };

export const PRIMARY_NAV: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/explore", label: "Explore", icon: Compass },
  { href: "/events", label: "Events", icon: CalendarDays },
  { href: "/network", label: "Network", icon: Users },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export const QUICK_ACCESS = [
  { label: "Upcoming Events", href: "/events", emoji: "🎟" },
  { label: "Networking", href: "/network", emoji: "🤝" },
  { label: "Startups", href: "/explore?c=startups", emoji: "🚀" },
  { label: "Investors", href: "/explore?c=investors", emoji: "💰" },
  { label: "Speakers", href: "/explore?c=speakers", emoji: "🎤" },
  { label: "Hackathon", href: "/events?c=hackathon", emoji: "💻" },
  { label: "AI Assistant", href: "/dashboard", emoji: "✨" },
  { label: "Opportunities", href: "/explore?c=opportunities", emoji: "🎯" },
] as const;
