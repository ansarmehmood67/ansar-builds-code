import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Image on the left */}
        <div className="order-2 lg:order-1 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant">
            <img 
              src={heroImage} 
              alt="Ansar Mehmood - Software Engineer"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-hero-gradient rounded-full shadow-glow animate-float" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/30 rounded-full shadow-glow animate-float" style={{ animationDelay: '2s' }} />
        </div>

        {/* Content on the right */}
        <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-card rounded-full border border-border/50 backdrop-blur-sm">
              <span className="text-sm text-muted-foreground">👋 Hello, I'm</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-text-gradient bg-clip-text text-transparent animate-gradient-shift bg-300%">
                Ansar
              </span>
              <br />
              <span className="text-foreground">Mehmood</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary font-semibold animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Software Engineer & Full Stack Developer
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Passionate about building modern web applications with React, TypeScript, and Django. 
              I create scalable solutions that drive real business results and deliver exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="group bg-hero-gradient hover:bg-hero-gradient/90 text-white shadow-glow hover:shadow-xl transition-all duration-300">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/50 backdrop-blur-sm">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a 
              href="mailto:ansarmemhood.dev@gmail.com" 
              className="p-3 bg-card hover:bg-card/80 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://linkedin.com/in/ansarmehmood67" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-card/80 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://github.com/ansarmehmood67" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card hover:bg-card/80 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;