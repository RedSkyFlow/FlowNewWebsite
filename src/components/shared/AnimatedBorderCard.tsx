// src/components/shared/AnimatedBorderCard.tsx
import { cn } from '@/lib/utils';
import React from 'react';

type AnimatedBorderCardProps = {
  children: React.ReactNode;
  className?: string;
  angle?: string; // e.g., '90deg'
};

export const AnimatedBorderCard = ({ children, className, angle }: AnimatedBorderCardProps) => {
  const cardStyle = angle ? { '--angle': angle } as React.CSSProperties : {};

  return (
    <div className={cn("relative w-full h-full p-8 rounded-lg", className)} style={cardStyle}>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 opacity-20"></div>
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          border: '2px solid transparent',
          background: 'conic-gradient(from var(--angle, 0deg), hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary)), hsl(var(--secondary))) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: 'rotate-border 10s linear infinite',
        }}
      ></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};