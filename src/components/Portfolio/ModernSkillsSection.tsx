import { use3DTransform, useMagneticScroll } from "@/hooks/useAdvancedAnimations";
import { Code, Cloud } from "lucide-react";

const ModernSkillsSection = () => {
  const transformRef = use3DTransform();
  const magneticRef = useMagneticScroll();
  const skillColumns = [
    {
      title: "Frontend & Backend",
      icon: Code,
      skills: [
        "JavaScript", "TypeScript", "React", "Next.js", 
        "Tailwind CSS", "HTML", "CSS", "Flutter", 
        "Django", "Python", "REST APIs"
      ]
    },
    {
      title: "Cloud & Infrastructure", 
      icon: Cloud,
      skills: [
        "MySQL", "PostgreSQL", "SQLite", "MongoDB", 
        "Git", "Docker", "WordPress", "Vercel",
        "Shopify", "AWS EC2", "Firebase"
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={transformRef as React.RefObject<HTMLElement>}
      className="py-24 bg-gradient-to-br from-slate-50 to-white perspective-container"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with magnetic animation */}
        <div ref={magneticRef as React.RefObject<HTMLDivElement>} className="text-center mb-16 magnetic-child">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative animate-text">
          Professional Skills
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full animate-glow-pulse"></div>
        </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-text">
            Technologies I use to design, build, and deploy modern <span className="text-primary font-semibold">web & mobile applications</span>.
          </p>
        </div>

        {/* 3D Skills Grid with Advanced Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillColumns.map((column, columnIndex) => (
            <div
              key={column.title}
              className="group card-3d glass-advanced advanced-hover magnetic-child transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${columnIndex * 0.3}s` }}
            >
              {/* Premium Column Header with Liquid Effect */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-6 liquid-bg">
                <div className="flex items-center">
                  <div className="p-3 bg-white/10 rounded-xl mr-4 backdrop-blur-sm advanced-hover">
                    <column.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {column.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Skills Grid with 3D Effects */}
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  {column.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="group/skill relative card-3d advanced-hover glass-advanced magnetic-child transition-all duration-300 p-4 border border-primary/20"
                      style={{
                        animationDelay: `${(columnIndex * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    >
                      {/* Animated Skill Indicator */}
                      <div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full animate-glow-pulse"></div>
                      
                      {/* Skill Name */}
                      <div className="font-semibold text-slate-900 text-sm mb-1 group-hover/skill:text-slate-700 transition-colors duration-300">
                        {skill}
                      </div>
                      
                      {/* Animated Proficiency Indicator */}
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-primary to-primary-glow h-full rounded-full transition-all duration-700 animate-glow-pulse"
                          style={{ width: '85%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default ModernSkillsSection;