import { proofStats } from "@/content/siteContent";

export function ProofSection() {
  return (
    <section id="proof" className="section-pad" aria-labelledby="proof-heading">
      <div className="shell">
        <div className="panel p-6 md:p-8">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <h2 id="proof-heading" className="text-3xl font-semibold text-[var(--color-text)] md:text-4xl">
              Evidence that this work is real
            </h2>
            <p className="max-w-md text-sm text-[var(--color-text-dim)]">
              Built for trust early: measurable participation, structured pathways, and partner-backed execution.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {proofStats.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface-soft)] p-5">
                <p className="text-4xl font-semibold text-[var(--color-accent)]">{stat.value}</p>
                <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-text)]">{stat.label}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{stat.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
