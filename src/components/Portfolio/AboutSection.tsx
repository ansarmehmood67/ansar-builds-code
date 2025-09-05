import aboutImage from "@/assets/about-image.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} id="about" className="py-32 px-6 opacity-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image on the left */}
          <div className="relative animate-on-scroll">
            <div className="relative overflow-hidden">
              <img 
                src={aboutImage} 
                alt="Ansar Mehmood - About"
                className="w-full h-auto object-cover rounded-lg shadow-large"
              />
            </div>
          </div>

          {/* Content on the right */}
          <div className="space-y-8">
            <div className="space-y-6 animate-on-scroll">
              <h2 className="text-5xl lg:text-6xl font-light text-foreground">
                About
              </h2>
              
              <div className="w-12 h-1 bg-primary"></div>
              
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                I'm a software engineer who bridges the gap between innovative ideas and robust digital solutions.
              </p>
            </div>

            <div className="space-y-6 animate-on-scroll">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working at Sales On Demand, I specialize in building web platforms and AI-driven tools 
                that solve real business challenges. My expertise spans React, TypeScript, Django, and cloud technologies.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in deploying live projects and working with platforms like AWS EC2, 
                I'm passionate about creating scalable solutions that make a difference.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 animate-on-scroll">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Location</p>
                <p className="text-lg font-medium">Lahore, Pakistan</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Focus</p>
                <p className="text-lg font-medium">Full Stack Development</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Experience</p>
                <p className="text-lg font-medium">3+ Years</p>
              </div>
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Status</p>
                <p className="text-lg font-medium text-primary">Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;