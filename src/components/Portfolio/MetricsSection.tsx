import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Zap, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MetricsSection = () => {
  const ref = useScrollAnimation();

  const metrics = [
    {
      icon: TrendingUp,
      value: "150%",
      label: "Average conversion increase",
      description: "Across all client projects"
    },
    {
      icon: Users,
      value: "50+",
      label: "Happy clients",
      description: "Businesses transformed"
    },
    {
      icon: Zap,
      value: "2.1s",
      label: "Average load time",
      description: "Lightning-fast performance"
    },
    {
      icon: Award,
      value: "98%",
      label: "Client satisfaction",
      description: "Proven track record"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(var(--primary)) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Results That Speak
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Numbers don't lie. Here's the impact I've delivered for businesses like yours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card 
                key={index} 
                className="text-center group hover:shadow-medium transition-all duration-300 animate-on-scroll border-border/50 bg-background/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 group-hover:shadow-teal-glow transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                      {metric.value}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {metric.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {metric.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Context */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Performance First</h4>
                <p className="text-muted-foreground text-sm">Every project optimized for speed and efficiency</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Business Focus</h4>
                <p className="text-muted-foreground text-sm">Solutions designed to drive real ROI</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Future-Proof</h4>
                <p className="text-muted-foreground text-sm">Built with scalability and growth in mind</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;