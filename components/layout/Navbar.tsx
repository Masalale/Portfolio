"use client";

import { useEffect, useRef, useState } from "react";

interface NavbarProps {
  sectionColors: string[];
}

export function Navbar({ sectionColors }: NavbarProps) {
  const brandRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function handleScroll() {
      // The trigger point is the navbar position (fixed at top)
      const navbarOffset = 50; // Approximate vertical center of navbar

      sections.forEach((section, index) => {
        const el = section as HTMLElement;
        const rect = el.getBoundingClientRect();
        const id = el.getAttribute("id") || "";

        // Section is active when its top edge is at or above the navbar,
        // and its bottom edge is below the navbar
        if (rect.top <= navbarOffset && rect.bottom > navbarOffset) {
          setActiveSection(id);

          if (brandRef.current) {
            // Instant color switch - no transition
            brandRef.current.style.transition = "none";
            brandRef.current.style.color = sectionColors[index] || "var(--burgundy)";
            brandRef.current.style.textShadow =
              id === "home" ? "none" : "0 1px 2px rgba(17,16,15,0.2)";
          }
        }
      });
    }

    let ticking = false;
    function throttledScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [sectionColors]);

  return (
    <nav 
      ref={navRef} 
      className="navbar fixed top-6 left-8 z-[1000] w-[calc(100%-4rem)] transition-all duration-300 sm:top-6 sm:left-4 sm:w-[calc(100%-2rem)]" 
      data-active-section={activeSection}
    >
      <div className="glass-panel inline-flex items-center">
        <div 
          ref={brandRef} 
          className="brand-text font-brand text-burgundy tracking-wide transition-opacity duration-300"
        >
          Clarence Chomba
        </div>
      </div>
    </nav>
  );
}
