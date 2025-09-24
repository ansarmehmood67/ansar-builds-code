import { Code, Database, Bot } from "lucide-react";

const ModernSkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend & UI/UX",
      icon: Code,
      skills: [
        { name: "React", years: 4 },
        { name: "TypeScript", years: 3 },
        { name: "Next.js", years: 3 },
        { name: "Tailwind CSS", years: 4 },
        { name: "JavaScript", years: 5 },
        { name: "HTML/CSS", years: 5 }
      ]
    },
    {
      title: "Backend & Infrastructure",
      icon: Database,
      skills: [
        { name: "Python", years: 4 },
        { name: "Django", years: 3 },
        { name: "PostgreSQL", years: 3 },
        { name: "MySQL", years: 4 },
        { name: "REST APIs", years: 4 },
        { name: "Node.js", years: 2 },
        { name: "Git", years: 5 },
        { name: "Docker", years: 2 },
        { name: "AWS", years: 2 }
      ]
    },
    {
      title: "AI & Automation",
      icon: Bot,
      skills: [
        { name: "OpenAI API", years: 2 },
        { name: "Chatbot Development", years: 3 },
        { name: "Workflow Automation", years: 3 },
        { name: "Zapier/Make.com", years: 2 },
        { name: "WhatsApp API", years: 2 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-16 h-px bg-border mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Core technologies and frameworks for building modern digital solutions
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <category.icon className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-xl font-medium text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between py-3 px-4 rounded-lg bg-card border border-border/50 hover:border-border transition-colors duration-200"
                  >
                    <span className="font-medium text-foreground text-sm">
                      {skill.name}
                    </span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                      {skill.years}y
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Simple Footer Stats */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-light text-foreground mb-2">
                {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div>
              <div className="text-2xl font-light text-foreground mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-light text-foreground mb-2">3</div>
              <div className="text-sm text-muted-foreground">Core Areas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSkillsSection;