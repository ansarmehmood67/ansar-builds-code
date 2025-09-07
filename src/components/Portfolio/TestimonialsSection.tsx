import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const ref = useScrollAnimation();

  const testimonials = [
    {
      quote: "Ansar delivered exactly what we needed. The platform is fast, user-friendly, and has significantly improved our online sales. The AI chatbot alone has saved us countless hours.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Fashion Forward",
      rating: 5,
      metric: "+65% sales increase"
    },
    {
      quote: "The AI chatbot has transformed our customer service. It handles most queries instantly and our team can focus on complex issues. ROI was clear within the first month.",
      author: "Michael Chen",
      role: "Operations Manager",
      company: "TechStart",
      rating: 5,
      metric: "85% customer satisfaction"
    },
    {
      quote: "Ansar's automation solution saved us countless hours. What used to take our team 2 days now happens automatically in minutes. The accuracy is incredible.",
      author: "Lisa Rodriguez",
      role: "COO",
      company: "GrowthCorp",
      rating: 5,
      metric: "60% time savings"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what business leaders say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 animate-on-scroll border-border/50 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Metric */}
                <div className="mb-6">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.metric}
                  </span>
                </div>

                {/* Author */}
                <div className="border-t border-border pt-6">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-on-scroll">
          <div className="bg-card rounded-2xl p-8 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold text-primary mb-2">2+ Years</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">50+ Projects</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Project Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;