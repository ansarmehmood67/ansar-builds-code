import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Mail, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/ansar-about-image.png";

const ModernAboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section 
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-32 theme-light relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Consistent Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 relative">
            About Me
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting digital solutions with <span className="text-primary font-semibold">precision</span> and <span className="text-primary font-semibold">passion</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[600px]">
          {/* Sophisticated Content - Left Side */}
          <div className="flex flex-col justify-center space-y-10 animate-on-scroll">
            {/* Main Content Block */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              <div className="pl-8 space-y-6">
                <div className="inline-flex items-center space-x-2 text-sm font-semibold text-primary uppercase tracking-wider">
                  <div className="w-8 h-px bg-primary"></div>
                  <span>Software Engineer</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  Crafting Digital Solutions with{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Precision & Passion
                  </span>
                </h3>
                
                <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
                  I'm <span className="text-primary font-semibold">Ansar Mehmood</span>, a full-stack developer specializing in <span className="text-primary font-semibold">React</span> and <span className="text-primary font-semibold">Django</span> ecosystems. 
                  With experience serving <span className="text-primary font-semibold">international clients</span> and contributing to <span className="text-primary font-semibold">enterprise solutions</span> at SalesOnDemand.
                </p>
                
                <p className="text-xl text-slate-700 leading-relaxed font-medium">
                  I bridge frontend elegance with backend robustness to create applications that deliver <span className="text-primary font-semibold">measurable business impact</span>.
                </p>
              </div>
            </div>


            {/* Contact & CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-8">
                <div className="flex items-center space-x-3 text-slate-600 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">Available Remotely</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600 group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">ansarmehmood.dev@gmail.com</span>
                </div>
              </div>

              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-white hover:scale-105 transition-all duration-300 font-bold px-10 py-4 text-lg rounded-2xl group"
              >
                <Download className="mr-3 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Circular Image - Right Side */}
          <div className="flex items-center justify-center animate-on-scroll">
            <div className="relative group">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-88 h-88 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              
              {/* Image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/30 group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={aboutImage} 
                  alt="Ansar Mehmood - Full Stack Developer"
                  className="w-full h-full object-cover filter brightness-110 saturate-110"
                />
              </div>
              
              {/* Floating accent */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAboutSection;