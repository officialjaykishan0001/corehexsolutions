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
import SplashCursor from "@/components/ui/SplashCursor";
import { motion } from "framer-motion";

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
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".stack-panel");

      // Better GPU rendering
      gsap.set(panels, {
        force3D: true,
        willChange: "transform",
      });

      panels.forEach((panel, index) => {
        ScrollTrigger.create({
          trigger: panel,

          // smoother pin timing
          start: "top top",

          // prevents layout jumps
          pin: true,

          // only last section keeps spacing
          pinSpacing: index === panels.length - 1,

          // smoother calculations
          anticipatePin: 1,

          // improves scroll performance
          fastScrollEnd: true,

          // reduces refresh calculations
          invalidateOnRefresh: false,

          // prevents mobile resize lag
          ignoreMobileResize: true,

          // smoother scrub feel
          scrub: false,
        });
      });

      // optimize refresh behavior
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, containerRef);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
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
      {/* <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#3b82f6"
      /> */}
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
      <section className="relative z-20 -mt-20 px-4">

        <div className="container-custom">

          {/* MAIN WRAPPER */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0E1625]/80 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

            {/* GRADIENT BG */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.10),transparent_34%)]" />

            {/* TOP GLOW */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] h-[140px] bg-primary/10 blur-3xl rounded-full" />

            {/* GRID */}
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4">

              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className={`
              relative group px-6 py-10 md:px-10 md:py-12
              transition-all duration-500
              ${index !== stats.length - 1
                      ? "border-b lg:border-b-0 lg:border-r border-white/10"
                      : ""
                    }
            `}
                >

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.10),transparent_70%)]" />

                  {/* TOP LINE */}
                  <div className="absolute top-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-500 group-hover:w-24" />

                  {/* CONTENT */}
                  <div className="relative z-10">

                    {/* VALUE */}
                    <div className="flex items-end justify-center gap-1 mb-3">

                      <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-none bg-gradient-to-b from-white to-white/75 bg-clip-text text-transparent">

                        <AnimatedCounter
                          to={parseInt(stat.value)}
                          duration={2}
                        />

                      </h3>

                      <span className="bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent text-2xl md:text-3xl font-semibold leading-none">

                        {stat.label === "Clients Served"
                          ? "+"
                          : stat.label === "Uptime Guarantee"
                            ? ".9%"
                            : stat.label === "Support Available"
                              ? "/7"
                              : stat.label === "Years Experience"
                                ? "+"
                                : ""}

                      </span>

                    </div>

                    {/* LABEL */}
                    <p className="text-sm md:text-[15px] text-center text-gray-400 font-medium tracking-wide">
                      {stat.label}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>
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
      <section className="stack-panel relative z-30 overflow-hidden py-24 md:py-32 bg-[#050B14]">

        {/* BACKGROUND */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {/* GLOW */}
          <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-primary/15 blur-[160px] rounded-full animate-pulse" />

          <div className="absolute bottom-[-100px] right-[-100px] w-[420px] h-[420px] bg-blue-500/10 blur-[140px] rounded-full" />

          {/* GRID */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        <div className="container-custom relative z-20">

          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.03] backdrop-blur-2xl px-7 py-14 md:px-16 md:py-20 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

            {/* INNER GLOW */}
            <div className="absolute -top-24 right-[-80px] w-[320px] h-[320px] bg-primary/15 blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-5xl mx-auto text-center">



              {/* HEADING */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6">
                Transform Your Business With{" "}
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  Smart IT Infrastructure
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
                Empower your company with scalable technology, proactive support,
                advanced cybersecurity, and custom digital solutions designed for
                long-term growth.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">

                <Link to="/contact">
                  <Button
                    size="lg"
                    className="h-14 px-9 rounded-2xl text-base bg-primary hover:bg-primary/90 shadow-[0_0_40px_rgba(59,130,246,0.35)] hover:scale-105 transition-all duration-300"
                  >
                    Get Started Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>

                <a href="tel:+919879300929">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-14 px-9 rounded-2xl border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] backdrop-blur-xl"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Schedule a Call
                  </Button>
                </a>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-[#030712] border-t border-white/10 overflow-hidden">

        {/* BG EFFECT */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-[-120px] left-1/3 w-[380px] h-[380px] bg-primary/10 blur-[140px] rounded-full" />
        </div>

        <div className="container-custom relative z-10 pt-20 pb-10">

          {/* TOP */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

            {/* BRAND */}
            <div>

              <h2 className="text-3xl font-bold text-white mb-5">
                Corehex
                <span className="text-primary"> Solutions</span>
              </h2>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Delivering modern IT infrastructure, cybersecurity,
                cloud solutions, and software development services
                for businesses across industries.
              </p>

              {/* SOCIAL */}
              <div className="flex items-center gap-4">

                {["in", "ig", "tw"].map((item, index) => (
                  <div
                    key={index}
                    className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-sm text-gray-300 hover:text-white hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">
                Services
              </h3>

              <ul className="space-y-4 text-sm text-gray-400">

                {[
                  "IT Infrastructure",
                  "Cybersecurity",
                  "Cloud Solutions",
                  "Software Development",
                  "IT Consulting",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}

              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">
                Company
              </h3>

              <ul className="space-y-4 text-sm text-gray-400">

                {[
                  "About Us",
                  "Projects",
                  "Testimonials",
                  "Contact",
                  "Support",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-primary transition-colors duration-300 cursor-pointer"
                  >
                    {item}
                  </li>
                ))}

              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-6">
                Contact
              </h3>

              <div className="space-y-5 text-sm text-gray-400">

                <div>
                  <p className="text-white mb-1 font-medium">
                    Phone
                  </p>
                  <p>+91 9879300929</p>
                </div>

                <div>
                  <p className="text-white mb-1 font-medium">
                    Email
                  </p>
                  <p>contact@corehexsolutions.com</p>
                </div>

                <div>
                  <p className="text-white mb-1 font-medium">
                    Availability
                  </p>
                  <p>24/7 Technical Support</p>
                </div>

              </div>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="mt-16 mb-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Corehex Solutions. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-500">

              <span className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Privacy Policy
              </span>

              <span className="hover:text-primary transition-colors duration-300 cursor-pointer">
                Terms & Conditions
              </span>

            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}