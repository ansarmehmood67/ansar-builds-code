import CreativeNavigation from "@/components/Portfolio/CreativeNavigation";
import Footer from "@/components/Portfolio/Footer";
import CreativeHero from "@/components/Portfolio/CreativeHero";
import CreativeServices from "@/components/Portfolio/CreativeServices";
import CreativeProjects from "@/components/Portfolio/CreativeProjects";
import CreativeMetrics from "@/components/Portfolio/CreativeMetrics";
import TechStackSection from "@/components/Portfolio/TechStackSection";
import CreativeCTA from "@/components/Portfolio/CreativeCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CreativeNavigation />
      <main>
        <CreativeHero />
        <CreativeServices />
        <CreativeProjects />
        <CreativeMetrics />
        <TechStackSection />
        <CreativeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;