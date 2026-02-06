import KoreHeader from "@/components/KoreHeader";
import AnnouncementStrip from "@/components/AnnouncementStrip";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import EcosystemSection from "@/components/EcosystemSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import AwardsSection from "@/components/AwardsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnersSection from "@/components/PartnersSection";
import InsightsSection from "@/components/InsightsSection";
import KoreFooter from "@/components/KoreFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <KoreHeader />
      <AnnouncementStrip />
      <main>
        <HeroSection />
        <TrustedBySection />
        <EcosystemSection />
        <DifferentiatorsSection />
        <AwardsSection />
        <TestimonialsSection />
        <PartnersSection />
        <InsightsSection />
      </main>
      <KoreFooter />
    </div>
  );
};

export default Index;
