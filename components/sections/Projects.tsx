"use client";

import { useRef } from "react";
import * as Icons from "lucide-react";
import { projects } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Projects() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollReveal([titleRef]);

  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    return IconComponent || Icons.Code;
  };

  return (
    <section id="projects" className="pt-32 pb-16 min-h-screen flex flex-col items-center bg-cream md:pt-24 md:pb-16 sm:pt-16 sm:pb-8">
      <h2 ref={titleRef} className="page-title">
        GitHub Projects
      </h2>
      <div className="flex-1 max-w-[1200px] w-full mx-auto px-8 sm:px-4 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {projects.map((project, index) => {
            const ProjectIcon = getIcon(project.projectIcon);
            const GithubIcon = Icons.Github;
            const ExternalLinkIcon = Icons.ExternalLink;
            
            return (
              <Card key={index} index={index + 1} glowEffect>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                    <ProjectIcon className="w-7 h-7 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="card-title mb-2">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                      >
                        <GithubIcon size={14} className="mr-1 align-middle" />
                        GitHub
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link"
                        >
                          <ExternalLinkIcon size={14} className="mr-1 align-middle" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <p className="card-description">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => {
                    const TechIcon = getIcon(tech.icon);
                    return (
                      <div
                        key={techIndex}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-burgundy/5 border border-burgundy/20 hover:bg-burgundy hover:text-white transition-all duration-300"
                      >
                        <TechIcon className="w-3.5 h-3.5" />
                        <span className="text-xs font-medium">{tech.name}</span>
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
