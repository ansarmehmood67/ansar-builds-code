import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Bot, Zap, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhatIDoSection = () => {
  const ref = useScrollAnimation();

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites and applications that convert visitors into customers.",
      href: "/services"
    },
    {
      icon: Bot,
      title: "AI Chatbots",
      description: "Intelligent chatbots that qualify leads and provide 24/7 customer support.",
      href: "/services"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline workflows and eliminate repetitive tasks with custom automation.",
      href: "/services"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I specialize in three key areas that help businesses scale and thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 animate-on-scroll border-border/50"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary-hover group/btn"
                    onClick={() => window.location.href = service.href}
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;