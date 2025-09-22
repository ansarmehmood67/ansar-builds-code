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
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-600 text-lg">
            Technologies I work with
          </p>
        </div>

        {/* Clean Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {skillColumns.map((column) => (
            <div key={column.title} className="space-y-8">
              {/* Column Header */}
              <div className="flex items-center space-x-3">
                <column.icon className="h-6 w-6 text-slate-700" />
                <h3 className="text-xl font-semibold text-slate-900">
                  {column.title}
                </h3>
              </div>
              
              {/* Skills List */}
              <div className="space-y-4">
                {column.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center py-3 px-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-slate-400 rounded-full mr-4"></div>
                    <span className="text-slate-800 font-medium">
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