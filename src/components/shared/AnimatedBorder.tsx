
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
        background: `conic-gradient(from ${rotation}deg at 50% 50%, transparent 90deg, hsl(var(--secondary) / 0) 100deg, hsl(var(--secondary) / 0.8) 110deg, hsl(var(--foreground)) 150deg, hsl(var(--primary)) 190deg, hsl(var(--secondary) / 0.8) 230deg, hsl(var(--secondary) / 0) 270deg, transparent 280deg)`,
      }}
    >
      <div className={cn("relative w-full h-full bg-background", className)}>
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorder;
