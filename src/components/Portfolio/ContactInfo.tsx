import { Phone, Mail, Globe, Linkedin, Github, Instagram } from "lucide-react";
import { UpworkIcon } from "@/components/ui/upwork-icon";

const ContactInfo = ({ className = "" }: { className?: string }) => {
  const contactLinks = [
    {
      icon: Phone,
      href: "tel:+923227555459",
      label: "+92 322 755 5459",
      display: "+92 322 755 5459"
    },
    {
      icon: Mail,
      href: "mailto:ansarmehmoodpm@gmail.com",
      label: "ansarmehmoodpm@gmail.com",
      display: "ansarmehmoodpm@gmail.com"
    },
    {
      icon: Globe,
      href: "https://ansarmehmood.dev",
      label: "ansarmehmood.dev",
      display: "ansarmehmood.dev"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ansarmehmood67",
      label: "LinkedIn",
      display: "LinkedIn"
    }
  ];

  return (
    <div className={`flex flex-wrap items-center gap-4 text-sm ${className}`}>
      {contactLinks.map((contact, index) => (
        <a
          key={contact.label}
          href={contact.href}
          target={contact.href.startsWith('http') ? '_blank' : undefined}
          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <contact.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
          <span>{contact.display}</span>
        </a>
      ))}
    </div>
  );
};

export default ContactInfo;