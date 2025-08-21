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
  // CORRECTED: Use simple, non-ambiguous class names that map to tailwind.config.ts
  const speedClass = {
    slow: 'animate-duration-slow',
    normal: 'animate-duration-normal',
    fast: 'animate-duration-fast',
  }[speed];

  const colorClasses = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    accent: 'border-accent',
  };
  
  const borderVariantClass = `animated-border-${variant}`;

  return (
    <Component className={cn('relative p-px', className)}>
      <div className={cn(
        'absolute inset-0 rounded-lg', 
        borderVariantClass, 
        speedClass,
        colorClasses[color]
      )} />
      <div className="relative z-10 bg-background rounded-[7px]">
        {children}
      </div>
    </Component>
  );
};

export default AnimatedBorder;
