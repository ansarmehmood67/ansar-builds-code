import { useEffect, useRef } from 'react';

export const useElementAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate headings
            const headings = entry.target.querySelectorAll('h1, h2, h3, h4, h5, h6');
            headings.forEach((heading, index) => {
              heading.classList.add('animate-heading', `animate-delay-${Math.min((index + 1) * 100, 500)}`);
            });

            // Animate text elements
            const texts = entry.target.querySelectorAll('p, span.animate-text');
            texts.forEach((text, index) => {
              text.classList.add('animate-text', `animate-delay-${Math.min((index + 2) * 100, 500)}`);
            });

            // Animate cards
            const cards = entry.target.querySelectorAll('.card, [class*="card"]');
            cards.forEach((card, index) => {
              card.classList.add('animate-card', `animate-delay-${Math.min((index + 1) * 150, 500)}`);
            });

            // Animate buttons
            const buttons = entry.target.querySelectorAll('button, .btn');
            buttons.forEach((button, index) => {
              button.classList.add('animate-button', `animate-delay-${Math.min((index + 3) * 100, 500)}`);
            });

            // Animate images
            const images = entry.target.querySelectorAll('img, .image-container');
            images.forEach((image, index) => {
              image.classList.add('animate-image', `animate-delay-${Math.min((index + 2) * 100, 500)}`);
            });

            // Animate social icons
            const socials = entry.target.querySelectorAll('.social-icon, .social-link');
            socials.forEach((social, index) => {
              social.classList.add('animate-social', `animate-delay-${Math.min((index + 1) * 50, 300)}`);
            });

            // Animate elements with specific animation classes
            const customElements = entry.target.querySelectorAll('[class*="animate-on-scroll"]');
            customElements.forEach((element, index) => {
              element.classList.add('animate-fade-in-up', `animate-delay-${Math.min((index + 1) * 100, 500)}`);
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