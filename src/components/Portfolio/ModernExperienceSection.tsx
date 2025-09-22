import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, Briefcase, MapPin, Calendar, TrendingUp, Award } from "lucide-react";
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
      color: "from-primary to-emerald-500"
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <TrendingUp className="h-8 w-8 text-primary mr-3" />
            <span className="text-primary font-semibold text-lg tracking-wide uppercase">My Journey</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Experience & Growth
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A timeline of continuous learning, professional development, and impactful project delivery
          </p>
        </div>

        {/* Simple Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-0">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} shadow-lg flex items-center justify-center`}>
                      <exp.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            {exp.title}
                          </h3>
                          <div className="text-lg font-semibold text-primary mb-2">
                            {exp.organization}
                          </div>
                        </div>
                        
                        <div className="flex flex-col space-y-1 text-sm text-slate-500">
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
                      
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center">
                          <Award className="h-4 w-4 mr-2 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-600">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="w-2 h-2 rounded-full bg-primary/60 mt-2 mr-3 flex-shrink-0"></span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernExperienceSection;