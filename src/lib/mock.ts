import gallery from "./gallery.json";

export type GalleryImage = { id: string; src: string; thumb: string; orientation: "landscape" | "portrait" };
export const GALLERY = gallery as GalleryImage[];

const img = (i: number) => GALLERY[i % GALLERY.length]?.thumb ?? "";

export type EventItem = {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  cover: string;
  live?: boolean;
  attendees: number;
  accent: "brand" | "accent" | "violet";
};

export const EVENTS: EventItem[] = [
  { id: "main-stage", title: "Disruptors Main Stage", type: "Conference", date: "Nov 14", time: "09:00", venue: "National Stadium Velodrome", city: "Abuja", cover: img(2), live: true, attendees: 30000, accent: "brand" },
  { id: "pitch", title: "Startup Pitch Battle — Finals", type: "Competition", date: "Nov 14", time: "14:30", venue: "World Trade Center", city: "Abuja", cover: img(7), attendees: 4200, accent: "accent" },
  { id: "hack", title: "Xplore Hackathon 48", type: "Hackathon", date: "Nov 13", time: "08:00", venue: "Innovation Hub", city: "Abuja", cover: img(11), attendees: 1800, accent: "violet" },
  { id: "investor", title: "Investor Roundtable", type: "Networking", date: "Nov 15", time: "11:00", venue: "WTC Ballroom", city: "Abuja", cover: img(15), attendees: 500, accent: "brand" },
  { id: "ai-masterclass", title: "Applied AI Masterclass", type: "Masterclass", date: "Nov 15", time: "13:00", venue: "Hall B", city: "Abuja", cover: img(19), attendees: 2600, accent: "violet" },
  { id: "awards", title: "Disruptor Awards Night", type: "Awards", date: "Nov 15", time: "19:00", venue: "Grand Ballroom", city: "Abuja", cover: img(23), attendees: 3000, accent: "accent" },
];

export type Person = {
  id: string;
  name: string;
  role: string;
  org: string;
  tags: string[];
  match: number;
  avatar: string;
};

export const PEOPLE: Person[] = [
  { id: "p1", name: "Amara Okafor", role: "Founder & CEO", org: "PayFlux", tags: ["Fintech", "Series A"], match: 96, avatar: img(0) },
  { id: "p2", name: "Tunde Bello", role: "Partner", org: "Sahara Ventures", tags: ["Investor", "Seed"], match: 92, avatar: img(4) },
  { id: "p3", name: "Zainab Yusuf", role: "AI Researcher", org: "Netics AI", tags: ["ML", "NLP"], match: 89, avatar: img(8) },
  { id: "p4", name: "Kwame Mensah", role: "Product Lead", org: "GridAfrica", tags: ["Cleantech", "IoT"], match: 87, avatar: img(12) },
  { id: "p5", name: "Lerato Dube", role: "Mentor", org: "Founders Factory", tags: ["GTM", "Scaling"], match: 84, avatar: img(16) },
  { id: "p6", name: "Chidi Eze", role: "CTO", org: "MediTrack", tags: ["Healthtech", "Data"], match: 81, avatar: img(20) },
];

export type FeedItem = {
  id: string;
  kind: "story" | "tech" | "opportunity";
  title: string;
  meta: string;
  cover: string;
};

export const FEED: FeedItem[] = [
  { id: "f1", kind: "story", title: "How an Abuja teenager built a $2M agritech startup", meta: "Innovation Story · 5 min read", cover: img(3) },
  { id: "f2", kind: "tech", title: "The rise of African foundation models", meta: "Trending Tech · Today", cover: img(9) },
  { id: "f3", kind: "opportunity", title: "$50K grants open for climate founders", meta: "Opportunity · Closes Dec 1", cover: img(14) },
  { id: "f4", kind: "story", title: "Inside the largest hackathon on the continent", meta: "Innovation Story · 8 min read", cover: img(18) },
];
