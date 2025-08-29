'use client';

import { cn } from '@/lib/utils';
import React from 'react';

type AnimatedBorderCardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'beam'; // This variant might control animation type or gradient appearance
  colorVariant?: 'primary' | 'secondary' | 'accent' | 'impact'; // New prop for color scheme
};


export const AnimatedBorderCard = ({ children, className, variant = 'default', colorVariant }: AnimatedBorderCardProps) => {
  return (
    <div className={cn("relative w-full h-full rounded-2xl overflow-hidden isolate", className)}
      style={{
        // Set CSS variables for color variants
        ...(colorVariant === 'primary' && { '--color-stop-1': 'var(--primary)', '--color-stop-2': 'var(--secondary)', '--color-stop-3': 'var(--accent)' }),
        ...(colorVariant === 'secondary' && { '--color-stop-1': 'var(--secondary)', '--color-stop-2': 'var(--primary)', '--color-stop-3': 'var(--accent)' }),
        ...(colorVariant === 'accent' && { '--color-stop-1': 'var(--accent)', '--color-stop-2': 'var(--primary)', '--color-stop-3': 'var(--secondary)' }),
        ...(colorVariant === 'impact' && { '--color-stop-1': 'var(--impact)', '--color-stop-2': 'var(--primary)', '--color-stop-3': 'var(--secondary)' }),
      } as React.CSSProperties}
    >


      {/* Using a pseudo-element for the animated border */}
      <style jsx>{`
        .relative::before {
          /* Targeting the pseudo-element of the main container */
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          z-index: 0;
          pointer-events: none; /* Allow interaction with content */
          /* Applying the conic gradient as background */
 background: conic-gradient(from var(--angle, 0deg), transparent 0deg 180deg, 
            hsl(var(--color-stop-1, var(--secondary))) 0deg,
            hsl(var(--color-stop-2, var(--accent))) 90deg,
            hsl(var(--color-stop-3, var(--primary))) 180deg,
            hsl(var(--color-stop-1, var(--secondary))) 360deg
          );
          /* Masking the center to create the border effect */
          mask-image: radial-gradient(
            /* Adjusted inner circle percentage for a thinner border */
            /* Adjust the inner circle percentage to control border thickness */
            /* e.g., 90% for a thinner border, 80% for a thicker border */
            circle at center,
            transparent 90%, 
            black 100%
          );
          animation: rotate-border var(--base-duration, 10s) linear infinite;

        }
      `}</style>
      {/* The content container with its own background */}
      <div className="relative z-10 bg-background rounded-[calc(var(--radius)+6px)] h-full p-8">
        {children}
      </div>
    </div>
  );
};