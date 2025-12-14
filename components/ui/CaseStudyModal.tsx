"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { Github, ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { getIcon } from "@/utils/getIcon";

interface CaseStudyModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
    originRect: DOMRect | null;
}

export function CaseStudyModal({ project, isOpen, onClose, originRect }: CaseStudyModalProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const isClosingRef = useRef(false);

    // Open animation
    useEffect(() => {
        if (!isOpen || !project) return;

        setIsVisible(true);
        isClosingRef.current = false;

        const raf = requestAnimationFrame(() => {
            const content = contentRef.current;
            const overlay = overlayRef.current;
            if (!content || !overlay) return;

            if (timelineRef.current) {
                timelineRef.current.kill();
            }

            gsap.set(overlay, { opacity: 0 });
            gsap.set(content, {
                opacity: 0,
                scale: 0.85,
                y: 40,
            });

            timelineRef.current = gsap.timeline({
                defaults: { duration: 0.6, ease: "power4.out" }
            });

            timelineRef.current
                .to(overlay, { opacity: 1, duration: 0.4 }, 0)
                .to(content, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }, 0.05);
        });

        return () => cancelAnimationFrame(raf);
    }, [isOpen, project]);

    // Close with animation
    const handleClose = () => {
        if (isClosingRef.current) return;
        isClosingRef.current = true;

        const content = contentRef.current;
        const overlay = overlayRef.current;
        if (!content || !overlay) {
            setIsVisible(false);
            onClose();
            return;
        }

        if (timelineRef.current) {
            timelineRef.current.kill();
        }

        timelineRef.current = gsap.timeline({
            defaults: { duration: 0.4, ease: "power3.in" },
            onComplete: () => {
                setIsVisible(false);
                isClosingRef.current = false;
                onClose();
            }
        });

        timelineRef.current
            .to(content, {
                opacity: 0,
                scale: 0.9,
                y: 30,
            }, 0)
            .to(overlay, { opacity: 0, duration: 0.35 }, 0.1);
    };

    // Escape key to close
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        if (isVisible) {
            window.addEventListener("keydown", handleEscape);
            return () => window.removeEventListener("keydown", handleEscape);
        }
    }, [isVisible]);

    // Scroll/wheel to close
    useEffect(() => {
        if (!isVisible) return;

        const handleWheel = (e: WheelEvent) => {
            // Any scroll triggers close
            if (Math.abs(e.deltaY) > 10) {
                handleClose();
            }
        };

        // Delay to prevent immediate close on open
        const timeout = setTimeout(() => {
            window.addEventListener("wheel", handleWheel, { passive: true });
        }, 500);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("wheel", handleWheel);
        };
    }, [isVisible]);

    if (!isVisible || !project) return null;

    return (
        <div ref={containerRef} className="case-study-fullscreen open">
            {/* Dark overlay - click to close */}
            <div
                ref={overlayRef}
                className="case-study-fullscreen-overlay"
                onClick={handleClose}
            />

            {/* Modal content - fits viewport */}
            <div ref={contentRef} className="case-study-compact">
                {/* Left side - Image */}
                <div className="case-study-compact-image">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right side - Content */}
                <div className="case-study-compact-content">
                    <span className="case-study-compact-category">{project.category}</span>
                    <h2 className="case-study-compact-title">{project.title}</h2>
                    <p className="case-study-compact-description">{project.description}</p>

                    {/* Technologies */}
                    <div className="case-study-compact-tech">
                        {project.technologies.slice(0, 6).map((tech, i) => {
                            const TechIcon = getIcon(tech.icon);
                            return (
                                <div key={i} className="case-study-compact-tech-item">
                                    <TechIcon className="w-4 h-4" />
                                    <span>{tech.name}</span>
                                </div>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <div className="case-study-compact-actions">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="case-study-compact-btn primary"
                        >
                            <Github size={18} />
                            GitHub
                        </a>
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="case-study-compact-btn secondary"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
