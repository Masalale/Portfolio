"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollReveal([titleRef, gridRef]);

  return (
    <section id="about" className="pt-32 pb-16 min-h-screen flex flex-col items-center bg-cream md:pt-24 md:pb-16 sm:pt-16 sm:pb-8">
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
            <Image
              src="/images/IMG-20250122-WA0025.jpg"
              alt="Clarence Chomba"
              className="profile-pic"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
