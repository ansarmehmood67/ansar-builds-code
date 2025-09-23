import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, MapPin, Mail, Calendar } from 'lucide-react';
import aboutImage from '@/assets/ansar-about-image.png';
import { useScrollReveal, useParallaxImage } from '@/hooks/useProfessionalAnimations';

const ModernAboutSection = () => {
  const sectionRef = useScrollReveal({ delay: 0.2, stagger: 0.08 });
  const imageRef = useParallaxImage(0.3);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-card/50"
    >
      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="animate-child">
                <h2 className="text-4xl lg:text-5xl font-bold gradient-text leading-tight">
                  About Me
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 mt-4"></div>
              </div>
              
              <div className="animate-child space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with 5+ years of experience creating 
                  digital experiences that make a difference. I specialize in modern web 
                  technologies and have a keen eye for detail and user experience.
                </p>
                <p>
                  My journey in tech started with a curiosity about how things work, 
                  and it has evolved into a career where I get to solve complex problems 
                  and build innovative solutions every day.
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="glass-card p-6 hover-lift animate-child">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </Card>
              
              <Card className="glass-card p-6 hover-lift animate-child">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Experience</p>
                    <p className="text-sm text-muted-foreground">5+ Years</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA */}
            <div className="animate-child">
              <Button 
                size="lg" 
                className="hover-scale group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div 
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden glass-card animate-child"
            >
              <img
                src={aboutImage}
                alt="Professional headshot"
                className="w-full h-auto hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAboutSection;