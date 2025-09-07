import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, User, Clock } from "lucide-react";
import { projects } from "@/data/projects";

const CaseStudy = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Button onClick={() => navigate('/work')}>Back to Work</Button>
        </div>
      </div>
    );
  }

  const handleNavProject = (targetSlug: string) => {
    navigate(`/work/${targetSlug}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="pt-24 pb-12 border-b border-border">
        <div className="container mx-auto px-6">
          <Button 
            variant="outline" 
            className="mb-8"
            onClick={() => navigate('/work')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Work
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{project.type}</Badge>
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>Full Stack Developer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>4-6 weeks</span>
                  </div>
                </CardContent>
              </Card>
              
              {project.liveUrl && (
                <Button className="w-full" onClick={() => window.open(project.liveUrl, '_blank')}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Live Site
                </Button>
              )}
              
              {project.githubUrl && (
                <Button variant="outline" className="w-full" onClick={() => window.open(project.githubUrl, '_blank')}>
                  <Github className="w-4 h-4 mr-2" />
                  View Source
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Image */}
          <div className="relative">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>

          {/* Problem & Goals */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Challenge & Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">The Problem</h3>
                  <p className="text-muted-foreground">
                    {project.problem || "The client needed a modern, performant solution that could scale with their growing business while maintaining exceptional user experience."}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Success Metrics</h3>
                  <p className="text-muted-foreground">
                    {project.outcome}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Solution & Architecture</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-6">
                  I built a comprehensive solution using modern technologies and best practices. 
                  The architecture was designed for scalability, performance, and maintainability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>React with TypeScript</li>
                      <li>Tailwind CSS for styling</li>
                      <li>Framer Motion for animations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Backend</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Node.js with Express</li>
                      <li>PostgreSQL database</li>
                      <li>JWT authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Deployment</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>Vercel for frontend</li>
                      <li>Railway for backend</li>
                      <li>Cloudinary for assets</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Gallery */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Screens & Walkthrough</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.galleryImages?.map((image, index) => (
                <div key={index} className="space-y-3">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                  <p className="text-sm text-muted-foreground text-center">
                    {image.caption}
                  </p>
                </div>
              )) || (
                // Fallback images if galleryImages is not defined
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="space-y-3">
                    <img
                      src={project.coverImage}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <p className="text-sm text-muted-foreground text-center">
                      {`${project.title} - View ${index + 1}`}
                    </p>
                  </div>
                ))
              )}
            </div>
          </section>

          {/* Impact */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-6">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Performance Score</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2.3s</div>
                  <div className="text-sm text-muted-foreground">Load Time</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">45%</div>
                  <div className="text-sm text-muted-foreground">Conversion Increase</div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Testimonial */}
          {project.testimonial && (
            <section>
              <Card>
                <CardContent className="p-8 text-center">
                  <blockquote className="text-xl text-foreground mb-4 italic">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <div className="text-muted-foreground">
                    <div className="font-semibold">{project.testimonial.author}</div>
                    <div className="text-sm">{project.testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </section>
          )}

          {/* CTA */}
          <section className="text-center bg-card rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Want results like this?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help transform your ideas into exceptional digital experiences 
              that drive real business results.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')}>
              Start a Project
            </Button>
          </section>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div>
              {prevProject && (
                <Button 
                  variant="outline" 
                  onClick={() => handleNavProject(prevProject.slug)}
                  className="group"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Previous</div>
                    <div className="font-medium">{prevProject.title}</div>
                  </div>
                </Button>
              )}
            </div>
            <div>
              {nextProject && (
                <Button 
                  variant="outline" 
                  onClick={() => handleNavProject(nextProject.slug)}
                  className="group"
                >
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Next</div>
                    <div className="font-medium">{nextProject.title}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;