import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '@/data/projects';
import { useStaggerReveal, useScrollReveal, useProfessionalHover } from '@/hooks/useProfessionalAnimations';

const ModernPortfolioSection = () => {
  const navigate = useNavigate();
  const sectionRef = useScrollReveal({ delay: 0.2 });
  const projectsRef = useStaggerReveal(0.12);

  const handleCaseStudy = (slug: string) => {
    navigate(`/project/${slug}`);
  };

  const featuredProjects = projects.slice(0, 6);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-child">
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of recent work spanning web applications, mobile apps, 
            and innovative digital solutions that drive real business results.
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <ProjectCard 
              key={project.slug} 
              project={project} 
              onViewDetails={handleCaseStudy}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center animate-child">
          <Button 
            size="lg" 
            variant="outline" 
            className="hover-scale group"
            onClick={() => navigate('/work')}
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ 
  project, 
  onViewDetails 
}: { 
  project: any; 
  onViewDetails: (slug: string) => void; 
}) => {
  const cardRef = useProfessionalHover();

  return (
    <Card 
      ref={cardRef}
      className="stagger-item glass-card p-0 overflow-hidden cursor-pointer group"
      onClick={() => onViewDetails(project.slug)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        {/* Project Type Badge */}
        <Badge 
          className="absolute top-4 left-4 bg-primary/90 text-primary-foreground"
        >
          {project.type}
        </Badge>
      </div>

      {/* Project Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tech: string) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-muted rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-muted rounded text-xs font-medium">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex space-x-2">
            {project.liveUrl && (
              <Button 
                size="sm" 
                variant="ghost" 
                className="hover-scale p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
                }}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
            {project.githubUrl && (
              <Button 
                size="sm" 
                variant="ghost" 
                className="hover-scale p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
                }}
              >
                <Github className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          <Button 
            size="sm" 
            className="hover-scale group/btn"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(project.slug);
            }}
          >
            View Details
            <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ModernPortfolioSection;