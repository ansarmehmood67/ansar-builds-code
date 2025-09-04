import aboutImage from "@/assets/about-image.png";

const AboutSection = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "10+" },
    { label: "Happy Clients", value: "20+" }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-text-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for creating digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image on the left */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={aboutImage} 
                alt="Ansar Mehmood - About"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-card-gradient rounded-2xl shadow-card animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-xl shadow-glow animate-float" style={{ animationDelay: '3s' }} />
          </div>

          {/* Content on the right */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                Motivated Software Engineer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate junior software engineer specializing in React and Django development. 
                With hands-on experience deploying live projects and working with cloud platforms like AWS EC2, 
                I'm committed to continuous learning and delivering scalable solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working at Sales On Demand, I contribute to web platforms and AI-driven tools, 
                spanning frontend development, backend systems, and intelligent automation. My goal is to 
                support organizational growth through innovative technical contributions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">Lahore, Pakistan</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Education</p>
                <p className="font-semibold">Bachelor's in IT</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Focus</p>
                <p className="font-semibold">Full Stack Development</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Availability</p>
                <p className="font-semibold text-green-400">Open to Work</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-card-gradient rounded-2xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl lg:text-4xl font-bold bg-text-gradient bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;