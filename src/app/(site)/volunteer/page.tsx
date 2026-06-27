import { HeartHandshake, Users, Award, Sparkles } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { Section } from "@/components/site/section";
import { InfoGrid } from "@/components/site/info-grid";
import { Timeline } from "@/components/site/timeline";
import { CTABand } from "@/components/site/cta-band";

export const metadata = {
  title: "Volunteer",
  description: "Join the crew behind Africa's largest tech festival.",
};

const ROLES = [
  { title: "Attendee Experience", desc: "Welcome and guide 20,000+ guests.", icon: Users },
  { title: "Stage & Production", desc: "Help run the stages and sessions.", icon: Sparkles },
  { title: "Startup & Investor Hub", desc: "Support founders and the pitch arena.", icon: HeartHandshake },
  { title: "Media & Content", desc: "Capture the moments as they happen.", icon: Award },
];

const PERKS = [
  { title: "Full festival access", desc: "Experience every stage and zone." },
  { title: "Certificate & reference", desc: "Recognised experience for your CV." },
  { title: "Exclusive crew kit", desc: "Branded gear and meals on shift." },
  { title: "Network for life", desc: "Join a community of doers across the continent." },
];

const PROCESS = [
  { time: "01", title: "Apply", desc: "Tell us your skills and availability." },
  { time: "02", title: "Onboard", desc: "Get matched to a team and trained." },
  { time: "03", title: "Show up", desc: "Make the festival happen." },
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        breadcrumb="Volunteer"
        title={<>Help build the <span className="text-gradient">largest tech festival in Africa</span></>}
        subtitle="Volunteers are the heartbeat of Xplore. Join the crew, learn by doing, and be part of history."
        actions={[{ label: "Become a volunteer", href: "/contact" }]}
      />
      <Section eyebrow="Roles" title="Where you can help">
        <InfoGrid items={ROLES} cols={4} />
      </Section>
      <Section eyebrow="Perks" title="What you'll get">
        <InfoGrid items={PERKS} cols={4} />
      </Section>
      <Section eyebrow="How it works" title="Three steps to joining the crew">
        <Timeline items={PROCESS} />
      </Section>
      <CTABand title="Be part of the team that makes it happen" primary={{ label: "Apply to volunteer", href: "/contact" }} secondary={{ label: "Campus Ambassadors", href: "/campus-ambassadors" }} />
    </>
  );
}
