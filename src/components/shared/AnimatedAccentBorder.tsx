
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

  // A conic gradient that is mostly transparent, with a small "beam" of color.
  // This beam is what appears to rotate around the card.
  const gradient = `conic-gradient(from 180deg at 50% 50%, transparent 0%, ${gradientColor} 30%, transparent 60%)`;

  return (
    <div className={cn("relative w-full h-full rounded-lg", className)}>
      {/* Layer 1: The rotating gradient. It sits behind the content mask. */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: gradient,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Layer 2: The content mask. This div is inset by the border width and has a solid background.
          It covers the center of the rotating gradient, leaving only the edges visible.
      */}
      <div
        className="absolute bg-background rounded-[calc(var(--radius)-1px)]"
        style={{
          inset: currentVariant.borderWidth,
        }}
      />

      {/* Layer 3: The actual content, which sits on top of the mask. */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedAccentBorder;
