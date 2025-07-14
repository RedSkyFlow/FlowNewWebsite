// src/components/shared/AnimatedBorder.tsx
'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedBorder: React.FC<AnimatedBorderProps> = ({ children, className }) => {
  return (
    <div className={cn('relative p-px group', className)}>
      <div
        className={cn(
          'absolute inset-0 rounded-2xl overflow-hidden',
          'bg-gradient-to-r from-primary via-secondary to-accent',
          'transition-all duration-slow group-hover:opacity-100 opacity-50',
          'animate-gradient-border' // Custom animation from globals.css
        )}
      />
      <div className="relative bg-background rounded-[0.95rem]">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBorder;