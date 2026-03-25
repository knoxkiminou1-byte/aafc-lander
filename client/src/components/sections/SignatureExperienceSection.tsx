import { pathwayMoments } from "@/content/siteContent";
import { useState } from "react";

export function SignatureExperienceSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-pad" aria-labelledby="pathway-heading">
      <div className="shell">
        <div className="signature-wrap">
          <div>
            <p className="eyebrow">Signature Experience</p>
            <h2 id="pathway-heading" className="mt-4 text-4xl font-semibold md:text-5xl">
              The AAFC Opportunity Pathway
            </h2>
            <p className="mt-5 max-w-xl text-[var(--color-text-dim)]">
              Our standout moment: an interaction that shows how each phase compounds skills, confidence, and opportunity.
            </p>
            <ol className="mt-8 space-y-3" role="tablist" aria-label="Pathway phases">
              {pathwayMoments.map((moment, index) => (
                <li key={moment.title}>
                  <button
                    role="tab"
                    aria-selected={active === index}
                    aria-controls={`pathway-panel-${index}`}
                    id={`pathway-tab-${index}`}
                    className={`pathway-tab ${active === index ? "is-active" : ""}`}
                    onClick={() => setActive(index)}
                  >
                    <span>{moment.title}</span>
                  </button>
                </li>
              ))}
            </ol>
          </div>
          <article
            role="tabpanel"
            id={`pathway-panel-${active}`}
            aria-labelledby={`pathway-tab-${active}`}
            className="panel border-[var(--color-border-strong)] bg-[radial-gradient(circle_at_20%_20%,rgba(228,172,68,0.16),transparent_50%),var(--color-surface)]"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent)]/15 text-[var(--color-accent)]">
              {(() => {
                const Icon = pathwayMoments[active].icon;
                return <Icon size={28} />;
              })()}
            </div>
            <h3 className="text-3xl font-semibold text-[var(--color-text)]">{pathwayMoments[active].title}</h3>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--color-text-dim)]">{pathwayMoments[active].description}</p>
            <div className="mt-8 h-2 w-full rounded-full bg-white/10">
              <div className="h-full rounded-full bg-[var(--color-accent)] transition-all duration-500" style={{ width: `${((active + 1) / pathwayMoments.length) * 100}%` }} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
