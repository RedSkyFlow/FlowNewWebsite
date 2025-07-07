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
  
  const gradient = `conic-gradient(from 180deg at 50% 50%, transparent 0%, ${gradientColor} 30%, transparent 60%)`;

  return (
    <div
      className={cn("relative w-full h-full rounded-lg", className)}
      style={{ padding: currentVariant.borderWidth }}
    >
        {/* The rotating gradient is the background, clipped by the parent's padding */}
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
        {/* The content sits on top, with its own background, masking the center of the gradient */}
        <div className="relative z-10 h-full w-full bg-background rounded-md">
            {children}
        </div>
    </div>
  );
};

export default AnimatedAccentBorder;
