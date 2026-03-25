import { programs } from "@/content/siteContent";

export function ProgramsSection() {
  return (
    <section id="programs" className="section-pad" aria-labelledby="programs-heading">
      <div className="shell">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Opportunity Lanes</p>
            <h2 id="programs-heading" className="mt-4 text-4xl font-semibold md:text-5xl">Programs with measurable outcomes</h2>
          </div>
          <p className="max-w-md text-sm text-[var(--color-text-dim)]">Each lane pairs identity development with practical tools, mentors, and repeatable systems.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <article key={program.title} className="program-card">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">0{index + 1}</p>
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-[var(--color-text)]">{program.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-dim)]">{program.description}</p>
                <p className="mt-6 border-t border-[var(--color-border-subtle)] pt-4 text-sm font-medium text-[var(--color-text)]">Outcome: {program.outcome}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
