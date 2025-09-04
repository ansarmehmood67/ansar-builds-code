import { Github, Linkedin, Mail, Globe, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ansarmehmood67",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ansarmehmood67",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:ansarmemhood.dev@gmail.com",
      label: "Email"
    },
    {
      icon: Globe,
      href: "https://ansarmehmood.com",
      label: "Website"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card-gradient border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent">
              Ansar Mehmood
            </h3>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Software Engineer passionate about creating modern web applications 
              and AI-driven solutions that make a real impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/50 hover:bg-primary/10 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group"
                    aria-label={link.label}
                  >
                    <IconComponent className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Mandi Usman Wala, Kasur</p>
              <p>Pakistan</p>
              <a 
                href="mailto:ansarmemhood.dev@gmail.com"
                className="block hover:text-primary transition-colors"
              >
                ansarmemhood.dev@gmail.com
              </a>
              <a 
                href="tel:+923227555459"
                className="block hover:text-primary transition-colors"
              >
                +92 3227555459
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Ansar Mehmood. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-400 fill-current" /> in Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;