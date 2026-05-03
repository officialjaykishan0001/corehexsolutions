import { Link } from "react-router-dom";
import {
  Server,
  Headphones,
  Settings,
  Building2,
  Shield,
  Lock,
  Camera,
  Network,
  Eye,
  Database,
  CloudCog,
  BarChart3,
  LineChart,
  Wifi,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { LucideIcon } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: "infrastructure",
    title: "IT & Infrastructure Services",
    subtitle: "Build a solid technology foundation for your business",
    services: [
      {
        icon: Server,
        title: "Hardware Support",
        description: "Comprehensive hardware maintenance, repair, and upgrades for all your IT equipment including servers, workstations, and peripherals.",
      },
      {
        icon: Headphones,
        title: "Help Desk Support",
        description: "24/7 technical support with quick response times to resolve issues and minimize downtime for your team.",
      },
      {
        icon: Settings,
        title: "IT Consulting",
        description: "Strategic technology consulting to align your IT infrastructure with business goals and drive digital transformation.",
      },
      {
        icon: Building2,
        title: "IT Infrastructure Management",
        description: "End-to-end management of your IT infrastructure including servers, networks, and cloud resources.",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Networking",
    subtitle: "Protect your business with enterprise-grade security",
    services: [
      {
        icon: Shield,
        title: "Network Security",
        description: "Comprehensive network security solutions including firewalls, intrusion detection, and vulnerability assessments.",
      },
      {
        icon: Lock,
        title: "Cybersecurity",
        description: "Advanced cybersecurity measures to protect against malware, ransomware, phishing, and other digital threats.",
      },
      {
        icon: Network,
        title: "Endpoint Security",
        description: "Secure all endpoints including laptops, desktops, and mobile devices with advanced protection solutions.",
      },
      {
        icon: Camera,
        title: "CCTV Installation",
        description: "Professional CCTV system design, installation, and monitoring for comprehensive physical security.",
      },
      {
        icon: Eye,
        title: "Network Monitoring",
        description: "Proactive 24/7 network monitoring to identify and resolve issues before they impact your business.",
      },
    ],
  },
  {
    id: "data",
    title: "Data & Management",
    subtitle: "Leverage your data for better business decisions",
    services: [
      {
        icon: Database,
        title: "Data Management",
        description: "Comprehensive data management solutions including storage, organization, and accessibility optimization.",
      },
      {
        icon: CloudCog,
        title: "Backup and Disaster Recovery",
        description: "Automated backup solutions and disaster recovery planning to ensure business continuity.",
      },
      {
        icon: BarChart3,
        title: "Data Analytics",
        description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
      },
      {
        icon: LineChart,
        title: "Business Intelligence",
        description: "BI solutions to help you make data-driven decisions and gain competitive advantage.",
      },
      {
        icon: Wifi,
        title: "Managed Network Services",
        description: "Fully managed network services including setup, maintenance, and optimization for peak performance.",
      },
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-up" style={{ animationDelay: '100ms' }}>
              Comprehensive{" "}
              <span className="gradient-text">IT Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up max-w-3xl mx-auto" style={{ animationDelay: '200ms' }}>
              From infrastructure management to advanced cybersecurity, we provide end-to-end IT services tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`section-padding ${categoryIndex % 2 === 1 ? 'bg-muted/50' : ''}`}
        >
          <div className="container-custom">
            <SectionHeader
              badge={`0${categoryIndex + 1}`}
              title={category.title}
              description={category.subtitle}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-6 md:p-8 rounded-2xl bg-card border border-border hover-lift hover-glow transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-95" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 tracking-tight">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Our team of experts is ready to design and implement IT solutions tailored to your specific business requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="cta" size="xl">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+919879300929">
              <Button variant="heroOutline" size="xl">
                <Phone className="w-5 h-5" />
                +91 9879300929
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
