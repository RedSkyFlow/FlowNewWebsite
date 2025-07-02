'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedAccentBorderProps {
  children: React.ReactNode;
  variant?: 'subtle' | 'standard' | 'prominent';
  color?: 'primary' | 'secondary' | 'accent';
  speed?: 'slow' | 'normal' | 'fast';
  sparkle?: boolean;
  className?: string;
}

const AnimatedAccentBorder: React.FC<AnimatedAccentBorderProps> = ({
  children,
  variant = 'standard',
  color = 'accent',
  speed = 'normal',
  sparkle = true,
  className = ''
}) => {
  const speedConfig = {
    slow: 12,
    normal: 8,
    fast: 5
  };

  const colorConfig = {
    primary: {
      sparkleColor: 'hsl(var(--primary))',
      glow: 'var(--glow-primary)'
    },
    secondary: {
      sparkleColor: 'hsl(var(--secondary))',
      glow: 'var(--glow-secondary)'
    },
    accent: {
      sparkleColor: 'hsl(var(--accent))',
      glow: 'var(--glow-accent)'
    }
  };

  const variantConfig = {
    subtle: {
      borderWidth: '1px',
      sparkleSize: '2px'
    },
    standard: {
      borderWidth: '2px',
      sparkleSize: '3px'
    },
    prominent: {
      borderWidth: '3px',
      sparkleSize: '4px'
    }
  };

  const currentColor = colorConfig[color];
  const currentVariant = variantConfig[variant];
  const duration = speedConfig[speed];

  return (
    <div 
      className={cn('relative p-px rounded-lg', className)}
      style={{
        border: `${currentVariant.borderWidth} solid hsla(var(--${color}) / 0.2)`,
        boxShadow: currentColor.glow,
        transition: 'all 0.3s ease'
      }}
    >

      {/* Sparkle Effects - Kept for subtle animation */}
      {sparkle && (
        <>
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: currentVariant.sparkleSize,
              height: currentVariant.sparkleSize,
              background: currentColor.sparkleColor,
              boxShadow: `0 0 10px ${currentColor.sparkleColor}`,
              transform: 'translateZ(0)',
              willChange: 'transform',
              top: `-${parseFloat(currentVariant.sparkleSize) / 2}px`,
              left: `-${parseFloat(currentVariant.sparkleSize) / 2}px`,
            }}
            animate={{
              x: ['0%', '100%', '100%', '0%', '0%'],
              y: ['0%', '0%', '100%', '100%', '0%'],
              rotate: [0, 0, 0, 0, 0] // Ensure sparkle itself doesn't rotate
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 0,
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedAccentBorder;
