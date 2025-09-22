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
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref as any} className="animate-on-scroll">
          {/* Premium Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white backdrop-blur-sm rounded-full shadow-lg border border-gray-200 mb-8">
              <Sparkles className="h-5 w-5 text-primary mr-3" />
              <span className="text-gray-700 font-semibold text-sm tracking-wide uppercase">Professional Journey</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Experience & <span className="text-primary">Education</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A timeline of professional growth, technical expertise, and continuous learning
            </p>
          </div>

          {/* Premium Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2 hidden lg:block" />
            
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
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary rounded-full shadow-lg shadow-primary/20 flex items-center justify-center z-10 hidden lg:flex">
                    <exp.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-7/12 ${exp.side === 'left' ? 'lg:pr-20' : 'lg:pl-20'}`}>
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200 overflow-hidden hover:border-primary/30 hover:-translate-y-1">
                      
                      {/* Mobile Timeline Node */}
                      <div className="lg:hidden flex items-center p-8 pb-0">
                        <div className="w-12 h-12 bg-primary rounded-full shadow-lg shadow-primary/20 flex items-center justify-center mr-4">
                          <exp.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </div>

                      <div className="p-8 lg:p-12">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                              {exp.title}
                            </h3>
                            <div className="text-lg lg:text-xl font-semibold text-primary mb-2">
                              {exp.organization}
                            </div>
                          </div>
                          
                          {/* Desktop Period & Location */}
                          <div className="hidden lg:flex flex-col space-y-1 text-gray-500 text-base">
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
                          <div className="lg:hidden flex items-center text-gray-500 text-sm mb-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Details */}
                        <div className="mb-8">
                          <ul className="space-y-3">
                            {exp.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start text-gray-600">
                                <span className="w-2 h-2 rounded-full bg-primary mt-3 mr-4 flex-shrink-0"></span>
                                <span className="text-base lg:text-lg leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm lg:text-base font-medium border border-primary/20 hover:bg-primary/10 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Premium Bottom Accent */}
                      <div className="h-1 bg-gradient-to-r from-primary/20 to-primary/40 group-hover:from-primary/40 group-hover:to-primary/60 transition-all duration-500"></div>
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