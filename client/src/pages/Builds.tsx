import { ExternalLink } from "lucide-react";
import type { SyntheticEvent } from "react";

type BuildProject = {
  title: string;
  url: string;
  audience: string;
  summary: string;
};

const projects: BuildProject[] = [
  {
    title: "Marchitects Builders Website",
    url: "https://www.marchitects.builders/",
    audience: "Homeowners and project decision-makers",
    summary: "A polished local business experience crafted to communicate reliability, quality, and delivery process.",
  },
  {
    title: "Social Following Shop Website",
    url: "https://www.socialfollowing.shop/",
    audience: "Creators, brands, and social commerce customers",
    summary: "A direct ecommerce experience built around digital visibility, simple browsing, and fast conversion.",
  },
  {
    title: "Andreas One Website",
    url: "https://www.andreasone.co/",
    audience: "Creative collaborators and brand partners",
    summary: "A focused personal brand site designed to communicate identity, work, and professional direction.",
  },
  {
    title: "Dexterous Barber Lounge Website",
    url: "https://www.dexterousbarberlounge.com/",
    audience: "Grooming clients and local style seekers",
    summary: "A sharp barber lounge experience focused on services, atmosphere, and appointment-ready confidence.",
  },
  {
    title: "Restaurant Preview Website",
    url: "https://restaurant-preview-eygu.vercel.app/",
    audience: "Diners, event guests, and local food audiences",
    summary: "A hospitality preview built to showcase atmosphere, menu appeal, and reservation-ready intent.",
  },
  {
    title: "Retail Boutique Preview Website",
    url: "https://retail-boutique-preview.vercel.app/",
    audience: "Retail shoppers and boutique brand followers",
    summary: "A boutique preview focused on product discovery, visual merchandising, and brand polish.",
  },
  {
    title: "Blondies Website",
    url: "https://blondies-site.vercel.app/",
    audience: "Beauty clients and boutique-style visitors",
    summary: "A polished beauty brand preview designed around visual appeal, services, and a confident first impression.",
  },
  {
    title: "Financial Advisor Preview Website",
    url: "https://financial-advisor-preview.vercel.app/",
    audience: "Financial planning clients and advisory prospects",
    summary: "A polished advisory preview focused on trust, service clarity, and confident first-contact flow.",
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
    title: "Funeral Home Preview Website",
    url: "https://funeral-home-preview.vercel.app/",
    audience: "Families and funeral service clients",
    summary: "A respectful service preview designed around clarity, care, and immediate support pathways.",
  },
  {
    title: "AAFC Builders Website",
    url: "https://www.aafcbuilders.org/",
    audience: "Organizations, sponsors, and program leads",
    summary: "A central story-driven website focused on services, outcomes, and partnership trust.",
  },
  {
    title: "Linea Collective Website",
    url: "https://www.lineaculture.com/",
    audience: "Community partners and supporters",
    summary: "Built to explain mission and values clearly, while showcasing active programs and cultural impact.",
  },
  {
    title: "LJ The DJ Website",
    url: "https://ljthedj.org/",
    audience: "Event planners, music fans, and booking clients",
    summary: "A performance brand website built around energy, bookings, and a direct connection to the audience.",
  },
  {
    title: "Ricardo Scales Piano Website",
    url: "https://ricardoscalespiano.com/",
    audience: "Event planners and booking clients",
    summary: "Performance-centered web presence emphasizing talent, trust, and conversion-ready contact flow.",
  },
  {
    title: "Hair Two Red Website",
    url: "https://hair-two-red.vercel.app/",
    audience: "Beauty clients and style-focused visitors",
    summary: "A modern beauty brand showcase designed to highlight services, portfolio looks, and client trust.",
  },
  {
    title: "Gold Cleaning Service Website",
    url: "https://cleaning-service-gold.vercel.app/",
    audience: "Residential and commercial cleaning clients",
    summary: "A service-first cleaning website built to present packages, trust signals, and a clear booking path.",
  },
  {
    title: "Kiminou Knox Website",
    url: "https://kiminouknox.com/",
    audience: "Readers and professional network",
    summary: "A personal brand build that balances author voice, portfolio highlights, and clear credibility.",
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
    title: "FMLY BZNS Website",
    url: "https://fmlybzns.com/",
    audience: "Music fans, culture followers, and collaborators",
    summary: "A culture-forward web presence built around brand energy, creative identity, and direct audience connection.",
  },
  {
    title: "Baysound Collective Website",
    url: "https://www.dgrpbaysound.com/",
    audience: "Music listeners and collaborators",
    summary: "A bold creative profile that helps visitors immediately understand the sound, identity, and booking direction.",
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
                  src={previewUrl(project.url)}
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
