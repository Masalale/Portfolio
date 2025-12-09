"use client";

import { useLenis } from "@/components/providers/LenisProvider";
import { ScrollHint } from "@/components/ui/ScrollHint";
import { HackerText } from "@/components/ui/HackerText";

export function Hero() {
  const { lenis } = useLenis();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo("#contact", { duration: 1.5 });
    } else {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="h-screen bg-gradient-section flex items-center justify-center text-center px-8 md:px-4 sm:px-4 relative">
      <div className="max-w-[800px]">
        <div className="glass-panel inline-block">
        <h1 className="hero-title font-primary text-black mb-4 tracking-tight text-shadow-subtle">
          <HackerText text="Clarence Ngángá Chomba" />
        </h1>
        <h2 className="hero-subtitle font-primary text-burgundy mb-8 tracking-wide">
          Software Engineer
        </h2>
        </div>
        <p className="hero-description text-sage leading-relaxed mb-12 max-w-[600px] mx-auto">
          Building scalable solutions through Python, web development, and system
          administration. Transforming business challenges into technical opportunities.
        </p>
        <div className="flex gap-6 justify-center flex-wrap mt-8 md:flex-col md:items-center">
          <a href="#contact" className="btn btn-outline" onClick={handleContactClick}>
            Get In Touch
          </a>
        </div>
      </div>
      <ScrollHint />
    </section>
  );
}
