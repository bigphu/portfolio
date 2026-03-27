import { useEffect, useRef } from "react";

const useScrollProgress = () => {
  const scrollBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let ticking = false; // Prevents overlapping animation frames

    const updateScroll = (): void => {
      if (!scrollBarRef.current) {
        ticking = false;
        return;
      }

      const body: HTMLElement = document.body;
      const html: HTMLElement = document.documentElement;

      const documentHeight: number = Math.max( 
        body.scrollHeight, body.offsetHeight, 
        html.clientHeight, html.scrollHeight, html.offsetHeight 
      );

      const windowHeight: number = window.innerHeight || html.clientHeight;
      const scrollableHeight: number = documentHeight - windowHeight;

      if (scrollableHeight > 0) {
        const currentScroll: number = window.scrollY;
        const scrollProgress: number = (currentScroll / scrollableHeight) * 100;
        
        // Lift the scrollbar thumb up
        scrollBarRef.current.style.transform = `translateY(-${100 - scrollProgress}%)`;
      }

      ticking = false; 
    };

    // The scroll listener only requests a frame if one isn't already pending
    const handleScroll = (): void => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    // Run once on mount to set initial position
    updateScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      // Clean up any pending animation frames if the component unmounts
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return scrollBarRef;
};

export default useScrollProgress;