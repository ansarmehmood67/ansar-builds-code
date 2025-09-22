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
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref as any} className="animate-on-scroll">
          {/* Premium Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-slate-800/80 backdrop-blur-sm rounded-full shadow-xl border border-slate-600/50 mb-8">
              <Sparkles className="h-5 w-5 text-slate-300 mr-3" />
              <span className="text-slate-300 font-semibold text-sm tracking-wide uppercase">My Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Professional <span className="text-slate-300">Solutions</span>
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
                className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-700/50 overflow-hidden hover:border-slate-600/70"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="text-center p-8">
                  {/* Premium Icon Container */}
                  <div className="relative mx-auto mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-700/80 text-slate-300 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/20">
                      <service.icon className="w-8 h-8" />
                    </div>
                    {/* Enhanced Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
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
                <div className="h-1 bg-gradient-to-r from-slate-700/50 to-slate-600/50 group-hover:from-primary/60 group-hover:to-primary/80 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactServicesSection;