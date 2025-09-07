import Navigation from "@/components/Portfolio/Navigation";
import Footer from "@/components/Portfolio/Footer";
import HeroSection from "@/components/Portfolio/HeroSection";
import WhatIDoSection from "@/components/Portfolio/WhatIDoSection";
import FeaturedProjectsSection from "@/components/Portfolio/FeaturedProjectsSection";
import MetricsSection from "@/components/Portfolio/MetricsSection";
import TestimonialsSection from "@/components/Portfolio/TestimonialsSection";
import TechStackSection from "@/components/Portfolio/TechStackSection";
import FinalCTASection from "@/components/Portfolio/FinalCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhatIDoSection />
        <FeaturedProjectsSection />
        <MetricsSection />
        <TestimonialsSection />
        <TechStackSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;