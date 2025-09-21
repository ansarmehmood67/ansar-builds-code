import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import * as THREE from "three";

const CreativeHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isInView = useInView(containerRef);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // 3D Background Effect
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas, 
      alpha: true, 
      antialias: true 
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create floating geometric shapes
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.OctahedronGeometry(1, 0),
      new THREE.TetrahedronGeometry(1, 0),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x8B5CF6, 
        transparent: true, 
        opacity: 0.6,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x06B6D4, 
        transparent: true, 
        opacity: 0.4,
        wireframe: true 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x10B981, 
        transparent: true, 
        opacity: 0.5,
        wireframe: true 
      }),
    ];

    const meshes: THREE.Mesh[] = [];
    
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      scene.add(mesh);
      meshes.push(mesh);
    }

    camera.position.z = 10;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += 0.005 + index * 0.001;
        mesh.rotation.y += 0.003 + index * 0.001;
        mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const letterVariants = {
    initial: { opacity: 0, y: 50, rotateX: -90 },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
    },
  };

  const createTextAnimation = (text: string, className: string = "") => {
    return text.split("").map((letter, i) => (
      <motion.span
        key={i}
        variants={letterVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{
          duration: 0.8,
          delay: i * 0.1,
          ease: [0.215, 0.61, 0.355, 1] as const,
        }}
        className={`inline-block ${className}`}
        style={{ transformOrigin: "bottom" }}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ));
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mesh-gradient"
    >
      {/* 3D Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-30"
      />
      
      {/* Animated Background Layers */}
      <div className="absolute inset-0 bg-glow-gradient animate-pulse-glow" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-electric/10 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-cyber/10 blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          
          {/* Pre-headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full
                          shadow-glow border border-glass-border">
              <Sparkles className="w-4 h-4 text-electric animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Award-Winning Developer
              </span>
              <Zap className="w-4 h-4 text-cyber animate-bounce" />
            </div>
          </motion.div>

          {/* Main Headline with Kinetic Typography */}
          <div className="mb-8 overflow-hidden">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
              <div className="mb-4">
                {createTextAnimation("Creative", "kinetic-text")}
              </div>
              <div className="mb-4">
                {createTextAnimation("Digital", "text-white")}
              </div>
              <div className="relative">
                {createTextAnimation("Experiences", "kinetic-text")}
                <motion.div
                  className="absolute -top-4 -right-8"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-8 h-8 bg-electric/20 rounded-full blur-sm" />
                </motion.div>
              </div>
            </h1>
          </div>
          
          {/* Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I craft immersive digital experiences that push boundaries, 
            combining cutting-edge technology with award-winning design 
            to create solutions that captivate and convert.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <Button 
                  size="lg" 
                  className="relative overflow-hidden bg-hero-gradient hover:bg-cosmic-gradient 
                           text-white shadow-glow hover:shadow-cyber transition-all duration-500
                           text-lg px-8 py-6 rounded-2xl border border-glass-border"
                >
                  <motion.div 
                    className="flex items-center space-x-3"
                    whileHover={{ x: 2 }}
                  >
                    <span className="font-semibold">Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                  
                  {/* Animated gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-mesh-gradient opacity-0"
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            </Link>
            
            <Link to="/work">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-card hover:bg-glass-bg text-foreground 
                           border-glass-border shadow-soft hover:shadow-glow
                           text-lg px-8 py-6 rounded-2xl transition-all duration-500"
                >
                  <motion.div 
                    className="flex items-center space-x-3"
                    whileHover={{ x: 2 }}
                  >
                    <Play className="w-5 h-5" />
                    <span className="font-semibold">View Portfolio</span>
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24h", label: "Response Time" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <div className="kinetic-text text-3xl font-bold mb-2 
                              group-hover:animate-pulse-glow transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-muted-foreground"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-electric to-transparent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CreativeHero;