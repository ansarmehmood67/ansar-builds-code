import { useState, useRef } from "react";
import { ExternalLink, Github, Eye, ArrowUpRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const CreativeProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full-Stack Development",
      description: "Modern e-commerce solution with advanced features, real-time inventory, and seamless checkout experience.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      metrics: { users: "10K+", performance: "98%", conversion: "4.2%" },
      status: "Live",
      featured: true,
      gradient: "from-brand-blue/20 to-brand-gold/20",
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "AI-Powered Analytics",
      category: "AI Integration",
      description: "Intelligent dashboard that provides actionable insights through machine learning and data visualization.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Python", "TensorFlow", "MongoDB"],
      metrics: { accuracy: "94%", users: "5K+", savings: "60%" },
      status: "Live",
      featured: true,
      gradient: "from-brand-steel/20 to-brand-blue/20",
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Creative Agency Portfolio",
      category: "Design & Development",
      description: "Award-winning portfolio website with interactive animations and immersive user experience.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Three.js", "GSAP", "Framer Motion"],
      metrics: { bounce: "15%", time: "4.2min", awards: "3" },
      status: "Live",
      featured: true,
      gradient: "from-brand-gold/20 to-brand-slate/20",
      github: "#",
      live: "#"
    }
  ];

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const projectVariants = {
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
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section ref={containerRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-subtle-gradient" />
      <motion.div 
        style={{ y }}
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl"
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
            <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Portfolio</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="kinetic-text">Featured Projects</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing innovative solutions that demonstrate technical expertise, 
            creative problem-solving, and measurable business impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8 lg:space-y-12"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`
                grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center
                ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}
              `}
            >
              {/* Project Image */}
              <motion.div 
                className={`
                  relative group cursor-pointer overflow-hidden rounded-3xl
                  ${index % 2 === 1 ? 'lg:col-start-2' : ''}
                `}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-card to-muted rounded-3xl
                              shadow-elegant group-hover:shadow-brand transition-all duration-500">
                  <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${project.gradient} 
                    rounded-3xl transition-all duration-500
                  `} />
                  
                  {/* Project Preview Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0 
                    }}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm 
                             flex items-center justify-center space-x-4 rounded-3xl"
                  >
                    <Button
                      size="sm"
                      className="bg-brand-gradient text-white shadow-brand"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="glass-card border-glass-border"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </motion.div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </motion.div>

              {/* Project Content */}
              <motion.div 
                className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Category & Title */}
                <div>
                  <span className="text-brand-gold font-medium text-lg">
                    {project.category}
                  </span>
                  <h3 className="text-3xl lg:text-4xl font-bold mt-2 mb-4 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline" 
                      className="glass-card border-glass-border text-foreground
                               hover:bg-brand-blue/10 hover:border-brand-blue/30
                               transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 py-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold kinetic-text">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-4">
                  <Button className="bg-brand-gradient text-white shadow-brand hover:shadow-gold">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button 
                    variant="outline" 
                    className="glass-card border-glass-border hover:bg-glass-bg"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center mt-16 lg:mt-20"
        >
          <Link to="/work">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button 
                size="lg"
                variant="outline"
                className="group glass-card border-glass-border hover:bg-glass-bg
                         px-8 py-6 text-lg rounded-xl shadow-soft hover:shadow-brand
                         transition-all duration-500"
              >
                <span>View All Projects</span>
                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 
                                       group-hover:-translate-y-1 transition-transform" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeProjects;