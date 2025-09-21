import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Database, Brain, Zap, Globe, Smartphone, Cpu, Cloud, Shield, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ModernSkillsSection = () => {
  const ref = useScrollAnimation();

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Next.js", level: 88, color: "bg-gray-800" },
        { name: "Tailwind CSS", level: 92, color: "bg-teal-500" },
        { name: "HTML5/CSS3", level: 95, color: "bg-orange-500" }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      gradient: "from-primary to-emerald-500",
      skills: [
        { name: "Node.js", level: 87, color: "bg-green-600" },
        { name: "Python", level: 85, color: "bg-yellow-500" },
        { name: "Django", level: 80, color: "bg-green-800" },
        { name: "PostgreSQL", level: 83, color: "bg-blue-700" },
        { name: "MongoDB", level: 78, color: "bg-green-500" }
      ]
    },
    {
      title: "AI & Automation",
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "OpenAI API", level: 92, color: "bg-gray-900" },
        { name: "ChatGPT Integration", level: 90, color: "bg-green-400" },
        { name: "Zapier/Make.com", level: 88, color: "bg-orange-400" },
        { name: "WhatsApp API", level: 85, color: "bg-green-500" },
        { name: "API Development", level: 87, color: "bg-blue-500" }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: Zap,
      gradient: "from-orange-500 to-red-500",
      skills: [
        { name: "Git/GitHub", level: 90, color: "bg-gray-800" },
        { name: "Docker", level: 75, color: "bg-blue-400" },
        { name: "AWS", level: 70, color: "bg-orange-400" },
        { name: "Vercel", level: 85, color: "bg-black" },
        { name: "Figma", level: 80, color: "bg-purple-500" }
      ]
    }
  ];

  const highlights = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive designs that work beautifully on all devices"
    },
    {
      icon: Cpu,
      title: "Performance Optimization",
      description: "Lightning-fast applications with optimized code"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Scalable solutions using modern cloud platforms"
    },
    {
      icon: Shield,
      title: "Security Best Practices",
      description: "Secure, reliable applications with proper authentication"
    }
  ];

  return (
    <section 
      id="skills"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 theme-light relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--primary)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <Code className="h-8 w-8 text-primary mr-3" />
            <span className="text-primary font-semibold text-lg tracking-wide uppercase">Technical Expertise</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Skills That Drive{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks, 
            constantly evolving to deliver cutting-edge solutions
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Category Header */}
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="group/skill"
                      style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-slate-800 text-lg group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm font-bold text-slate-600">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Skill Bar */}
                      <div className="relative h-3 bg-slate-200 rounded-full overflow-hidden group-hover/skill:h-4 transition-all duration-300">
                        <div 
                          className={`absolute left-0 top-0 h-full ${skill.color} rounded-full transition-all duration-1000 delay-300 shadow-lg`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.2) + (skillIndex * 0.1) + 0.5}s`
                          }}
                        />
                        <div 
                          className="absolute left-0 top-0 h-full bg-white/30 rounded-full transition-all duration-1000 delay-300"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.2) + (skillIndex * 0.1) + 0.7}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="animate-on-scroll">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What Sets Me Apart
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="group bg-gradient-to-br from-white to-slate-50 border-0 shadow-lg hover:shadow-xl transition-all duration-500 animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300 mb-6">
                    <highlight.icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {highlight.title}
                  </h4>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="text-center mt-20 animate-on-scroll">
          <div className="inline-flex flex-wrap gap-3 justify-center max-w-4xl">
            {["React", "TypeScript", "Node.js", "Python", "AI Integration", "API Development", "Mobile-First", "Performance", "Security", "Cloud"].map((tech) => (
              <Badge 
                key={tech}
                variant="secondary"
                className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 hover:border-primary/40 hover:from-primary/20 hover:to-primary/10 transition-all duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSkillsSection;