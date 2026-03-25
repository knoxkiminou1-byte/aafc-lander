import { impactFrames } from "@/content/siteContent";

export function ImpactSection() {
  return (
    <section id="impact" className="section-pad" aria-labelledby="impact-heading">
      <div className="shell">
        <p className="eyebrow">Transformation Framework</p>
        <h2 id="impact-heading" className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">
          A structured pathway from talent discovery to long-term momentum.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {impactFrames.map((frame) => (
            <article key={frame.phase} className="panel">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-accent)]">{frame.phase}</p>
              <h3 className="mt-4 text-2xl font-semibold">{frame.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-dim)]">{frame.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
