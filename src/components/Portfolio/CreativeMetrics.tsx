import { useRef, useState, useEffect } from "react";
import { TrendingUp, Users, Award, Clock, Target, Zap } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";

const CreativeMetrics = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  const metrics = [
    {
      icon: Users,
      value: 50,
      suffix: "+",
      label: "Projects Delivered",
      description: "Successful projects across various industries",
      color: "text-brand-blue",
      gradient: "from-brand-blue/20 to-brand-slate/10"
    },
    {
      icon: TrendingUp,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Exceptional quality and service delivery",
      color: "text-brand-gold",
      gradient: "from-brand-gold/20 to-brand-charcoal/10"
    },
    {
      icon: Clock,
      value: 24,
      suffix: "h",
      label: "Response Time",
      description: "Quick communication and support",
      color: "text-brand-steel",
      gradient: "from-brand-steel/20 to-brand-blue/10"
    },
    {
      icon: Award,
      value: 5,
      suffix: "+",
      label: "Years Experience",
      description: "Proven expertise in web development",
      color: "text-brand-blue",
      gradient: "from-brand-blue/20 to-brand-gold/10"
    }
  ];

  const achievements = [
    {
      icon: Target,
      title: "Performance First",
      description: "Every project optimized for speed, SEO, and user experience with measurable results."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description: "Using the latest technologies and best practices to build future-proof solutions."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "Working closely with clients to understand goals and deliver beyond expectations."
    }
  ];

  // Counter animation hook
  const useCounter = (end: number, duration: number = 2) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isInView) return;
      
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(end * easeOut));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration, isInView]);
    
    return count;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section ref={containerRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20" />
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 left-1/3 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: useTransform(y, (value) => -value * 0.8) }}
        className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl"
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
            <span className="w-2 h-2 bg-brand-steel rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Impact</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="kinetic-text">Results That Matter</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Delivering measurable value through technical excellence, 
            innovative solutions, and exceptional client partnerships.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 lg:mb-20"
        >
          {metrics.map((metric, index) => {
            const animatedValue = useCounter(metric.value, 2 + index * 0.2);
            
            return (
              <motion.div
                key={metric.label}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 30 }
                }}
                className="group"
              >
                <Card className={`
                  h-full p-8 glass-card hover:bg-glass-bg border-glass-border
                  hover:shadow-brand transition-all duration-500 text-center
                  bg-gradient-to-br ${metric.gradient}
                `}>
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center
                                  group-hover:scale-110 transition-transform duration-300
                                  shadow-soft group-hover:shadow-brand">
                      <metric.icon className={`w-8 h-8 ${metric.color}`} />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-4">
                    <div className="text-4xl lg:text-5xl font-bold kinetic-text mb-2">
                      {animatedValue}{metric.suffix}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {metric.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {metric.description}
                  </p>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-brand-gradient opacity-0 rounded-xl"
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 30 }
              }}
              className="group"
            >
              <Card className="h-full p-8 glass-card hover:bg-glass-bg border-glass-border
                            hover:shadow-soft transition-all duration-500 text-center">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-gold/20 
                                flex items-center justify-center group-hover:scale-110 
                                transition-transform duration-300">
                    <achievement.icon className="w-6 h-6 text-brand-blue" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-blue
                             transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeMetrics;