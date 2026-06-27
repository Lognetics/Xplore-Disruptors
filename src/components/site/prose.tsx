/** Styled long-form text container for legal / policy pages. */
export function Prose({ sections, updated }: { sections: { heading: string; body: string[] }[]; updated?: string }) {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-8 sm:px-6">
      {updated && <p className="mb-8 text-sm text-muted">Last updated: {updated}</p>}
      <div className="space-y-8">
        {sections.map((s, i) => (
          <section key={s.heading}>
            <h2 className="font-display text-xl font-bold">
              <span className="mr-2 text-muted">{String(i + 1).padStart(2, "0")}</span>
              {s.heading}
            </h2>
            {s.body.map((p, j) => (
              <p key={j} className="mt-3 text-sm leading-relaxed text-muted">{p}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
