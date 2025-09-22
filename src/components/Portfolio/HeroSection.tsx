import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { UpworkIcon } from "@/components/ui/upwork-icon";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ansarmehmood",
      label: "LinkedIn"
    },
    {
      icon: UpworkIcon,
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
      
      {/* Content Container - Creative Left Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 flex items-center min-h-screen">
        <div className="flex items-center justify-between w-full max-w-6xl pt-20">
          {/* Main Content */}
          <div className="flex-1 max-w-2xl">
            {/* Main Headline - Elegant Typography */}
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="block text-foreground drop-shadow-2xl animate-fade-in-up tracking-tight">Ansar Mehmood</span>
              </h1>
            </div>
            
            {/* Subheading with Creative Offset */}
            <div className="mb-10 ml-4 lg:ml-8">
              <p className="text-2xl lg:text-3xl text-foreground/90 font-light leading-relaxed drop-shadow-lg animate-fade-in-up animate-stagger-1">
                Full Stack Developer<br />
                <span className="text-primary">& Software Engineer</span>
              </p>
            </div>
            
            {/* CTA Button - Positioned with Visual Interest */}
            <div className="ml-2 animate-fade-in-up animate-stagger-2">
              <Button 
                size="lg" 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-primary hover:scale-110 text-white shadow-glow hover:shadow-xl transition-all duration-500 font-bold text-lg px-12 py-4 rounded-2xl"
              >
                Let's Connect
              </Button>
            </div>
          </div>

          {/* Floating Social Media Panel - Right Side */}
          <div className="hidden lg:flex flex-col items-center justify-center ml-12">
            <div className="flex flex-col space-y-4 animate-fade-in-up animate-stagger-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-2xl bg-background/10 backdrop-blur-md border border-foreground/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: `translateX(${index % 2 === 0 ? '0' : '8px'})` 
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 text-foreground group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
            
            {/* Decorative Line */}
            <div className="w-px h-16 bg-gradient-to-b from-foreground/20 to-transparent mt-6"></div>
          </div>

          {/* Mobile Social Icons - Bottom Positioned */}
          <div className="lg:hidden fixed bottom-8 left-8 right-8 flex justify-center">
            <div className="flex items-center space-x-4 bg-background/10 backdrop-blur-md rounded-2xl p-3 border border-foreground/10">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 rounded-xl bg-background/20 backdrop-blur-sm border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-foreground group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;