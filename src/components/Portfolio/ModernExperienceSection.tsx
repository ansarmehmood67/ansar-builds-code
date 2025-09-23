import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { useStaggerReveal, useScrollReveal } from '@/hooks/useProfessionalAnimations';

const ModernExperienceSection = () => {
  const sectionRef = useScrollReveal({ delay: 0.1 });
  const timelineRef = useStaggerReveal(0.15);

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      organization: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead developer for enterprise-level web applications serving 100k+ users.",
      details: [
        "Architected and developed scalable React/Node.js applications",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Led a team of 5 developers using Agile methodologies",
        "Optimized application performance achieving 40% faster load times"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      title: "Full Stack Developer",
      organization: "InnovateLab",
      period: "2020 - 2022",
      location: "Austin, TX",
      description: "Developed custom web solutions for startups and mid-sized companies.",
      details: [
        "Built 15+ responsive web applications using modern frameworks",
        "Integrated third-party APIs and payment systems",
        "Collaborated with designers to create pixel-perfect UI/UX",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["Vue.js", "Python", "Django", "MongoDB", "Stripe API"],
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      title: "Frontend Developer",
      organization: "WebStudio Pro",
      period: "2019 - 2020",
      location: "Remote",
      description: "Specialized in creating interactive and engaging user interfaces.",
      details: [
        "Developed responsive websites with modern CSS frameworks",
        "Implemented complex animations and micro-interactions",
        "Collaborated with cross-functional teams on product features",
        "Maintained 99% code quality standards through testing"
      ],
      technologies: ["JavaScript", "CSS/SASS", "Webpack", "Jest", "Figma"],
      icon: <Briefcase className="h-5 w-5" />
    },
    {
      title: "Computer Science Degree",
      organization: "University of California",
      period: "2015 - 2019",
      location: "Berkeley, CA",
      description: "Bachelor's in Computer Science with focus on software engineering.",
      details: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Completed advanced coursework in algorithms and data structures",
        "Led student coding bootcamp teaching web development basics",
        "Built award-winning capstone project using machine learning"
      ],
      technologies: ["Java", "Python", "C++", "Machine Learning", "Data Structures"],
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-child">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous learning and professional growth in the 
            ever-evolving world of software development.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="stagger-item relative flex items-start space-x-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-4 border-primary/20 relative z-10">
                  <div className="text-primary">
                    {exp.icon}
                  </div>
                </div>

                {/* Content Card */}
                <Card className="flex-1 glass-card p-6 hover-lift">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <Badge variant="secondary" className="self-start">
                        {exp.period}
                      </Badge>
                    </div>

                    {/* Organization & Location */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <span className="font-medium">{exp.organization}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground">{exp.description}</p>

                    {/* Details */}
                    <ul className="space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernExperienceSection;