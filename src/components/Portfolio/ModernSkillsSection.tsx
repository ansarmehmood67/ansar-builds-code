import { Code, Monitor, Settings, Database, Cloud, Zap } from "lucide-react";

const ModernSkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-600",
      skills: ["React", "TypeScript", "Tailwind", "HTML", "CSS"]
    },
    {
      title: "Backend", 
      icon: Settings,
      color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-600",
      skills: ["Django", "REST APIs", "Python"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-emerald-500/20 to-green-500/20 border-emerald-500/30",
      iconBg: "bg-emerald-500/10",
      iconColor: "text-emerald-600",
      skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"]
    },
    {
      title: "Tools & Platforms",
      icon: Cloud,
      color: "from-orange-500/20 to-red-500/20 border-orange-500/30",
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-600",
      skills: ["Git", "AWS EC2", "Docker", "Vercel", "Shopify"]
    },
    {
      title: "APIs & Integrations",
      icon: Zap,
      color: "from-amber-500/20 to-yellow-500/20 border-amber-500/30",
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-600",
      skills: ["WhatsApp Cloud API", "OpenAI API", "MailerLite"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/3 to-cyan-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/60 mb-6 shadow-sm">
            <Code className="h-5 w-5 text-slate-600 mr-2" />
            <span className="text-slate-600 font-medium text-sm tracking-wide">Technical Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
            Skills That <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Drive Innovation</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection of cutting-edge technologies and frameworks
          </p>
        </div>

        {/* Skills Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                index === 0 ? 'lg:col-span-1 lg:row-span-2' : 
                index === 1 ? 'lg:col-span-2' : 
                index === 2 ? 'lg:col-span-1' :
                index === 3 ? 'lg:col-span-1' : 'lg:col-span-1'
              }`}
              style={{
                background: `linear-gradient(135deg, ${category.color.includes('blue') ? 'rgba(59, 130, 246, 0.03)' : 
                  category.color.includes('purple') ? 'rgba(147, 51, 234, 0.03)' :
                  category.color.includes('emerald') ? 'rgba(16, 185, 129, 0.03)' :
                  category.color.includes('orange') ? 'rgba(251, 146, 60, 0.03)' :
                  'rgba(245, 158, 11, 0.03)'}, rgba(255, 255, 255, 0.8))`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`relative p-4 ${category.iconBg} rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className={`h-7 w-7 ${category.iconColor}`} />
                    <div className={`absolute inset-0 ${category.iconBg} rounded-2xl blur opacity-50`}></div>
                  </div>
                  <h3 className={`text-2xl font-bold ${category.iconColor} group-hover:text-slate-900 transition-colors duration-300`}>
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills Pills */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="group/skill relative px-4 py-2 bg-white/60 hover:bg-white/90 rounded-full border border-white/60 hover:border-slate-200 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    >
                      <span className="relative z-10 text-slate-700 font-medium text-sm group-hover/skill:text-slate-900 transition-colors duration-300">
                        {skill}
                      </span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${
                        category.color.includes('blue') ? 'from-blue-500/10 to-cyan-500/10' : 
                        category.color.includes('purple') ? 'from-purple-500/10 to-indigo-500/10' :
                        category.color.includes('emerald') ? 'from-emerald-500/10 to-green-500/10' :
                        category.color.includes('orange') ? 'from-orange-500/10 to-red-500/10' :
                        'from-amber-500/10 to-yellow-500/10'
                      } opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 rounded-full`}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernSkillsSection;