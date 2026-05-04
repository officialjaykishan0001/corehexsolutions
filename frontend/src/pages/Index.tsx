import { Link } from "react-router-dom";
import {
  Server,
  Shield,
  Database,
  Headphones,
  Network,
  Settings,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Award,
  Users,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import SectionHeader from "@/components/SectionHeader";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedCounter from "@/components/ui/animated-counter";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollCarousel from "@/components/ui/scroll-carousel";

gsap.registerPlugin(ScrollTrigger);

const keyServices = [
  {
    icon: Server,
    title: "IT Infrastructure",
    description: "Complete hardware support and infrastructure management tailored to your business needs.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from digital threats.",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Secure backup, recovery, and analytics solutions for your critical business data.",
  },
  {
    icon: Network,
    title: "Network Solutions",
    description: "Reliable network monitoring, security, and managed services for optimal performance.",
  },
  {
    icon: Headphones,
    title: "Help Desk Support",
    description: "24/7 technical support to keep your operations running smoothly.",
  },
  {
    icon: Settings,
    title: "IT Consulting",
    description: "Strategic technology consulting to drive your digital transformation journey.",
  },
  {
    icon: Code, 
    title: "Software Development",
    description: "Custom web and mobile application development tailored to your business goals using modern technologies.",
  }
  
];

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: "Proven Reliability",
    description: "Years of trusted service delivering consistent, dependable IT solutions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced security protocols protecting your valuable business assets.",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Certified professionals with deep expertise across all IT domains.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance ensuring your systems never skip a beat.",
  },
];

const stats = [
  { value: "10+", label: "Clients Served" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
  { value: "2+", label: "Years Experience" },
];

export default function Index() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".stack-panel");

      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: i === panels.length - 1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D2530]/95 via-[#1D2530]/80 to-[#1D2530]/60" />
        </div>

        <div className="container-custom relative z-10 py-32 md:py-40">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6 animate-fade-up backdrop-blur-sm border border-primary/30">
              Your Trusted IT Partner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 tracking-tight animate-fade-up" style={{ animationDelay: '100ms' }}>
              All IT Solutions{" "}
              <span className="text-accent">at One Place</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up max-w-2xl" style={{ animationDelay: '200ms' }}>
              Empowering businesses with comprehensive IT services, from infrastructure management to cutting-edge cybersecurity solutions. We keep your technology running seamlessly.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Link to="/contact">
                <Button variant="cta" size="xl">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:+919879300929">
                <Button variant="heroOutline" size="xl">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="relative z-10 -mt-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 text-center shadow-soft border border-border hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  <AnimatedCounter to={parseInt(stat.value)} duration={2} />
                  <span>
                    {stat.label === "Clients Served" ? "+" :
                      stat.label === "Uptime Guarantee" ? ".9%" :
                        stat.label === "Support Available" ? "/7" :
                          stat.label === "Years Experience" ? "+" : ""
                    }
                  </span>
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="stack-panel relative z-10 min-h-screen section-padding bg-white"> */}
        <ScrollCarousel />
      {/* </section> */}

      {/* About Section */}
      <section className="stack-panel relative z-30 min-h-screen section-padding bg-background">

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeader
                badge="About Us"
                title="Your One-Stop IT Solution Provider"
                centered={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6">
                Corehex Solutions is a leading IT services company dedicated to providing comprehensive technology solutions for businesses of all sizes. From small startups to large enterprises, we deliver reliable, secure, and scalable IT infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of certified professionals brings years of experience in managing complex IT environments, ensuring your business stays ahead in the digital landscape.
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyChooseUs.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-5 rounded-2xl bg-card border border-border hover-lift"
                >
                  <div className="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-success" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="stack-panel relative z-30 min-h-screen section-padding bg-[#0B1220]">
        <div className="container-custom">
          <SectionHeader
            badge="Our Services"
            title="Comprehensive IT Solutions"
            description="From hardware support to advanced cybersecurity, we provide end-to-end IT services tailored to your business requirements."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="default" size="lg">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="stack-panel relative z-30 min-h-screen py-20 md:py-28 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-95" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 tracking-tight">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
            Get in touch with our experts today and discover how Corehex Solutions can help your business thrive with reliable IT support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="cta" size="xl">
                Get Started Today
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

      {/* Footer */}
      <div className="stack-panel relative z-10">
        <Footer />
      </div>
    </div>
  );
}