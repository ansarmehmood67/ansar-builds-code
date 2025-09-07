import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen relative flex items-center justify-start"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Content Container - Left side only */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Main Headline - 2 lines as requested */}
          <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="block text-foreground">Build. Ship.</span>
            <span className="block bg-text-gradient bg-clip-text text-transparent">Scale.</span>
          </h1>
          
          {/* 1-line subcopy */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-xl">
            I help businesses grow with modern web apps, AI automation, and seamless user experiences.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="group bg-hero-gradient hover:bg-primary-hover text-white shadow-glow hover:shadow-xl transition-all duration-300">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/50 backdrop-blur-sm text-foreground">
                See work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;