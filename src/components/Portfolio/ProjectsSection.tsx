import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Bot, Globe, ShoppingCart } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "WhatsApp Onboarding Chatbot",
      description: "A GPT-powered WhatsApp chatbot for automated candidate registration and onboarding with Excel-driven bulk messaging, smart escalation to human agents, and comprehensive reporting dashboards.",
      technologies: ["Django", "Python", "Meta Cloud API", "OpenAI API", "Excel Integration"],
      icon: Bot,
      gradient: "from-green-500 to-blue-600",
      features: [
        "GPT-powered conversations",
        "Excel bulk messaging",
        "Smart escalation system",
        "Full chat history storage",
        "Reporting dashboards"
      ],
      status: "Production",
      type: "AI Automation"
    },
    {
      title: "Sales On Demand Website",
      description: "A professional multi-page business website with responsive design, SEO optimization, and bilingual content. Features a 14-service quiz funnel and integrated email marketing.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "MailerLite", "Shopify"],
      icon: Globe,
      gradient: "from-purple-500 to-pink-600",
      features: [
        "Responsive multi-page design",
        "SEO optimization",
        "Bilingual (Italian/English)",
        "14-service quiz funnel",
        "Email marketing integration"
      ],
      status: "Live",
      type: "Web Development"
    },
    {
      title: "Digital Solutions Portfolio",
      description: "Comprehensive freelance and personal projects including WordPress sites, SEO optimization, e-commerce platforms, and YouTube channel growth strategies.",
      technologies: ["WordPress", "React.js", "Django", "SEO Tools", "E-commerce APIs"],
      icon: ShoppingCart,
      gradient: "from-orange-500 to-red-600",
      features: [
        "WordPress & Django sites",
        "SEO optimization",
        "E-commerce integration",
        "GPT-powered chatbots",
        "YouTube automation"
      ],
      status: "Ongoing",
      type: "Freelance Work"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-text-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work in web development, AI automation, and digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-1 xl:grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="bg-card-gradient border-border/50 shadow-card hover:shadow-glow transition-all duration-500 group animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-primary font-medium">{project.type}</p>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed mt-4">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="bg-hero-gradient hover:bg-hero-gradient/90 text-white shadow-glow"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card-gradient rounded-3xl border border-border/50 shadow-elegant p-8">
            <h3 className="text-2xl font-bold mb-4">
              Want to see more of my work?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These are just a few highlights from my portfolio. I have more projects and case studies 
              that showcase different aspects of my development expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-hero-gradient hover:bg-hero-gradient/90 text-white shadow-glow"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;