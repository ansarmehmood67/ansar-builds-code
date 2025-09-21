import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const CreativeNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [8, 20]);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "/work", icon: "✦" },
    { name: "Services", href: "/services", icon: "◆" },
    { name: "About", href: "/about", icon: "●" },
    { name: "Contact", href: "/contact", icon: "▲" }
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{ 
        opacity: navOpacity,
        backdropFilter: `blur(${navBlur}px)`,
      }}
    >
      <nav className={`
        glass-card border-0 border-b border-glass-border
        transition-all duration-500 ease-out
        ${isScrolled ? 'py-3' : 'py-6'}
      `}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* Logo with Kinetic Typography */}
            <Link to="/" className="group">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative">
                  <span className="kinetic-text text-2xl font-bold">
                    Ansar
                  </span>
                  <motion.div
                    className="absolute -top-1 -right-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4 text-electric" />
                  </motion.div>
                </div>
                <span className="text-cyber font-light">.dev</span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className="group relative flex items-center space-x-2 px-4 py-2 rounded-xl
                             transition-all duration-300 hover:bg-glass-bg"
                  >
                    <span className="text-sm opacity-50 group-hover:opacity-100 
                                   transition-opacity duration-300">
                      {link.icon}
                    </span>
                    <span className={`
                      font-medium transition-all duration-300
                      ${location.pathname === link.href 
                        ? 'text-brand-blue' 
                        : 'text-foreground hover:text-brand-gold'
                      }
                    `}>
                      {link.name}
                    </span>
                    
                    {/* Magnetic underline effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-brand-gradient"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: location.pathname === link.href ? "100%" : 0 
                      }}
                      whileHover={{ width: "100%" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="relative overflow-hidden bg-brand-gradient hover:bg-hero-gradient 
                             text-white shadow-brand hover:shadow-gold transition-all duration-500
                             border border-glass-border"
                  >
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 2 }}
                    >
                      <span>Start Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                    
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-mesh-gradient opacity-0"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl glass hover:bg-glass-bg transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-foreground" />
                ) : (
                  <Menu className="w-6 h-6 text-foreground" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{
              height: isMobileMenuOpen ? "auto" : 0,
              opacity: isMobileMenuOpen ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="pt-6 pb-4 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0, 
                    x: isMobileMenuOpen ? 0 : -20 
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-xl
                             glass hover:bg-glass-bg transition-all duration-300"
                  >
                    <span className="text-brand-blue">{link.icon}</span>
                    <span className="font-medium text-foreground">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0, 
                  y: isMobileMenuOpen ? 0 : 20 
                }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-brand-gradient text-white shadow-brand">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Start Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
};

export default CreativeNavigation;