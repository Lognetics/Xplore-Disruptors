import {
  Home,
  Compass,
  CalendarDays,
  Users,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

/** Canonical brand + event facts (sourced from the live event + press). */
export const SITE = {
  name: "Xplore Disruptors",
  shortName: "Xplore",
  domain: "xploredisruptors.com",
  tagline: "Africa Is Rising, and So Are the Disruptors Shaping Tomorrow",
  motto: "Don't just watch the future — be part of it.",
  description:
    "Africa's largest tech festival and year-round innovation platform — connecting founders, investors, creators, governments and innovators across the continent.",
  visionLine: "The Digital Infrastructure for Africa's Innovation Ecosystem.",
  convener: "Engr. Light Ihesiulo",
  poweredBy: "Lognetics · Netics AI",
  edition: {
    year: 2025,
    dates: "November 14–15, 2025",
    venue: "National Stadium Velodrome & World Trade Center",
    city: "Abuja, Nigeria",
  },
} as const;

export const STATS = [
  { label: "Attendees", value: 30000, suffix: "+" },
  { label: "Startups", value: 5000, suffix: "+" },
  { label: "Investors & Mentors", value: 500, suffix: "+" },
  { label: "Scholarships", value: 1000, suffix: "+" },
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
