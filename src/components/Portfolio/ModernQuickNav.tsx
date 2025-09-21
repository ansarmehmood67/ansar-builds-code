import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Briefcase, FolderOpen, Sparkles, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ModernQuickNav = () => {
  const ref = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    {
      icon: Code2,
      title: "Skills & Expertise",
      description: "Technologies that power innovation",
      stats: "15+ Technologies",
      targetSection: "skills",
      gradient: "from-blue-500 via-purple-500 to-indigo-600",
      bgPattern: "opacity-20"
    },
    {
      icon: Briefcase,
      title: "Experience Journey", 
      description: "From education to professional growth",
      stats: "3+ Years Experience",
      targetSection: "experience",
      gradient: "from-primary via-emerald-500 to-teal-600",
      bgPattern: "opacity-20"
    },
    {
      icon: FolderOpen,
      title: "Featured Projects",
      description: "Real solutions, real impact",
      stats: "9 Projects Delivered",
      targetSection: "portfolio", 
      gradient: "from-orange-500 via-red-500 to-pink-600",
      bgPattern: "opacity-20"
    }
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 theme-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-primary mr-3 animate-pulse" />
            <span className="text-primary font-semibold text-lg tracking-wide uppercase">Explore My Work</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
            What I Bring to the{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">Table</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From cutting-edge development skills to proven project results, 
            discover the expertise that drives exceptional digital solutions
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {navItems.map((item, index) => (
            <Card
              key={item.title}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-xl hover:from-card/70 hover:to-card/50 transition-all duration-700 hover:scale-105 cursor-pointer animate-on-scroll shadow-xl hover:shadow-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => scrollToSection(item.targetSection)}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} ${item.bgPattern} transition-opacity duration-700 group-hover:opacity-30`} />
              
              {/* Hover Effect Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`} />
              
              <CardContent className="relative z-10 p-10 text-center">
                {/* Icon with Enhanced Animation */}
                <div className="relative mb-8">
                  <div className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${item.gradient} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}>
                    <item.icon className="h-12 w-12 text-white" />
                  </div>
                  {/* Pulse Effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-700 blur-xl`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg group-hover:text-foreground transition-colors duration-300">
                  {item.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-background/50 border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{item.stats}</span>
                </div>

                {/* Explore Hint */}
                <div className="mt-6 text-sm text-primary/70 group-hover:text-primary transition-colors duration-300 font-medium">
                  Click to explore →
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 animate-on-scroll">
          <div className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <Users className="h-6 w-6 text-primary" />
            <span className="text-foreground font-semibold text-lg">
              Ready to collaborate? Let's create something extraordinary together.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernQuickNav;