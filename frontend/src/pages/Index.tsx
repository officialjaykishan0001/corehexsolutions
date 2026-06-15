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
import Testimonials from "@/components/Testimonials";
import { statsData } from "@/data/statsData";
import { whyChooseUsData } from "@/data/whyChooseUsData";




export default function Index() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

 

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

              {statsData.map((stat, index) => (
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
              ${index !== statsData.length - 1
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
      <section className="relative  py-24 md:py-28 overflow-hidden bg-[#0B1220]">

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
            {whyChooseUsData.map((feature) => (
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
      {/* <Testimonials /> */}

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-[#050B14]">

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
      <Footer />
    </div>
  );
}