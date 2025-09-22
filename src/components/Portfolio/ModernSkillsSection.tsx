import { Code, Database } from "lucide-react";

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
      title: "Databases & Tools", 
      icon: Database,
      skills: [
        "MySQL", "PostgreSQL", "SQLite", "MongoDB", 
        "Git", "Docker", "WordPress"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-slate-50 rounded-full border border-slate-200 mb-6">
            <Code className="h-5 w-5 text-slate-600 mr-2" />
            <span className="text-slate-600 font-medium text-sm tracking-wide">Technical Skills</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Technologies & <span className="text-slate-600">Expertise</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Modern tools and frameworks that power exceptional digital experiences
          </p>
        </div>

        {/* Two Column Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillColumns.map((column, columnIndex) => (
            <div
              key={column.title}
              className="group bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Column Header */}
              <div className="flex items-center mb-8">
                <div className="p-3 bg-slate-100 rounded-xl mr-4 group-hover:bg-slate-200 transition-colors duration-300">
                  <column.icon className="h-6 w-6 text-slate-700" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {column.title}
                </h3>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {column.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="px-4 py-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-200 hover:scale-105 text-center"
                    style={{
                      animationDelay: `${(columnIndex * 0.1) + (skillIndex * 0.05)}s`
                    }}
                  >
                    <span className="text-slate-700 font-medium text-sm">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernSkillsSection;