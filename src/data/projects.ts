export interface Project {
  slug: string;
  title: string;
  type: "Website" | "Chatbot" | "Automation";
  summary: string;
  outcome: string;
  tags: string[];
  coverImage: string;
  galleryImages?: Array<{ url: string; caption: string }>;
  liveUrl?: string;
  githubUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  date: string;
  problem?: string;
}

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "Modern E-commerce Platform",
    type: "Website",
    summary: "A full-stack e-commerce solution with advanced filtering, payment integration, and admin dashboard.",
    outcome: "+65% conversion rate, 2.1s load time",
    tags: ["React", "Node.js", "Stripe", "PostgreSQL"],
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/ansarmehmood/ecommerce-platform",
    testimonial: {
      quote: "Ansar delivered exactly what we needed. The platform is fast, user-friendly, and has significantly improved our online sales.",
      author: "Sarah Johnson",
      role: "CEO, Fashion Forward"
    },
    date: "2024-03",
    problem: "The client's existing e-commerce site was slow, outdated, and had poor mobile experience leading to high cart abandonment rates."
  },
  {
    slug: "ai-customer-support",
    title: "AI-Powered Customer Support Bot",
    type: "Chatbot",
    summary: "Intelligent chatbot with natural language processing for 24/7 customer support and lead qualification.",
    outcome: "85% customer satisfaction, 40% support cost reduction",
    tags: ["OpenAI", "Node.js", "React", "WebSocket"],
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    liveUrl: "https://demo-chatbot.com",
    testimonial: {
      quote: "The AI chatbot has transformed our customer service. It handles most queries instantly and our team can focus on complex issues.",
      author: "Michael Chen",
      role: "Operations Manager, TechStart"
    },
    date: "2024-01",
    problem: "High volume of repetitive customer queries was overwhelming the support team and causing delayed response times."
  },
  {
    slug: "workflow-automation",
    title: "Business Process Automation",
    type: "Automation",
    summary: "Custom automation system connecting CRM, email marketing, and inventory management for seamless operations.",
    outcome: "60% time savings, 99.5% accuracy rate",
    tags: ["Zapier", "Make.com", "API Integration", "Python"],
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
    testimonial: {
      quote: "Ansar's automation solution saved us countless hours. What used to take our team 2 days now happens automatically in minutes.",
      author: "Lisa Rodriguez",
      role: "COO, GrowthCorp"
    },
    date: "2024-02",
    problem: "Manual data entry and synchronization between multiple systems was causing errors and consuming valuable team time."
  },
  {
    slug: "portfolio-website",
    title: "Creative Portfolio Website",
    type: "Website",
    summary: "Stunning portfolio website with smooth animations, image galleries, and contact integration for a creative agency.",
    outcome: "+120% lead generation, 98 Lighthouse score",
    tags: ["React", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
    coverImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
    liveUrl: "https://creative-agency-portfolio.com",
    githubUrl: "https://github.com/ansarmehmood/portfolio-site",
    date: "2023-12",
    problem: "The agency's old website didn't showcase their work effectively and had poor mobile performance."
  },
  {
    slug: "lead-qualification-bot",
    title: "Smart Lead Qualification Bot",
    type: "Chatbot",
    summary: "AI bot that qualifies leads through conversational interface and integrates with CRM for seamless handoff.",
    outcome: "3x qualified leads, 50% faster sales cycle",
    tags: ["ChatGPT API", "React", "HubSpot", "WebSocket"],
    coverImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
    date: "2023-11",
    problem: "Sales team was spending too much time on unqualified leads, reducing overall conversion efficiency."
  },
  {
    slug: "inventory-sync-automation",
    title: "Multi-Platform Inventory Sync",
    type: "Automation",
    summary: "Automated inventory synchronization across multiple sales channels with real-time updates and alerts.",
    outcome: "Zero overselling, 95% inventory accuracy",
    tags: ["Python", "REST APIs", "Webhooks", "MongoDB"],
    coverImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop",
    date: "2023-10",
    problem: "Managing inventory across multiple platforms manually led to overselling and customer dissatisfaction."
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    type: "Website",
    summary: "Comprehensive analytics dashboard with real-time data visualization and custom reporting features.",
    outcome: "+200% user engagement, 1.8s load time",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    liveUrl: "https://analytics-dashboard-demo.com",
    date: "2023-09",
    problem: "Clients needed better insights into their data but existing tools were too complex or didn't meet specific requirements."
  },
  {
    slug: "appointment-booking-bot",
    title: "Automated Appointment Booking",
    type: "Chatbot",
    summary: "WhatsApp and web bot for automated appointment scheduling with calendar integration and reminders.",
    outcome: "80% booking automation, 30% no-show reduction",
    tags: ["WhatsApp API", "Google Calendar", "Node.js", "React"],
    coverImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
    date: "2023-08",
    problem: "Manual appointment booking was time-consuming and prone to double-bookings and missed appointments."
  },
  {
    slug: "social-media-automation",
    title: "Social Media Content Automation",
    type: "Automation",
    summary: "AI-powered content creation and scheduling system for consistent social media presence across platforms.",
    outcome: "5x content output, 45% engagement increase",
    tags: ["OpenAI API", "Buffer API", "Python", "Image Generation"],
    coverImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop",
    date: "2023-07",
    problem: "Creating and posting consistent, engaging content across multiple social media platforms was overwhelming."
  }
];