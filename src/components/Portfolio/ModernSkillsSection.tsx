import React from 'react';
import { Card } from '@/components/ui/card';
import { Code, Database, Palette, Zap, Globe, Smartphone } from 'lucide-react';
import { useStaggerReveal, useScrollReveal } from '@/hooks/useProfessionalAnimations';

const ModernSkillsSection = () => {
  const sectionRef = useScrollReveal({ delay: 0.1 });
  const skillsRef = useStaggerReveal(0.1);

  const skillColumns = [
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 85 },
        { name: "JavaScript ES6+", level: 95 },
        { name: "CSS/SASS", level: 90 }
      ]
    },
    {
      title: "Backend Development", 
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python/Django", level: 85 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 95 }
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "Figma/Adobe XD", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 75 },
        { name: "AWS/Vercel", level: 80 },
        { name: "Testing (Jest)", level: 85 }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-child">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Professional Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise across the full development stack with a focus on modern technologies 
            and best practices that deliver exceptional user experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid lg:grid-cols-3 gap-8">
          {skillColumns.map((column, columnIndex) => (
            <Card 
              key={column.title} 
              className="stagger-item glass-card p-8 hover-lift"
            >
              {/* Column Header */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {column.icon}
                </div>
                <h3 className="text-xl font-semibold">{column.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {column.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          transitionDelay: `${columnIndex * 200 + skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center animate-child">
          <h3 className="text-2xl font-semibold mb-8">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Agile/Scrum', 'CI/CD', 'Performance Optimization', 
              'SEO', 'Accessibility', 'Progressive Web Apps',
              'Mobile Development', 'API Design', 'Database Design'
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover-scale"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSkillsSection;