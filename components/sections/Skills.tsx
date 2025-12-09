"use client";

import { useRef } from "react";
import { skillCategories } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Skills() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollReveal([titleRef]);

  return (
    <section id="skills" className="pt-32 pb-16 min-h-screen flex flex-col items-center bg-cream md:pt-24 md:pb-16 sm:pt-16 sm:pb-8">
      <h2 ref={titleRef} className="page-title">
        Technical Skills
      </h2>
      <div className="flex-1 max-w-[1200px] w-full mx-auto px-8 sm:px-4 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card key={index} index={index + 1}>
              <h3 className="card-title mb-3">
                {category.title}
              </h3>
              <p className="card-description">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
