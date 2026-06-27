import { useState } from "react";
import ZarnexHeader from "@/components/ZarnexHeader";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TrustedBySection from "@/components/TrustedBySection";
import EcosystemSection from "@/components/EcosystemSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ZarnexFooter from "@/components/ZarnexFooter";
import { DemoModal } from "@/components/DemoModal";
import { AIAssistantChat } from "@/components/AIAssistantChat";
import { CursorGlow } from "@/components/CursorGlow";

const Index = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--zarnex-dark)' }}>
      <CursorGlow />
      <ZarnexHeader onOpenDemo={handleOpenDemo} />
      <main>
        <HeroSection onOpenDemo={handleOpenDemo} />
        <SolutionsSection />
        <WhyChooseSection />
        <TrustedBySection onOpenDemo={handleOpenDemo} />
        <EcosystemSection />
        <DifferentiatorsSection />
      </main>
      <ZarnexFooter />

      {/* Interactive Global Elements */}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
      <AIAssistantChat onOpenDemo={handleOpenDemo} />
    </div>
  );
};

export default Index;
