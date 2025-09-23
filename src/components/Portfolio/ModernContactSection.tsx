import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ModernContactSection = () => {
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
      title: "Message sent successfully!",
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
      value: "ansarmehmood.dev@gmail.com",
      href: "mailto:ansarmehmood.dev@gmail.com"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ansarmehmood"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ansarmehmood"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gray-50 theme-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
         {/* Consistent Header */}
        <div className="text-center mb-16 animate-on-scroll">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative">
          Let's Work Together
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></div>
        </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            <span className="text-primary font-semibold">Ready</span> to bring your ideas to life? Let's discuss your project and deliver <span className="text-primary font-semibold">professional solutions</span>.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form - 2/3 width */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-14 text-lg bg-white border-gray-200 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-14 text-lg bg-white border-gray-200 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="text-lg bg-white border-gray-200 focus:border-primary focus:ring-primary/20 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-hero-gradient hover:scale-[1.02] text-white font-semibold text-lg transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info - 1/3 width */}
          <div className="space-y-8">
            {/* Essential Contact Info */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-gray-900 font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-gray-900 font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <social.icon className="h-6 w-6 text-gray-500 group-hover:text-primary transition-colors" />
                    <span className="text-gray-900 group-hover:text-primary font-medium transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContactSection;