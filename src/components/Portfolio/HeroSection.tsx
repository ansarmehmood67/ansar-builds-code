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
      
      {/* Content Container - Creative Left Layout Only */}
      <div className="relative z-10 w-full pl-8 lg:pl-16 pr-4 flex items-center min-h-screen">
        <div className="pt-20 max-w-2xl w-full">
          {/* Main Content Stack */}
          <div className="space-y-8">
            {/* Main Headline - Elegant Typography */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                <span className="block text-foreground drop-shadow-2xl animate-fade-in-up tracking-tight">Ansar Mehmood</span>
              </h1>
            </div>
            
            {/* Subheading with Creative Offset */}
            <div className="ml-4 lg:ml-8">
              <p className="text-xl lg:text-2xl text-foreground/90 font-light leading-relaxed drop-shadow-lg animate-fade-in-up animate-stagger-1">
                Full Stack Developer<br />
                <span className="text-primary">& Software Engineer</span>
              </p>
            </div>
            
            {/* CTA Button */}
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

            {/* Creative Social Media Layout - Left Side Only */}
            <div className="ml-4 mt-12 animate-fade-in-up animate-stagger-3">
              {/* Desktop: Floating Creative Panel */}
              <div className="hidden lg:block">
                <div className="bg-background/10 backdrop-blur-md rounded-3xl p-6 border border-foreground/10 shadow-lg max-w-xs">
                  <p className="text-sm text-foreground/70 mb-4 font-medium">Connect with me</p>
                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.slice(0, 3).map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-12 h-12 rounded-xl bg-background/20 backdrop-blur-sm border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5 text-foreground group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-3 justify-center">
                    {socialLinks.slice(3).map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-12 h-12 rounded-xl bg-background/20 backdrop-blur-sm border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                        style={{ animationDelay: `${(index + 3) * 100}ms` }}
                        aria-label={social.label}
                      >
                        <social.icon className="h-5 w-5 text-foreground group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile: Bottom Fixed Panel */}
              <div className="lg:hidden fixed bottom-8 left-8 right-8 flex justify-center">
                <div className="flex items-center space-x-3 bg-background/10 backdrop-blur-md rounded-2xl p-3 border border-foreground/10">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-11 h-11 rounded-xl bg-background/20 backdrop-blur-sm border border-foreground/20 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
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