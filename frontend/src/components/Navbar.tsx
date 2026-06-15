import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import gsap from "gsap";

import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        ".menu-link",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power4.out",
        }
      );
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-30 transition-all duration-500",
          isScrolled
            ? "py-4"
            : "py-6"
        )}
      >
        <div className="container-custom">
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl border transition-all duration-500 px-5 md:px-7 h-20",
              isScrolled
                ? "border-white/10 bg-transparent backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
                : "border-transparent bg-transparent"
            )}
          >
            {/* LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3 relative z-[120]"
            >
              <div className="w-11 h-11 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src="/corehex(2).png"
                  alt="Corehex Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-white font-semibold text-lg tracking-tight">
                  Corehex
                </span>

                <span className="text-white/45 text-[10px] tracking-[0.1em] uppercase mt-1">
                  <span className="md:hidden">Solutions</span>
                  <span className="hidden md:inline">Hardware & Software Solutions</span>
                </span>
              </div>
            </Link>

            {/* MENU BUTTON */}
            <button
              onClick={() =>
                setIsMenuOpen(!isMenuOpen)
              }
              className="relative z-[120] group w-14 h-14 rounded-2xl flex items-center justify-center hover:bg-white/[0.08] transition-all duration-300"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Menu
                  className={cn(
                    "absolute w-6 h-6 text-white transition-all duration-300",
                    isMenuOpen
                      ? "opacity-0 rotate-90 scale-50"
                      : "opacity-100 rotate-0 scale-100"
                  )}
                />

                <X
                  className={cn(
                    "absolute w-6 h-6 text-white transition-all duration-300",
                    isMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-50"
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      <div
        className={cn(
          "fixed inset-0 z-[110] transition-all duration-500",
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        )}
      >
        {/* BACKDROP */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_40%)]" />

        {/* GRID */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:72px_72px]" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center">
            {navigation.map((item, index) => {
              const active =
                location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "menu-link group relative text-5xl md:text-7xl font-semibold tracking-tight py-4 transition-all duration-300",
                    active
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                  )}
                >
                  <span className="relative inline-flex items-center gap-4">
                    {item.name}

                    <ArrowRight className="w-7 h-7 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>

                  <span
                    className={cn(
                      "absolute left-0 bottom-2 h-[2px] bg-gradient-to-r from-primary to-cyan-300 transition-all duration-500",
                      active
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* BOTTOM */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
            <a
              href="tel:+919879300929"
              className="text-white/55 hover:text-white transition-colors duration-300 text-sm tracking-[0.25em] uppercase"
            >
              +91 9879300929
            </a>
          </div>
        </div>
      </div>
    </>
  );
}