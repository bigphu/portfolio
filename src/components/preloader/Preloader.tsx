import './Preloader.css';
import type { JSX, ReactElement } from "react";

// --- PRELOADER TEXT ---
const rawText: string = "bigphu.com";

// --- PRELOADER CURTAIN ---
const colNum: number = 10;
const cols: number[] = [...Array(colNum).keys()];

// --- ANIMATION TIMING ---
const totalLetters: number = rawText.replace(/\n/g, "").length;

const letterStagger: number = 0.1; 
const letterDuration: number = 2.0; 
const textFinishTime: number = (totalLetters * letterStagger) + letterDuration;

const colStagger: number = 0.1;  
const colDuration: number = 0.6; 
const curtainStartDelay: number = textFinishTime * 0.75; 

const totalPreloaderTime = curtainStartDelay + (colNum * colStagger) + colDuration;

const Preloader = (): JSX.Element => {

  return (
    <div 
      className="preloader-container"
      style={{ 
        ['--preloader-delay' as string]: `${totalPreloaderTime}s`,
        ['--col-duration' as string]: `${colDuration}s`,
        ['--letter-duration' as string]: `${letterDuration}s`,
        ['--col-width' as string]: `${100/colNum}%`
      }}
    >
      {/* Generates preloader background curtain */}
      {
        cols.map((colIndex: number): ReactElement => {
          return (
            <div 
              key={`col-${colIndex}`}
              className="curtain-col"
              style={{
                ['--col-delay' as string]: `${curtainStartDelay + (colIndex * colStagger)}s`
              }}
            ></div>
          )
        })
      }   

      {/* Generates preloader text */}
      <div className="preloader-text">
        {
          rawText.split("").map((letter: string, letterIndex: number): ReactElement => {
            return (
              <div
                key={`letter-${letterIndex}`} 
                className="letter"
                style={{
                  ['--letter-delay' as string]: `${letterIndex * colStagger}s`
                }}
              >
                {
                  letter === " " ? "\u00A0" : letter
                }
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Preloader;