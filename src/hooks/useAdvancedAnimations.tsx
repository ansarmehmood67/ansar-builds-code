import { useEffect, useRef, useState } from 'react';

// Magnetic Scroll Animation Hook
export const useMagneticScroll = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Magnetic entrance animation
            entry.target.classList.add('animate-magnetic-entrance');
            
            // Animate child elements with physics-based stagger
            const children = entry.target.querySelectorAll('.magnetic-child');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-magnetic-child');
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
};

// 3D Transform Animation Hook
export const use3DTransform = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-3d-entrance');
            
            // 3D card animations
            const cards = entry.target.querySelectorAll('.card-3d');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-card-flip');
              }, index * 150);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
};

// Text Animation Hook (Letter by letter)
export const useTextAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Split text into letters and animate
            const textElements = entry.target.querySelectorAll('.animate-text');
            textElements.forEach((textEl) => {
              const text = textEl.textContent || '';
              textEl.innerHTML = text
                .split('')
                .map((char, index) => 
                  `<span class="inline-block animate-letter" style="animation-delay: ${index * 50}ms">${char === ' ' ? '&nbsp;' : char}</span>`
                )
                .join('');
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
};

// Particle Animation Hook
export const useParticleEffect = () => {
  const ref = useRef<HTMLElement>(null);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const createParticle = (x: number, y: number) => {
      const particle = {
        id: Math.random(),
        x,
        y
      };
      setParticles(prev => [...prev, particle]);
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== particle.id));
      }, 2000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      if (Math.random() > 0.95) { // Only create particles occasionally
        createParticle(x, y);
      }
    };

    element.addEventListener('mousemove', handleMouseMove);
    return () => element.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return { ref, particles };
};

// Morphing Animation Hook
export const useMorphingAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-morph-entrance');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
};

// Advanced Hover Effects Hook
export const useAdvancedHover = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      target.classList.add('hover-magnetic-active');
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      target.classList.remove('hover-magnetic-active');
    };

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      target.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    };

    const handleMouseLeaveReset = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      target.style.transform = '';
    };

    // Apply to all hover elements
    const hoverElements = element.querySelectorAll('.advanced-hover');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeaveReset);
    });

    return () => {
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeaveReset);
      });
    };
  }, []);

  return ref;
};