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
  about: string;
  role: string;
  detailScreenshots: Array<{ url: string; caption: string }>;
}

export const projects: Project[] = [
  {
    slug: "salesondemand",
    title: "SalesOnDemand",
    type: "Website",
    summary: "Multi-page corporate website for an Italian company, showcasing services and generating leads.",
    outcome: "Professional corporate presence with integrated Shopify solution",
    tags: ["React", "Tailwind CSS", "TypeScript", "Shopify", "Siteground"],
    coverImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758578672/Screenshot_2025-09-23_030359_p41d2t.png",
    liveUrl: "https://tranquil-cajeta-08c478.netlify.app/",
    date: "2024-09",
    about: "Multi-page corporate website for an Italian company, built to showcase services and generate leads. The project focused on creating a professional online presence that effectively communicates the company's value proposition while integrating e-commerce capabilities through Shopify.",
    role: "Designed and developed full site with React + Tailwind, built reusable components, integrated Shopify, and optimized SEO.",
    detailScreenshots: [
      {
        url: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758578672/Screenshot_2025-09-23_030359_p41d2t.png",
        caption: "Hero section with compelling value proposition"
      },
      {
        url: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758579988/Screenshot_2025-09-23_032500_sdnswa.png",
        caption: "Services showcase with detailed offerings"
      },
      {
        url: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758580099/Screenshot_2025-09-23_032716_k3zmkg.png",
        caption: "About page highlighting company expertise"
      }
    ]
  },
  {
    slug: "jillz-bookkeeping",
    title: "Jillz Bookkeeping",
    type: "Website",
    summary: "Small business website for a bookkeeping professional, designed to build trust and capture client inquiries.",
    outcome: "Professional service website with optimized client acquisition flow",
    tags: ["WordPress", "WPBakery", "Namecheap"],
    coverImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758578742/Screenshot_2025-09-23_030457_zrtogs.png",
    liveUrl: "https://jillzbookkeeping.com/",
    date: "2024-08",
    about: "Small business website for a bookkeeping professional, designed to build trust and capture client inquiries. The project focused on creating a clean, professional look that instills confidence in potential clients while making it easy for them to understand services and get in touch.",
    role: "Customized WordPress layout, structured content for usability, and designed a clean financial-services look.",
    detailScreenshots: [
      {
        url: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758578742/Screenshot_2025-09-23_030457_zrtogs.png",
        caption: "Professional hero section establishing trust and credibility"
      },
      {
        url: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758579828/Screenshot_2025-09-23_032334_rbatyl.png",
        caption: "Clear services breakdown for different business types"
      },
      {
        url: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758579777/Screenshot_2025-09-23_032239_zrxikc.png",
        caption: "Personal about section building connection with clients"
      }
    ]
  },
  {
    slug: "ferrariservice",
    title: "FerrariService",
    type: "Website",
    summary: "A conversion-focused landing page for a service campaign, optimized for clarity and lead generation.",
    outcome: "High-converting landing page with clear value proposition",
    tags: ["React", "Tailwind CSS"],
    coverImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758579510/Screenshot_2025-09-23_031810_gvztvq.png",
    liveUrl: "https://corsodatori.netlify.app/",
    date: "2024-07",
    about: "A conversion-focused landing page for a service campaign, optimized for clarity and lead generation. The project emphasizes a clean design with strategic call-to-actions and clear value propositions to maximize conversion rates.",
    role: "Designed and coded a responsive landing page with React + Tailwind, emphasizing value proposition and CTAs.",
    detailScreenshots: [
      {
        url: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758579510/Screenshot_2025-09-23_031810_gvztvq.png",
        caption: "Compelling hero section with clear call-to-action"
      },
      {
        url: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758580192/Screenshot_2025-09-23_032841_vsy77n.png",
        caption: "Service details presented in an engaging format"
      },
      {
        url: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758580572/Screenshot_2025-09-23_033555_wmarvs.png",
        caption: "Footer section with contact information and final CTA"
      }
    ]
  },
  {
    slug: "inplace",
    title: "InPlace",
    type: "Chatbot",
    summary: "Business automation system for candidate onboarding, follow-ups, and escalation, deployed as a WhatsApp chatbot.",
    outcome: "Automated candidate management with intelligent escalation system",
    tags: ["Django", "WhatsApp Cloud API", "OpenAI API", "React", "Render"],
    coverImage: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758579033/Screenshot_2025-08-15_044033_wfjhpq.png",
    date: "2024-06",
    about: "Business automation system for candidate onboarding, follow-ups, and escalation, deployed as a WhatsApp chatbot. The system streamlines the entire candidate management process with intelligent automation and comprehensive reporting capabilities.",
    role: "Built backend in Django, integrated WhatsApp Cloud API + OpenAI API, added Excel upload, escalation logic, and admin dashboard with reporting.",
    detailScreenshots: [
      {
        url: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758579033/Screenshot_2025-08-15_044033_wfjhpq.png",
        caption: "Comprehensive admin dashboard for candidate management"
      },
      {
        url: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758579031/Screenshot_2025-08-15_044402_jm8yqv.png",
        caption: "Escalation management system for follow-up workflows"
      },
      {
        url: "https://res.cloudinary.com/dc1zzgsjw/image/upload/v1758579033/Screenshot_2025-08-15_044434_rpnugr.png",
        caption: "Detailed reporting and analytics dashboard"
      }
    ]
  }
];