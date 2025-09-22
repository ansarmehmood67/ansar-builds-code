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
      {/* Dynamic animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-gradient-shift" />
      
      {/* Subtle glow behind content */}
      <div className="absolute top-1/4 left-8 lg:left-16 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
      
      {/* Black fade at bottom only */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* Content Container - Creative Left Layout Only */}
      <div className="relative z-10 w-full pl-8 lg:pl-16 pr-4 flex items-center min-h-screen">
        <div className="pt-20 max-w-2xl w-full">
          {/* Main Content Stack */}
          <div className="space-y-8">
            {/* Main Headline - Improved Typography */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                <span className="block text-foreground drop-shadow-2xl animate-fade-in-up tracking-tight">Ansar Mehmood</span>
              </h1>
            </div>
            
            {/* Enhanced Role with Better Hierarchy */}
            <div className="ml-4 lg:ml-8">
              <p className="text-2xl lg:text-4xl font-semibold leading-relaxed drop-shadow-lg animate-fade-in-up animate-stagger-1">
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">Full Stack Developer</span><br />
                <span className="bg-gradient-to-r from-primary via-primary to-primary-glow bg-clip-text text-transparent font-bold">& Software Engineer</span>
              </p>
            </div>
            
            {/* Enhanced CTA Button */}
            <div className="ml-2 animate-fade-in-up animate-stagger-2">
              <Button 
                size="lg" 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white shadow-glow hover:shadow-xl hover:scale-105 transition-all duration-500 font-bold text-lg px-12 py-4 rounded-2xl overflow-hidden"
              >
                <span className="relative z-10">Hire Me Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Elegant Social Icons - Compact Layout */}
            <div className="ml-4 mt-8 animate-fade-in-up animate-stagger-3">
              <div className="flex items-center space-x-6">
                <p className="text-sm text-foreground/60 font-medium">Connect with me</p>
                <div className="flex items-center space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-9 h-9 rounded-lg bg-background/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 hover:-translate-y-0.5 transition-all duration-300"
                      style={{ animationDelay: `${index * 50}ms` }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 text-foreground/70 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile: Bottom Fixed Panel */}
              <div className="lg:hidden fixed bottom-6 left-6 right-6 flex justify-center">
                <div className="flex items-center space-x-3 bg-background/20 backdrop-blur-md rounded-2xl p-3 border border-foreground/10 shadow-lg">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 rounded-lg bg-background/20 backdrop-blur-sm border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4 text-foreground group-hover:text-white transition-colors" />
                    </a>
                  ))}
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