import { Button } from "@/components/ui/button";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const ScrollReveal = ({ children, className = "", delay = 0 }: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out motion-reduce:transition-none ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const animationStyles = `
  @keyframes auroraShift {
    0% { transform: translate3d(0, 0, 0) scale(1); }
    50% { transform: translate3d(-4%, 4%, 0) scale(1.04); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }

  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(227, 168, 87, 0.15); }
    50% { box-shadow: 0 0 0 14px rgba(227, 168, 87, 0); }
  }

  @keyframes shimmer {
    from { transform: translateX(-120%); }
    to { transform: translateX(120%); }
  }

  .hero-aurora {
    animation: auroraShift 12s ease-in-out infinite;
  }

  .gold-pulse {
    animation: pulseGlow 2.8s ease-out infinite;
  }

  .shimmer-hover::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(110deg, transparent 15%, rgba(255,255,255,0.4) 50%, transparent 85%);
    transform: translateX(-120%);
    pointer-events: none;
  }

  .shimmer-hover:hover::after {
    animation: shimmer 700ms ease;
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-aurora,
    .gold-pulse,
    .shimmer-hover:hover::after {
      animation: none !important;
    }
  }
`;

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["home", "mission", "programs", "impact", "join"];
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveNav(sectionId);
          }
        }
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveNav(sectionId);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#040815] text-white selection:bg-[#E3A857] selection:text-[#091221]">
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "border-b border-[#E3A857]/20 bg-[#070d1f]/90 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "bg-gradient-to-b from-black/70 to-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <img src="/aafc-logo.png" alt="AAFC Logo" className="h-16 w-auto mix-blend-lighten" />

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {[
              { id: "home", label: "Home" },
              { id: "mission", label: "Mission" },
              { id: "programs", label: "Programs" },
              { id: "impact", label: "Impact" },
              { id: "join", label: "Join Us" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`relative pb-1 text-sm font-semibold tracking-wide transition-colors duration-300 ${
                    activeNav === item.id ? "text-[#E3A857]" : "text-white/85 hover:text-[#E3A857]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#E3A857] transition-all duration-300 ${
                      activeNav === item.id ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <Button
            asChild
            className="relative overflow-hidden rounded-full border border-[#E3A857] bg-[#E3A857] px-5 py-2 text-sm font-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-[#E3A857]"
          >
            <a href="https://app.youform.com/forms/r9uihypu" target="_blank" rel="noopener noreferrer">
              PARTNER WITH US
            </a>
          </Button>
        </div>
      </nav>

      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#12254f_0%,#091429_45%,#040815_90%)] pt-32"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(circle 500px at ${mousePos.x}% ${mousePos.y}%, rgba(227,168,87,0.20), transparent 70%)`,
          }}
        />
        <div className="hero-aurora absolute -right-16 top-8 h-80 w-80 rounded-full bg-[#E3A857]/20 blur-[110px]" />
        <div className="hero-aurora absolute -bottom-20 -left-16 h-96 w-96 rounded-full bg-[#214d9b]/20 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="mb-4 bg-gradient-to-b from-white to-blue-100 bg-clip-text text-5xl font-black uppercase leading-tight tracking-tight text-transparent sm:text-6xl lg:text-7xl">
              Artists and Athletes for Change
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="mb-8 text-2xl font-bold text-[#E3A857] sm:text-3xl lg:text-4xl">
              Empowering the next generation of leaders
            </p>
          </ScrollReveal>
          <ScrollReveal delay={260}>
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-blue-100/75">
              AAFC trains youth to become digitally fluent leaders who build sustainable careers and strengthen their communities through creativity, discipline, and innovation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={380} className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="shimmer-hover relative rounded-full border border-[#E3A857] bg-[#E3A857] px-9 py-6 text-base font-bold text-black shadow-[0_8px_28px_rgba(227,168,87,0.35)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <a href="https://app.youform.com/forms/f8xnzrci" target="_blank" rel="noopener noreferrer">
                Apply Now
              </a>
            </Button>
            <Button
              asChild
              className="rounded-full border-2 border-[#E3A857] bg-transparent px-9 py-6 text-base font-bold text-[#E3A857] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E3A857] hover:text-black"
            >
              <a href="https://app.youform.com/forms/r9uihypu" target="_blank" rel="noopener noreferrer">
                Partner with Us
              </a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <section id="mission" className="relative overflow-hidden bg-[#070d1f] px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E3A857]/40 to-transparent" />
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div>
            <ScrollReveal>
              <h2 className="mb-8 inline-block text-4xl font-black text-white sm:text-5xl">Our Mission</h2>
              <div className="-mt-5 mb-8 h-1 w-28 rounded-full bg-[#E3A857]" />
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <p className="mb-8 text-lg leading-relaxed text-white/75">
                AAFC believes young people carry extraordinary potential. Through our one-year tech cohort, participants master digital tools, gain hands-on business experience, and develop leadership skills that prepare them to thrive in creative, athletic, and entrepreneurial fields.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "500+", label: "Youth Impacted" },
                { value: "50+", label: "Programs" },
                { value: "25+", label: "Partners" },
              ].map((stat, index) => (
                <ScrollReveal key={stat.label} delay={220 + index * 80}>
                  <div className="rounded-xl border border-[#E3A857]/20 bg-white/5 p-4 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
                    <p className="text-3xl font-black text-[#E3A857]">{stat.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/65">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal delay={180}>
            <div className="group relative h-full min-h-96 overflow-hidden rounded-2xl border border-[#E3A857]/30 bg-black/30 shadow-[0_24px_70px_rgba(0,0,0,0.45)]">
              <video autoPlay muted loop className="h-full w-full object-cover">
                <source src="/mission-video.mp4" type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <button
                onClick={() => setIsVideoExpanded(true)}
                className="gold-pulse absolute right-4 top-4 rounded-lg bg-white/95 p-2 text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white"
                aria-label="Expand video"
              >
                <Maximize2 size={22} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="programs" className="bg-[#050b19] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="mb-14 text-center text-4xl font-black text-white sm:text-5xl">Our Programs</h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "🎭",
                title: "Creative and Digital Innovation",
                description:
                  "Advance your creative work while mastering media strategy, digital production, and business tools. Collaborate with professionals and explore creative industries that connect art, technology, and opportunity.",
              },
              {
                icon: "⚽",
                title: "Athletic Leadership and Technology",
                description:
                  "Strengthen your performance mindset while developing personal branding, digital fluency, and business awareness. Learn directly from athletes and coaches who guide you through growth and career transitions.",
              },
              {
                icon: "💡",
                title: "Innovation and Community Impact",
                description:
                  "Learn how to apply technology and design thinking to solve real challenges in your community. Develop practical skills that turn ideas into measurable impact.",
              },
            ].map((program, idx) => (
              <ScrollReveal key={program.title} delay={idx * 100}>
                <div className="h-full rounded-2xl border border-[#E3A857]/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 shadow-[0_14px_35px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-[#E3A857]/60 hover:shadow-[0_24px_60px_rgba(227,168,87,0.18)]">
                  <div className="mb-4 text-5xl">{program.icon}</div>
                  <h3 className="mb-4 text-2xl font-bold text-white">{program.title}</h3>
                  <p className="leading-relaxed text-white/75">{program.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="bg-[#070d1f] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="mb-12 text-center text-4xl font-black text-white sm:text-5xl">Our Impact</h2>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Mentorship Driven",
                description:
                  "Participants receive personalized guidance, real-world insight, and direct access to professional networks that expand career opportunities.",
              },
              {
                title: "Leadership Development",
                description:
                  "Through training and applied experience, participants build confidence, critical thinking, and the ability to lead in creative and professional environments.",
              },
              {
                title: "Cultural and Community Advancement",
                description:
                  "Graduates become community builders who use creativity, discipline, and technology to strengthen local systems and inspire progress.",
              },
              {
                title: "Tech Integration",
                description:
                  "Technology is embedded in every phase of the program, preparing participants to operate effectively in modern creative and business ecosystems.",
              },
            ].map((impact, idx) => (
              <ScrollReveal key={impact.title} delay={idx * 80}>
                <div className="rounded-2xl border-l-4 border-[#E3A857] bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                  <h3 className="mb-3 text-2xl font-bold text-white">{impact.title}</h3>
                  <p className="leading-relaxed text-white/75">{impact.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="relative overflow-hidden bg-[#030611] px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(227,168,87,0.16),transparent_45%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl">Ready to Build Your Future?</h2>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/75">
              <strong className="text-[#E3A857]">For Youth Ages 18 to 24:</strong> Join a cohort that provides mentorship, hands-on training, and real-world experience in technology, business, and leadership.
              <br />
              <br />
              <strong className="text-[#E3A857]">For Supporters:</strong> Your investment funds technology access, instruction, and mentorship that prepare young leaders to build sustainable futures.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240} className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              className="rounded-full border border-[#E3A857] bg-[#E3A857] px-8 py-6 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white"
              onClick={() => window.open("https://app.youform.com/forms/f8xnzrci", "_blank")}
            >
              Apply Now
            </Button>
            <Button
              className="rounded-full border-2 border-[#E3A857] bg-transparent px-8 py-6 text-lg font-bold text-[#E3A857] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E3A857] hover:text-black"
              onClick={() => window.open("https://app.youform.com/forms/r9uihypu", "_blank")}
            >
              Partner with Us
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-4 py-12 text-gray-300 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="mb-4 text-lg font-bold tracking-normal text-white" style={{ fontFamily: "Merriweather, serif" }}>
                About AAFC
              </h4>
              <p className="text-sm leading-relaxed text-white/70">
                AAFC empowers youth through arts, athletics, and innovation to build sustainable futures and create lasting community impact.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold tracking-normal text-white" style={{ fontFamily: "Merriweather, serif" }}>
                Programs
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#programs" className="transition hover:text-[#E3A857]">
                    Creative and Digital Innovation
                  </a>
                </li>
                <li>
                  <a href="#programs" className="transition hover:text-[#E3A857]">
                    Athletic Leadership and Technology
                  </a>
                </li>
                <li>
                  <a href="#programs" className="transition hover:text-[#E3A857]">
                    Innovation and Community Impact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-bold tracking-normal text-white" style={{ fontFamily: "Merriweather, serif" }}>
                Get Involved
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#join" className="transition hover:text-[#E3A857]">
                    Apply Now
                  </a>
                </li>
                <li>
                  <a href="#join" className="transition hover:text-[#E3A857]">
                    Partner with Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-white/60">
            <p>&copy; 2025 Artists and Athletes for Change. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {isVideoExpanded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-lg border border-[#E3A857]/30 bg-black shadow-2xl">
            <video autoPlay muted loop controls className="h-full w-full object-cover">
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            <button
              onClick={() => setIsVideoExpanded(false)}
              className="absolute right-4 top-4 rounded-lg bg-white p-2 text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      <style>{animationStyles}</style>
    </div>
  );
}
