import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Hire me for...
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I help businesses grow through modern web development, AI automation, and seamless user experiences. 
            Let's build something remarkable together.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-medium transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-2xl text-foreground">
                    {service.title}
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    {service.timeline}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-lg">
                  {service.summary}
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">What you get:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-muted-foreground">Starting at</span>
                    <div className="text-2xl font-bold text-foreground">
                      ${service.startingPrice}
                    </div>
                  </div>
                  <Button 
                    onClick={() => window.location.href = '/contact'}
                    className="group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Not sure which service fits your needs?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's have a conversation about your project goals and I'll recommend the best approach 
            to achieve them within your timeline and budget.
          </p>
          <Button size="lg" onClick={() => window.location.href = '/contact'}>
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;