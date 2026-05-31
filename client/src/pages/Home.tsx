import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ParticipationSection } from "@/components/sections/ParticipationSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { SignatureExperienceSection } from "@/components/sections/SignatureExperienceSection";
import { navItems } from "@/content/siteContent";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Home() {
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <SiteHeader activeSection={activeSection} />
      <main id="main-content">
        <HeroSection />
        <ProofSection />
        <MissionSection />
        <ProgramsSection />
        <ImpactSection />
        <SignatureExperienceSection />
        <ParticipationSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
