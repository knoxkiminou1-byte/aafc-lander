import { ExternalLink } from "lucide-react";
import type { SyntheticEvent } from "react";

type BuildProject = {
  title: string;
  url: string;
  previewImage?: string;
  audience: string;
  summary: string;
};

type ClaudeSystem = {
  title: string;
  tagline: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
  tags: string[];
  preview: Array<{ label: string; value: string }>;
};

const claudeSystems: ClaudeSystem[] = [
  {
    title: "Mission Control AI",
    tagline: "AI operations infrastructure for mission-driven teams.",
    description:
      "Mission Control AI helps nonprofits turn scattered program data, intake notes, and staff updates into clear dashboards, weekly briefs, follow-up tasks, and board-ready reports. Built with Claude-ready summarization, deterministic metrics, human review, audit trails, and evaluation tests.",
    liveUrl: "https://knoxkiminou1-byte.github.io/mission-control-ai/",
    githubUrl: "https://github.com/knoxkiminou1-byte/mission-control-ai",
    caseStudyUrl: "https://github.com/knoxkiminou1-byte/mission-control-ai/blob/main/docs/product-brief.md",
    tags: ["Claude API", "Nonprofit Ops", "Human Review", "Impact Dashboard", "Evals", "Vercel"],
    preview: [
      { label: "Participants", value: "47" },
      { label: "Follow-ups", value: "9" },
      { label: "Risk Cases", value: "5" },
      { label: "Review Gate", value: "On" },
    ],
  },
  {
    title: "Youth AI Build Lab",
    tagline: "A guided AI studio for young creators, athletes, and entrepreneurs.",
    description:
      "Youth AI Build Lab helps students turn rough ideas into business assets, project pages, outreach materials, and portfolio-ready case studies. Built with Claude-ready coaching, rubric-based feedback, mentor review, responsible AI reflections, and exportable project pages.",
    liveUrl: "https://knoxkiminou1-byte.github.io/youth-ai-build-lab/",
    githubUrl: "https://github.com/knoxkiminou1-byte/youth-ai-build-lab",
    caseStudyUrl: "https://github.com/knoxkiminou1-byte/youth-ai-build-lab/blob/main/docs/product-brief.md",
    tags: ["AI Fluency", "Youth Programs", "Claude Coach", "Mentor Dashboard", "Portfolio Export", "AAFC"],
    preview: [
      { label: "Templates", value: "6" },
      { label: "Rubric", value: "5" },
      { label: "Mentor Gate", value: "On" },
      { label: "Reflection", value: "Req." },
    ],
  },
  {
    title: "Handoff Eval Agent",
    tagline: "AI readiness, evaluation, and handoff infrastructure.",
    description:
      "Handoff Eval Agent audits AI tools for reliability, eval coverage, documentation quality, safety risks, and handoff readiness. It scans projects, identifies missing tests and runbooks, creates eval case suggestions, generates risk registers, and prepares nonprofit teams to safely inherit AI systems.",
    liveUrl: "https://knoxkiminou1-byte.github.io/handoff-eval-agent/",
    githubUrl: "https://github.com/knoxkiminou1-byte/handoff-eval-agent",
    caseStudyUrl: "https://github.com/knoxkiminou1-byte/handoff-eval-agent/blob/main/docs/product-brief.md",
    tags: ["Responsible AI", "Eval Harness", "Runbooks", "Risk Register", "GitHub Audit", "Claude API"],
    preview: [
      { label: "AI Ready", value: "72" },
      { label: "Eval Score", value: "48" },
      { label: "Docs", value: "7" },
      { label: "Secrets", value: "Safe" },
    ],
  },
];

