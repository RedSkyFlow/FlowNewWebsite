// src/components/shared/AnimatedBorder.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'beam' | 'highlight' | 'shimmer-gradient' | 'highlight-sparkle';
  color?: 'primary' | 'secondary' | 'accent';
  speed?: 'slow' | 'normal' | 'fast';
  as?: React.ElementType;
}

const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
  children,
  className,
  variant = 'beam',
  color = 'primary',
  speed = 'normal',
  as: Component = 'div',
}) => {
  const speedClasses = {
    slow: 'duration-[24s]',
    normal: 'duration-[16s]',
    fast: 'duration-[8s]',
  };

  const colorClasses = {
    primary: 'border-primary', // This won't directly color the animation, but can be a fallback
    secondary: 'border-secondary',
    accent: 'border-accent',
  };
  
  // The actual color is controlled by CSS variables in globals.css,
  // but we can add a class to the parent if needed for context.
  const borderVariantClass = `animated-border-${variant}`;

  return (
    <Component className={cn('relative p-px', className)}>
      <div className={cn('absolute inset-0 rounded-lg', borderVariantClass, speedClasses[speed], colorClasses[color])} />
      <div className="relative z-10 bg-background rounded-[7px]">
        {children}
      </div>
    </Component>
  );
};

export default AnimatedBorder;
