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
      setRotation((prevRotation) => (prevRotation + 0.75) % 360);
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
          transparent 0deg,
          hsla(16, 90%, 58%, 0) 140deg,
          hsla(16, 90%, 58%, 0.8) 160deg,
          hsl(var(--primary)) 180deg,
          hsl(0 0% 95%) 185deg, 
          hsl(0 0% 95%) 205deg,
          hsl(var(--primary)) 220deg,
          hsla(16, 90%, 58%, 0.8) 240deg,
          hsla(16, 90%, 58%, 0) 260deg,
          transparent 310deg
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
