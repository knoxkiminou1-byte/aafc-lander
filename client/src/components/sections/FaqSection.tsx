import { faqs } from "@/content/siteContent";

export function FaqSection() {
  return (
    <section id="faq" className="section-pad" aria-labelledby="faq-heading">
      <div className="shell">
        <div className="panel">
          <p className="eyebrow">Friction Reduction</p>
          <h2 id="faq-heading" className="mt-4 text-4xl font-semibold md:text-5xl">Questions people ask before they act</h2>
          <div className="mt-8 divide-y divide-[var(--color-border-subtle)]">
            {faqs.map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="cursor-pointer list-none text-lg font-medium text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]">
                  {item.question}
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--color-text-dim)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
