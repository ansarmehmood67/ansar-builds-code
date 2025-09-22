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
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref as any} className="animate-on-scroll">
          {/* Premium Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-lg border border-slate-200 mb-8">
              <Sparkles className="h-5 w-5 text-slate-700 mr-3" />
              <span className="text-slate-700 font-semibold text-sm tracking-wide uppercase">My Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Professional <span className="text-slate-600">Solutions</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Specialized services designed to transform your ideas into powerful digital solutions
            </p>
          </div>

          {/* Premium Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="text-center p-8">
                  {/* Premium Icon Container */}
                  <div className="relative mx-auto mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 group-hover:from-primary/10 group-hover:to-primary/20 group-hover:text-primary transition-all duration-500 shadow-lg group-hover:shadow-xl">
                      <service.icon className="w-8 h-8" />
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </div>

                  {/* Enhanced Typography */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-500 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Premium Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-slate-200 to-slate-300 group-hover:from-primary/40 group-hover:to-primary/60 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompactServicesSection;