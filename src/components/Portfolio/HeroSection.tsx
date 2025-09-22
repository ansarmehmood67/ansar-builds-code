import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Facebook, ExternalLink } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ansarmehmood",
      label: "LinkedIn"
    },
    {
      icon: ExternalLink,
      href: "https://upwork.com/freelancers/ansarmehmood", 
      label: "Upwork"
    },
    {
      icon: Github,
      href: "https://github.com/ansarmehmood",
      label: "GitHub"
    },
    {
      icon: Instagram,
      href: "https://instagram.com/ansarmehmood",
      label: "Instagram"
    },
    {
      icon: Facebook,
      href: "https://facebook.com/ansarmehmood",
      label: "Facebook"
    }
  ];

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
      
      {/* Black fade at bottom only */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* Content Container - Left side only */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex items-center min-h-screen">
        <div className="max-w-3xl pt-20">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-7xl lg:text-9xl font-black leading-none mb-4">
              <span className="block text-foreground drop-shadow-2xl animate-fade-in-up">Hi, I'm</span>
              <span className="block text-primary drop-shadow-2xl animate-fade-in-up animate-stagger-1">Ansar Mehmood</span>
            </h1>
          </div>
          
          {/* Subheading */}
          <p className="text-3xl lg:text-4xl text-foreground/90 mb-12 font-light leading-relaxed drop-shadow-lg animate-fade-in-up animate-stagger-2">
            Full Stack Developer and Software Engineer
          </p>
          
          {/* CTA */}
          <div className="mb-12 animate-fade-in-up animate-stagger-3">
            <Button 
              size="lg" 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-primary hover:scale-110 text-white shadow-glow hover:shadow-xl transition-all duration-500 font-bold text-lg px-12 py-4 rounded-2xl"
            >
              Contact
            </Button>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-6 animate-fade-in-up animate-stagger-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-foreground group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;