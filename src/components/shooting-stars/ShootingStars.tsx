import { useState, useEffect, useRef } from "react";
import type { JSX, ReactElement } from "react"
import './ShootingStars.css';

interface Star {
  id: number;
  x: number;
  y: number;
  length: number;
  distance: number;
  duration: number;
}

const minStarCount: number = 3;
const maxStarCount: number = 6;

const spawnInterval: number = 1200; // (ms)

const minSpawnX: number = -20; // (vw)
const maxSpawnX: number = 80; // (vw)

const minSpawnY: number = -20; // (vh)
const maxSpawnY: number = 80; // (vh)

const minTrailLen: number = 180; // (px)
const maxTrailLen: number = 240; // (px)

const minTravelDist: number = 800; // (px)
const maxTravelDist: number = 1400; // (px)

const minDuration: number = 3; // (s)
const maxDuration: number = 5; // (s)

const offsetCount: number = maxStarCount - minStarCount;
const offsetX: number = maxSpawnX - minSpawnX;
const offsetY: number = maxSpawnY - minSpawnY;
const offsetLen: number = maxTrailLen - minTrailLen;
const offsetTravelDist: number = maxTravelDist - minTravelDist;
const offsetDuration: number = maxDuration - minDuration;

const ShootingStars = (): JSX.Element => {

  const [stars, setStars] = useState<Map<number, Star>>(new Map());
  const timeoutsRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  useEffect(() => {
    const currentTimeouts: Map<number, ReturnType<typeof setTimeout>> = timeoutsRef.current; 

    const spawnStars = setInterval((): void => {      
      const starCount: number = Math.floor(Math.random() * offsetCount) + minStarCount;

      // Spawn from 1 to 5 stars each interval
      const newStars: Star[] = Array.from({ length: starCount }, (): Star => {
        return {
          id: Date.now() + Math.random(),
          
          x: Math.random() * offsetX + minSpawnX, 
          y: Math.random() * offsetY + minSpawnY,
          
          length: Math.random() * offsetLen + minTrailLen,    // Tail length: 80px to 180px
          distance: Math.random() * offsetTravelDist + minTravelDist, // Travel distance: 800px to 1400px
          duration: Math.random() * offsetDuration + minDuration, 
        };
      });
      
      // --- UPDATE STAR MAP ---
      setStars((prev): Map<number, Star> => { 
        const newMap: Map<number, Star> = new Map<number, Star>(prev);

        newStars.forEach((star) => {
          newMap.set(star.id, star);
        })
        
        return newMap;
      });
      
      // --- STAR MAP CLEANUP ---
      newStars.forEach((star): void => {
        const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {

          // Remove star from the map
          setStars((prev): Map<number, Star> => { 
            const newMap: Map<number, Star> = new Map<number, Star>(prev);
            newMap.delete(star.id)            
            return newMap;
          });

          // Remove its tracker
          currentTimeouts.delete(star.id);
        }, star.duration * 1000);

        // Store tracker to delete it later
        currentTimeouts.set(star.id, timeoutId);
      })
    }, spawnInterval);

    return (): void => {
      clearInterval(spawnStars);
      currentTimeouts.forEach((timeout) => {
        clearTimeout(timeout);
      });
      currentTimeouts.clear();
    }
  }, []);

  return (
    <div className="stars-container">
      {
        Array.from(stars.values()).map((star): ReactElement => {
          return (
            <div
              key={star.id}
              className="shooting-star"
              style={{
                ["--star-x" as string]: `${star.x}vw`,
                ["--star-y" as string]: `${star.y}vh`,
                ["--star-len" as string]: `${star.length}px`,
                ["--star-duration" as string]: `${star.duration}s`,
                ["--star-dist" as string]: `${star.distance}px`
              }}
            >
            </div>
          );
        })
      }
    </div>
  );
};

export default ShootingStars;