import { motion } from "framer-motion";
import Navigation from "@/components/Portfolio/Navigation";
import Footer from "@/components/Portfolio/Footer";
import HeroSection from "@/components/Portfolio/HeroSection";
import ModernAboutSection from "@/components/Portfolio/ModernAboutSection";
import CompactServicesSection from "@/components/Portfolio/CompactServicesSection";
import ModernSkillsSection from "@/components/Portfolio/ModernSkillsSection";
import ModernExperienceSection from "@/components/Portfolio/ModernExperienceSection";
import ModernPortfolioSection from "@/components/Portfolio/ModernPortfolioSection";
import ModernContactSection from "@/components/Portfolio/ModernContactSection";
import SectionDivider from "@/components/Portfolio/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <HeroSection />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1] }}
        >
          <ModernAboutSection />
        </motion.div>
        
        <SectionDivider />
        
        <motion.div
          initial={{ opacity: 0, rotateY: 45 }}
          whileInView={{ opacity: 1, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        >
          <CompactServicesSection />
        </motion.div>
        
        <SectionDivider />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.68, -0.55, 0.265, 1.55] }}
        >
          <ModernSkillsSection />
        </motion.div>
        
        <SectionDivider />
        
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <ModernExperienceSection />
        </motion.div>
        
        <SectionDivider />
        
        <motion.div
          initial={{ opacity: 0, y: 80, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ModernPortfolioSection />
        </motion.div>
        
        <SectionDivider />
        
        <motion.div
          initial={{ opacity: 0, scaleY: 0.6 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
        >
          <ModernContactSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;