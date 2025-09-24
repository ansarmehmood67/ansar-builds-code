import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { UpworkIcon } from "@/components/ui/upwork-icon";
import heroBg from "@/assets/new-hero-bg.png";

const HeroSection = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ansarmehmood67",
      label: "LinkedIn"
    },
    {
      icon: UpworkIcon,
      href: "https://www.upwork.com/freelancers/~0110e6741c38776712", 
      label: "Upwork"
    },
    {
      icon: Github,
      href: "https://github.com/ansarmehmood67",
      label: "GitHub"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/ansar_mehmood67/",
      label: "Instagram"
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
      aria-label="Ansar Mehmood - Software Engineer"
    >
      
      {/* Content Container - Responsive Layout */}
      <div className="relative z-10 w-full px-4 sm:pl-8 lg:pl-16 pr-4 flex items-center justify-center sm:justify-start min-h-screen">
        <div className="pt-20 max-w-3xl w-full">
          {/* Mobile Glass Container - Desktop Transparent */}
          <div className="p-6 sm:p-0 glass-mobile sm:backdrop-blur-none sm:bg-transparent sm:border-none sm:rounded-none sm:shadow-none">
            {/* Main Content Stack */}
            <div className="space-y-6 sm:space-y-8 text-center sm:text-left">
              {/* Main Headline - Improved Typography */}
              <div className="mb-3 sm:mb-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">
                  <span className="block text-foreground animate-heading tracking-tight">Ansar Mehmood</span>
                </h1>
              </div>
              
              {/* Enhanced Role with Better Hierarchy */}
              <div className="ml-0 sm:ml-4 lg:ml-8 mb-4 sm:mb-6">
                <p className="text-xl sm:text-3xl lg:text-5xl font-semibold leading-relaxed animate-text animate-delay-200">
                  <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Software engineer and full stack developer</span>
                </p>
              </div>
              
              {/* Enhanced CTA Button */}
              <div className="ml-0 sm:ml-2 animate-button animate-delay-400 flex justify-center sm:justify-start">
                  <Button 
                  size="lg" 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group relative bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white shadow-glow hover:shadow-xl hover:scale-105 transition-all duration-500 font-bold text-lg px-12 py-4 rounded-2xl overflow-hidden"
                >
                  <span className="relative z-10">Work With Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>

              {/* Responsive Social Icons */}
              <div className="ml-0 sm:ml-4 mt-6 sm:mt-8">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <p className="text-sm sm:text-base text-foreground/60 font-medium animate-text animate-delay-500">Connect with me</p>
                  <div className="flex items-center justify-center sm:justify-start space-x-3 sm:space-x-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`social-link group w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 animate-delay-${Math.min((index + 1) * 100, 500)}`}
                        aria-label={social.label}
                      >
                        <social.icon className="h-4 w-4 sm:h-5 sm:w-5 text-foreground/70 group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;