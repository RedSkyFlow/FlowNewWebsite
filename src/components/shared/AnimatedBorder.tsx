// src/components/shared/AnimatedBorder.tsx
'use client';

import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'beam' | 'highlight';
  color?: 'primary' | 'secondary' | 'accent';
  speed?: 'slow' | 'normal' | 'fast';
}

const speedMap = {
  slow: '16s',
  normal: '10s',
  fast: '5s',
};

const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
  children,
  className,
  variant = 'beam',
  color = 'primary',
  speed = 'normal',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--border-color', `hsl(var(--${color}))`);
      containerRef.current.style.setProperty('--animation-duration', speedMap[speed]);
    }
  }, [color, speed]);

  const borderClasses = {
    beam: 'animated-border-beam',
    highlight: 'animated-border-highlight',
  };

  return (
    <motion.div
      ref={containerRef}
      className={cn('relative p-px rounded-xl', className)}
      whileHover="hover"
    >
      {/* The border effect using pseudo-elements defined in globals.css */}
      <div className={cn(
          'absolute inset-0 rounded-[var(--radius)] pointer-events-none z-0',
          borderClasses[variant]
      )} />
      
      {/* The content container */}
      <div className="relative bg-card rounded-[calc(var(--radius)-1px)] overflow-hidden h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedBorder;

    