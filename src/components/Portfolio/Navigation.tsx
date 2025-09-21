import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    { label: "About", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Experience", section: "experience" },
    { label: "Portfolio", section: "portfolio" },
    { label: "Contact", section: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-background/20 backdrop-blur-xl border-b border-primary/20 shadow-glow" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="group flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-hero-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent">
              Alex.dev
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.section)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 relative group font-medium text-lg"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-1 bg-hero-gradient rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-hero-gradient hover:scale-105 text-white shadow-glow hover:shadow-xl transition-all duration-300 font-semibold px-8 py-3 text-lg rounded-2xl"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-glow">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.section);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left transition-all duration-300 py-3 text-foreground hover:text-primary text-lg font-medium"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button 
                  size="lg"
                  onClick={() => {
                    scrollToSection('contact');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-hero-gradient hover:scale-105 text-white shadow-glow font-semibold py-4 text-lg rounded-2xl"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;