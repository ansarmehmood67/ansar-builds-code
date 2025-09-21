import { Code, Briefcase, FolderOpen } from "lucide-react";

const QuickNavRow = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    {
      icon: Code,
      title: "Skills",
      description: "Technologies & Tools",
      targetSection: "skills",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Education & Work",
      targetSection: "experience",
      gradient: "from-primary to-emerald-600"
    },
    {
      icon: FolderOpen,
      title: "Portfolio",
      description: "Featured Projects",
      targetSection: "portfolio",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 theme-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-6">
          {navItems.map((item, index) => (
            <button
              key={item.title}
              onClick={() => scrollToSection(item.targetSection)}
              className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
              
              <div className="relative z-10 text-center">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickNavRow;