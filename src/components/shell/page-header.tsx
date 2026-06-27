import { Reveal } from "@/components/ui/reveal";

/** Standard section-page header with gradient eyebrow + title. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="px-4 pt-5 md:px-0 md:pt-8">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gradient">{eyebrow}</p>
        )}
        <h1 className="mt-1 font-display text-2xl font-bold tracking-tight md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-1.5 max-w-2xl text-sm text-muted md:text-base">{subtitle}</p>}
        {children}
      </div>
    </Reveal>
  );
}
