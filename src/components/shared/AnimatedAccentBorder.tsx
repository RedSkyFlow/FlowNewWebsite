'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedAccentBorderProps {
  children: React.ReactNode;
  variant?: 'subtle' | 'standard' | 'prominent';
  color?: 'primary' | 'secondary' | 'accent';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

const AnimatedAccentBorder: React.FC<AnimatedAccentBorderProps> = ({
  children,
  variant = 'standard',
  color = 'accent',
  speed = 'normal',
  className = ''
}) => {
  const speedConfig = {
    slow: 10,
    normal: 6,
    fast: 4
  };

  const colorConfig = {
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    accent: 'hsl(var(--accent))',
  };

  const variantConfig = {
    subtle: { borderWidth: '1px' },
    standard: { borderWidth: '2px' },
    prominent: { borderWidth: '3px' }
  };

  const currentVariant = variantConfig[variant];
  const duration = speedConfig[speed];
  const gradientColor = colorConfig[color];
  
  // This creates a "beam" of color in an otherwise transparent conic gradient.
  // This beam is what will rotate around the card.
  const gradient = `conic-gradient(from 180deg at 50% 50%, transparent 0%, ${gradientColor} 30%, transparent 60%)`;

  return (
    // The main container that establishes the padding. This padding becomes the visible border area.
    <div
      className={cn("relative w-full h-full rounded-lg", className)}
      style={{ padding: currentVariant.borderWidth }}
    >
      {/* The rotating gradient is the background of this container. 
          It's animated to rotate infinitely. */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ background: gradient }}
        animate={{ rotate: 360 }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {/* The content sits on top. Its solid background masks the center of the rotating gradient,
          leaving only the edges visible through the parent's padding. */}
      <div className="relative z-10 h-full w-full bg-background rounded-[calc(var(--radius)-1px)]">
        {children}
      </div>
    </div>
  );
};

export default AnimatedAccentBorder;
