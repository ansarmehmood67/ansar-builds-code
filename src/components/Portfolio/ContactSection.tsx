import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  ExternalLink,
  Globe,
  Briefcase
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ansarmemhood.dev@gmail.com",
      href: "mailto:ansarmemhood.dev@gmail.com",
      color: "text-red-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 3227555459",
      href: "tel:+923227555459",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mandi Usman Wala, Kasur",
      href: "#",
      color: "text-blue-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/ansarmehmood67",
      href: "https://github.com/ansarmehmood67",
      color: "text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ansarmehmood67",
      href: "https://linkedin.com/in/ansarmehmood67",
      color: "text-blue-400"
    },
    {
      icon: Globe,
      label: "Website",
      value: "ansarmehmood.com",
      href: "https://ansarmehmood.com",
      color: "text-purple-400"
    },
    {
      icon: Briefcase,
      label: "Upwork",
      value: "bit.ly/ansar-upwork",
      href: "https://bit.ly/ansar-upwork",
      color: "text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="bg-text-gradient bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card-gradient border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name"
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border/50 focus:border-primary/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?"
                    className="bg-background/50 border-border/50 focus:border-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="w-full bg-hero-gradient hover:bg-hero-gradient/90 text-white shadow-glow group"
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-card-gradient border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Get in touch through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors group"
                    >
                      <div className={`p-2 rounded-lg bg-background/50 ${contact.color}`}>
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {contact.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card-gradient border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Find me online</CardTitle>
                <CardDescription>
                  Connect with me on social platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-background/50 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-background/50 ${social.color}`}>
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {social.label}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {social.value}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  );
                })}
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 shadow-card">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-green-400 font-semibold">Available for Work</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Currently open to new opportunities and exciting projects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;