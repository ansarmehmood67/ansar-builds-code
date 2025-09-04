import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Zap,
  Palette,
  Settings
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      color: "text-blue-400"
    },
    {
      title: "Backend Development", 
      icon: Database,
      skills: ["Django", "Python", "REST APIs", "SQL", "PostgreSQL"],
      color: "text-green-400"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["WordPress", "SEO", "Responsive Design", "Performance Optimization"],
      color: "text-purple-400"
    },
    {
      title: "Mobile & APIs",
      icon: Smartphone,
      skills: ["WhatsApp Cloud API", "OpenAI API", "Mobile-First Design", "PWA"],
      color: "text-yellow-400"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS EC2", "Docker", "Git", "Netlify", "Vercel", "Render"],
      color: "text-cyan-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "SQLite", "PostgreSQL", "MongoDB", "Firebase"],
      color: "text-orange-400"
    },
    {
      title: "AI & Automation",
      icon: Zap,
      skills: ["GPT Integration", "Chatbots", "Automation Workflows", "ML Basics"],
      color: "text-pink-400"
    },
    {
      title: "Design & Tools",
      icon: Palette,
      skills: ["Figma", "Adobe Creative Suite", "UI/UX Design", "Prototyping"],
      color: "text-indigo-400"
    }
  ];

  const technologies = [
    "React", "TypeScript", "Django", "Python", "JavaScript", "Tailwind CSS",
    "Node.js", "Git", "AWS", "Docker", "PostgreSQL", "MongoDB", "Firebase",
    "WordPress", "Shopify", "OpenAI API", "REST APIs", "GraphQL"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="bg-text-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build amazing digital experiences
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="p-6 bg-card-gradient rounded-2xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-background/50 ${category.color}`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technology Tags */}
        <div className="bg-card-gradient rounded-3xl border border-border/50 shadow-elegant p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="bg-text-gradient bg-clip-text text-transparent">Technologies & Tools</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-background/50 rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-default animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skills Progress Indicators */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Frontend Expertise</h3>
            {[
              { skill: "React/TypeScript", level: 90 },
              { skill: "JavaScript", level: 85 },
              { skill: "Tailwind CSS", level: 88 },
              { skill: "Responsive Design", level: 92 }
            ].map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-hero-gradient rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground">Backend & DevOps</h3>
            {[
              { skill: "Django/Python", level: 85 },
              { skill: "Database Design", level: 80 },
              { skill: "API Development", level: 87 },
              { skill: "Cloud Deployment", level: 75 }
            ].map((item, index) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground font-medium">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-hero-gradient rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${item.level}%`,
                      animationDelay: `${index * 0.2 + 0.8}s`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;