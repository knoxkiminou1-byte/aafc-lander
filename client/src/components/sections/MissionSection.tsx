import { missionPillars } from "@/content/siteContent";

export function MissionSection() {
  return (
    <section id="mission" className="section-pad" aria-labelledby="mission-heading">
      <div className="shell grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="eyebrow">Mission</p>
          <h2 id="mission-heading" className="mt-4 text-4xl font-semibold text-[var(--color-text)] md:text-5xl">
            We turn raw ambition into disciplined leadership.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-text-dim)] md:text-lg">
            AAFC operates as a launch platform: rigorous coaching, real-world project cycles, and direct access to networks that
            open doors in culture, business, and community leadership.
          </p>
        </div>
        <aside className="panel lg:col-span-2">
          <blockquote className="text-xl font-medium leading-relaxed text-[var(--color-text)]">
            “Talent is everywhere. Opportunity infrastructure is not. We build the infrastructure.”
          </blockquote>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {missionPillars.map((pillar) => (
              <li key={pillar} className="rounded-xl border border-[var(--color-border-subtle)] px-3 py-2 text-sm text-[var(--color-text-dim)]">
                {pillar}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