const projects: BuildProject[] = [
  {
    title: "LJ The DJ Website",
    url: "https://ljthedj.org/",
    audience: "Event planners, music fans, and booking clients",
    summary: "A performance brand website built around energy, bookings, and a direct connection to the audience.",
  },
  {
    title: "FMLY BZNS Website",
    url: "https://fmlybzns.com/",
    audience: "Music fans, culture followers, and collaborators",
    summary: "A culture-forward web presence built around brand energy, creative identity, and direct audience connection.",
  },
  {
    title: "Baysound Collective Website",
    url: "https://www.dgrpbaysound.com/",
    previewImage: "/build-previews/baysound.jpg",
    audience: "Music listeners and collaborators",
    summary: "A bold creative profile that helps visitors immediately understand the sound, identity, and booking direction.",
  },
  {
    title: "Muisi Artist Website",
    url: "https://www.muisikongo.com/",
    audience: "Art collectors and event curators",
    summary: "A clean visual-first experience designed to present artistic work with emotional clarity and confidence.",
  },
  {
    title: "Seasonal Artist Website",
    url: "https://muisi.vercel.app/",
    audience: "Returning fans and campaign audiences",
    summary: "A seasonal concept version made for timed releases, featured drops, and focused storytelling.",
  },
  {
    title: "Hair Two Red Website",
    url: "https://hair-two-red.vercel.app/",
    audience: "Beauty clients and style-focused visitors",
    summary: "A modern beauty brand showcase designed to highlight services, portfolio looks, and client trust.",
  },
  {
    title: "Blondies Website",
    url: "https://blondies-site.vercel.app/",
    audience: "Beauty clients and boutique-style visitors",
    summary: "A polished beauty brand preview designed around visual appeal, services, and a confident first impression.",
  },
  {
    title: "Social Following Shop Website",
    url: "https://www.socialfollowing.shop/",
    audience: "Creators, brands, and social commerce customers",
    summary: "A direct ecommerce experience built around digital visibility, simple browsing, and fast conversion.",
  },
  {
    title: "Retail Boutique Preview Website",
    url: "https://retail-boutique-preview.vercel.app/",
    audience: "Retail shoppers and boutique brand followers",
    summary: "A boutique preview focused on product discovery, visual merchandising, and brand polish.",
  },
  {
    title: "Restaurant Preview Website",
    url: "https://restaurant-preview-eygu.vercel.app/",
    audience: "Diners, event guests, and local food audiences",
    summary: "A hospitality preview built to showcase atmosphere, menu appeal, and reservation-ready intent.",
  },
  {
    title: "Linea Collective Website",
    url: "https://www.lineaculture.com/",
    previewImage: "/build-previews/linea.jpg",
    audience: "Community partners and supporters",
    summary: "Built to explain mission and values clearly, while showcasing active programs and cultural impact.",
  },
  {
    title: "Andreas One Website",
    url: "https://www.andreasone.co/",
    audience: "Creative collaborators and brand partners",
    summary: "A focused personal brand site designed to communicate identity, work, and professional direction.",
  },
  {
    title: "Ricardo Scales Piano Website",
    url: "https://ricardoscalespiano.com/",
    audience: "Event planners and booking clients",
    summary: "Performance-centered web presence emphasizing talent, trust, and conversion-ready contact flow.",
  },
  {
    title: "Gold Cleaning Service Website",
    url: "https://cleaning-service-gold.vercel.app/",
    audience: "Residential and commercial cleaning clients",
    summary: "A service-first cleaning website built to present packages, trust signals, and a clear booking path.",
  },
  {
    title: "AAFC Builders Website",
    url: "https://www.aafcbuilders.org/",
    previewImage: "/build-previews/aafc.jpg",
    audience: "Organizations, sponsors, and program leads",
    summary: "A central story-driven website focused on services, outcomes, and partnership trust.",
  },
  {
    title: "Kiminou Knox Website",
    url: "https://kiminouknox.com/",
    previewImage: "/build-previews/kiminou-knox.jpg",
    audience: "Readers and professional network",
    summary: "A personal brand build that balances author voice, portfolio highlights, and clear credibility.",
  },
  {
    title: "Dexterous Barber Lounge Website",
    url: "https://www.dexterousbarberlounge.com/",
    audience: "Grooming clients and local style seekers",
    summary: "A sharp barber lounge experience focused on services, atmosphere, and appointment-ready confidence.",
  },
  {
    title: "Wellness Escape Website",
    url: "https://wellness-escape-webiste.vercel.app/",
    audience: "Wellness clients and retreat seekers",
    summary: "A calm wellness experience built to showcase reset programs, services, and booking confidence.",
  },
  {
    title: "7 Day Reset Website",
    url: "https://7-day-reset.vercel.app/",
    audience: "Wellness clients and guided reset participants",
    summary: "A focused program preview designed around daily transformation, clarity, and sign-up momentum.",
  },
  {
    title: "Marchitects Builders Website",
    url: "https://www.marchitects.builders/",
    previewImage: "/build-previews/marchitects-builders.jpg",
    audience: "Homeowners and project decision-makers",
    summary: "A polished local business experience crafted to communicate reliability, quality, and delivery process.",
  },
  {
    title: "Financial Advisor Preview Website",
    url: "https://financial-advisor-preview.vercel.app/",
    audience: "Financial planning clients and advisory prospects",
    summary: "A polished advisory preview focused on trust, service clarity, and confident first-contact flow.",
  },
  {
    title: "Funeral Home Preview Website",
    url: "https://funeral-home-preview.vercel.app/",
    audience: "Families and funeral service clients",
    summary: "A respectful service preview designed around clarity, care, and immediate support pathways.",
  },
];

