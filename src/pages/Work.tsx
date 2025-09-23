import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { ProjectQuickViewModal } from "@/components/Portfolio/ProjectQuickViewModal";
import Navigation from "@/components/Portfolio/Navigation";
import Footer from "@/components/Portfolio/Footer";
import { useNavigate } from "react-router-dom";
import { FolderOpen } from "lucide-react";

const Work = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const projectTypes = ["All", "Website", "Chatbot", "Automation"];
  
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  const handleQuickView = (project: any) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen theme-light relative overflow-hidden pt-24 pb-16">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-6">
              <FolderOpen className="h-8 w-8 text-primary mr-3" />
              <span className="text-primary font-semibold text-lg tracking-wide uppercase">Portfolio</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
              My{" "}
              <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">Work</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of projects showcasing modern web development, AI integration, 
              automation solutions, and exceptional user experiences with measurable business impact.
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex gap-2 p-2 bg-white rounded-full border border-slate-200/50 shadow-lg">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeFilter === type
                      ? "bg-gradient-to-r from-primary to-primary-hover text-white shadow-lg"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.slug} 
                className="group hover:shadow-2xl transition-all duration-300 bg-white border border-slate-200/50"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                    {project.outcome}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary">{project.type}</Badge>
                    {project.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      onClick={() => navigate(`/work/${project.slug}`)}
                    >
                      Case Study
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleQuickView(project)}
                    >
                      Quick View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
      
      <Footer />
    </>
  );
};

export default Work;