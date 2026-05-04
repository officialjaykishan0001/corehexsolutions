import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, Code, Database, Headphones, Network, Server, Shield } from "lucide-react";

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
          Our <span className="text-indigo-400">Services</span>
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
        {keyServices.map((slide) => (
          <div
            key={slide.id}
            className="h-full flex items-center justify-center flex-shrink-0 m-2"
          >
            <div className="max-w-6xl h-[70%] w-full">

              <div className="relative h-full rounded-3xl overflow-hidden group shadow-2xl border border-white/10">

                <img
                  src={slide.src}
                  alt={slide.title}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />

                {/* GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-10 left-10 z-10 flex gap-5 max-w-lg">

                  {/* ICON (top aligned, bigger) */}
                  <div className="text-white/90 mt-1 flex-shrink-0">
                    {slide.icon && <slide.icon size={52} strokeWidth={1.5} />}
                  </div>

                  {/* TEXT BLOCK */}
                  <div className="space-y-2">
                    <h2 className="text-2xl md:text-3xl font-medium text-white leading-snug">
                      {slide.title}
                    </h2>

                    <p className="text-white/70 text-sm md:text-base leading-relaxed">
                      {slide.desc}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}