"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, Project } from "@/data/projects";
import { WorkCard } from "@/components/ui/WorkCard";
import { CaseStudyModal } from "@/components/ui/CaseStudyModal";
import { Plus } from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function HorizontalWorkReel() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clickedCardRect, setClickedCardRect] = useState<DOMRect | null>(null);

    // Handle project click - open modal with animation origin
    const handleProjectClick = useCallback((project: Project, cardElement: HTMLElement) => {
        const rect = cardElement.getBoundingClientRect();
        setClickedCardRect(rect);
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = "hidden";
    }, []);

    // Handle modal close
    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setTimeout(() => {
            setSelectedProject(null);
            setClickedCardRect(null);
        }, 500); // Wait for exit animation
        document.body.style.overflow = "";
    }, []);

    // Close modal on scroll
    useEffect(() => {
        if (!isModalOpen) return;

        let scrollStartY = window.scrollY;

        const handleScroll = () => {
            const scrollDelta = Math.abs(window.scrollY - scrollStartY);
            if (scrollDelta > 30) {
                handleCloseModal();
            }
        };

        const timeout = setTimeout(() => {
            window.addEventListener("scroll", handleScroll, { passive: true });
        }, 100);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isModalOpen, handleCloseModal]);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        const title = titleRef.current;

        if (!section || !track) return;

        const cards = track.querySelectorAll(".work-card");
        if (cards.length === 0) return;

        const firstCard = cards[0] as HTMLElement;
        const cardWidth = firstCard.offsetWidth;
        const gap = parseFloat(getComputedStyle(track).gap) || 0;
        const viewportCenter = window.innerWidth / 2;
        const cardCenter = cardWidth / 2;

        const initialOffset = viewportCenter - cardCenter;
        const lastCardOffset = (cards.length - 1) * (cardWidth + gap);
        const finalOffset = viewportCenter - cardCenter - lastCardOffset;
        const scrollDistance = initialOffset - finalOffset;

        gsap.set(track, { x: initialOffset });

        const scrollTween = gsap.to(track, {
            x: finalOffset,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: () => `+=${scrollDistance}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });

        if (title) {
            gsap.to(title, {
                opacity: 0,
                y: -50,
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "top -10%",
                    scrub: true,
                },
            });
        }

        cards.forEach((card) => {
            const img = card.querySelector(".work-card-img") as HTMLElement;
            if (img) {
                gsap.to(img, {
                    objectPosition: "0% center",
                    ease: "none",
                    scrollTrigger: {
                        trigger: card,
                        containerAnimation: scrollTween,
                        start: "left right",
                        end: "right left",
                        scrub: true,
                    },
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <>
            <section id="work" ref={sectionRef} className="horizontal-work-section">
                <h2 ref={titleRef} className="horizontal-work-title">
                    My Work
                </h2>

                <div className="work-center-indicator">
                    <Plus size={24} strokeWidth={1.5} />
                </div>

                <div ref={trackRef} className="horizontal-work-track">
                    {projects.map((project, index) => (
                        <WorkCard
                            key={project.slug}
                            project={project}
                            index={index}
                            onClick={handleProjectClick}
                        />
                    ))}
                </div>

                <div className="horizontal-scroll-indicator">
                    <span>Scroll to explore</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </div>
            </section>

            <CaseStudyModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                originRect={clickedCardRect}
            />
        </>
    );
}
