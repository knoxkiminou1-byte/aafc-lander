import { ExternalLink, Github } from "lucide-react";

type ResearchProject = {
  title: string;
  tagline: string;
  headline: string;
  demoUrl: string;
  repoUrl: string;
  flagship?: boolean;
};

const projects: ResearchProject[] = [
  {
    title: "Resistance to a Corrupted Critique",
    tagline: "Scalable oversight",
    headline:
      "A judge model held 100% accuracy on graduate-level math even when fed a deliberately fabricated, confidently-argued wrong critique on half the problems.",
    demoUrl: "https://scalable-oversight-critique.vercel.app",
    repoUrl: "https://github.com/knoxkiminou1-byte/scalable-oversight-critique",
    flagship: true,
  },
  {
    title: "Rapid-Response Safety Monitor",
    tagline: "Defensive detection research",
    headline:
      "A stronger monitor caught every manipulation attempt one full turn before the harmful request appeared; a cheaper one only caught it after the fact.",
    demoUrl: "https://rapid-response-safety-monitor.vercel.app",
    repoUrl: "https://github.com/knoxkiminou1-byte/rapid-response-safety-monitor",
    flagship: true,
  },
  {
    title: "Sycophancy Under Social Pressure",
    tagline: "Probe-type comparison",
    headline:
      "96 trials across bare disagreement, false authority, emotional pressure, and escalating repetition — zero sycophantic flips on verifiable facts.",
    demoUrl: "https://sycophancy-pressure-eval.vercel.app",
    repoUrl: "https://github.com/knoxkiminou1-byte/sycophancy-pressure-eval",
  },
  {
    title: "Reasoning Consistency Under Pressure",
    tagline: "Faithful vs. unfaithful flips",
    headline:
      "50 trials testing whether models change answers without their own reasoning actually supporting the change — a clean, honestly-reported null result.",
    demoUrl: "https://reasoning-consistency-flips.vercel.app",
    repoUrl: "https://github.com/knoxkiminou1-byte/reasoning-consistency-flips",
  },
];

export default function Research() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070f] text-[#f6f8ff]">
      <section className="relative isolate border-b border-white/15 px-5 py-14 md:px-8 md:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_12%,rgba(240,188,90,0.16),transparent_62%),radial-gradient(circle_at_80%_18%,rgba(60,117,255,0.24),transparent_64%),linear-gradient(165deg,#05070f,#0a1630_65%,#0f1f45)]" />
        <p className="text-center text-xs font-extrabold uppercase tracking-[0.3em] text-[#f0bc5a]">
          AAFC Research
        </p>
        <h1 className="mt-3 text-center text-4xl font-black leading-none tracking-[-0.02em] md:text-6xl">
          AI Safety Research
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-white/70 md:text-base">
          Small, honest, real experiments run and reported end-to-end: pre-registered hypotheses, raw data
          committed to the repo, and negative results reported as plainly as positive ones. Every figure in
          every dashboard is reproducible from the raw data with one command.
        </p>
      </section>

      <section className="relative px-5 py-10 md:px-8 md:py-16">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,14,31,0),rgba(18,28,57,0.58)_42%,rgba(5,7,15,0))]" />
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-7 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.repoUrl}
              className={`group relative flex flex-col justify-between rounded-[1.5rem] border p-7 shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 ${
                project.flagship
                  ? "border-[#f0bc5a]/50 bg-[linear-gradient(160deg,rgba(240,188,90,0.10),rgba(18,28,57,0.55))]"
                  : "border-white/15 bg-[#0d1730]/70"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#f0bc5a]">
                    {project.tagline}
                  </p>
                  {project.flagship && (
                    <span className="rounded-full border border-[#f0bc5a]/50 bg-[#f0bc5a]/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[#f0bc5a]">
                      Flagship
                    </span>
                  )}
                </div>
                <h2 className="mt-3 text-xl font-bold leading-tight md:text-2xl">{project.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{project.headline}</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#f0bc5a]/60 bg-[#f0bc5a]/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#f0bc5a] transition hover:bg-[#f0bc5a]/20"
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  Live dashboard
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white/80 transition hover:bg-white/10"
                >
                  <Github className="h-3.5 w-3.5" aria-hidden="true" />
                  Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
