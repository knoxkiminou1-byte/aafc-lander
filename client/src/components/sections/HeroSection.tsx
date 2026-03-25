import { Button } from "@/components/ui/button";
import { heroContent } from "@/content/siteContent";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section id="top" className="hero-section section-pad pt-32 md:pt-40" aria-labelledby="hero-heading">
      <div className="shell relative">
        <div className="hero-glow" aria-hidden="true" />
        <div className="max-w-4xl">
          <p className="eyebrow">{heroContent.eyebrow}</p>
          <h1 id="hero-heading" className="display mt-6 text-balance">
            {heroContent.title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-text-dim)] md:text-xl">
            {heroContent.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild className="btn-primary">
              <a href={heroContent.primaryCta.href} target="_blank" rel="noreferrer">
                {heroContent.primaryCta.label}
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button asChild className="btn-outline">
              <a href={heroContent.secondaryCta.href} target="_blank" rel="noreferrer">
                {heroContent.secondaryCta.label}
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-14 max-w-xl rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-5 text-sm text-[var(--color-text-dim)] shadow-[var(--shadow-soft)]">
          <span className="inline-block rounded-full bg-[var(--color-accent)]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Proof Near the Fold
          </span>
          <p className="mt-3">{heroContent.trustCue}</p>
        </div>
      </div>
    </section>
  );
}
