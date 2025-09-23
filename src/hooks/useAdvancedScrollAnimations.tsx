import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

export interface AnimationConfig {
  type: 'magnetic' | 'parallax' | 'morphing' | 'spiral' | 'depth' | 'liquid';
  intensity?: number;
  delay?: number;
  duration?: number;
}

export const useAdvancedScrollAnimations = (config: AnimationConfig = { type: 'magnetic' }) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-20% 0px -20% 0px" 
  });
  
  const scrollY = useMotionValue(0);
  const springScrollY = useSpring(scrollY, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateScrollY = () => scrollY.set(window.scrollY);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', updateScrollY);
    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('scroll', updateScrollY);
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [scrollY]);

  // Parallax transforms
  const parallaxY = useTransform(springScrollY, 
    [0, 1000], 
    [0, config.intensity || -100]
  );
  
  const parallaxRotate = useTransform(springScrollY,
    [0, 1000],
    [0, config.intensity ? config.intensity * 0.1 : -5]
  );

  // Magnetic effect calculations
  const magneticX = mousePosition.x * (config.intensity || 0.02);
  const magneticY = mousePosition.y * (config.intensity || 0.02);

  return {
    ref,
    isInView,
    parallaxY,
    parallaxRotate,
    magneticX,
    magneticY,
    scrollY: springScrollY,
    mousePosition,
    config
  };
};

export const useSectionAnimation = (animationType: AnimationConfig['type']) => {
  const config: AnimationConfig = {
    type: animationType,
    intensity: animationType === 'parallax' ? 50 : 
               animationType === 'magnetic' ? 0.05 : 
               animationType === 'spiral' ? 15 : 20,
    delay: 0.1,
    duration: 0.8
  };

  return useAdvancedScrollAnimations(config);
};