import { Code, Monitor, Settings, Database, Cloud, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ModernSkillsSection = () => {
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
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Code className="h-6 w-6 text-primary mr-2" />
            <span className="text-primary font-medium text-sm tracking-wider uppercase">Technical Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <Card key={category.title} className="group hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/15 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex items-center py-2 px-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      <span className="text-foreground font-medium">{skill}</span>
                    </div>
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