import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Briefcase, MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const ref = useScrollAnimation();

  const experiences = [
    {
      type: "education",
      title: "Computer Science Degree",
      organization: "University Name",
      period: "2021-2025",
      location: "Location",
      description: "Focused on software engineering, algorithms, and modern web technologies",
      icon: GraduationCap
    },
    {
      type: "work",
      title: "Software Engineer",
      organization: "SalesOnDemand",
      period: "2024–present",
      location: "Remote",
      description: "Building full React + Django systems, multi-page websites, WhatsApp chatbot automation",
      technologies: ["React", "Django", "Python", "JavaScript", "WhatsApp API"],
      icon: Briefcase
    },
    {
      type: "work",
      title: "Freelance Developer",
      organization: "Upwork/Fiverr",
      period: "2021–2025",
      location: "Remote",
      description: "$15k+ earned, clients in Europe/US; projects include websites, automation tools, YouTube systems",
      technologies: ["React", "Node.js", "Python", "Automation", "API Integration"],
      icon: Briefcase
    }
  ];

  return (
    <section 
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 theme-light"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-slate-600">
            My journey in software development and continuous learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative flex items-start animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full border-4 border-primary shadow-lg flex items-center justify-center relative z-10">
                  <exp.icon className="h-6 w-6 text-primary" />
                </div>
                
                {/* Content */}
                <div className="ml-8 bg-white rounded-2xl p-8 shadow-xl border border-slate-100 flex-1 group hover:shadow-2xl transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-slate-500 mt-2 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-slate-600 mb-2">
                    <span className="font-semibold">{exp.organization}</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;