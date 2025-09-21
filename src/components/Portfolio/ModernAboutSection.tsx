import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TrendingUp, Award, Users, Coffee, MapPin, Mail, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.png";

const ModernAboutSection = () => {
  const ref = useScrollAnimation();

  const stats = [
    {
      icon: TrendingUp,
      number: "$15K+",
      label: "Revenue Generated",
      description: "Through successful freelance projects",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      number: "9+",
      label: "Projects Completed",
      description: "Across web development & AI automation",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      number: "3+",
      label: "Years Experience",
      description: "Building solutions that matter",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Coffee,
      number: "100%",
      label: "Client Satisfaction",
      description: "Delivering excellence every time",
      color: "from-orange-500 to-red-500"
    }
  ];

  const personalHighlights = [
    {
      title: "Problem Solver at Heart",
      description: "I love turning complex challenges into elegant, user-friendly solutions that make a real difference."
    },
    {
      title: "AI Integration Specialist", 
      description: "Passionate about leveraging cutting-edge AI technologies to automate processes and enhance user experiences."
    },
    {
      title: "Full-Stack Expertise",
      description: "From beautiful frontends to robust backends, I build complete solutions that scale with your business."
    },
    {
      title: "Continuous learner",
      description: "Always exploring new technologies and methodologies to stay at the forefront of web development."
    }
  ];

  return (
    <section 
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 theme-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-primary mr-3" />
            <span className="text-primary font-semibold text-lg tracking-wide uppercase">Get to Know Me</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
            About{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">Alex</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate developer crafting digital experiences that combine creativity, 
            technical excellence, and real business impact
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Side */}
          <div className="space-y-8 animate-on-scroll">
            <div className="space-y-6">
              <p className="text-xl text-foreground leading-relaxed">
                Hey there! I'm Alex, a passionate full-stack developer with over 3 years of experience 
                turning innovative ideas into powerful digital solutions. My journey began with curiosity 
                about how technology can solve real-world problems, and it's evolved into a mission to 
                create exceptional web experiences.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my Computer Science degree while working as a Software Engineer at 
                SalesOnDemand, I've successfully delivered projects ranging from e-commerce platforms 
                to AI-powered automation systems. My freelance work has generated over $15K in revenue, 
                serving clients across Europe and the US.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                What drives me is the intersection of creativity and technology—building solutions that 
                not only work flawlessly but also delight users and drive business growth. Whether it's 
                integrating AI chatbots or optimizing performance, I'm always excited about the next challenge.
              </p>
            </div>

            {/* Personal Highlights */}
            <div className="space-y-4">
              {personalHighlights.map((highlight, index) => (
                <div 
                  key={highlight.title}
                  className="group p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-hover transition-colors">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-6 pt-6">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Available Remotely</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>alex@example.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Button 
                size="lg"
                className="bg-hero-gradient hover:scale-105 text-white shadow-glow hover:shadow-xl transition-all duration-300 font-semibold px-8 py-4 text-lg rounded-2xl"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative animate-on-scroll">
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src={aboutImage} 
                  alt="Alex - Full Stack Developer"
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-hero-gradient rounded-2xl blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Floating Stats Card */}
              <div className="absolute -right-8 top-20 bg-card/90 backdrop-blur-xl rounded-2xl p-6 border border-border/50 shadow-2xl animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">$15K+</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-on-scroll">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="group bg-card/50 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="text-4xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">
                  {stat.number}
                </div>
                
                <div className="text-lg font-bold text-primary mb-3">
                  {stat.label}
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernAboutSection;