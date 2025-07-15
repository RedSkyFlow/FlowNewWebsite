
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedAccentBorderProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
  borderWidth?: string;
  duration?: number;
}

const AnimatedAccentBorder: React.FC<AnimatedAccentBorderProps> = ({
  children,
  className,
  borderRadius = '1rem', // Match Tailwind's rounded-xl
  borderWidth = '2px',
  duration = 10,
}) => {
  return (
    <div
      className={cn('relative w-full p-px', className)}
      style={
        {
          '--border-width': borderWidth,
          '--border-radius': borderRadius,
          '--duration': `${duration}s`,
        } as React.CSSProperties
      }
    >
      <div
        className="absolute inset-0 rounded-[var(--border-radius)]"
        style={{
          border: 'var(--border-width) solid transparent',
          background:
            'radial-gradient(ellipse at 100% 0%, hsl(var(--primary)), transparent 50%), radial-gradient(ellipse at 0% 100%, hsl(var(--accent)), transparent 50%)',
          backgroundClip: 'padding-box, border-box',
          backgroundOrigin: 'padding-box, border-box',
        }}
      ></div>

      <div
        className="absolute inset-0 rounded-[var(--border-radius)]"
        style={{
          border: 'var(--border-width) solid transparent',
          backgroundImage:
            'conic-gradient(from var(--angle), transparent 0%, hsl(var(--secondary)) 10%, transparent 35%)',
          animation: 'border-beam calc(var(--duration) * 1) linear infinite',
          backgroundSize: '200% 200%',
        }}
      ></div>

      <div className="relative bg-background rounded-[calc(var(--border-radius)-var(--border-width))]">
        {children}
      </div>
    </div>
  );
};

export default AnimatedAccentBorder;
