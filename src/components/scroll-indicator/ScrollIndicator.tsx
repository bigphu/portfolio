import type { JSX } from "react";
import { useScrollProgress } from "@/hooks";
import "./ScrollIndicator.css";

const ScrollIndicator = (): JSX.Element => {
  const scrollBarRef = useScrollProgress();

  return (
    <div className="scroll-indicator-track">
      <div 
        className="scroll-indicator-thumb" 
        ref={scrollBarRef}
      ></div>
    </div>
  );
};

export default ScrollIndicator;