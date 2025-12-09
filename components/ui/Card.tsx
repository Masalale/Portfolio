import { CSSProperties } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function Card({ children, className = "", index }: CardProps) {
  const cardStyle: CSSProperties = index !== undefined 
    ? { '--card-index': index } as CSSProperties 
    : {};

  return (
    <article
      className={`card ${className}`}
      style={cardStyle}
    >
      {children}
    </article>
  );
}
