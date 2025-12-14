"use client";

import React, { useState, useRef, useEffect } from "react";
import * as Icons from "lucide-react";

interface ProjectCarouselProps {
    children: React.ReactNode[];
}

export function ProjectCarousel({ children }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);
    const totalSlides = children.length;

    const goToSlide = (index: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const goToPrevious = () => {
        const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
        goToSlide(newIndex);
    };

    const goToNext = () => {
        const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
        goToSlide(newIndex);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") goToPrevious();
            if (e.key === "ArrowRight") goToNext();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentIndex]);

    // Touch/Swipe support
    const touchStartRef = useRef(0);
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEnd = e.changedTouches[0].clientX;
        const diff = touchStartRef.current - touchEnd;
        if (Math.abs(diff) > 50) {
            if (diff > 0) goToNext();
            else goToPrevious();
        }
    };

    return (
        <div className="carousel-container">
            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="carousel-arrow carousel-arrow-left"
                aria-label="Previous project"
            >
                <Icons.ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={goToNext}
                className="carousel-arrow carousel-arrow-right"
                aria-label="Next project"
            >
                <Icons.ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Track */}
            <div
                className="carousel-viewport"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    ref={trackRef}
                    className="carousel-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {children.map((child, index) => (
                        <div key={index} className="carousel-slide">
                            {child}
                        </div>
                    ))}
                </div>
            </div>

            {/* Dot Indicators */}
            <div className="carousel-dots">
                {children.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                        aria-label={`Go to project ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            <div className="carousel-counter">
                {currentIndex + 1} / {totalSlides}
            </div>
        </div>
    );
}
