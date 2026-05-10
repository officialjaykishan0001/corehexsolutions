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
import Cards from "@/components/ui/Cards";
import BgCards from "@/components/ui/Cards";

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
  const cardsRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!cardsRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".feature-card");

      // REMOVE ALL GSAP ANIMATIONS
      gsap.set(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        clearProps: "transform",
      });
    }, cardsRef);

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
      <section className="stack-panel relative z-30 py-24 md:py-28 overflow-hidden bg-[#0B1220]">

        {/* BG EFFECT */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none overflow-hidden">
          <BgCards />
        </div>

        {/* TOP GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-primary/10 blur-[120px] rounded-full" />

        <div className="container-custom relative z-20">

          {/* SECTION HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-14">

            {/* HEADING */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5">
              Building Smarter &{" "}
              <span className="text-primary">
                Secure IT Solutions
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Corehex Solutions helps businesses streamline technology with reliable
              infrastructure, cybersecurity, software development, and dedicated IT support.
            </p>
          </div>

          {/* FEATURE GRID */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {whyChooseUs.map((feature) => (
              <div
                key={feature.title}
                className="feature-card relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-lg p-6 shadow-xl group min-h-[230px]"
              >

                {/* HOVER GRADIENT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(135deg,transparent,rgba(59,130,246,0.15),transparent)]" />

                {/* GLOW ORB */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* CONTENT */}
                <div className="relative z-10">

                  {/* ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {feature.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* BORDER GLOW */}
                <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover:border-primary/20 transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-12">
            <Link to="/about">
              <Button
                variant="default"
                size="lg"
                className="rounded-2xl px-7"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="stack-panel relative z-30 py-24 md:py-28 overflow-hidden bg-[#09111D]">

        {/* BG GLOW */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[350px] h-[350px] bg-primary/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
        </div>

        <div className="container-custom relative z-20">

          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-16">

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Trusted by Businesses
              <span className="text-primary"> Across Industries</span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              We build long-term partnerships through reliable support,
              innovative solutions, and exceptional customer service.
            </p>
          </div>

          {/* INFINITE SCROLL TESTIMONIALS */}
          <div className="relative overflow-hidden">

            {/* LEFT FADE */}
            <div className="absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-[#09111D] to-transparent" />

            {/* RIGHT FADE */}
            <div className="absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-[#09111D] to-transparent" />

            <div className="flex w-max animate-testimonial-scroll gap-7">

              {[
                {
                  initials: "RK",
                  name: "Rahul Kumar",
                  role: "Operations Manager",
                  text: "Corehex Solutions transformed our IT infrastructure completely. Their response time and technical expertise are outstanding.",
                },
                {
                  initials: "AP",
                  name: "Anjali Patel",
                  role: "Director, FinTech Startup",
                  text: "Their cybersecurity solutions helped us secure our systems and improve operational efficiency significantly.",
                },
                {
                  initials: "VS",
                  name: "Vikram Shah",
                  role: "CEO, Retail Company",
                  text: "Reliable support, proactive communication, and modern technology solutions — exactly what our business needed.",
                },
                {
                  initials: "NS",
                  name: "Neha Sharma",
                  role: "Startup Founder",
                  text: "Amazing support team with deep technical expertise. They helped us scale smoothly.",
                },
                {
                  initials: "DT",
                  name: "Dev Trivedi",
                  role: "Tech Lead",
                  text: "Professional service, fast delivery, and excellent communication throughout the project.",
                },

                /* DUPLICATE FOR INFINITE LOOP */
                {
                  initials: "RK",
                  name: "Rahul Kumar",
                  role: "Operations Manager",
                  text: "Corehex Solutions transformed our IT infrastructure completely. Their response time and technical expertise are outstanding.",
                },
                {
                  initials: "AP",
                  name: "Anjali Patel",
                  role: "Director, FinTech Startup",
                  text: "Their cybersecurity solutions helped us secure our systems and improve operational efficiency significantly.",
                },
                {
                  initials: "VS",
                  name: "Vikram Shah",
                  role: "CEO, Retail Company",
                  text: "Reliable support, proactive communication, and modern technology solutions — exactly what our business needed.",
                },
                {
                  initials: "NS",
                  name: "Neha Sharma",
                  role: "Startup Founder",
                  text: "Amazing support team with deep technical expertise. They helped us scale smoothly.",
                },
                {
                  initials: "DT",
                  name: "Dev Trivedi",
                  role: "Tech Lead",
                  text: "Professional service, fast delivery, and excellent communication throughout the project.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative w-[340px] flex-shrink-0 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-3"
                >

                  {/* Animated Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[linear-gradient(135deg,transparent,rgba(59,130,246,0.18),transparent)]" />

                  {/* Glow Orb */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

                  {/* CONTENT */}
                  <div className="relative z-10">

                    {/* STARS */}
                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="text-yellow-400 text-lg"
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    {/* REVIEW */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-7">
                      “{item.text}”
                    </p>

                    {/* USER */}
                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/20 flex items-center justify-center text-primary font-semibold">
                        {item.initials}
                      </div>

                      <div>
                        <h4 className="text-white font-medium">
                          {item.name}
                        </h4>

                        <p className="text-gray-500 text-sm">
                          {item.role}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* BORDER GLOW */}
                  <div className="absolute inset-0 rounded-[30px] border border-primary/0 group-hover:border-primary/20 transition-all duration-500" />
                </div>
              ))}
            </div>
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