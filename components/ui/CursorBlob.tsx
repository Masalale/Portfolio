'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export function CursorBlob() {
    const blobRef = useRef<HTMLDivElement>(null);
    const [isCursorInAbout, setIsCursorInAbout] = useState(false);

    // Refs for state access inside callbacks/effects
    const isCursorInAboutRef = useRef(isCursorInAbout);
    const isCursorInHeroRef = useRef(true);
    const hasEnteredAbout = useRef(false); // Track if cursor has entered About at least once

    // Track cursor position - default to center
    const cursorPos = useRef({ x: 0, y: 0 });
    const lastPointerMoveAt = useRef(0);
    // Floating position stored as normalized coords within About section (0..1)
    const floatRel = useRef({ x: 0.5, y: 0.5 });
    const floatTweenRef = useRef<gsap.core.Tween | null>(null);
    const restartFloatRef = useRef<(() => void) | null>(null);
    const renderPos = useRef({ x: 0, y: 0 });
    const blend = useRef(0); // 0 = float, 1 = follow
    const initialized = useRef(false);

    // Opacity refs
    const proximityMultiplier = useRef(1);

    // Update ref when state changes
    useEffect(() => {
        isCursorInAboutRef.current = isCursorInAbout;
    }, [isCursorInAbout]);

    // Initialize cursor position on mount
    useEffect(() => {
        if (!initialized.current && typeof window !== 'undefined') {
            cursorPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            renderPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            lastPointerMoveAt.current = performance.now();
            initialized.current = true;
        }
    }, []);

    // Floating animation - random drift within About section bounds
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const createFloatAnimation = () => {
            floatTweenRef.current = gsap.to(floatRel.current, {
                x: Math.random(),
                y: Math.random(),
                duration: 5 + Math.random() * 4,
                ease: 'sine.inOut',
                onComplete: createFloatAnimation,
            });
        };

        restartFloatRef.current = createFloatAnimation;
        createFloatAnimation();

        return () => {
            if (floatTweenRef.current) floatTweenRef.current.kill();
            restartFloatRef.current = null;
        };
    }, []);

    // Main animation loop (60fps)
    useEffect(() => {
        const blob = blobRef.current;
        if (!blob || typeof window === 'undefined') return;

        const idleTimeoutMs = 350;

        const syncFloatToCurrentPosition = () => {
            const aboutSection = document.getElementById('about');
            if (!aboutSection) return;

            const rect = aboutSection.getBoundingClientRect();
            const isAboutOnScreen = rect.bottom > 0 && rect.top < window.innerHeight;
            if (!isAboutOnScreen) return;

            const padding = 150;

            const availableW = Math.max(1, rect.width - padding * 2);
            const availableH = Math.max(1, rect.height - padding * 2);

            const relX = (renderPos.current.x - (rect.left + padding)) / availableW;
            const relY = (renderPos.current.y - (rect.top + padding)) / availableH;

            floatRel.current.x = gsap.utils.clamp(0, 1, relX);
            floatRel.current.y = gsap.utils.clamp(0, 1, relY);

            if (floatTweenRef.current) {
                floatTweenRef.current.kill();
                floatTweenRef.current = null;
            }
            restartFloatRef.current?.();
        };

        const updateCursorInAboutFromPoint = (x: number, y: number) => {
            const aboutSection = document.getElementById('about');
            if (!aboutSection) return false;
            const rect = aboutSection.getBoundingClientRect();
            return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        };

        const updateCursorInHeroFromPoint = (x: number, y: number) => {
            const heroSection = document.getElementById('home');
            if (!heroSection) return false;
            const rect = heroSection.getBoundingClientRect();
            return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        };

        const handlePointerMove = (e: PointerEvent) => {
            cursorPos.current = { x: e.clientX, y: e.clientY };
            lastPointerMoveAt.current = performance.now();

            const inAbout = updateCursorInAboutFromPoint(e.clientX, e.clientY);
            isCursorInHeroRef.current = updateCursorInHeroFromPoint(e.clientX, e.clientY);

            if (inAbout !== isCursorInAboutRef.current) {
                if (isCursorInAboutRef.current && !inAbout) {
                    syncFloatToCurrentPosition();
                }
                // Mark that cursor has entered About at least once
                if (inAbout) {
                    hasEnteredAbout.current = true;
                }
                setIsCursorInAbout(inAbout);
            }
        };
        window.addEventListener('pointermove', handlePointerMove);

        const handleScrollOrResize = () => {
            const { x, y } = cursorPos.current;
            const inAbout = updateCursorInAboutFromPoint(x, y);
            isCursorInHeroRef.current = updateCursorInHeroFromPoint(x, y);

            if (inAbout !== isCursorInAboutRef.current) {
                if (isCursorInAboutRef.current && !inAbout) {
                    syncFloatToCurrentPosition();
                }
                if (inAbout) {
                    hasEnteredAbout.current = true;
                }
                setIsCursorInAbout(inAbout);
            }
        };
        window.addEventListener('scroll', handleScrollOrResize, { passive: true });
        window.addEventListener('resize', handleScrollOrResize);

        let aboutImage: HTMLImageElement | null = null;
        const findAboutImage = () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) aboutImage = aboutSection.querySelector('img');
        };
        findAboutImage();
        const mutationObserver = new MutationObserver(findAboutImage);
        mutationObserver.observe(document.body, { childList: true, subtree: true });

        const getFloatViewportPosition = () => {
            const aboutSection = document.getElementById('about');
            if (!aboutSection) {
                return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            }

            const rect = aboutSection.getBoundingClientRect();
            const padding = 150;
            const availableW = Math.max(1, rect.width - padding * 2);
            const availableH = Math.max(1, rect.height - padding * 2);

            return {
                x: rect.left + padding + floatRel.current.x * availableW,
                y: rect.top + padding + floatRel.current.y * availableH,
            };
        };

        const wasFollowingRef = { current: false };

        const tickerCallback = () => {
            const now = performance.now();
            const isIdle = isCursorInAboutRef.current && now - lastPointerMoveAt.current > idleTimeoutMs;
            
            // Follow logic:
            // - Must have entered About at least once (activation)
            // - If cursor is in Hero, always detach
            // - If inside About and idle, detach to float
            const shouldFollow =
                hasEnteredAbout.current &&
                !isCursorInHeroRef.current &&
                (!isCursorInAboutRef.current || !isIdle);

            // Prevent "snap" to a random drift point when detaching.
            // If we were following and we just switched to float, re-anchor floatRel to the current on-screen position.
            if (wasFollowingRef.current && !shouldFollow) {
                syncFloatToCurrentPosition();
            }
            wasFollowingRef.current = shouldFollow;

            const targetBlend = shouldFollow ? 1 : 0;
            blend.current += (targetBlend - blend.current) * 0.15; // Faster blend transition for smoother mode switching

            const floatXY = getFloatViewportPosition();
            const targetX = floatXY.x + (cursorPos.current.x - floatXY.x) * blend.current;
            const targetY = floatXY.y + (cursorPos.current.y - floatXY.y) * blend.current;

            // Use consistent lag for cursor-following everywhere (0.05 = ~1.2s delay)
            // Faster lag (0.18) only when returning to float mode
            const lag = shouldFollow ? 0.05 : 0.18;

            renderPos.current.x += (targetX - renderPos.current.x) * lag;
            renderPos.current.y += (targetY - renderPos.current.y) * lag;

            blob.style.left = `${renderPos.current.x}px`;
            blob.style.top = `${renderPos.current.y}px`;

            if (aboutImage) {
                const rect = aboutImage.getBoundingClientRect();
                const x = cursorPos.current.x;
                const y = cursorPos.current.y;

                const isInsideX = x >= rect.left && x <= rect.right;
                const isInsideY = y >= rect.top && y <= rect.bottom;

                let distance = 0;
                if (!isInsideX || !isInsideY) {
                    const dx = isInsideX ? 0 : Math.min(Math.abs(x - rect.left), Math.abs(x - rect.right));
                    const dy = isInsideY ? 0 : Math.min(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
                    distance = Math.sqrt(dx * dx + dy * dy);
                }

                const fadeStart = 100;
                const targetMultiplier = Math.min(1, distance / fadeStart);
                proximityMultiplier.current += (targetMultiplier - proximityMultiplier.current) * 0.1;
            } else {
                proximityMultiplier.current += (1 - proximityMultiplier.current) * 0.1;
            }

            blob.style.opacity = String(0.32 * proximityMultiplier.current);
        };

        gsap.ticker.add(tickerCallback);

        return () => {
            window.removeEventListener('pointermove', handlePointerMove);
            window.removeEventListener('scroll', handleScrollOrResize);
            window.removeEventListener('resize', handleScrollOrResize);
            gsap.ticker.remove(tickerCallback);
            mutationObserver.disconnect();
        };
    }, []); // Keep a single binding; refs carry live state

    return (
        <>
            <div
                id="blob"
                ref={blobRef}
                style={{
                    position: 'fixed',
                    left: '50%',
                    top: '50%',
                    translate: '-50% -50%',
                    height: '25vmax',
                    aspectRatio: '1',
                    borderRadius: '50%',
                    background: `radial-gradient(circle at center, 
            rgba(220, 170, 100, 1) 0%, 
            rgba(180, 140, 80, 0.9) 20%, 
            rgba(130, 50, 75, 0.85) 40%, 
            rgba(100, 35, 60, 0.7) 60%, 
            rgba(137, 148, 129, 0.5) 80%, 
            transparent 100%
          )`,
                    animation: 'rotate 20s infinite',
                    opacity: 0,
                    filter: 'blur(80px)',
                    zIndex: 1,
                    pointerEvents: 'none',
                    willChange: 'left, top, opacity',
                }}
            />
            <style jsx global>{`
        @keyframes rotate {
          from { rotate: 0deg; }
          50% { scale: 1 1.2; }
          to { rotate: 360deg; }
        }
      `}</style>
        </>
    );
}
