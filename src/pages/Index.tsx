import Navigation from "@/components/Portfolio/Navigation";
import Footer from "@/components/Portfolio/Footer";
import HeroSection from "@/components/Portfolio/HeroSection";
import ModernAboutSection from "@/components/Portfolio/ModernAboutSection";
import CompactServicesSection from "@/components/Portfolio/CompactServicesSection";
import ModernSkillsSection from "@/components/Portfolio/ModernSkillsSection";
import CreativeDivider from "@/components/Portfolio/CreativeDivider";
import ModernExperienceSection from "@/components/Portfolio/ModernExperienceSection";
import ModernPortfolioSection from "@/components/Portfolio/ModernPortfolioSection";
import ModernContactSection from "@/components/Portfolio/ModernContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ModernAboutSection />
        <CompactServicesSection />
        <ModernSkillsSection />
        <CreativeDivider />
        <ModernExperienceSection />
        <ModernPortfolioSection />
        <ModernContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;