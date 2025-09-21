import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const SkillsSection = () => {
  const ref = useScrollAnimation();

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "Framer Motion", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Django", level: 85 },
        { name: "Python", level: 88 },
        { name: "PostgreSQL", level: 82 },
        { name: "REST APIs", level: 92 }
      ]
    },
    {
      title: "AI & Automation",
      skills: [
        { name: "OpenAI API", level: 88 },
        { name: "Chatbot Development", level: 90 },
        { name: "Zapier/Make.com", level: 85 },
        { name: "Workflow Automation", level: 87 },
        { name: "WhatsApp API", level: 83 }
      ]
    }
  ];

  return (
    <section 
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 theme-light"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Technologies and tools I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="animate-on-scroll bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700 group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-emerald-400 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
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

export default SkillsSection;