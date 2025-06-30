
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
      className={cn("relative p-px overflow-hidden", containerClassName)}
      style={{
        background: `conic-gradient(from ${rotation}deg at 50% 50%, 
    hsla(var(--secondary) / 0) 0deg,
    hsla(var(--secondary) / 0.8) 40deg, 
    hsl(var(--foreground)) 140deg, 
    hsl(var(--primary)) 200deg, 
    hsla(var(--secondary) / 0.8) 280deg, 
    hsla(var(--secondary) / 0) 300deg,
    transparent 360deg)`,
      }}
    >
      <div className={cn("relative w-full h-full bg-background", className)}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorder;
