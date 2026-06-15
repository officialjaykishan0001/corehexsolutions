import { useEffect, useRef, useCallback } from "react";
import {
  Briefcase,
  Code,
  Database,
  Headphones,
  Network,
  Server,
  Shield,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { keyServicesData } from "@/data/keyServicesData";


const CARD_WIDTH = 436; // card 420px + margin 2×8px
const SPEED = 0.55;
const MAX_POS = CARD_WIDTH * (keyServicesData.length - 1); // stop at last card

export default function ScrollCarousel(): JSX.Element {
  const trackRef    = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const rafRef      = useRef<number>(0);

  const posRef      = useRef(0);
  const pausedRef   = useRef(false);
  const draggingRef = useRef(false);
  const startXRef   = useRef(0);
  const startPosRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef    = useRef(0);
  const dragMoved   = useRef(false);

  // ── Clamp helper ──────────────────────────────────────────────────────────
  const clamp = (v: number) => Math.max(0, Math.min(MAX_POS, v));

  // ── Core render ───────────────────────────────────────────────────────────
  const commit = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    posRef.current = clamp(posRef.current);
    track.style.transform = `translateX(-${posRef.current}px)`;

    if (progressRef.current) {
      const pct = (posRef.current / MAX_POS) * 100;
      progressRef.current.style.width = `${pct}%`;
    }
  }, []);

  // ── Animation loop ────────────────────────────────────────────────────────
  const animate = useCallback(() => {
    if (!draggingRef.current) {
      if (!pausedRef.current && posRef.current < MAX_POS) {
        posRef.current += SPEED;
      }

      if (Math.abs(velocityRef.current) > 0.1) {
        posRef.current += velocityRef.current;
        velocityRef.current *= 0.92;
      } else {
        velocityRef.current = 0;
      }
    }

    commit();
    rafRef.current = requestAnimationFrame(animate);
  }, [commit]);

  // ── Mouse handlers ────────────────────────────────────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    draggingRef.current = true;
    dragMoved.current   = false;
    velocityRef.current = 0;
    startXRef.current   = e.clientX;
    startPosRef.current = posRef.current;
    lastXRef.current    = e.clientX;
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current) return;
      const delta = e.clientX - lastXRef.current;
      velocityRef.current = -delta * 0.4;
      lastXRef.current    = e.clientX;
      posRef.current      = startPosRef.current - (e.clientX - startXRef.current);
      dragMoved.current   = true;
    };

    const onMouseUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup",   onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup",   onMouseUp);
    };
  }, []);

  // ── Touch handlers ────────────────────────────────────────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onTouchStart = (e: TouchEvent) => {
      draggingRef.current = true;
      dragMoved.current   = false;
      velocityRef.current = 0;
      startXRef.current   = e.touches[0].clientX;
      startPosRef.current = posRef.current;
      lastXRef.current    = e.touches[0].clientX;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!draggingRef.current) return;
      const dx    = e.touches[0].clientX - lastXRef.current;
      const totalDX = Math.abs(e.touches[0].clientX - startXRef.current);
      if (totalDX > 8) e.preventDefault();
      velocityRef.current = -dx * 0.4;
      lastXRef.current    = e.touches[0].clientX;
      posRef.current      = startPosRef.current - (e.touches[0].clientX - startXRef.current);
      dragMoved.current   = true;
    };

    const onTouchEnd = () => {
      draggingRef.current = false;
    };

    track.addEventListener("touchstart", onTouchStart, { passive: true });
    track.addEventListener("touchmove",  onTouchMove,  { passive: false });
    track.addEventListener("touchend",   onTouchEnd,   { passive: true });

    return () => {
      track.removeEventListener("touchstart", onTouchStart);
      track.removeEventListener("touchmove",  onTouchMove);
      track.removeEventListener("touchend",   onTouchEnd);
    };
  }, []);

  // ── Click-through guard after drag ───────────────────────────────────────
  const onLinkClick = useCallback((e: React.MouseEvent) => {
    if (dragMoved.current) e.preventDefault();
  }, []);

  // ── Arrow buttons ─────────────────────────────────────────────────────────
  const nudge = useCallback((amount: number) => {
    velocityRef.current = 0;
    posRef.current = clamp(posRef.current + amount);
  }, []);

  // ── Start loop ────────────────────────────────────────────────────────────
  useEffect(() => {
    posRef.current = 0; // start at first card
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0b0f19] via-[#0a0a0f] to-black text-white">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_55%)] pointer-events-none" />

      {/* Header */}
      <div className="absolute top-20 left-0 w-full text-center z-10 pointer-events-none pt-2">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-white/60 text-sm md:text-base mt-3">
          Crafting scalable, modern digital solutions
        </p>
      </div>

      {/* Left arrow */}
      <button
        onClick={() => nudge(-CARD_WIDTH)}
        aria-label="Scroll left"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 md:w-14 md:h-14 rounded-full
          bg-black/50 backdrop-blur-lg
          border border-white/10
          hover:border-primary/40 hover:bg-primary/10
          flex items-center justify-center
          transition-all duration-300 active:scale-95"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => nudge(CARD_WIDTH)}
        aria-label="Scroll right"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30
          w-12 h-12 md:w-14 md:h-14 rounded-full
          bg-black/50 backdrop-blur-lg
          border border-white/10
          hover:border-primary/40 hover:bg-primary/10
          flex items-center justify-center
          transition-all duration-300 active:scale-95"
      >
        <ChevronRight size={22} />
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[50%] h-[2px] bg-white/10 rounded-full overflow-hidden z-10">
        <div
          ref={progressRef}
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          style={{ width: "0%" }}
        />
      </div>

      {/* Track */}
      <div className="h-full flex items-center pt-32 pb-16">
        <div
          ref={trackRef}
          className="flex h-full will-change-transform cursor-grab active:cursor-grabbing select-none"
          style={{ transform: "translateX(0px)" }}
          onMouseDown={onMouseDown}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => {
            pausedRef.current = false;
            if (!draggingRef.current) velocityRef.current = 0;
          }}
        >
          {keyServicesData.map((slide, index) => (
            <Link
              key={`${slide.id}-${index}`}
              to={`/services/${slide.slug}`}
              onClick={onLinkClick}
              draggable={false}
              className="h-full flex items-center justify-center flex-shrink-0 mx-2 group/card"
            >
              <div className="h-[80%] w-[420px]">
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 group-hover/card:border-primary/30 group-hover/card:shadow-[0_20px_60px_rgba(59,130,246,0.18)]">

                  <img
                    src={slide.src}
                    alt={slide.title}
                    draggable={false}
                    className="w-full h-full object-cover scale-[1.03] opacity-[0.72] group-hover/card:scale-[1.08] group-hover/card:opacity-[0.82] transition-all duration-[1400ms] ease-out"
                  />

                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_left,rgba(59,130,246,0.18),transparent_45%)]" />

                  {/* Content */}
                  <div className="absolute bottom-10 left-10 z-10 flex gap-5 max-w-lg">
                    <div className="text-white/90 mt-1 flex-shrink-0 transition-all duration-500 group-hover/card:scale-110 group-hover/card:text-primary">
                      <slide.icon size={52} strokeWidth={1.5} />
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-2xl md:text-3xl font-medium text-white leading-snug transition-all duration-500 group-hover/card:translate-x-1">
                        {slide.title}
                      </h2>
                      <p className="text-white/75 text-sm md:text-base leading-relaxed">
                        {slide.desc}
                      </p>
                      <div className="flex items-center gap-3 pt-2 opacity-0 translate-y-3 group-hover/card:opacity-100 group-hover/card:translate-y-0 transition-all duration-500">
                        <span className="text-sm text-primary font-medium tracking-wide">
                          Explore Service
                        </span>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md">
                          <ArrowRight size={16} className="text-primary transition-transform duration-500 group-hover/card:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pulse dot */}
                  <div className="absolute top-5 right-5 w-3 h-3 rounded-full bg-primary/70 animate-pulse" />

                  {/* Hover border ring */}
                  <div className="absolute inset-0 rounded-3xl border border-primary/0 group-hover/card:border-primary/20 transition-all duration-700" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}