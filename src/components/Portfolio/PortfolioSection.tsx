import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
  const ref = useScrollAnimation();
  const navigate = useNavigate();
  // Get featured projects - one of each type
  const featuredProjects = [
    projects.find(p => p.type === "Website"),
    projects.find(p => p.type === "Chatbot"),
    projects.find(p => p.type === "Automation"),
    projects[3] // Get one more for 4 total
  ].filter(Boolean);

  const handleCaseStudy = (slug: string) => {
    navigate(`/work/${slug}`);
  };

  return (
    <section 
      id="portfolio"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 theme-light"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work in web development, AI automation, and chatbot solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.slug}
              className="group overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className="bg-primary/10 text-primary hover:bg-primary/20 font-medium"
                  >
                    {project.type}
                  </Badge>
                  <span className="text-sm text-slate-500">{project.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.summary}
                </p>
                
                <div className="mb-6">
                  <div className="text-sm font-medium text-slate-700 mb-2">Key Results:</div>
                  <div className="text-primary font-semibold">{project.outcome}</div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    onClick={() => handleCaseStudy(project.slug)}
                    className="flex-1 bg-primary hover:bg-primary-hover text-white font-medium"
                  >
                    Case Study
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-on-scroll">
          <Button 
            onClick={() => navigate('/work')}
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8"
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

    </section>
  );
};

export default PortfolioSection;