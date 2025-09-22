import { Code, Smartphone, Bot, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CompactServicesSection = () => {
  const ref = useScrollAnimation();

  const services = [
    {
      title: "Web Development",
      description: "Enterprise-grade web applications with modern frameworks",
      icon: Code,
    },
    {
      title: "App Development", 
      description: "Cross-platform mobile solutions for iOS & Android",
      icon: Smartphone,
    },
    {
      title: "AI Powered Automations",
      description: "Intelligent workflows that streamline business processes",
      icon: Bot,
    },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref as any} className="animate-on-scroll">
          {/* Premium Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-slate-900/80 backdrop-blur-sm rounded-full shadow-xl border border-primary/20 mb-8">
              <Sparkles className="h-5 w-5 text-primary mr-3" />
              <span className="text-slate-200 font-semibold text-sm tracking-wide uppercase">My Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Professional <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Specialized services designed to transform your ideas into powerful digital solutions
            </p>
          </div>

          {/* Premium Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-slate-900/60 backdrop-blur-sm rounded-2xl shadow-primary/10 shadow-2xl hover:shadow-primary/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-primary/20 overflow-hidden hover:border-primary/40"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="text-center p-8">
                  {/* Premium Icon Container */}
                  <div className="relative mx-auto mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 text-primary border border-primary/20 shadow-lg shadow-primary/10 transition-all duration-500 group-hover:bg-primary/20 group-hover:shadow-primary/30">
                      <service.icon className="w-12 h-12" />
                    </div>
                    {/* Subtle Always-Visible Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-xl opacity-100"></div>
                  </div>

                  {/* Enhanced Typography */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Premium Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-primary/30 to-primary/50 group-hover:from-primary/60 group-hover:to-primary/80 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactServicesSection;