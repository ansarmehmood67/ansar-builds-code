import Navigation from "@/components/Portfolio/Navigation";
import Footer from "@/components/Portfolio/Footer";
import HeroSection from "@/components/Portfolio/HeroSection";
import AboutSection from "@/components/Portfolio/AboutSection";
import QuickNavRow from "@/components/Portfolio/QuickNavRow";
import SkillsSection from "@/components/Portfolio/SkillsSection";
import CreativeDivider from "@/components/Portfolio/CreativeDivider";
import ExperienceSection from "@/components/Portfolio/ExperienceSection";
import PortfolioSection from "@/components/Portfolio/PortfolioSection";
import ContactSection from "@/components/Portfolio/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <QuickNavRow />
        <SkillsSection />
        <CreativeDivider />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;