import { Button } from "@/components/ui/button";
import { navItems } from "@/content/siteContent";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type SiteHeaderProps = {
  activeSection: string;
};

export function SiteHeader({ activeSection }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <nav
        aria-label="Primary"
        className={`mx-auto mt-3 flex w-[min(1120px,calc(100%-1.5rem))] items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 md:px-6 ${
          isScrolled
            ? "border-[var(--color-border-strong)] bg-[var(--color-surface-strong)]/95 shadow-[var(--shadow-soft)] backdrop-blur"
            : "border-[var(--color-border-subtle)] bg-[var(--color-surface)]/90"
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <img src="/aafc-logo.png" alt="AAFC" className="h-11 w-auto" />
        </a>

        <ul className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => navigateTo(item.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeSection === item.id
                    ? "bg-[var(--color-accent)] text-[var(--color-bg)]"
                    : "text-[var(--color-text-dim)] hover:bg-white/10 hover:text-[var(--color-text)]"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild className="btn-outline">
            <a href="https://app.youform.com/forms/r9uihypu" target="_blank" rel="noreferrer">
              Partner With Us
            </a>
          </Button>
        </div>

        <button
          className="rounded-full border border-white/15 p-2 text-white lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="mx-auto mt-2 w-[min(1120px,calc(100%-1.5rem))] rounded-3xl border border-[var(--color-border-strong)] bg-[var(--color-surface-strong)] p-4 shadow-[var(--shadow-soft)] lg:hidden">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => navigateTo(item.id)}
                  className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-[var(--color-text)] hover:bg-white/10"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
