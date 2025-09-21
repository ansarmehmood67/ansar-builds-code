import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutImage from "@/assets/about-image.png";

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section 
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 theme-light"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                I'm a passionate software engineer with expertise in building modern web applications, 
                AI-powered solutions, and automation systems that help businesses scale efficiently.
              </p>
              <p>
                With experience ranging from freelance projects to enterprise-level applications, 
                I focus on creating solutions that are not just technically sound but also deliver 
                real business value.
              </p>
              <p>
                Currently working as a Software Engineer at SalesOnDemand, where I build full-stack 
                React + Django systems and develop innovative automation solutions.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15k+</div>
                <div className="text-sm text-slate-500">Earned Freelancing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-sm text-slate-500">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="animate-on-scroll lg:order-last">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutImage} 
                  alt="Ansar Mehmood - Software Engineer"
                  className="w-full h-full object-cover filter brightness-110 contrast-105"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;