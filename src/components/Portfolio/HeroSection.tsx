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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex items-center min-h-screen">
        <div className="max-w-3xl pt-20">
          {/* Main Headline - Personal and portfolio focused */}
          <div className="mb-8">
            <h1 className="text-7xl lg:text-9xl font-black leading-none mb-4">
              <span className="block text-foreground drop-shadow-2xl animate-fade-in-up">Hi, I'm</span>
              <span className="block bg-hero-gradient bg-clip-text text-transparent drop-shadow-2xl animate-fade-in-up animate-stagger-1">Alex</span>
            </h1>
            <div className="h-2 w-32 bg-hero-gradient rounded-full animate-fade-in-up animate-stagger-2" />
          </div>
          
          {/* Enhanced subcopy */}
          <p className="text-2xl lg:text-3xl text-foreground/90 mb-4 font-light leading-relaxed drop-shadow-lg animate-fade-in-up animate-stagger-3 max-w-2xl">
            Full-Stack Developer crafting
          </p>
          <p className="text-xl lg:text-2xl text-primary font-semibold mb-12 drop-shadow-lg animate-fade-in-up animate-stagger-4">
            exceptional digital experiences with AI & modern web technologies
          </p>
          
          {/* Enhanced CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up animate-stagger-5">
            <Button 
              size="lg" 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-hero-gradient hover:scale-110 text-white shadow-glow hover:shadow-xl transition-all duration-500 font-bold text-lg px-12 py-4 rounded-2xl"
            >
              Let's Build Something Amazing
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => {
                const element = document.getElementById('portfolio');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-foreground/30 hover:border-primary/50 backdrop-blur-md text-foreground hover:text-primary hover:scale-105 transition-all duration-500 font-semibold text-lg px-8 py-4 rounded-2xl bg-background/10"
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;