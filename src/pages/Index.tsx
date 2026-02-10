import ZarnexHeader from "@/components/ZarnexHeader";
import AnnouncementStrip from "@/components/AnnouncementStrip";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import EcosystemSection from "@/components/EcosystemSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import ZarnexFooter from "@/components/ZarnexFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ZarnexHeader />
      <AnnouncementStrip />
      <main>
        <HeroSection />
        <TrustedBySection />
        <EcosystemSection />
        <DifferentiatorsSection />
        <TestimonialsSection />
        <PartnersSection />
      </main>
      <ZarnexFooter />
    </div>
  );
};

export default Index;
