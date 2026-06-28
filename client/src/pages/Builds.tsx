import { ExternalLink } from "lucide-react";

type BuildProject = {
  title: string;
  url: string;
  previewImage: string;
  audience: string;
  summary: string;
};

const projects: BuildProject[] = [
  {
    title: "Baysound Collective Website",
    url: "https://www.dgrpbaysound.com/",
    previewImage: "/build-previews/baysound.jpg",
    audience: "Music listeners and collaborators",
    summary: "A bold creative profile that helps visitors immediately understand the sound, identity, and booking direction.",
  },
  {
    title: "Linea Collective Website",
    url: "https://www.lineaculture.com/",
    previewImage: "/build-previews/linea.jpg",
    audience: "Community partners and supporters",
    summary: "Built to explain mission and values clearly, while showcasing active programs and cultural impact.",
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
    title: "Muisi Artist Website",
    url: "https://www.muisikongo.com/",
    previewImage: "/build-previews/muisi-kongo.jpg",
    audience: "Art collectors and event curators",
    summary: "A clean visual-first experience designed to present artistic work with emotional clarity and confidence.",
  },
  {
    title: "Seasonal Artist Website",
    url: "https://muisi.vercel.app/",
    previewImage: "/build-previews/muisi-seasonal.jpg",
    audience: "Returning fans and campaign audiences",
    summary: "A seasonal concept version made for timed releases, featured drops, and focused storytelling.",
  },
  {
    title: "Ricardo Scales Piano Website",
    url: "https://ricardoscalespiano.com/",
    previewImage: "/build-previews/ricardo-scales.jpg",
    audience: "Event planners and booking clients",
    summary: "Performance-centered web presence emphasizing talent, trust, and conversion-ready contact flow.",
  },
  {
    title: "Marchitects Builders Website",
    url: "https://www.marchitects.builders/",
    previewImage: "/build-previews/marchitects-builders.jpg",
    audience: "Homeowners and project decision-makers",
    summary: "A polished local business experience crafted to communicate reliability, quality, and delivery process.",
  },
  {
    title: "SL Montgomery Law Website",
    url: "https://slmontgomerylaw-upgrade.vercel.app/",
    previewImage: "/build-previews/sl-montgomery-law.jpg",
    audience: "Law clients and referral partners",
    summary: "A legal-focused design with confident messaging and structured trust signals for potential clients.",
  },
  {
    title: "Hair Two Red Website",
    url: "https://hair-two-red.vercel.app/",
    previewImage: "/build-previews/hair-two-red.jpg",
    audience: "Beauty clients and style-focused visitors",
    summary: "A modern beauty brand showcase designed to highlight services, portfolio looks, and client trust.",
  },
  {
    title: "LONHA Law Website",
    url: "https://lonha-website.vercel.app/",
    previewImage: "/build-previews/lonha.jpg",
    audience: "Families and special education clients",
    summary: "A bilingual, education-first legal website that explains services, trust signals, and next steps clearly.",
  },
  {
    title: "Social Following Studios Website",
    url: "https://www.socialfollowing.shop/",
    previewImage: "/build-previews/social-following.jpg",
    audience: "Creators, founders, and service businesses",
    summary: "A conversion-focused studio website for audience growth, outreach systems, and managed communication infrastructure.",
  },
  {
    title: "Blackwell Law Website",
    url: "https://blackwell-law.vercel.app/",
    previewImage: "/build-previews/blackwell-law.jpg",
    audience: "Criminal defense clients and referral partners",
    summary: "A polished legal presence built around credibility, urgent contact paths, and clear defense services.",
  },
  {
    title: "Blondies Salon Website",
    url: "https://blondies-site-skf5.vercel.app/",
    previewImage: "/build-previews/blondies.jpg",
    audience: "Salon clients and beauty service shoppers",
    summary: "A bright local salon website designed to highlight services, booking confidence, and brand personality.",
  },
  {
    title: "Ryan Estate Law Website",
    url: "https://ryan-law.vercel.app/",
    previewImage: "/build-previews/ryan-law.jpg",
    audience: "Estate planning and elder law clients",
    summary: "A professional legal website that frames planning services with warmth, clarity, and direct consultation paths.",
  },
];

const rollingItems = [...projects, ...projects];

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

      <section className="px-5 py-8 md:px-8 md:py-14">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group block h-full overflow-hidden rounded-3xl border border-white/15 bg-[#0e162c]/75 shadow-[0_18px_30px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#f0bc5a]/60"
            >
              <div className="relative aspect-video bg-[#121d3d]">
                <img
                  src={project.previewImage}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060914]/85 to-[#060914]/10" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-white/90">
                    Website Showcase
                  </span>
                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-[#f0bc5a]" aria-hidden="true" />
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-black leading-tight tracking-[-0.01em] text-[#f6f8ff]">
                  {project.title}
                </h2>
                <p className="mt-4 inline-flex rounded-full bg-[#f0bc5a] px-3 py-1.5 text-xs font-black text-[#0a1024]">
                  Audience: {project.audience}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/75">{project.summary}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
