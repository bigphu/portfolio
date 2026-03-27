import { useEffect, useRef } from "react";

const useScrollProgress = () => {
  // Need to pass this to ScrollIndicator's ref to manipulate it
  const scrollBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      if (!scrollBarRef.current) {
        return;
      }

      const body: HTMLElement = document.body,
            html: HTMLElement = document.documentElement;

      const documentHeight: number = Math.max( body.scrollHeight, body.offsetHeight, 
                      html.clientHeight, html.scrollHeight, html.offsetHeight );

      const windowHeight: number = window.innerHeight || html.clientHeight;

      const scrollableHeight: number = documentHeight - windowHeight;

      if (scrollableHeight < 0) {
        return;
      }

      const currentScroll: number = window.scrollY;

      const scrollProgress: number = (currentScroll / scrollableHeight) * 100;
      // Lift the scrollbar thump up
      scrollBarRef.current.style.transform = `translateY(-${100 - scrollProgress}%)`
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    }
  }, [])

  return scrollBarRef;
}

export default useScrollProgress