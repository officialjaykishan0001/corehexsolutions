import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2014",
    title: "Company Founded",
    description:
      "Started with a vision to simplify IT for businesses.",
  },
  {
    year: "2016",
    title: "100+ Clients",
    description:
      "Expanded services and crossed our first major milestone.",
  },
  {
    year: "2019",
    title: "Cybersecurity Division",
    description:
      "Launched dedicated security solutions.",
  },
  {
    year: "2022",
    title: "Regional Expansion",
    description:
      "Extended services across Gujarat and beyond.",
  },
  {
    year: "2024",
    title: "500+ Clients",
    description:
      "Trusted partner to hundreds of businesses.",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels =
        gsap.utils.toArray<HTMLElement>(".stack-panel");

      panels.forEach((panel, index) => {
        const isLast = index === panels.length - 1;

        gsap.set(panel, {
          willChange: "transform",
          force3D: true,
        });

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: isLast,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const progress = self.progress;

            gsap.to(panel, {
              scale: 1 - progress * 0.035,
              y: -progress * 20,
              borderRadius: progress * 28,
              duration: 0.12,
              ease: "power2.out",
              overwrite: "auto",
            });
          },

          onLeaveBack: () => {
            gsap.to(panel, {
              scale: 1,
              y: 0,
              borderRadius: 0,
              duration: 0.2,
              ease: "power2.out",
            });
          },
        });
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-x-hidden bg-[#050816] text-white"
    >
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_45%)]" />

          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px]" />

          <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[850px] h-[520px] bg-primary/10 blur-[160px] rounded-full" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />

              <span className="text-sm text-white/70">
                About Corehex Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] mb-8">
              Building Reliable

              <span className="block bg-gradient-to-r from-primary via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                Digital Infrastructure
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed">
              Secure, scalable, and future-ready technology
              solutions designed for modern businesses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="z-30 stack-panel relative min-h-screen flex items-center bg-[#070b18] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.10),transparent_35%)]" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <SectionHeader
                badge="Who We Are"
                title="Focused on scalable and future-ready IT"
                centered={false}
              />

              <p className="text-white/65 leading-relaxed mb-6 max-w-xl text-lg">
                Corehex Solutions delivers modern IT
                infrastructure, cybersecurity, networking,
                cloud systems, and software solutions
                tailored for growing businesses.
              </p>

              <p className="text-white/50 leading-relaxed max-w-xl">
                We combine reliability, performance, and
                clean execution to help organizations
                scale confidently in a digital-first world.
              </p>
            </motion.div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10 md:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_35%)]" />

              <div className="relative z-10 grid grid-cols-2 gap-8">
                {[
                  ["500+", "Clients"],
                  ["10+", "Years"],
                  ["24/7", "Support"],
                  ["99.9%", "Uptime"],
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center"
                  >
                    <h3 className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-300 bg-clip-text text-transparent mb-3">
                      {item[0]}
                    </h3>

                    <p className="text-white/55 text-sm tracking-wide uppercase">
                      {item[1]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="z-30 stack-panel relative min-h-screen flex items-center bg-[#08101c] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.015] to-transparent" />

        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl"
          >
            <div className="grid lg:grid-cols-[340px_1fr]">
              {/* LEFT */}
              <div className="border-b lg:border-b-0 lg:border-r border-white/10 p-10 bg-white/[0.02]">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-blue-400 p-[1px] mb-8">
                  <div className="w-full h-full rounded-3xl bg-[#0b1220] flex items-center justify-center text-3xl font-semibold">
                    CK
                  </div>
                </div>

                <h3 className="text-3xl font-semibold mb-2">
                  Chirag Kishan
                </h3>

                <p className="text-primary text-sm tracking-wide uppercase">
                  Founder & Managing Director
                </p>

                <div className="mt-10 h-px bg-white/10" />

                <p className="mt-8 text-white/45 text-sm leading-relaxed">
                  Building reliable digital systems focused
                  on scalability, security, and long-term
                  growth.
                </p>
              </div>

              {/* RIGHT */}
              <div className="relative p-10 md:p-16">
                <div className="absolute top-8 right-10 text-[140px] leading-none text-white/[0.03] font-bold">
                  “
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 mb-8">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />

                    <span className="text-sm text-white/65">
                      Founder’s Message
                    </span>
                  </div>

                  <p className="text-2xl md:text-[30px] leading-[1.5] text-white/80 font-light max-w-4xl">
                    At Corehex Solutions, we believe
                    technology should create momentum for
                    businesses — not complexity.
                  </p>

                  <p className="mt-8 text-white/55 leading-relaxed max-w-3xl text-lg">
                    Every solution we design is built
                    around reliability, scalability, and
                    long-term performance to help
                    organizations grow with confidence.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="z-30 stack-panel relative min-h-screen flex items-center overflow-hidden bg-[#070d18]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_45%)]" />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
              Let’s Build Smarter

              <span className="block bg-gradient-to-r from-primary via-blue-300 to-cyan-200 bg-clip-text text-transparent">
                Digital Systems
              </span>
            </h2>

            <p className="text-white/65 text-lg max-w-2xl mx-auto mb-10">
              Secure, scalable, and future-ready
              technology solutions built for long-term
              business growth.
            </p>

            <Link to="/contact">
              <Button
                size="xl"
                className="h-14 px-9 rounded-2xl bg-white text-black hover:bg-white/90"
              >
                Get in Touch

                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}