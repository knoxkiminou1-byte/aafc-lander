import { Link } from 'wouter';
import type { ReactNode } from 'react';
export default function WikiLayout({children}:{children:ReactNode}) {
 return <div className="min-h-screen bg-background text-foreground">
  <header className="border-b border-border"><nav aria-label="Main navigation" className="mx-auto flex max-w-6xl flex-wrap items-center gap-5 px-5 py-5 text-sm">
   <Link href="/" className="mr-auto font-bold tracking-wide">AAFC Builders</Link>
   <Link href="/">Home</Link><Link href="/builds">Builds</Link><Link href="/research">Research</Link><Link href="/wiki" className="font-semibold text-primary">Wiki</Link>
  </nav></header><main className="mx-auto max-w-6xl px-5 py-10">{children}</main>
  <footer className="mx-auto max-w-6xl border-t px-5 py-6 text-sm text-muted-foreground">Built by AAFC</footer>
 </div>;
}
