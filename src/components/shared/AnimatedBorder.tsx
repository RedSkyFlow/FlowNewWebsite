'use client';

import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  color?: 'primary' | 'secondary' | 'accent';
  variant?: 'beam' | 'highlight';
  speed?: 'slow' | 'normal' | 'fast'; // Added speed prop
}

const AnimatedBorder = ({ children, className, containerClassName, color = 'accent', variant = 'beam', speed = 'normal' }: AnimatedBorderProps) => {
  const colorVar = `hsl(var(--${color}))`;
  
  const speedClasses: { [key: string]: string } = {
    slow: 'animation-duration-24s',
    normal: 'animation-duration-16s',
    fast: 'animation-duration-8s',
  };

  if (variant === 'highlight') {
    const highlightGradientStyle = {
      '--border-color': colorVar,
    } as React.CSSProperties;

    return (
      <div className={cn("relative p-px rounded-lg", containerClassName)} style={highlightGradientStyle}>
        <div className="absolute inset-0 rounded-lg animated-border-highlight"></div>
        <div className={cn("relative bg-background rounded-[calc(var(--radius)-1px)]", className)}>
          {children}
        </div>
      </div>
    );
  }

  // Beam variant
  const beamGradientStyle = {
    '--border-color': colorVar,
  } as React.CSSProperties;

  return (
    <div
      className={cn("relative rounded-lg", containerClassName)}
      style={beamGradientStyle}
    >
        <div className={cn("animated-border-beam", speedClasses[speed])}></div>
        <div className={cn("relative bg-background rounded-[calc(var(--radius)-1px)] p-px", className)}>
            {children}
        </div>
    </div>
  );
};

export default AnimatedBorder;
