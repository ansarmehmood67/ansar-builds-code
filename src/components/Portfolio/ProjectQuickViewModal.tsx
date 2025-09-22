import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectQuickViewModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectQuickViewModal = ({ project, onClose }: ProjectQuickViewModalProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const navigateToCaseStudy = () => {
    onClose();
    navigate(`/work/${project.slug}`);
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in-0 duration-300"
      onClick={handleBackdropClick}
    >
      <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-border/30 bg-gradient-to-r from-background/50 to-background/30">
          <div className="animate-in slide-in-from-left-4 duration-500 delay-100">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {project.title}
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <Badge variant="secondary" className="px-3 py-1 text-xs font-medium">
                {project.type}
              </Badge>
              <span className="text-sm text-muted-foreground/80">{project.date}</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full h-10 w-10 hover:bg-background/50 transition-all duration-200 animate-in zoom-in-0 duration-500 delay-200"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)] bg-gradient-to-b from-background/20 to-background/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Image Gallery */}
            <div className="space-y-6 animate-in slide-in-from-left-8 duration-700 delay-300">
              <div className="relative overflow-hidden rounded-2xl group">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {project.galleryImages && project.galleryImages.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {project.galleryImages.slice(0, 3).map((image, index) => (
                    <div 
                      key={index} 
                      className="relative overflow-hidden rounded-xl group cursor-pointer"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    >
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-24 object-cover transition-all duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="space-y-8 animate-in slide-in-from-right-8 duration-700 delay-400">
              <div className="animate-in fade-in-0 duration-500 delay-500">
                <p className="text-muted-foreground leading-relaxed text-base">
                  {project.summary}
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-6">
                {[
                  {
                    title: "Problem",
                    content: project.problem || "Client needed a modern, scalable solution to improve their digital presence and user experience.",
                    delay: "delay-600"
                  },
                  {
                    title: "Solution", 
                    content: "Built a comprehensive solution using modern technologies with focus on performance, user experience, and scalability.",
                    delay: "delay-700"
                  },
                  {
                    title: "Result",
                    content: project.outcome,
                    delay: "delay-800"
                  }
                ].map((item, index) => (
                  <div key={item.title} className={`animate-in slide-in-from-bottom-4 duration-500 ${item.delay} p-4 rounded-xl bg-muted/20 border border-border/20`}>
                    <h4 className="font-semibold text-foreground mb-3 text-lg">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="animate-in slide-in-from-bottom-4 duration-500 delay-900">
                <h4 className="font-semibold text-foreground mb-4 text-lg">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="px-3 py-1 text-xs font-medium hover:bg-primary/10 transition-colors duration-200"
                      style={{ animationDelay: `${900 + (index * 50)}ms` }}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-4 pt-6 animate-in slide-in-from-bottom-4 duration-500 delay-1000">
                <Button 
                  onClick={navigateToCaseStudy} 
                  className="flex-1 h-12 text-base font-medium hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Full Case Study
                </Button>
                {project.liveUrl && (
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1 h-12 text-base font-medium hover:bg-primary/5 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Site
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};