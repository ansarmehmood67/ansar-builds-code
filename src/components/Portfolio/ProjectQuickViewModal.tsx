import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectQuickViewModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectQuickViewModal = ({ project, onClose }: ProjectQuickViewModalProps) => {
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
    window.location.href = `/work/${project.slug}`;
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-strong">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl"
              />
              {project.galleryImages && project.galleryImages.length > 0 && (
                <div className="grid grid-cols-2 gap-2">
                  {project.galleryImages.slice(0, 3).map((image, index) => (
                    <img
                      key={index}
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{project.type}</Badge>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>
                <p className="text-muted-foreground mb-4">{project.summary}</p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground">
                    {project.problem || "Client needed a modern, scalable solution to improve their digital presence and user experience."}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">
                    Built a comprehensive solution using modern technologies with focus on performance, user experience, and scalability.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Result</h4>
                  <p className="text-sm text-muted-foreground">{project.outcome}</p>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h4 className="font-semibold text-foreground mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex gap-3 pt-4">
                <Button onClick={navigateToCaseStudy} className="flex-1">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Full Case Study
                </Button>
                {project.liveUrl && (
                  <Button 
                    variant="outline" 
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
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