export interface Service {
  title: string;
  summary: string;
  deliverables: string[];
  timeline: string;
  startingPrice: string;
}

export const services: Service[] = [
  {
    title: "Custom Web Development",
    summary: "Modern, responsive websites and web applications built with the latest technologies for optimal performance and user experience.",
    deliverables: [
      "Responsive design for all devices",
      "Fast loading times (< 3 seconds)",
      "SEO optimization and analytics setup",
      "Content management system",
      "SSL certificate and security setup",
      "3 months free maintenance and support"
    ],
    timeline: "2-4 weeks",
    startingPrice: "2,500"
  },
  {
    title: "AI Chatbot Development",
    summary: "Intelligent chatbots that understand natural language, qualify leads, provide customer support, and integrate with your existing systems.",
    deliverables: [
      "Natural language processing capabilities",
      "Integration with your CRM/database",
      "Multi-platform deployment (website, WhatsApp)",
      "Custom conversation flows and responses",
      "Analytics dashboard and reporting",
      "Training and handover documentation"
    ],
    timeline: "1-3 weeks",
    startingPrice: "1,500"
  },
  {
    title: "Business Process Automation",
    summary: "Streamline your workflows by connecting different tools and automating repetitive tasks to save time and reduce errors.",
    deliverables: [
      "Workflow analysis and optimization recommendations",
      "Custom automation setup and testing",
      "Integration between multiple platforms",
      "Error handling and notification systems",
      "Documentation and team training",
      "30 days of monitoring and adjustments"
    ],
    timeline: "1-2 weeks",
    startingPrice: "800"
  },
  {
    title: "Full-Stack Development",
    summary: "Complete web applications with custom backend, database design, API development, and modern frontend interfaces.",
    deliverables: [
      "Custom backend API development",
      "Database design and optimization",
      "User authentication and authorization",
      "Admin dashboard and content management",
      "Third-party integrations (payments, emails)",
      "Deployment and hosting setup"
    ],
    timeline: "4-8 weeks",
    startingPrice: "5,000"
  }
];