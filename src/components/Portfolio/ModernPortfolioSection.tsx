import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, FolderOpen, ArrowUpRight, Star, TrendingUp } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectQuickViewModal } from "./ProjectQuickViewModal";
import { useNavigate } from "react-router-dom";

const ModernPortfolioSection = () => {
  const ref = useScrollAnimation();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Get all 4 featured projects
  const featuredProjects = projects;

  const handleQuickView = (project: any) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <FolderOpen className="h-8 w-8 text-primary mr-3" />
            <span className="text-primary font-semibold text-lg tracking-wide uppercase">My Work</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of recent work demonstrating expertise in web development, 
            AI automation, and chatbot solutions with measurable business impact
          </p>
        </div>

        {/* Creative Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => {
            const typeStyle = projectTypes[project.type as keyof typeof projectTypes];
            const isLargeCard = index === 0 || index === 3;
            
            return (
              <Card 
                key={project.slug}
                className={`group overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 animate-on-scroll ${
                  isLargeCard ? 'lg:row-span-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Project Image */}
                <div className={`relative overflow-hidden ${isLargeCard ? 'aspect-[4/3]' : 'aspect-video'}`}>
                  <img 
                    src={project.coverImage} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      className={`${typeStyle.bgColor} ${typeStyle.textColor} border-0 font-semibold px-3 py-1.5 text-sm backdrop-blur-sm`}
                    >
                      <span className="mr-1.5">{typeStyle.icon}</span>
                      {project.type}
                    </Badge>
                  </div>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex space-x-3">
                      <Button 
                        size="sm"
                        onClick={() => handleCaseStudy(project.slug)}
                        className="bg-white text-slate-900 hover:bg-white/90 font-semibold shadow-xl border-0"
                      >
                        View Details
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className={`p-6 ${isLargeCard ? 'lg:p-8' : ''}`}>
                  {/* Project Title */}
                  <h3 className={`font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors ${
                    isLargeCard ? 'text-2xl' : 'text-xl'
                  }`}>
                    {project.title}
                  </h3>
                  
                  {/* Project Summary */}
                  <p className={`text-slate-600 mb-4 leading-relaxed ${
                    isLargeCard ? 'text-base line-clamp-4' : 'text-sm line-clamp-2'
                  }`}>
                    {project.summary}
                  </p>
                  
                  {/* Action Button */}
                  <Button 
                    onClick={() => handleCaseStudy(project.slug)}
                    variant="outline"
                    size={isLargeCard ? "default" : "sm"}
                    className="w-full border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                  >
                    View Details
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16 animate-on-scroll">
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

      {/* Quick View Modal */}
      {selectedProject && (
        <ProjectQuickViewModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default ModernPortfolioSection;