"use client";

import { CSSProperties, useEffect, useRef } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
  glowEffect?: boolean;
}

export function Card({ children, className = "", index, glowEffect = false }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardStyle: CSSProperties = index !== undefined
    ? { '--card-index': index } as CSSProperties
    : {};

  useEffect(() => {
    if (!glowEffect || !cardRef.current) return;

    const card = cardRef.current;
    const grid = card.closest('.grid');
    if (!grid) return;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      // Get all glow cards in the grid
      const cards = grid.querySelectorAll('.glow-card');

      cards.forEach((targetCard) => {
        const rect = targetCard.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;

        (targetCard as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
        (targetCard as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
      });
    };

    grid.addEventListener("mousemove", handleMouseMove);

    return () => {
      grid.removeEventListener("mousemove", handleMouseMove);
    };
  }, [glowEffect]);

  if (glowEffect) {
    return (
      <article
        ref={cardRef}
        className={`glow-card ${className}`}
        style={cardStyle}
      >
        <div className="glow-card-content">
          {children}
        </div>
      </article>
    );
  }

  return (
    <article
      ref={cardRef}
      className={`card ${className}`}
      style={cardStyle}
    >
      {children}
    </article>
  );
}
