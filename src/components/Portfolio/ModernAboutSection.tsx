import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/ansar-about-image.png";

const ModernAboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section 
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 theme-light relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer | React • Django • TypeScript
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-on-scroll">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutImage} 
                  alt="Ansar Mehmood - Full Stack Developer"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-on-scroll">
            <div className="space-y-6">
              <p className="text-xl text-slate-800 leading-relaxed">
                I'm Ansar Mehmood, a software engineer passionate about building user-friendly interfaces and scalable backend systems. Over the last few years, I've worked with clients internationally as a freelance full-stack developer and currently contribute to enterprise projects at SalesOnDemand, where I build modern React + Django solutions.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                My experience includes deploying live applications, integrating APIs, and managing cloud infrastructure on AWS EC2. I enjoy bridging the gap between frontend and backend, ensuring products are not only technically strong but also deliver real business value.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                I'm continuously learning, refining my craft, and always open to exciting opportunities where I can grow, collaborate, and make an impact.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center space-x-3 text-slate-600">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Available Remotely</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <Mail className="h-5 w-5 text-primary" />
                <span>ansar@example.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button 
                size="lg"
                className="bg-primary hover:scale-105 text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-8 py-4 text-lg rounded-2xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernAboutSection;