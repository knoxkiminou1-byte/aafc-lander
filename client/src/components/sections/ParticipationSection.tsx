import { Button } from "@/components/ui/button";
import { participationPaths } from "@/content/siteContent";

export function ParticipationSection() {
  return (
    <section id="join" className="section-pad" aria-labelledby="join-heading">
      <div className="shell">
        <h2 id="join-heading" className="text-4xl font-semibold md:text-5xl">Choose your path into the mission</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {participationPaths.map((path, index) => (
            <article key={path.title} className={`panel ${index === 0 ? "border-[var(--color-accent)]/50" : ""}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">{path.label}</p>
              <h3 className="mt-4 text-3xl font-semibold">{path.title}</h3>
              <p className="mt-4 text-[var(--color-text-dim)]">{path.body}</p>
              <Button asChild className="btn-primary mt-8">
                <a href={path.href} target="_blank" rel="noreferrer">{path.cta}</a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
