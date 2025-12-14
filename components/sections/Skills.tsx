"use client";

import { useRef } from "react";
import * as Icons from "lucide-react";
import { skillCategories } from "@/data/skills";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getIcon } from "@/utils/getIcon";

export function Skills() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollReveal([titleRef]);

  return (
    <section id="skills" className="pt-32 pb-16 min-h-screen flex flex-col items-center bg-cream md:pt-24 md:pb-16 sm:pt-16 sm:pb-8">
      <h2 ref={titleRef} className="page-title">
        What I Do
      </h2>
      <div className="flex-1 max-w-[1200px] w-full mx-auto px-8 sm:px-4 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 w-full">
          {skillCategories.map((category, index) => {
            const CategoryIcon = getIcon(category.categoryIcon);
            return (
              <article
                key={index}
                className="skill-card"
                style={{ '--card-index': index } as React.CSSProperties}
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="skill-icon-container">
                    <CategoryIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="card-title mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = getIcon(skill.icon);
                    return (
                      <div
                        key={skillIndex}
                        className="skill-tag"
                        style={{ animationDelay: `${skillIndex * 0.05}s` }}
                      >
                        <SkillIcon className="w-4 h-4" />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

