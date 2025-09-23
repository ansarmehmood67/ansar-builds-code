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

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Assumes resume.pdf is in public folder
    link.download = 'Ansar_Mehmood_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <>
      {/* Floating Vertical Sidebar */}
      <nav className="fixed top-6 left-6 z-50 hidden lg:flex flex-col items-center space-y-8">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="group flex flex-col items-center space-y-2 bg-background/10 backdrop-blur-xl border border-primary/20 rounded-2xl p-4 shadow-glow hover:shadow-xl transition-all duration-300"
        >
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <span className="text-sm font-bold text-primary whitespace-nowrap">
            Ansar.dev
          </span>
        </button>

        {/* Vertical Navigation */}
        <div className="bg-background/10 backdrop-blur-xl border border-primary/20 rounded-2xl p-4 shadow-glow">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.section)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 relative group font-medium text-sm text-center whitespace-nowrap py-2 px-3 rounded-lg hover:bg-primary/10"
              >
                {item.label}
                <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-0 h-6 bg-primary rounded-full transition-all duration-300 group-hover:w-1" />
              </button>
            ))}
          </div>
        </div>

        {/* Download Resume Button */}
        <Button 
          size="sm"
          onClick={downloadResume}
          className="bg-primary hover:scale-105 text-white shadow-glow hover:shadow-xl transition-all duration-300 font-semibold px-4 py-2 text-sm rounded-xl whitespace-nowrap"
        >
          Download Resume
        </Button>
      </nav>

      {/* Mobile Navigation - Top Bar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div className="bg-background/20 backdrop-blur-xl border-b border-primary/20 shadow-glow">
          <div className="flex items-center justify-between h-16 px-6">
            {/* Mobile Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="group flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-lg font-bold text-primary">
                Ansar.dev
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-primary" />
              ) : (
                <Menu className="h-5 w-5 text-primary" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-glow">
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      scrollToSection(item.section);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left transition-all duration-300 py-2 text-foreground hover:text-primary text-base font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4">
                  <Button 
                    size="sm"
                    onClick={() => {
                      downloadResume();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-primary hover:scale-105 text-white shadow-glow font-semibold py-3 text-base rounded-xl"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;