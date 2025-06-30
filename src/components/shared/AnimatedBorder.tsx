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
      // 8-second rotation (360 deg / (0.75 deg/frame * 60 frames/sec) = 8s)
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
          hsla(16, 90%, 58%, 0) 0deg,
          hsla(16, 90%, 58%, 0.8) 120deg,
          hsl(var(--primary)) 148deg,
          hsl(0 0% 95%) 162deg,
          hsl(0 0% 95%) 190deg,
          hsl(var(--primary)) 204deg,
          hsla(16, 90%, 58%, 0.8) 232deg,
          hsla(16, 90%, 58%, 0) 260deg,
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
