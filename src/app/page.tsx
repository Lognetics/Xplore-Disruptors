import { GreetingHero } from "@/components/home/greeting-hero";
import { QuickAccess } from "@/components/home/quick-access";
import { Rail } from "@/components/ui/rail";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { EventCard } from "@/components/cards/event-card";
import { PersonCard } from "@/components/cards/person-card";
import { FeedCard } from "@/components/cards/feed-card";
import { EVENTS, PEOPLE, FEED } from "@/lib/mock";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-7 py-2 md:max-w-5xl md:px-6 md:py-8">
      <GreetingHero />

      <Reveal>
        <SectionHeading title="Quick access" className="mb-3" />
        <QuickAccess />
      </Reveal>

      <section className="space-y-3">
        <Reveal>
          <SectionHeading title="Happening now & next" action="All events" href="/events" />
        </Reveal>
        <Rail>
          {EVENTS.slice(0, 5).map((e) => (
            <EventCard key={e.id} event={e} className="w-[78vw] max-w-[20rem] shrink-0 snap-start" />
          ))}
        </Rail>
      </section>

      <section className="space-y-3">
        <Reveal>
          <SectionHeading title="Recommended connections" action="Network" href="/network" />
        </Reveal>
        <Rail>
          {PEOPLE.map((p) => (
            <div key={p.id} className="w-[15rem] shrink-0 snap-start">
              <PersonCard person={p} />
            </div>
          ))}
        </Rail>
      </section>

      <section className="space-y-3 px-4 md:px-0">
        <Reveal>
          <SectionHeading title="Innovation feed" action="Explore" href="/explore" />
        </Reveal>
        <div className="grid gap-3 md:grid-cols-2">
          {FEED.map((f, i) => (
            <Reveal key={f.id} delay={i * 0.05}>
              <FeedCard item={f} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
