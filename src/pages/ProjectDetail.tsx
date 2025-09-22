import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Calendar, Code, User, Info } from "lucide-react";
import { projects } from "@/data/projects";
import Navigation from "@/components/Portfolio/Navigation";
import Footer from "@/components/Portfolio/Footer";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.slug === slug);

  useEffect(() => {
    if (!project) {
      navigate('/404');
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

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

  const typeStyle = projectTypes[project.type as keyof typeof projectTypes];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          {/* Project Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Badge 
                  className={`${typeStyle.bgColor} ${typeStyle.textColor} border-0 font-semibold px-4 py-2`}
                >
                  <span className="mr-2">{typeStyle.icon}</span>
                  {project.type}
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 bg-slate-100 text-slate-700">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.date}
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.liveUrl && (
                  <Button 
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                )}
              </div>
            </div>

            <div className="relative">
              <img 
                src={project.coverImage} 
                alt={project.title}
                className="w-full rounded-2xl shadow-2xl border border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About Section */}
              <Card className="border border-slate-200 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Info className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">About</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {project.about}
                  </p>
                </CardContent>
              </Card>

              {/* My Role Section */}
              <Card className="border border-slate-200 shadow-lg bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">My Role</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {project.role}
                  </p>
                </CardContent>
              </Card>

              {/* Screenshots Gallery */}
              <Card className="border border-slate-200 shadow-lg bg-white">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-8">Project Screenshots</h2>
                  <div className="space-y-8">
                    {project.detailScreenshots.map((screenshot, index) => (
                      <div key={index} className="space-y-4">
                        <img 
                          src={screenshot.url} 
                          alt={screenshot.caption}
                          className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-200"
                        />
                        <p className="text-slate-600 text-center italic">
                          {screenshot.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Tech Stack */}
              <Card className="border border-slate-200 shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Code className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Tech Stack</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary" 
                        className="bg-slate-100 text-slate-700 font-medium px-3 py-2 border border-slate-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Results */}
              <Card className="border border-slate-200 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Results</h3>
                  <div className="text-primary font-bold text-lg">
                    {project.outcome}
                  </div>
                </CardContent>
              </Card>

              {/* Live Demo CTA */}
              {project.liveUrl && (
                <Card className="border border-slate-200 shadow-lg bg-gradient-to-br from-primary to-primary-hover text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-4">See It Live</h3>
                    <p className="text-white/90 mb-6">
                      Experience the project in action
                    </p>
                    <Button 
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="w-full bg-white text-primary hover:bg-slate-50 font-semibold"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Live Site
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;