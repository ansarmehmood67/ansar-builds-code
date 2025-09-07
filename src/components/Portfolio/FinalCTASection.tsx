import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTASection = () => {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-primary/15" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-4xl mx-auto animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            Ready to transform
            <br />
            <span className="text-primary">your business?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's build something exceptional together. Whether you need a website, chatbot, or automation solution, 
            I'm here to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-primary-foreground px-12 py-6 text-xl rounded-2xl shadow-soft group"
              onClick={() => window.location.href = '/contact'}
            >
              Start a project
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-1">
                ✨ Free consultation
              </div>
              <div className="text-sm text-muted-foreground">
                📞 24h response time
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-16 border-t border-border/30">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;