'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface LogoShimmerProps {
  children: React.ReactNode;
  intensity?: 'subtle' | 'standard' | 'prominent';
  speed?: 'slow' | 'normal' | 'fast';
  color?: 'white' | 'accent' | 'primary';
  trigger?: 'hover' | 'always' | 'interval';
  className?: string;
}

const LogoShimmer: React.FC<LogoShimmerProps> = ({
  children,
  intensity = 'standard',
  speed = 'normal',
  color = 'white',
  trigger = 'interval',
  className = ''
}) => {
  // Speed configurations
  const speedConfig = {
    slow: 3,
    normal: 2,
    fast: 1.5
  };

  // Intensity configurations
  const intensityConfig = {
    subtle: {
      opacity: '0.3',
      width: '20%',
      blur: '1px'
    },
    standard: {
      opacity: '0.5',
      width: '30%',
      blur: '2px'
    },
    prominent: {
      opacity: '0.7',
      width: '40%',
      blur: '3px'
    }
  };

  // Color configurations
  const colorConfig = {
    white: 'rgba(255, 255, 255, 0.8)',
    accent: 'hsla(var(--accent) / 0.8)',
    primary: 'hsla(var(--primary) / 0.8)'
  };

  const currentIntensity = intensityConfig[intensity];
  const currentColor = colorConfig[color];
  const duration = speedConfig[speed];

  const shimmerVariants = {
    initial: {
      x: '-100%',
      opacity: 0
    },
    animate: {
      x: '200%',
      opacity: [0, 1, 1, 0]
    }
  };

  const getAnimationProps = () => {
    switch (trigger) {
      case 'hover':
        return {
          whileHover: "animate",
          initial: "initial",
          variants: shimmerVariants,
          transition: { duration, ease: "easeInOut" }
        };
      case 'always':
        return {
          animate: "animate",
          initial: "initial",
          variants: shimmerVariants,
          transition: { 
            duration, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1
          }
        };
      case 'interval':
        return {
          animate: "animate",
          initial: "initial",
          variants: shimmerVariants,
          transition: { 
            duration, 
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 4
          }
        };
      default:
        return {};
    }
  };

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Logo Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Shimmer Effect */}
      <motion.div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            ${currentColor} 50%, 
            transparent 100%)`,
          width: currentIntensity.width,
          filter: `blur(${currentIntensity.blur})`,
          transform: 'translateZ(0)',
          willChange: 'transform, opacity'
        }}
        {...getAnimationProps()}
      />

      {/* Additional Highlight Effect */}
      <motion.div
        className="absolute inset-0 z-15 pointer-events-none"
        style={{
          background: `linear-gradient(45deg, 
            transparent 30%, 
            ${currentColor} 50%, 
            transparent 70%)`,
          width: '15%',
          height: '100%',
          filter: 'blur(1px)',
          transform: 'translateZ(0)',
          willChange: 'transform, opacity'
        }}
        {...getAnimationProps()}
        transition={{ 
          ...getAnimationProps().transition, 
          delay: 0.2 
        }}
      />
    </div>
  );
};

export default LogoShimmer;
