import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Briefcase, MapPin, Calendar, TrendingUp, Star, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ModernExperienceSection = () => {
  const ref = useScrollAnimation();

  const experiences = [
    {
      type: "work",
      title: "Software Engineer",
      organization: "SalesOnDemand",
      period: "2024 – Present",
      location: "Remote",
      description: "Building comprehensive React + Django systems, developing multi-page websites, and creating WhatsApp chatbot automation solutions for enterprise clients.",
      achievements: [
        "Developed full-stack applications serving 1000+ users",
        "Implemented chatbot systems reducing support costs by 40%",
        "Built responsive web solutions with 98+ Lighthouse scores"
      ],
      technologies: ["React", "Django", "Python", "JavaScript", "WhatsApp API", "PostgreSQL"],
      icon: Briefcase,
      color: "from-primary to-emerald-500",
      featured: true
    },
    {
      type: "work",
      title: "Freelance Full-Stack Developer",
      organization: "Upwork & Fiverr",
      period: "2021 – 2025",
      location: "Remote",
      description: "Successfully delivered 15+ projects generating $15K+ in revenue, serving clients across Europe and the US with websites, automation tools, and custom applications.",
      achievements: [
        "Generated $15K+ revenue through successful project delivery",
        "Maintained 100% client satisfaction rating",
        "Built automation systems saving clients 60+ hours/month"
      ],
      technologies: ["React", "Node.js", "Python", "Automation", "API Integration", "WordPress"],
      icon: Briefcase,
      color: "from-blue-500 to-purple-500"
    },
    {
      type: "education",
      title: "Computer Science Degree",
      organization: "University Name", 
      period: "2021 – 2025",
      location: "Location",
      description: "Focused on software engineering, algorithms, data structures, and modern web technologies. Active in coding competitions and tech communities.",
      achievements: [
        "Specialized in Software Engineering & Web Development",
        "Completed advanced courses in AI and Machine Learning",
        "Participated in multiple hackathons and coding competitions"
      ],
      technologies: ["Data Structures", "Algorithms", "Software Engineering", "Machine Learning"],
      icon: GraduationCap,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section 
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 theme-light relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(180deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="h-8 w-8 text-primary mr-3" />
            <span className="text-primary font-semibold text-lg tracking-wide uppercase">My Journey</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Experience &{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">Growth</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A timeline of continuous learning, professional development, and impactful project delivery
          </p>
        </div>

        {/* Modern Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 lg:-ml-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-start animate-on-scroll ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className="flex-shrink-0 relative z-10 lg:absolute lg:left-1/2 lg:-ml-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} shadow-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500`}>
                    <exp.icon className="h-8 w-8 text-white" />
                  </div>
                  {exp.featured && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-yellow-900 fill-current" />
                    </div>
                  )}
                </div>
                
                {/* Content Card */}
                <div className={`flex-1 ml-8 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'
                } max-w-xl ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'}`}>
                  <Card className="group bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-105 overflow-hidden">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className={`flex items-start justify-between mb-6 ${
                        index % 2 === 0 ? 'lg:flex-row-reverse lg:text-right' : 'lg:flex-row lg:text-left'
                      }`}>
                        <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}>
                          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                            {exp.title}
                          </h3>
                          <div className="text-lg font-semibold text-primary mb-2">
                            {exp.organization}
                          </div>
                        </div>
                        
                        <div className={`flex flex-col items-end space-y-2 text-sm text-slate-500 ${
                          index % 2 === 0 ? 'lg:items-start' : 'lg:items-end'
                        }`}>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <p className={`text-slate-600 mb-6 leading-relaxed ${
                        index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                      }`}>
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className={`text-sm font-semibold text-slate-700 mb-3 flex items-center ${
                          index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                        }`}>
                          <Award className="h-4 w-4 mr-2 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className={`space-y-2 text-sm text-slate-600 ${
                          index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                        }`}>
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              {index % 2 === 0 ? (
                                <>
                                  <span className="lg:hidden w-2 h-2 rounded-full bg-primary/60 mt-2 mr-3 flex-shrink-0"></span>
                                  <span className="lg:flex-1">{achievement}</span>
                                  <span className="hidden lg:block w-2 h-2 rounded-full bg-primary/60 mt-2 ml-3 flex-shrink-0"></span>
                                </>
                              ) : (
                                <>
                                  <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 mr-3 flex-shrink-0"></span>
                                  <span>{achievement}</span>
                                </>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      }`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20 font-medium px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="text-center mt-20 animate-on-scroll">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">3+</div>
              <div className="text-slate-600 font-medium">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">15+</div>
              <div className="text-slate-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">100%</div>
              <div className="text-slate-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernExperienceSection;