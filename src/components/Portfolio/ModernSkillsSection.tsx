import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ModernSkillsSection = () => {
  const ref = useScrollAnimation();

  const skills = [
    "React.js", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", 
    "Python", "Django", "PostgreSQL", "MongoDB", "OpenAI API", 
    "ChatGPT Integration", "Zapier/Make.com", "WhatsApp API", "Git/GitHub", 
    "Docker", "AWS", "Vercel", "Figma"
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

        {/* Skills Row */}
        <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
          {skills.map((skill, index) => (
            <Badge 
              key={skill}
              variant="secondary"
              className="px-6 py-3 text-lg font-semibold bg-white text-slate-800 border border-slate-200 hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-md rounded-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernSkillsSection;