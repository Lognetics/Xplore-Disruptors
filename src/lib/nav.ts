/**
 * Single source of truth for the entire site map.
 * Header mega-menu, footer columns and route coverage all derive from this,
 * so every link resolves to a real page.
 */

export type Link = { label: string; href: string; desc?: string };
export type MenuGroup = { label: string; href?: string; items: Link[] };

/** Header navigation — grouped dropdowns + standalone links. */
export const MEGA_MENU: MenuGroup[] = [
  {
    label: "Festival",
    href: "/",
    items: [
      { label: "Home", href: "/", desc: "Back to the landing" },
      { label: "About Xplore", href: "/about", desc: "The movement & story" },
      { label: "Speakers", href: "/speakers", desc: "Voices shaping tomorrow" },
      { label: "Agenda", href: "/agenda", desc: "3 days, multiple stages" },
      { label: "The Experience", href: "/experience", desc: "16 immersive zones" },
      { label: "Exhibitors", href: "/exhibitors", desc: "Reserve your booth" },
      { label: "Awards", href: "/awards", desc: "Honouring the disruptors" },
      { label: "Gallery", href: "/gallery", desc: "Relive the moments" },
    ],
  },
  {
    label: "Ecosystem",
    href: "/ecosystem",
    items: [
      { label: "Ecosystem overview", href: "/ecosystem", desc: "15 platforms, one mission" },
      { label: "XPLORE Labs", href: "/ecosystem/labs", desc: "Deep-tech R&D" },
      { label: "XPLORE Ventures", href: "/ecosystem/ventures", desc: "Building & backing startups" },
      { label: "XPLORE Capital", href: "/ecosystem/capital", desc: "Funding the frontier" },
      { label: "XPLORE Academy", href: "/ecosystem/academy", desc: "Future-skills for all" },
      { label: "Startup School", href: "/ecosystem/startup-school", desc: "Founders, trained" },
      { label: "Innovation Index", href: "/ecosystem/innovation-index", desc: "Ranking what's rising" },
    ],
  },
  {
    label: "Programs",
    href: "/startup-competition",
    items: [
      { label: "Startup Competition", href: "/startup-competition", desc: "Pitch for funding" },
      { label: "Hackathon", href: "/hackathon", desc: "48 hours of building" },
      { label: "Volunteer", href: "/volunteer", desc: "Join the crew" },
      { label: "Campus Ambassadors", href: "/campus-ambassadors", desc: "Lead on your campus" },
      { label: "Careers", href: "/careers", desc: "Build Xplore with us" },
    ],
  },
  {
    label: "Media",
    href: "/blog",
    items: [
      { label: "Blog", href: "/blog", desc: "Ideas & insights" },
      { label: "Newsroom", href: "/news", desc: "Press releases" },
      { label: "Podcast", href: "/podcast", desc: "Voices of the builders" },
      { label: "Research", href: "/research", desc: "Reports & whitepapers" },
      { label: "Press Kit", href: "/press-kit", desc: "Media accreditation" },
      { label: "Brand Assets", href: "/brand-assets", desc: "Logos & guidelines" },
    ],
  },
];

/** Standalone header links (always visible). */
export const HEADER_LINKS: Link[] = [
  { label: "Tickets", href: "/tickets" },
  { label: "Partners", href: "/partners" },
];

/** Footer columns. */
export const FOOTER: MenuGroup[] = [
  {
    label: "Festival",
    items: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Speakers", href: "/speakers" },
      { label: "Agenda", href: "/agenda" },
      { label: "Exhibitors", href: "/exhibitors" },
      { label: "Awards", href: "/awards" },
    ],
  },
  {
    label: "Ecosystem",
    items: [
      { label: "XPLORE Labs", href: "/ecosystem/labs" },
      { label: "XPLORE Ventures", href: "/ecosystem/ventures" },
      { label: "XPLORE Academy", href: "/ecosystem/academy" },
      { label: "Startup School", href: "/ecosystem/startup-school" },
      { label: "Research", href: "/research" },
      { label: "Innovation Index", href: "/ecosystem/innovation-index" },
    ],
  },
  {
    label: "Participate",
    items: [
      { label: "Get Tickets", href: "/tickets" },
      { label: "Become a Partner", href: "/partners" },
      { label: "Startup Competition", href: "/startup-competition" },
      { label: "Hackathon", href: "/hackathon" },
      { label: "Volunteer", href: "/volunteer" },
      { label: "Campus Ambassadors", href: "/campus-ambassadors" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Downloads", href: "/downloads" },
      { label: "Press Kit", href: "/press-kit" },
      { label: "Brand Assets", href: "/brand-assets" },
      { label: "Blog", href: "/blog" },
      { label: "Newsroom", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const LEGAL_LINKS: Link[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "FAQ", href: "/faq" },
];
