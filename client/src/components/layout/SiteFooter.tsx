export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-soft)] py-16">
      <div className="shell space-y-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src="/aafc-logo.png" alt="AAFC logo" className="mb-6 h-12 w-auto" />
            <p className="max-w-md text-sm leading-relaxed text-[var(--color-text-dim)]">
              Artists and Athletes for Change is a launch platform where youth build leadership, digital fluency,
              and lasting opportunity through a disciplined, mentor-driven experience.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-dim)]">Navigate</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="#mission" className="footer-link">Mission</a></li>
              <li><a href="#programs" className="footer-link">Programs</a></li>
              <li><a href="#impact" className="footer-link">Impact</a></li>
              <li><a href="#faq" className="footer-link">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-dim)]">Get involved</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a href="https://app.youform.com/forms/f8xnzrci" className="footer-link" target="_blank" rel="noreferrer">Apply</a></li>
              <li><a href="https://app.youform.com/forms/r9uihypu" className="footer-link" target="_blank" rel="noreferrer">Partner</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
              <li><a href="#" className="footer-link">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-[var(--color-border-subtle)] pt-6 text-xs text-[var(--color-text-muted)] md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Artists and Athletes for Change. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
