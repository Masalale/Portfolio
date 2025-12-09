"use client";

import { useRef } from "react";
import * as Icons from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Skills() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollReveal([titleRef]);

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent || Icons.Code;
  };

  return (
    <section id="skills" className="pt-32 pb-16 min-h-screen flex flex-col items-center bg-cream md:pt-24 md:pb-16 sm:pt-16 sm:pb-8">
      <h2 ref={titleRef} className="page-title">
        Technical Skills
      </h2>
      <div className="flex-1 max-w-[1200px] w-full mx-auto px-8 sm:px-4 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {skillCategories.map((category, index) => {
            const CategoryIcon = getIcon(category.categoryIcon);
            return (
              <Card key={index} index={index + 1} glowEffect>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-burgundy/10 flex items-center justify-center">
                    <CategoryIcon className="w-6 h-6 text-burgundy" />
                  </div>
                  <div>
                    <h3 className="card-title mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {category.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = getIcon(skill.icon);
                    return (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-burgundy/5 transition-colors"
                      >
                        <SkillIcon className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="text-sm font-medium text-neutral-700">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
