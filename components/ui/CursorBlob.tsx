'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export function CursorBlob() {
  const blobRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    // Set initial position centered
    posRef.current = { 
      x: window.innerWidth / 2, 
      y: window.innerHeight / 2 
    };

    const handlePointerMove = (event: PointerEvent) => {
      posRef.current = { x: event.clientX, y: event.clientY };
    };

    // Use GSAP ticker for smooth animation
    const animate = () => {
      gsap.to(blob, {
        left: posRef.current.x,
        top: posRef.current.y,
        duration: 2,
        ease: 'power3.out',
        overwrite: true,
      });
    };

    gsap.ticker.add(animate);
    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      gsap.ticker.remove(animate);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <>
      <div
        id="blob"
        ref={blobRef}
        className="fixed pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          left: '50%',
          top: '50%',
          marginLeft: '-250px',
          marginTop: '-250px',
          borderRadius: '50%',
          background: `radial-gradient(circle at 30% 30%, 
            rgba(139, 105, 20, 0.6) 0%, 
            rgba(61, 12, 31, 0.5) 30%, 
            rgba(74, 20, 40, 0.4) 50%, 
            rgba(90, 107, 88, 0.3) 70%, 
            rgba(26, 25, 24, 0.2) 100%
          )`,
          filter: 'blur(80px)',
          opacity: 0.7,
          zIndex: 0,
        }}
      />
    </>
  );
}
