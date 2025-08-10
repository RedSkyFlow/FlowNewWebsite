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
  // CORRECTED: Replaced dynamic object lookup with static conditional logic
  // to make class names discoverable by Tailwind's JIT compiler.
  let speedClass;
  if (speed === 'slow') {
    speedClass = 'duration-[24s]';
  } else if (speed === 'fast') {
    speedClass = 'duration-[8s]';
  } else {
    speedClass = 'duration-[16s]';
  }

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
        speedClass, // Use the statically determined class
        colorClasses[color]
      )} />
      <div className="relative z-10 bg-background rounded-[7px]">
        {children}
      </div>
    </Component>
  );
};

export default AnimatedBorder;
