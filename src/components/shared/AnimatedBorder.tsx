
'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  color?: 'primary' | 'secondary' | 'accent';
  variant?: 'beam' | 'highlight';
}

const AnimatedBorder = ({ children, className, containerClassName, color = 'accent', variant = 'beam' }: AnimatedBorderProps) => {
  const [rotation, setRotation] = useState(0);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const animate = () => {
      // 360 degrees / (60 frames/sec * 16 seconds) = 0.375 degrees per frame for a 16-second rotation.
      setRotation((prevRotation) => (prevRotation + 0.375) % 360);
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const colorVar = `hsl(var(--${color}))`;
  
  let gradientStyle: React.CSSProperties;

  if (variant === 'highlight') {
    // This creates a solid border with a 5% wide white "highlight" that rotates.
    gradientStyle = {
      background: `conic-gradient(from ${rotation}deg at 50% 50%, 
        ${colorVar} 0%, 
        ${colorVar} 47.5%, 
        white 50%, 
        ${colorVar} 52.5%, 
        ${colorVar} 100%
      )`,
    };
  } else { // 'beam' variant (the original)
    gradientStyle = {
      background: `conic-gradient(from ${rotation}deg at 50% 50%, 
        transparent 0deg,
        ${colorVar} 180deg,
        transparent 360deg
      )`,
    };
  }


  return (
    <div className={cn("relative", containerClassName)}>
      {/* This single element creates the border effect.
          The padding (p-px) creates a 1px space.
          The gradient is the background of this space.
          The inner div with bg-background covers the center, leaving only the 1px gradient border visible.
      */}
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
