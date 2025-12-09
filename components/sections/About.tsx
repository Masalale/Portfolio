"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import profileImage from "@/public/images/IMG-20250122-WA0025.jpg";

export function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollReveal([titleRef, gridRef]);

  return (
    <section id="about" className="pt-32 pb-16 min-h-screen flex flex-col items-center bg-cream md:pt-24 md:pb-16 sm:pt-16 sm:pb-8">
      {/* SVG filter for neon glitch effect */}
      <svg style={{ width: 0, height: 0, position: "absolute", overflow: "hidden" }}>
        <defs>
          <filter id="neon-glitch">
            <feTurbulence baseFrequency="0.7,0.8" seed="0" type="fractalNoise" result="static">
              <animate attributeName="seed" values="0;100" dur="800ms" repeatCount="1" begin="card.mouseenter" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="static" scale="0">
              <animate attributeName="scale" values="0;40;0" dur="800ms" repeatCount="1" begin="card.mouseenter" />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>
      <style>{`
        .neon-card {
          width: 300px;
          aspect-ratio: 1 / 1;
          border: 0.25rem solid rgb(255 255 255 / 15%);
          border-radius: 1rem;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .neon-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
          filter: url(#neon-glitch);
          transition: box-shadow 0.2s;
        }
        .neon-card:hover .neon-img {
          animation: pulse 800ms ease-in-out;
        }
        @keyframes pulse {
          from, to { scale: 1; }
          50% { scale: 1.08; }
        }
      `}</style>
      <h2 ref={titleRef} className="page-title">
        About Me
      </h2>
      <div className="flex-1 max-w-[1200px] w-full mx-auto px-8 sm:px-4 flex flex-col items-center justify-center">
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:gap-8 w-full justify-center">
          <div className="text-content flex flex-col justify-center items-center md:items-start">
            <h3 className="text-burgundy mb-6 text-center md:text-left">
              Hello! I&apos;m Clarence Chomba,
              <br />A Software Engineer with practical IT support and business operations
              experience.
            </h3>
            <p className="hero-description text-sage text-center md:text-left">
              I&apos;ve gained diverse exposure to IT operations, business management, and
              technical problem-solving through work in family-owned businesses. I&apos;m a
              self-taught Linux user with experience in system administration, command-line
              tools, and troubleshooting. Passionate about experimenting with technology
              from an early age—rooting Android devices, testing Linux distributions, and
              building personal projects.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="neon-card" id="card">
              <Image
                src={profileImage}
                alt="Clarence Chomba"
                className="neon-img"
                width={300}
                height={300}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
