import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Globe, Calendar } from "lucide-react";

const About = () => {
  const skills = {
    Frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    Backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"],
    "AI & Automation": ["OpenAI API", "Langchain", "Zapier", "Make.com", "ChatGPT"]
  };

  const timeline = [
    { year: "2024", milestone: "Launched AI chatbot agency, 50+ successful deployments" },
    { year: "2023", milestone: "Full-stack developer, specialized in React ecosystem" },
    { year: "2022", milestone: "Started freelance web development journey" },
    { year: "2021", milestone: "Computer Science graduate, focused on modern web technologies" }
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              I'm Ansar Mehmood
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A passionate software engineer who transforms ideas into exceptional digital experiences. 
              I specialize in building modern web applications and AI-powered solutions that drive real business results.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              When I'm not coding, you'll find me exploring the latest in AI technology, contributing to open-source projects, 
              or sharing knowledge with the developer community. I believe in writing clean, maintainable code and creating 
              user experiences that truly matter.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>English, Urdu, Punjabi</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Available for projects</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <img
                src="https://res.cloudinary.com/dufcnrcfe/image/upload/v1757207844/Untitled_design_73_siy38y.png"
                alt="Ansar Mehmood"
                className="w-full h-auto rounded-2xl grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 rounded-2xl" />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, techs]) => (
              <Card key={category}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            My Journey
          </h2>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                    {item.year.slice(-2)}
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="text-lg font-semibold text-foreground mb-1">
                    {item.year}
                  </div>
                  <p className="text-muted-foreground">
                    {item.milestone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Let's work together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a specific idea in mind or just want to explore possibilities, I'd love to chat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href = '/contact'}>
              Start a Project
            </Button>
            <Button variant="outline" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;