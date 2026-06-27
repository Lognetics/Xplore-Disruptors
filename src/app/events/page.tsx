import { PageHeader } from "@/components/shell/page-header";
import { EventsBrowser } from "@/components/events/events-browser";
import { SITE } from "@/lib/site";

export const metadata = { title: "Events" };

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 pb-4 md:px-6">
      <PageHeader
        eyebrow="Events"
        title="Conferences, hackathons & more"
        subtitle={`${SITE.edition.dates.replace("2025", "2026")} · ${SITE.edition.city} — plus year-round programming across the continent.`}
      />
      <EventsBrowser />
    </div>
  );
}
