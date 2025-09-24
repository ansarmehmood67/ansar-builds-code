import { Code, Database, Bot, Cloud, Zap, Wrench } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const ModernSkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, years: 4, description: "Advanced component architecture & state management" },
        { name: "TypeScript", level: 90, years: 3, description: "Type-safe development & complex type systems" },
        { name: "Next.js", level: 88, years: 3, description: "Full-stack React framework with SSR/SSG" },
        { name: "Tailwind CSS", level: 95, years: 4, description: "Utility-first CSS framework expertise" },
        { name: "JavaScript", level: 98, years: 5, description: "ES6+, async programming, modern patterns" },
        { name: "HTML/CSS", level: 95, years: 5, description: "Semantic markup & responsive design" }
      ]
    },
    {
      id: "backend",
      title: "Backend & Database",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Python", level: 92, years: 4, description: "Django, FastAPI, data processing & automation" },
        { name: "Django", level: 88, years: 3, description: "Full-stack web development & REST APIs" },
        { name: "PostgreSQL", level: 85, years: 3, description: "Complex queries, optimization & database design" },
        { name: "MySQL", level: 82, years: 4, description: "Database administration & performance tuning" },
        { name: "REST APIs", level: 90, years: 4, description: "API design, documentation & best practices" },
        { name: "Node.js", level: 78, years: 2, description: "Server-side JavaScript & microservices" }
      ]
    },
    {
      id: "ai",
      title: "AI & Automation",
      icon: Bot,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "OpenAI API", level: 90, years: 2, description: "GPT integration, prompt engineering & fine-tuning" },
        { name: "Chatbot Development", level: 92, years: 3, description: "Conversational AI & natural language processing" },
        { name: "Workflow Automation", level: 88, years: 3, description: "Business process automation & optimization" },
        { name: "Zapier/Make.com", level: 85, years: 2, description: "No-code/low-code automation platforms" },
        { name: "WhatsApp API", level: 83, years: 2, description: "Business messaging & customer engagement" }
      ]
    },
    {
      id: "devops",
      title: "DevOps & Tools",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git", level: 92, years: 5, description: "Version control, branching strategies & collaboration" },
        { name: "Docker", level: 80, years: 2, description: "Containerization & deployment automation" },
        { name: "AWS EC2", level: 75, years: 2, description: "Cloud infrastructure & server management" },
        { name: "Vercel", level: 88, years: 3, description: "Frontend deployment & serverless functions" },
        { name: "Firebase", level: 82, years: 2, description: "Real-time databases & authentication" },
        { name: "WordPress", level: 85, years: 4, description: "Custom themes, plugins & headless CMS" }
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(cat => 
    cat.skills.map(skill => ({ ...skill, category: cat.id, categoryTitle: cat.title, categoryColor: cat.color }))
  );

  const filteredSkills = selectedCategory === "all" 
    ? allSkills 
    : allSkills.filter(skill => skill.category === selectedCategory);

  const categoryFilters = [
    { id: "all", name: "All Skills", icon: Zap },
    ...skillCategories.map(cat => ({ id: cat.id, name: cat.title, icon: cat.icon }))
  ];

  return (
    <TooltipProvider>
      <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
              Professional Skills
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Technologies I use to design, build, and deploy modern <span className="text-primary font-semibold">web & mobile applications</span>.
            </p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categoryFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedCategory(filter.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === filter.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <filter.icon className="h-4 w-4" />
                  <span className="font-medium text-sm">{filter.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <Tooltip key={`${skill.category}-${skill.name}`}>
                <TooltipTrigger asChild>
                  <div
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Skill Header */}
                    <div className={`bg-gradient-to-r ${skill.categoryColor} px-4 py-3`}>
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-white text-sm truncate">
                          {skill.name}
                        </h3>
                        <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                          {skill.years}y
                        </Badge>
                      </div>
                    </div>

                    {/* Skill Content */}
                    <div className="p-4">
                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-gray-500 font-medium">Proficiency</span>
                          <span className="text-xs text-gray-700 font-bold">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2"
                        />
                      </div>

                      {/* Category Badge */}
                      <Badge variant="outline" className="text-xs">
                        {skill.categoryTitle}
                      </Badge>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <div className="p-2">
                    <p className="font-semibold text-sm mb-1">{skill.name}</p>
                    <p className="text-xs text-gray-600 mb-2">{skill.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Experience: {skill.years} years</span>
                      <span>Level: {skill.level}%</span>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          {/* Stats Summary */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">{filteredSkills.length}</div>
              <div className="text-sm text-gray-600">Technologies</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">
                {Math.round(filteredSkills.reduce((acc, skill) => acc + skill.level, 0) / filteredSkills.length)}%
              </div>
              <div className="text-sm text-gray-600">Avg Proficiency</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">
                {Math.round(filteredSkills.reduce((acc, skill) => acc + skill.years, 0) / filteredSkills.length)}+
              </div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">{skillCategories.length}</div>
              <div className="text-sm text-gray-600">Specializations</div>
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default ModernSkillsSection;