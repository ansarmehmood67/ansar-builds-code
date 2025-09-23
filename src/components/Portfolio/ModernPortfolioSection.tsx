import { useState } from "react";
import { useElementAnimation } from "@/hooks/useElementAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, FolderOpen, ArrowUpRight, Star, TrendingUp } from "lucide-react";
import { projects } from "@/data/projects";

import { useNavigate } from "react-router-dom";

const ModernPortfolioSection = () => {
  const ref = useElementAnimation();
  const navigate = useNavigate();
  // Get all 4 featured projects
  const featuredProjects = projects;

  const handleCaseStudy = (slug: string) => {
    navigate(`/projects/${slug}`);
  };

  const projectTypes = {
    "Website": { 
      color: "from-blue-500 to-cyan-500", 
      bgColor: "bg-blue-500/10", 
      textColor: "text-blue-600",
      icon: "🌐"
    },
    "Chatbot": { 
      color: "from-purple-500 to-pink-500", 
      bgColor: "bg-purple-500/10", 
      textColor: "text-purple-600",
      icon: "🤖"
    },
    "Automation": { 
      color: "from-orange-500 to-red-500", 
      bgColor: "bg-orange-500/10", 
      textColor: "text-orange-600",
      icon: "⚡"
    }
  };

  return (
    <section 
      id="portfolio"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 theme-light relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Consistent Header */}
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
          Featured Projects
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
        </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-text">
            A showcase of recent work demonstrating expertise in <span className="text-primary font-semibold">web development</span>, 
            <span className="text-primary font-semibold">AI automation</span>, and <span className="text-primary font-semibold">chatbot solutions</span> with measurable business impact
          </p>
        </div>

        {/* Stylish Single Row Projects Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.slug} 
              className="card group hover:shadow-2xl transition-all duration-300 bg-white border border-slate-200/50"
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary">{project.type}</Badge>
                  {project.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="default" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    onClick={() => handleCaseStudy(project.slug)}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-xl">
            <div className="text-2xl font-bold text-slate-900 mb-4">
              Want to see more of my work?
            </div>
            <p className="text-slate-600 mb-8 max-w-md">
              Explore my complete portfolio with detailed case studies, live demos, and technical deep-dives.
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('/work')}
              className="bg-gradient-to-r from-primary to-primary-hover text-white font-bold px-12 py-4 text-lg rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Projects
              <ArrowUpRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ModernPortfolioSection;