import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  MessageCircle, 
  Clock, 
  CheckCircle, 
  Star,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ModernContactSection = () => {
  const ref = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully! 🎉",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ansar@example.com",
      href: "mailto:ansar@example.com",
      description: "Best way to reach me"
    },
    {
      icon: MapPin,
      label: "Location", 
      value: "Available Remotely",
      href: null,
      description: "Working with clients worldwide"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
      description: "Quick turnaround guaranteed"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ansarmehmood",
      followers: "50+ repositories",
      color: "hover:text-gray-900 hover:bg-gray-100"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ansarmehmood",
      followers: "500+ connections",
      color: "hover:text-blue-600 hover:bg-blue-50"
    }
  ];

  const whyWorkWithMe = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround without compromising quality"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Attention to detail in every project"
    },
    {
      icon: CheckCircle,
      title: "100% Satisfaction",
      description: "Guaranteed satisfaction or money back"
    }
  ];

  return (
    <section 
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="h-8 w-8 text-primary mr-3 animate-pulse" />
            <span className="text-primary font-semibold text-lg tracking-wide uppercase">Let's Connect</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your vision and turn it into reality. From concept to deployment, 
            I'm here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Card className="bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-700 animate-on-scroll">
              <CardContent className="p-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">
                    Send me a message
                  </h3>
                  <p className="text-slate-600 text-lg">
                    Tell me about your project and let's create something amazing together.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-slate-900 font-medium text-lg">Your Name</label>
                      <Input
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-14 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-primary focus:ring-primary/20 text-lg rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-900 font-medium text-lg">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-14 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-primary focus:ring-primary/20 text-lg rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-slate-900 font-medium text-lg">Project Details</label>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                      rows={8}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-500 focus:border-primary focus:ring-primary/20 resize-none text-lg rounded-xl"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 bg-primary hover:scale-105 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-3 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social - Takes 1 column */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index} 
                      className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="text-slate-900 font-semibold hover:text-primary transition-colors text-lg mb-1 block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-slate-900 font-semibold text-lg mb-1">{item.value}</div>
                        )}
                        <div className="text-sm text-slate-500">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
                  <Github className="h-6 w-6 text-primary mr-3" />
                  Connect Online
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 group ${social.color}`}
                    >
                      <div className="flex items-center space-x-4">
                        <social.icon className="h-7 w-7 text-slate-600 group-hover:text-primary transition-colors" />
                        <div>
                          <span className="text-slate-900 font-semibold text-lg group-hover:text-primary transition-colors block">
                            {social.label}
                          </span>
                          <span className="text-sm text-slate-500">{social.followers}</span>
                        </div>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Why Work With Me */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 shadow-xl animate-on-scroll">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Star className="h-6 w-6 text-primary mr-3" />
                  Why Choose Me?
                </h3>
                <div className="space-y-4">
                  {whyWorkWithMe.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <item.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900">{item.title}</div>
                        <div className="text-sm text-slate-600">{item.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContactSection;