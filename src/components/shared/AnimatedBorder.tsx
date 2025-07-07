
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
    // 360 degrees / (60 frames/sec * 16 seconds) = 0.225 degrees per frame
    setRotation((prevRotation) => (prevRotation + 0.225) % 360);
    animationFrameId.current = requestAnimationFrame(animate);
    
    const animate = () => {
      setRotation((prevRotation) => (prevRotation + 0.225) % 360);
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
  
  if (variant === 'highlight') {
    const highlightGradientStyle = {
      background: `conic-gradient(from ${rotation}deg at 50% 50%,
        transparent 0%, 
        transparent 48.75%, 
        white 50%, 
        transparent 51.25%, 
        transparent 100%)`
    };

    return (
      <div className={cn("relative", containerClassName)}>
        <div className="relative z-10 p-px rounded-lg" style={{ background: colorVar }}>
          {/* Pulsing highlight layer */}
          <div
            className="absolute inset-0 rounded-lg animate-highlight-pulse"
            style={highlightGradientStyle}
          />
          {/* Content area */}
          <div className={cn("relative w-full h-full bg-background rounded-[calc(var(--radius)-1px)]", className)}>
            {children}
          </div>
        </div>
      </div>
    );
  }

  // Beam variant
  const beamGradientStyle = {
    background: `conic-gradient(from ${rotation}deg at 50% 50%, 
      transparent 0deg,
      ${colorVar} 180deg,
      transparent 360deg
    )`,
  };

  return (
    <div className={cn("relative", containerClassName)}>
      <div
        className="relative z-10 p-px rounded-lg"
        style={beamGradientStyle}
      >
        <div className={cn("relative w-full h-full bg-background rounded-[calc(var(--radius)-1px)]", className)}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedBorder;
