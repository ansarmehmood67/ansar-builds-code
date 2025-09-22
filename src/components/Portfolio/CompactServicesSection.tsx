import { Code, Smartphone, Bot } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CompactServicesSection = () => {
  const ref = useScrollAnimation();

  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications",
      icon: Code,
    },
    {
      title: "App Development", 
      description: "Cross-platform mobile applications",
      icon: Smartphone,
    },
    {
      title: "AI Powered Automations",
      description: "Intelligent workflows and process automation",
      icon: Bot,
    },
  ];

  return (
    <section className="py-12 bg-theme-light">
      <div className="container mx-auto px-6">
        <div ref={ref as any} className="animate-on-scroll">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              My Services
            </h2>
            <p className="text-muted-foreground">
              Specialized solutions to bring your ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-card rounded-lg p-6 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg animate-on-scroll"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactServicesSection;