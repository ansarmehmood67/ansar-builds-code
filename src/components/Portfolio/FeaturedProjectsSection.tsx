import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { projects } from "@/data/projects";


const FeaturedProjectsSection = () => {
  const ref = useScrollAnimation();
  // Get one project of each type for featured display
  const featuredProjects = [
    projects.find(p => p.type === "Website"),
    projects.find(p => p.type === "Chatbot"),
    projects.find(p => p.type === "Automation")
  ].filter(Boolean);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of recent work showcasing modern web development, AI integration, and automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.slug} 
              className="group hover:shadow-medium transition-all duration-300 animate-on-scroll overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-foreground">
                    {project.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.outcome}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    onClick={() => window.location.href = `/work/${project.slug}`}
                  >
                    Case study
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-on-scroll">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/work'}
            className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-2xl"
          >
            View all projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

    </section>
  );
};

export default FeaturedProjectsSection;