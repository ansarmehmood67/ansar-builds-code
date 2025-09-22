import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Briefcase, MapPin, Calendar, Sparkles } from "lucide-react";

const ModernExperienceSection = () => {
  const ref = useScrollAnimation();

  const experiences = [
    {
      type: "work",
      title: "Software Engineer",
      organization: "SalesOnDemand",
      period: "2024 – Present",
      location: "Remote (Italy-based)",
      description: "Building full-stack applications using React + Django. Developing AI-powered automation solutions for enterprise clients. Collaborating with international teams to deliver scalable business solutions.",
      details: [
        "Building full-stack applications using React + Django",
        "Developing AI-powered automation solutions for enterprise clients", 
        "Collaborating with international teams to deliver scalable business solutions"
      ],
      technologies: ["React", "Django", "Python", "JavaScript", "AI Integration", "Enterprise Solutions"],
      icon: Briefcase,
      side: "right"
    },
    {
      type: "work", 
      title: "Freelance Full-Stack Developer",
      organization: "Upwork & Fiverr",
      period: "2021 – Present", 
      location: "Remote",
      description: "Working with international clients on Upwork & Fiverr. Specialized in React, Django, Tailwind, APIs, and cloud deployment. Delivered custom web platforms, automation tools, and CMS solutions.",
      details: [
        "Working with international clients on Upwork & Fiverr",
        "Specialized in React, Django, Tailwind, APIs, and cloud deployment",
        "Delivered custom web platforms, automation tools, and CMS solutions"
      ],
      technologies: ["React", "Django", "Tailwind", "APIs", "Cloud Deployment", "CMS Solutions"],
      icon: Briefcase,
      side: "left"
    },
    {
      type: "education",
      title: "BS in Information Technology (BSIT)",
      organization: "University of Okara", 
      period: "2021 – 2025",
      location: "Pakistan",
      description: "Final Year Project: WhatsApp-Based Business Automation & Support System. Specialized in full-stack development, cloud computing, and automation.",
      details: [
        "Final Year Project: WhatsApp-Based Business Automation & Support System",
        "Specialized in full-stack development, cloud computing, and automation",
        "Focused on modern web technologies and enterprise solutions"
      ],
      technologies: ["Full-Stack Development", "Cloud Computing", "Automation", "Web Technologies"],
      icon: GraduationCap,
      side: "right"
    }
  ];

  return (
    <section 
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref as any} className="animate-on-scroll">
          {/* Premium Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-slate-900/80 backdrop-blur-sm rounded-full shadow-xl border border-primary/20 mb-8">
              <Sparkles className="h-5 w-5 text-primary mr-3" />
              <span className="text-slate-200 font-semibold text-sm tracking-wide uppercase">Professional Journey</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Experience & <span className="text-primary">Education</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A timeline of professional growth, technical expertise, and continuous learning
            </p>
          </div>

          {/* Premium Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2 hidden lg:block" />
            
            {/* Timeline Items */}
            <div className="space-y-16 lg:space-y-24">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center animate-on-scroll ${
                    exp.side === 'left' ? 'lg:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center z-10 hidden lg:flex">
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${exp.side === 'left' ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="group bg-slate-900/60 backdrop-blur-sm rounded-2xl shadow-primary/10 shadow-2xl hover:shadow-primary/20 hover:shadow-2xl transition-all duration-500 border border-primary/20 overflow-hidden hover:border-primary/40 hover:-translate-y-1">
                      
                      {/* Mobile Timeline Node */}
                      <div className="lg:hidden flex items-center p-6 pb-0">
                        <div className="w-12 h-12 bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center mr-4">
                          <exp.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center text-slate-400 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      <div className="p-6 lg:p-8">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors mb-2">
                              {exp.title}
                            </h3>
                            <div className="text-lg font-semibold text-primary mb-2">
                              {exp.organization}
                            </div>
                          </div>
                          
                          {/* Desktop Period & Location */}
                          <div className="hidden lg:flex flex-col space-y-1 text-slate-400 text-sm">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {exp.period}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>

                          {/* Mobile Location */}
                          <div className="lg:hidden flex items-center text-slate-400 text-sm mb-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Details */}
                        <div className="mb-6">
                          <ul className="space-y-2">
                            {exp.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start text-slate-400">
                                <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-sm leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Premium Bottom Accent */}
                      <div className="h-1 bg-gradient-to-r from-primary/30 to-primary/50 group-hover:from-primary/60 group-hover:to-primary/80 transition-all duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernExperienceSection;