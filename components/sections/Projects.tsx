"use client";

import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Projects() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useScrollReveal([titleRef]);

  return (
    <section id="projects" className="pt-32 pb-16 min-h-screen flex flex-col items-center bg-cream md:pt-24 md:pb-16 sm:pt-16 sm:pb-8">
      <h2 ref={titleRef} className="page-title">
        GitHub Projects
      </h2>
      <div className="flex-1 max-w-[1200px] w-full mx-auto px-8 sm:px-4 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} index={index + 1}>
              <header className="flex justify-between items-start mb-4 flex-wrap gap-2 sm:flex-col sm:gap-3">
                <h3 className="card-title flex-1 min-w-[200px]">
                  {project.title}
                </h3>
                <div className="flex gap-2 flex-wrap items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    <Github size={14} className="mr-1 align-middle" />
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link"
                    >
                      <ExternalLink size={14} className="mr-1 align-middle" />
                      Live Site
                    </a>
                  )}
                </div>
              </header>
              <p className="card-description">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-1.5">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tag">
                    {tech}
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
