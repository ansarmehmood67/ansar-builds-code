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
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle overlay for text contrast */}
      <div className="absolute inset-0 bg-background/10" />
      
      {/* Content Container - Left side only */}
      <div className="relative z-10 max-w-7xl px-6 lg:px-12">
        <div className="max-w-2xl">
          {/* Main Headline - Personal and portfolio focused */}
          <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6 drop-shadow-lg">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block text-primary">Alex</span>
          </h1>
          
          {/* 1-line subcopy */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-xl drop-shadow-md">
            Full-Stack Developer specializing in modern web apps, AI automation, and seamless user experiences.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-hero-gradient hover:bg-primary-hover text-white shadow-glow hover:shadow-xl transition-all duration-300"
            >
              Start a project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-border/50 hover:border-primary/50 backdrop-blur-sm text-foreground"
            >
              See work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;