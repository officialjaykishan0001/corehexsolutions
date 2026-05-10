import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BgCards = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".parallax-card");

      cards.forEach((card, i) => {
        const speed = 100 + i * 40;

        gsap.fromTo(
          card,
          { y: 0 },
          {
            y: -speed,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">

      <ParallaxCard src="/services/server.png" top="10%" left="15%" rotate="-10deg" />
      <ParallaxCard src="/services/cybersecurity.png" top="60%" left="75%" rotate="12deg" />
      <ParallaxCard src="/services/database-management.png" top="30%" left="45%" rotate="-6deg" />
      <ParallaxCard src="/services/network-solutions.png" top="70%" left="25%" rotate="8deg" />
      <ParallaxCard src="/services/software-development.png" top="15%" left="70%" rotate="14deg" />

    </div>
  );
};

type CardProps = {
  src: string;
  top: string;
  left: string;
  rotate: string;
};

const ParallaxCard = ({ src, top, left, rotate }: CardProps) => {
  return (
    <img
      src={src}
      alt=""
      className="parallax-card absolute w-32 md:w-44 rounded-xl shadow-xl opacity-40 mix-blend-lighten will-change-transform"
      style={{
        top,
        left,
        transform: `rotate(${rotate})`,
      }}
    />
  );
};

export default BgCards;