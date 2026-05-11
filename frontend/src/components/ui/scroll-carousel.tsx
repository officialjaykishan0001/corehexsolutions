import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Code, Database, Headphones, Network, Server, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
gsap.registerPlugin(ScrollTrigger);

const ITEMS = 8;

type Slide = {
  id: number;
  title: string;
  desc: string;
  src: string;
};

const keyServices = [
  {
    id: 1,
    icon: Server,
    title: "IT Infrastructure",
    desc: "Complete hardware support and infrastructure management tailored to your business needs.",
    src: "./services/server.png",
  },
  {
    id: 2,
    icon: Shield,
    title: "Cybersecurity",
    desc: "Comprehensive security solutions to protect your business from digital threats.",
    src: "./services/cybersecurity.png",
  },
  {
    id: 3,
    icon: Database,
    title: "Data Management",
    desc: "Secure backup, recovery, and analytics solutions for your critical business data.",
    src: "./services/database-management.png",
  },
  {
    id: 4,
    icon: Network,
    title: "Network Solutions",
    desc: "Reliable network monitoring, security, and managed services for optimal performance.",
    src: "./services/network-solutions.png",
  },
  {
    id: 5,
    icon: Code,
    title: "Software Development",
    desc: "Custom web and mobile application development tailored to your business goals using modern technologies.",
    src: "./services/software-development.png",
  },
  {
    id: 6,
    icon: Briefcase,
    title: "IT Consulting",
    desc: "Strategic technology consulting to drive your digital transformation journey.",
    src: "./services/it-consulting.png",
  },
  {
    id: 7,
    icon: Headphones,
    title: "Help Desk Support",
    desc: "24/7 technical support to keep your operations running smoothly.",
    src: "./services/helpdesk-support.png",
  }
];

export default function ScrollCarousel(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const slides: Slide[] = useMemo(
    () =>
      Array.from({ length: ITEMS }, (_, i) => ({
        id: i,
        title: `IT Service ${i + 1}`,
        desc: "We deliver secure, scalable and high-performance IT solutions tailored for modern businesses.",
        src: `https://picsum.photos/1200/900?random=${i}`,
      })),
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!section || !track) return;

    const getDistance = () => track.scrollWidth - section.clientWidth;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progress) {
              gsap.to(progress, {
                scaleX: self.progress,
                transformOrigin: "left center",
                duration: 0.1,
                ease: "none",
              });
            }
          },
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="z-30 relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#0a0a0f] to-black text-white"
    >
      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_55%)]" />

      {/* HEADER */}
      <div className="absolute top-10 left-0 w-full text-center z-10 pointer-events-none pt-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-white/60 text-sm md:text-base mt-3">
          Crafting scalable, modern digital solutions
        </p>
      </div>

      {/* progress bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 scale-x-0"
        />
      </div>

      {/* TRACK */}
      <div
        ref={trackRef}
        className="flex h-full will-change-transform pt-28 gap-0"
      >
        {keyServices.map((slide, index) => (
          <Link
            key={slide.id}
            to={`/services/${slide.title}`}
            className="h-full flex items-center justify-center flex-shrink-0 m-2 group/card"
          >
            <div className="max-w-6xl h-[70%] w-full">

              <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 group-hover/card:border-primary/30 group-hover/card:shadow-[0_20px_60px_rgba(59,130,246,0.18)]">

                {/* IMAGE */}
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="
              w-full h-full object-cover
              scale-[1.03]
              opacity-[0.72]
              group-hover/card:scale-[1.08]
              group-hover/card:opacity-[0.82]
              transition-all duration-[1400ms] ease-out
            "
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

                {/* BOTTOM OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                {/* HOVER GLOW */}
                <div
                  className="
              absolute inset-0 opacity-0
              group-hover/card:opacity-100
              transition-opacity duration-700
              bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_45%)]
            "
                />

                {/* CONTENT */}
                <div className="absolute bottom-10 left-10 z-10 flex gap-5 max-w-lg">

                  {/* ICON */}
                  <div
                    className="
                text-white/90 mt-1 flex-shrink-0
                transition-all duration-500
                group-hover/card:scale-110
                group-hover/card:text-primary
              "
                  >
                    {slide.icon && (
                      <slide.icon
                        size={52}
                        strokeWidth={1.5}
                      />
                    )}
                  </div>

                  {/* TEXT */}
                  <div className="space-y-3">

                    {/* TITLE */}
                    <h2
                      className="
                  text-2xl md:text-3xl font-medium
                  text-white leading-snug
                  transition-all duration-500
                  group-hover/card:translate-x-1
                "
                    >
                      {slide.title}
                    </h2>

                    {/* DESC */}
                    <p className="text-white/75 text-sm md:text-base leading-relaxed">
                      {slide.desc}
                    </p>

                    {/* CTA INDICATOR */}
                    <div
                      className="
                  flex items-center gap-3 pt-2
                  opacity-0 translate-y-3
                  group-hover/card:opacity-100
                  group-hover/card:translate-y-0
                  transition-all duration-500
                "
                    >

                      <span className="text-sm text-primary font-medium tracking-wide">
                        Explore Service
                      </span>

                      <div
                        className="
                    flex items-center justify-center
                    w-8 h-8 rounded-full
                    border border-primary/30
                    bg-primary/10
                    backdrop-blur-md
                  "
                      >
                        <ArrowRight
                          size={16}
                          className="
                      text-primary
                      transition-transform duration-500
                      group-hover/card:translate-x-0.5
                    "
                        />
                      </div>

                    </div>

                  </div>

                </div>

                {/* SUBTLE CLICK PULSE */}
                <div
                  className="
              absolute top-5 right-5
              w-3 h-3 rounded-full
              bg-primary/70
              animate-pulse
            "
                />

                {/* BORDER GLOW */}
                <div
                  className="
              absolute inset-0 rounded-3xl
              border border-primary/0
              group-hover/card:border-primary/20
              transition-all duration-700
            "
                />

              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}