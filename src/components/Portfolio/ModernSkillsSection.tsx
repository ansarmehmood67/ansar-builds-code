import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Monitor, Settings, Database, Cloud, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ModernSkillsSection = () => {
  const ref = useScrollAnimation();

  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["React", "TypeScript", "Tailwind", "HTML", "CSS"]
    },
    {
      title: "Backend", 
      icon: Settings,
      skills: ["Django", "REST APIs", "Python"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB (basic)"]
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      skills: ["Git", "AWS EC2", "Docker", "Vercel/Netlify/Render", "Shopify"]
    },
    {
      title: "APIs & Integrations",
      icon: Zap,
      skills: ["WhatsApp Cloud API", "OpenAI API", "MailerLite"]
    }
  ];

  return (
    <section 
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 theme-light relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <Code className="h-8 w-8 text-primary mr-3" />
            <span className="text-primary font-semibold text-lg tracking-wide uppercase">Technical Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Skills That Drive Innovation
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="animate-on-scroll bg-white border border-slate-200 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="secondary"
                      className="text-xs bg-slate-100 text-slate-700 hover:bg-primary/10 hover:text-primary transition-colors border-0"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernSkillsSection;