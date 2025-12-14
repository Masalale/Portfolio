"use client";

import { useRef } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface WorkCardProps {
    project: Project;
    index: number;
    onClick: (project: Project, element: HTMLElement) => void;
}

export function WorkCard({ project, index, onClick }: WorkCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        if (cardRef.current) {
            onClick(project, cardRef.current);
        }
    };

    return (
        <div
            ref={cardRef}
            className="work-card"
            style={{ "--card-index": index } as React.CSSProperties}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleClick();
                }
            }}
        >
            {/* Image with parallax effect */}
            <div className="work-card-image">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="work-card-img"
                    sizes="(max-width: 768px) 80vw, 40vmin"
                    priority={index < 3}
                />
            </div>

            {/* Overlay with project info */}
            <div className="work-card-overlay">
                <span className="work-card-category">{project.category}</span>
                <h3 className="work-card-title">{project.title}</h3>
            </div>
        </div>
    );
}
