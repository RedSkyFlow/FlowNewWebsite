'use client';

import { cn } from '@/lib/utils';
import React from 'react';

type AnimatedBorderCardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'beam';
};

export const AnimatedBorderCard = ({ children, className, variant = 'default' }: AnimatedBorderCardProps) => {
  const borderClass = {
    default: 'animate-rotate-border',
    beam: 'animate-spin-border-beam', // Assuming this animation is defined in tailwind.config.ts
  };

  const backgroundGradient = {
    default: 'conic-gradient(from var(--angle, 0deg), hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary)), hsl(var(--secondary)))',
    beam: 'conic-gradient(from var(--angle, 0deg), transparent 0%, hsl(var(--primary)) 20%, transparent 35%)',
  };

  return (
    <div className={cn("relative w-full h-full p-px rounded-2xl", className)}>
      {/* The rotating border element */}
      <div
        className={cn(
          "absolute inset-[-1px] rounded-[inherit] z-0",
          // CORRECTED: Applying the animation class directly
          borderClass[variant]
        )}
        style={{ background: backgroundGradient[variant] }}
      />
      {/* The content container with its own background */}
      <div className="relative z-10 bg-background rounded-[calc(var(--radius)+6px)] h-full p-8">
        {children}
      </div>
    </div>
  );
};