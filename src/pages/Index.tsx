import { useState } from "react";
import ZarnexHeader from "@/components/ZarnexHeader";
import AnnouncementStrip from "@/components/AnnouncementStrip";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import EcosystemSection from "@/components/EcosystemSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ZarnexFooter from "@/components/ZarnexFooter";
import { DemoModal } from "@/components/DemoModal";
import { AIAssistantChat } from "@/components/AIAssistantChat";

const Index = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <ZarnexHeader onOpenDemo={handleOpenDemo} />
      <AnnouncementStrip />
      <main>
        <HeroSection onOpenDemo={handleOpenDemo} />
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
