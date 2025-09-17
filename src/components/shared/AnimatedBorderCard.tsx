'use client';

import { cn } from '@/lib/utils';
import React from 'react';
import styles from './AnimatedBorderCard.module.css';

type AnimatedBorderCardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'beam'; // This variant might control animation type or gradient appearance
  colorVariant?: 'primary' | 'secondary' | 'accent' | 'impact'; // New prop for color scheme
};


export const AnimatedBorderCard = ({ children, className, variant = 'default', colorVariant }: AnimatedBorderCardProps) => {
  return (
    <div
      className={cn(
        "relative w-full h-full rounded-2xl overflow-hidden isolate",
        className,
        colorVariant ? `animated-border-${colorVariant}` : ""
      )}
    >
      {/* Using a pseudo-element for the animated border */}
      {/* Using a pseudo-element for the animated border */}
      <div className="relative z-10 bg-background rounded-[calc(var(--radius)+6px)] h-full p-8">
        {children}
      </div>
    </div>
  );
};