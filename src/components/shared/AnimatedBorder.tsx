
'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const AnimatedBorder = ({ children, className, containerClassName }: AnimatedBorderProps) => {
  const [rotation, setRotation] = useState(0);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const animate = () => {
      setRotation((prevRotation) => (prevRotation + 0.3) % 360);
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      className={cn("relative p-px", containerClassName)}
      style={{
        background: `conic-gradient(from ${rotation}deg at 50% 50%, 
    /* The Gap */
    transparent 0deg, 
    transparent 90deg, 

    /* Tapered Orange Head */
    hsla(var(--secondary) / 0.8) 100deg, 
    hsl(var(--secondary)) 110deg, 

    /* Transition to Blue */
    hsl(var(--primary)) 150deg, 
    hsl(var(--primary)) 220deg,

    /* White/Silver Highlight (Sharpened) */
    hsl(0 0% 95%) 225deg,

    /* Transition back to Blue (Sharpened) */
    hsl(var(--primary)) 230deg,
    hsl(var(--primary)) 300deg, 

    /* Tapered Orange Tail */
    hsl(var(--secondary)) 340deg, 
    hsla(var(--secondary) / 0.8) 350deg,
    transparent 360deg
)`,
      }}
    >
      <div className={cn("relative w-full h-full bg-background", className)}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorder;
