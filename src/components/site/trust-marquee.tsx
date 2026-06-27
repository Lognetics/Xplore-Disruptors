const ITEMS = [
  "Founders", "Investors", "Governments", "Universities", "Corporates",
  "Startups", "Media", "Creators", "Researchers", "Policymakers", "Innovators",
];

export function TrustMarquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-border py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max items-center gap-10 animate-marquee">
        {loop.map((x, i) => (
          <span key={`${x}-${i}`} className="flex items-center gap-10 text-lg font-semibold text-muted/70">
            {x}
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-blue)]/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
