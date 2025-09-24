import { Phone, Mail, Globe, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: "Home", section: "home" },
    { label: "About", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Experience", section: "experience" },
    { label: "Portfolio", section: "portfolio" },
    { label: "Contact", section: "contact" }
  ];

  const contactLinks = [
    { icon: Phone, href: "tel:+923227555459", display: "+92 322 755 5459" },
    { icon: Mail, href: "mailto:ansarmehmoodpm@gmail.com", display: "ansarmehmoodpm@gmail.com" },
    { icon: Globe, href: "https://ansarmehmood.dev", display: "ansarmehmood.dev" },
    { icon: Linkedin, href: "https://linkedin.com/in/ansarmehmood67", display: "LinkedIn" }
  ];

  return (
    <footer className="py-8 border-t border-border/50 theme-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          {contactLinks.map((contact) => (
            <a
              key={contact.display}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <contact.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span>{contact.display}</span>
            </a>
          ))}
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.section)}
              className="text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;