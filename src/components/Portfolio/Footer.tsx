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

  return (
    <footer className="py-8 border-t border-border/50 theme-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold bg-text-gradient bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Ansar.dev
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
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

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2024 Ansar Mehmood. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;