const rollingItems = [...projects, ...projects];

function previewUrl(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1400&h=788`;
}

function fallbackPreviewUrl(url: string) {
  return `https://image.thum.io/get/width/1400/crop/788/noanimate/${url}`;
}

function handlePreviewError(event: SyntheticEvent<HTMLImageElement>, url: string) {
  const image = event.currentTarget;

  if (image.dataset.fallbackPreview === "true") return;

  image.dataset.fallbackPreview = "true";
  image.src = fallbackPreviewUrl(url);
}

export default function Builds() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05070f] text-[#f6f8ff]">
      <section className="relative isolate border-b border-white/15 px-5 py-14 md:px-8 md:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_12%,rgba(240,188,90,0.16),transparent_62%),radial-gradient(circle_at_80%_18%,rgba(60,117,255,0.24),transparent_64%),linear-gradient(165deg,#05070f,#0a1630_65%,#0f1f45)]" />
        <h1 className="text-center text-5xl font-black leading-none tracking-[-0.02em] md:text-7xl">
          AAFC Portfolio
        </h1>

        <div className="mt-7 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="builds-marquee flex w-max gap-3">
            {rollingItems.map((project, index) => (
              <span
                key={`${project.title}-${index}`}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-white/90"
              >
                {project.title}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-b border-white/10 px-5 py-12 md:px-8 md:py-18">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.24),transparent_42%),radial-gradient(circle_at_82%_28%,rgba(168,85,247,0.22),transparent_46%),radial-gradient(circle_at_52%_88%,rgba(16,185,129,0.18),transparent_48%),linear-gradient(180deg,#05070f,#07152c_54%,#05070f)]" />
        <div className="absolute left-8 top-10 -z-10 h-36 w-36 rounded-full border border-cyan-300/20 bg-cyan-300/8 blur-2xl" />
        <div className="absolute bottom-12 right-10 -z-10 h-44 w-44 rounded-full border border-violet-300/20 bg-violet-300/8 blur-3xl" />

        <div className="mx-auto mb-8 max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-black leading-tight tracking-normal md:text-6xl">
              Claude Corps AI Systems
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
              Mission-driven AI prototypes built to support nonprofits, youth programs, and community organizations through responsible automation, training, evaluation, and handoff.
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-cyan-100/70">
              These builds are designed as fellowship-ready prototypes: scoped for real nonprofit workflows, powered by Claude-ready architecture, evaluated with test cases, and documented for handoff.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl gap-6">
          {claudeSystems.map((system, index) => (
            <article
              key={system.title}
              className="group relative grid overflow-hidden rounded-[1.65rem] border border-white/15 bg-white/[0.065] shadow-[0_32px_90px_rgba(0,0,0,0.38),0_1px_0_rgba(255,255,255,0.16)_inset] backdrop-blur-xl transition duration-500 hover:border-cyan-200/45 hover:bg-white/[0.085] lg:grid-cols-[0.95fr_1.05fr]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent_28%,transparent_70%,rgba(59,130,246,0.12))] opacity-75" />
              <div className="relative z-10 flex flex-col justify-between gap-8 p-6 md:p-8 lg:p-10">
                <div>
                  <div className="mb-5 flex flex-wrap gap-2">
                    {system.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-black tracking-normal md:text-5xl">{system.title}</h3>
                  <p className="mt-3 text-lg font-bold text-cyan-100/90">{system.tagline}</p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 md:text-base">
                    {system.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={system.liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-cyan-200 px-5 text-sm font-black text-[#061320] transition hover:bg-white">
                    View Live System
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a href={system.githubUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 text-sm font-black text-white/85 transition hover:border-white/40 hover:bg-white/12">
                    View GitHub
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a href={system.caseStudyUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-emerald-200/25 bg-emerald-200/10 px-5 text-sm font-black text-emerald-100 transition hover:border-emerald-100/50">
                    Read Case Study
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="relative z-10 min-h-[330px] p-5 md:p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_28%,rgba(59,130,246,0.20),transparent_42%),radial-gradient(circle_at_24%_78%,rgba(16,185,129,0.16),transparent_44%)]" />
                <div className="relative h-full overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#071225]/80 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.16)_inset]">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-cyan-200/70">
                        System Preview {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 text-sm text-white/48">Evaluation, review, and handoff surface</p>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_28px_rgba(110,231,183,0.8)]" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {system.preview.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.075] p-4">
                        <p className="text-[11px] font-extrabold uppercase tracking-wide text-white/45">{item.label}</p>
                        <p className="mt-3 text-3xl font-black text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-cyan-200/15 bg-cyan-200/8 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wide text-cyan-100/75">Handoff readiness</span>
                      <span className="text-xs font-black text-emerald-200">review mode</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-200 via-violet-300 to-emerald-200 transition-all duration-500 group-hover:w-[92%]" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative px-5 py-10 md:px-8 md:py-16">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(8,14,31,0),rgba(18,28,57,0.58)_42%,rgba(5,7,15,0))]" />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-7 [perspective:1200px] sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
              className="portfolio-float group relative block [transform-style:preserve-3d]"
              style={{ animationDelay: `${(index % 6) * 0.35}s` }}
            >
              <div className="absolute -inset-3 translate-y-7 rounded-[1.75rem] bg-black/45 blur-xl transition duration-500 group-hover:translate-y-9 group-hover:bg-black/60" />
              <div className="relative aspect-video overflow-hidden rounded-[1.35rem] border border-white/20 bg-[#121d3d] shadow-[0_24px_45px_rgba(0,0,0,0.45),0_1px_0_rgba(255,255,255,0.18)_inset] ring-1 ring-white/10 transition duration-500 [transform:rotateX(6deg)_rotateY(-8deg)_translateZ(0)] group-hover:border-[#f0bc5a]/70 group-hover:shadow-[0_34px_70px_rgba(0,0,0,0.58),0_0_42px_rgba(240,188,90,0.16)] group-hover:[transform:rotateX(0deg)_rotateY(0deg)_translateZ(36px)]">
                <img
                  src={project.previewImage ?? previewUrl(project.url)}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(event) => handlePreviewError(event, project.url)}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_26%,transparent_68%,rgba(0,0,0,0.24))]" />
                <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-[#05070f]/70 text-[#f0bc5a] shadow-[0_10px_24px_rgba(0,0,0,0.34)] backdrop-blur">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
