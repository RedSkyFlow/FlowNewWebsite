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

  const gradientStyle = {
    background: `conic-gradient(from ${rotation}deg at 50% 50%, 
      transparent 0deg,
      hsl(var(--primary)) 180deg,
      transparent 360deg
    )`,
  };

  return (
    <div className={cn("relative", containerClassName)}>
      {/* Glow Element */}
      <div
        className="absolute -inset-px z-0 rounded-lg"
        style={{
          ...gradientStyle,
          filter: 'blur(2px)', // Drastically reduced blur for a subtle shine
          opacity: 0.7,
        }}
      />
      
      {/* Border Element with Content Mask */}
      <div
        className="relative z-10 p-px rounded-lg"
        style={gradientStyle}
      >
        <div className={cn("relative w-full h-full bg-background rounded-lg", className)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBorder;
