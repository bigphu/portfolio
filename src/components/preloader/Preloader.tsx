import './Preloader.css';
import type { JSX, ReactElement } from "react";

const Preloader = (): JSX.Element => {
  // --- PRELOADER TEXT ---
  const rawText: string = "BIG PHÚ";
  const lines: string[] = rawText.split("\n");
  
  // --- PRELOADER CURTAIN ---
  const colNum: number = 10;
  const cols: number[] = [...Array(colNum).keys()];

  // --- ANIMATION TIMING ---
  const totalLetters: number = rawText.replace(/\n/g, "").length;

  // 1. Text Timing
  const letterStagger: number = 0.1; // seconds between each letter appearing
  const letterDuration: number = 2.0; // total seconds a letter stays on screen
  const textFinishTime: number = (totalLetters * letterStagger) + letterDuration;

  // 2. Curtain Timing
  const colStagger: number = 0.1;  // seconds between each column dropping
  const colDuration: number = 0.6; // seconds it takes one column to slide down
  // Start the curtain drop slightly before the text fully finishes its fade-out
  const curtainStartDelay: number = textFinishTime * 3 / 4; 

  // 3. Container Timing
  // The entire preloader hides exactly when the last column finishes its animation
  const totalPreloaderTime = curtainStartDelay + (colNum * colStagger) + colDuration;

  return (
    <div 
      className="preloader-container"
      style={{
        animationDelay: `${totalPreloaderTime}s`
      }}
    >
      {/* Generates preloader background curtain */}
      {cols.map((index): ReactElement => {
        return (
          <div 
            key={`col-${index}`}
            className="curtain-col"
            style={{
              width: `${100/colNum}%`,
              animationDuration: `${colDuration}s`,
              animationDelay: `${curtainStartDelay + (index * colStagger)}s`
            }}
          ></div>
        )
      })}   

      {/* Generates preloader text in separate rows */}
      <div className="preloader-text">
        {lines.map((line, lineIndex): ReactElement => {
          
          // Calculate how many characters came before this line to maintain perfect stagger timing
          const previousCharsCount = lines
            .slice(0, lineIndex)
            .reduce((total, prevLine) => total + prevLine.length, 0);

          return (
            // A dedicated wrapper for each line
            <div key={`line-${lineIndex}`} className="text-line">
              
              {line.split("").map((letter, charIndex): ReactElement => {
                // Add previous lines' char count to keep the delay continuous
                const absoluteIndex = previousCharsCount + charIndex;
                
                return (
                  <span
                    key={`letter-${absoluteIndex}`} 
                    className="letter"
                    style={{
                      animationDuration: `${letterDuration}s`,
                      animationDelay: `${absoluteIndex * letterStagger}s`
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                );
              })}
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preloader;