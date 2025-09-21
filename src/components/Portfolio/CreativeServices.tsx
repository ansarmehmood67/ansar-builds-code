import { useRef } from "react";
import { Code, Zap, Palette, Brain, Rocket, Users } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CreativeServices = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "End-to-end web applications with modern technologies, scalable architecture, and exceptional performance.",
      features: ["React/Next.js", "Node.js/Python", "Database Design", "API Integration"],
      gradient: "bg-gradient-to-br from-brand-blue/20 to-brand-slate/20",
      iconColor: "text-brand-blue",
      href: "/services"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that converts visitors into customers with intuitive interfaces and compelling experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      gradient: "bg-gradient-to-br from-brand-gold/20 to-brand-charcoal/20",
      iconColor: "text-brand-gold",
      href: "/services"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Intelligent automation and AI-powered features that streamline workflows and enhance user experiences.",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Automation"],
      gradient: "bg-gradient-to-br from-brand-steel/20 to-brand-blue/20",
      iconColor: "text-brand-steel",
      href: "/services"
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Lightning-fast websites and applications that rank higher and convert better through technical excellence.",
      features: ["Core Web Vitals", "SEO Optimization", "Speed Enhancement", "Mobile Performance"],
      gradient: "bg-gradient-to-br from-brand-blue/20 to-brand-gold/20",
      iconColor: "text-brand-blue",
      href: "/services"
    },
    {
      icon: Zap,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing, inventory management, and conversion optimization.",
      features: ["Shopify/WooCommerce", "Payment Integration", "Inventory Systems", "Analytics"],
      gradient: "bg-gradient-to-br from-brand-gold/20 to-brand-slate/20",
      iconColor: "text-brand-gold",
      href: "/services"
    },
    {
      icon: Users,
      title: "Consulting & Strategy",
      description: "Technical leadership and strategic guidance to transform your digital vision into successful reality.",
      features: ["Technical Architecture", "Team Leadership", "Project Management", "Growth Strategy"],
      gradient: "bg-gradient-to-br from-brand-slate/20 to-brand-steel/20",
      iconColor: "text-brand-slate",
      href: "/services"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section ref={containerRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(y, (value) => -value) }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-blue rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="kinetic-text">What I Do</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, I deliver comprehensive digital solutions 
            that drive growth and create exceptional user experiences.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className="group"
            >
              <Card className={`
                h-full p-8 glass-card hover:bg-glass-bg border-glass-border
                hover:shadow-brand transition-all duration-500 cursor-pointer
                ${service.gradient}
              `}>
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center
                                group-hover:scale-110 transition-transform duration-300
                                shadow-soft group-hover:shadow-brand">
                    <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-brand-blue
                               transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.8 + index * 0.1 + featureIndex * 0.1 
                        }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-brand-gradient opacity-0 rounded-xl"
                  whileHover={{ opacity: 0.05 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="glass-card p-8 lg:p-12 rounded-3xl border-glass-border shadow-elegant
                        bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 kinetic-text">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help transform your ideas into exceptional digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg" 
                    className="bg-brand-gradient hover:bg-hero-gradient text-white
                             shadow-brand hover:shadow-gold transition-all duration-500
                             px-8 py-6 text-lg rounded-xl"
                  >
                    Get Started
                  </Button>
                </motion.div>
              </Link>
              
              <Link to="/services">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="glass-card border-glass-border hover:bg-glass-bg
                             px-8 py-6 text-lg rounded-xl"
                  >
                    View All Services
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeServices;