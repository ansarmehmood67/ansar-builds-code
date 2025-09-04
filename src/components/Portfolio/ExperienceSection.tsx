import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Sales On Demand",
      period: "Jan 2025 – Present",
      location: "Lahore/Remote",
      type: "Full-time",
      description: "Contributing to the development of web platforms and AI-driven tools for business growth, spanning frontend development, backend systems, and intelligent automation.",
      achievements: [
        "Developed and optimized company websites using React, TypeScript, and Tailwind CSS",
        "Built GPT-powered WhatsApp onboarding chatbot with Django and Meta Cloud API",
        "Collaborating on AI-driven CRM Agent for lead management automation",
        "Enabling automated candidate registration and communication workflows"
      ],
      technologies: ["React", "TypeScript", "Tailwind", "Django", "Python", "OpenAI API", "Meta Cloud API", "Shopify"],
      icon: Building2,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Digital Solutions Specialist / Freelance Software Developer",
      company: "Freelance",
      period: "2021 – Present",
      location: "Lahore/Remote",
      type: "Freelance",
      description: "Delivered multi-skilled digital solutions for local and international clients, combining software development, e-commerce, automation, and content-driven growth strategies.",
      achievements: [
        "Built and maintained websites using WordPress, Django, and React with SEO focus",
        "Worked on Etsy & eBay stores, supporting product listings and digital presence",
        "Created GPT-powered chatbots and automation workflows",
        "Designed and ranked online flower shop into Top 10 Google results for multiple keywords",
        "Provided content, video automation, and YouTube channel growth strategies"
      ],
      technologies: ["WordPress", "React", "Django", "SEO", "E-commerce", "GPT", "Automation Tools"],
      icon: Briefcase,
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const education = {
    degree: "Bachelor's in Information Technology",
    year: "2025",
    institution: "University of Okara",
    description: "Comprehensive study of computer science fundamentals, software engineering principles, and modern development technologies."
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="bg-text-gradient bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in software development and the impact I've made across different organizations
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <Card 
                key={exp.company}
                className="bg-card-gradient border-border/50 shadow-card hover:shadow-glow transition-all duration-500 group animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.gradient} shadow-lg flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {exp.title}
                        </CardTitle>
                        <Badge variant="secondary" className="text-xs w-fit">
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium text-primary">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {exp.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Education Section */}
        <div className="bg-card-gradient rounded-3xl border border-border/50 shadow-elegant p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-text-gradient bg-clip-text text-transparent">Education</span>
            </h3>
            <p className="text-muted-foreground">
              Academic foundation that supports my technical expertise
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-background/50 border-border/30">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="p-4 bg-hero-gradient rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-1">
                      {education.degree}
                    </h4>
                    <p className="text-primary font-medium">{education.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">Graduating {education.year}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Career Objective */}
        <div className="mt-16 text-center">
          <div className="bg-card-gradient rounded-3xl border border-border/50 shadow-elegant p-8">
            <h3 className="text-2xl font-bold mb-4">
              Career <span className="bg-text-gradient bg-clip-text text-transparent">Objective</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Looking for an entry-level Full Stack Developer position in Lahore where I can apply my skills 
              in React, TypeScript, and Django to build user-friendly interfaces, develop reliable backend systems, 
              and contribute to projects that drive real business results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;