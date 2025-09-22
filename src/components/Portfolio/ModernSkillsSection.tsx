import { Code, Cloud } from "lucide-react";

const ModernSkillsSection = () => {
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
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Premium Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-lg border border-slate-200 mb-8">
            <Code className="h-5 w-5 text-slate-700 mr-3" />
            <span className="text-slate-700 font-semibold text-sm tracking-wide uppercase">Technical Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Professional <span className="text-slate-600">Skills</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Technologies I use to design, build, and deploy modern web & mobile applications.
          </p>
        </div>

        {/* Premium Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {skillColumns.map((column, columnIndex) => (
            <div
              key={column.title}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden"
            >
              {/* Premium Column Header */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-700 px-8 py-6">
                <div className="flex items-center">
                  <div className="p-3 bg-white/10 rounded-xl mr-4 backdrop-blur-sm">
                    <column.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {column.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              {/* Premium Skills Grid */}
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  {column.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="group/skill relative bg-slate-50 hover:bg-slate-100 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-slate-200 hover:border-slate-300"
                      style={{
                        animationDelay: `${(columnIndex * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    >
                      {/* Skill Indicator */}
                      <div className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full opacity-70 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Skill Name */}
                      <div className="font-semibold text-slate-900 text-sm mb-1 group-hover/skill:text-slate-700 transition-colors duration-300">
                        {skill}
                      </div>
                      
                      {/* Proficiency Indicator */}
                      <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-slate-600 to-slate-400 h-full rounded-full transition-all duration-700 group-hover/skill:from-slate-700 group-hover/skill:to-slate-500"
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