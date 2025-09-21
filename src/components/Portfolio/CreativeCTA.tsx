import { useRef } from "react";
import { ArrowRight, Mail, Calendar, MessageCircle } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CreativeCTA = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Me",
      description: "Quick response within 24 hours",
      action: "Send Email",
      href: "mailto:contact@example.com"
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      description: "Book a free consultation",
      action: "Book Meeting",
      href: "/contact"
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      description: "Discuss your project ideas",
      action: "Start Chat",
      href: "/contact"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(y, (value) => -value) }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-gold/10 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="glass-card p-12 lg:p-16 rounded-3xl border-glass-border shadow-elegant
                        bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl
                        max-w-4xl mx-auto">
            
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="kinetic-text block">Ready to Build</span>
                <span className="text-foreground">Something Amazing?</span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Let's transform your vision into a powerful digital experience 
                that drives growth and exceeds expectations.
              </p>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
            >
              {[
                { number: "50+", label: "Projects" },
                { number: "98%", label: "Satisfaction" },
                { number: "24h", label: "Response" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center group cursor-pointer"
                >
                  <div className="kinetic-text text-3xl lg:text-4xl font-bold mb-2 
                                group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <Link to="/contact">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group inline-block"
                >
                  <Button 
                    size="lg" 
                    className="relative overflow-hidden bg-brand-gradient hover:bg-hero-gradient 
                             text-white shadow-brand hover:shadow-gold transition-all duration-500
                             text-xl px-12 py-8 rounded-2xl border border-glass-border"
                  >
                    <motion.div 
                      className="flex items-center space-x-3"
                      whileHover={{ x: 2 }}
                    >
                      <span className="font-semibold">Start Your Project</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                    
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-mesh-gradient opacity-0 rounded-2xl"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-muted-foreground text-lg"
            >
              Free consultation • No commitment required
            </motion.p>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className="group"
            >
              <Link 
                to={method.href}
                className="block h-full glass-card p-8 rounded-2xl border-glass-border
                         hover:bg-glass-bg hover:shadow-brand transition-all duration-500
                         text-center cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 
                                flex items-center justify-center group-hover:scale-110 
                                transition-transform duration-300 shadow-soft">
                    <method.icon className="w-8 h-8 text-brand-blue" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand-blue
                             transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {method.description}
                </p>
                
                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full glass-card border-glass-border hover:bg-brand-blue/10 
                           hover:border-brand-blue/30 transition-all duration-300"
                >
                  {method.action}
                </Button>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-brand-gradient opacity-0 rounded-2xl"
                  whileHover={{ opacity: 0.02 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeCTA;