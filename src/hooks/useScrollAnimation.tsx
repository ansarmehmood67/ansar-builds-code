import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            
            // Animate child elements with stagger
            const children = entry.target.querySelectorAll('.animate-on-scroll');
            children.forEach((child, index) => {
              child.classList.add(`animate-fade-in-up`, `animate-stagger-${Math.min(index + 1, 5)}`);
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