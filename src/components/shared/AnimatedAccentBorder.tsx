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
  // Speed configurations
  const speedConfig = {
    slow: 8,
    normal: 6,
    fast: 4
  };

  // Color configurations (Design Guide compliant)
  const colorConfig = {
    primary: {
      gradient: 'from-primary/60 via-primary to-primary/60',
      glow: 'var(--glow-primary)',
      sparkleColor: 'hsl(var(--primary))'
    },
    secondary: {
      gradient: 'from-secondary/60 via-secondary to-secondary/60',
      glow: 'var(--glow-secondary)',
      sparkleColor: 'hsl(var(--secondary))'
    },
    accent: {
      gradient: 'from-accent/60 via-accent to-accent/60',
      glow: 'var(--glow-accent)',
      sparkleColor: 'hsl(var(--accent))'
    }
  };

  // Variant configurations
  const variantConfig = {
    subtle: {
      borderWidth: '1px',
      glowIntensity: '0.2',
      sparkleSize: '2px'
    },
    standard: {
      borderWidth: '2px',
      glowIntensity: '0.3',
      sparkleSize: '3px'
    },
    prominent: {
      borderWidth: '3px',
      glowIntensity: '0.4',
      sparkleSize: '4px'
    }
  };

  const currentColor = colorConfig[color];
  const currentVariant = variantConfig[variant];
  const duration = speedConfig[speed];

  return (
    <div className={cn('relative', className)}>
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none"
        style={{
          padding: currentVariant.borderWidth,
          background: `conic-gradient(from 0deg, transparent, ${currentColor.sparkleColor}, transparent)`,
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-full h-full bg-background rounded-lg" />
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          boxShadow: currentColor.glow,
          opacity: currentVariant.glowIntensity,
          transform: 'translateZ(0)'
        }}
        animate={{
          opacity: [currentVariant.glowIntensity, parseFloat(currentVariant.glowIntensity) * 1.5, currentVariant.glowIntensity]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Sparkle Effects */}
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
              willChange: 'transform'
            }}
            animate={{
              x: ['0%', '100%', '100%', '0%', '0%'],
              y: ['0%', '0%', '100%', '100%', '0%']
            }}
            transition={{
              duration: duration * 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: currentVariant.sparkleSize,
              height: currentVariant.sparkleSize,
              background: currentColor.sparkleColor,
              boxShadow: `0 0 8px ${currentColor.sparkleColor}`,
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
            animate={{
              x: ['100%', '0%', '0%', '100%', '100%'],
              y: ['100%', '100%', '0%', '0%', '100%']
            }}
            transition={{
              duration: duration * 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: duration * 0.75
            }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedAccentBorder;
