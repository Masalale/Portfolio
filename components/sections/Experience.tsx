"use client";

import { useRef } from "react";
import { experience } from "@/data/experience";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Experience() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollReveal([titleRef]);

  return (
    <section id="experience" className="pt-32 pb-16 min-h-screen flex flex-col items-center bg-cream overflow-hidden md:pt-24 md:pb-16 md:overflow-visible sm:pt-16 sm:pb-8">
      <h2 ref={titleRef} className="page-title">
        Professional Experience
      </h2>
      <div className="flex-1 max-w-[1200px] mx-auto px-8 flex flex-col justify-center md:h-auto sm:px-4">
        <div className="max-w-[600px] mx-auto flex flex-col justify-center md:mt-8 sm:mt-6">
          {experience.map((job, index) => (
            <article key={index} className="job py-5 border-b border-burgundy/10 text-center last:border-b-0 md:py-8">
              <h3 className="job-title">
                {job.company}
              </h3>
              <p className="job-role">
                {job.role}
              </p>
              <time className="job-period">
                {job.period}
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
