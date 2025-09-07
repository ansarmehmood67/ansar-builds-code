import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Bot, Cloud } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TechStackSection = () => {
  const ref = useScrollAnimation();

  const techCategories = [
    {
      icon: Code,
      title: "Frontend",
      description: "Modern, responsive user interfaces",
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      description: "Scalable server-side solutions",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express", "FastAPI"]
    },
    {
      icon: Bot,
      title: "AI & Automation",
      description: "Intelligent automation solutions",
      technologies: ["OpenAI API", "Langchain", "Zapier", "Make.com", "ChatGPT", "Claude"]
    },
    {
      icon: Cloud,
      title: "Deployment & Tools",
      description: "Modern development workflow",
      technologies: ["Vercel", "Railway", "Docker", "Git", "Figma", "Supabase"]
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I work with modern, battle-tested technologies to build scalable and maintainable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 animate-on-scroll border-border/50 bg-background/50 backdrop-blur-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 group-hover:shadow-teal-glow transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {category.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-background/70 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground mb-8">
              I stay up-to-date with the latest technologies and best practices to ensure your project 
              is built with the most effective tools for your specific needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">Always Learning</h4>
                <p className="text-sm text-muted-foreground">Continuously updating skills with latest tech trends</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">Best Practices</h4>
                <p className="text-sm text-muted-foreground">Following industry standards and clean code principles</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-foreground mb-2">Right Tool</h4>
                <p className="text-sm text-muted-foreground">Choosing the perfect tech stack for each project</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;