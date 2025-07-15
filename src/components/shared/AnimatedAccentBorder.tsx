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
  const speedConfig = { slow: 12, normal: 8, fast: 5 };
  const colorConfig = {
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    accent: 'hsl(var(--accent))'
  };
  const variantConfig = {
    subtle: { borderWidth: '1px', glowOpacity: '0.2', sparkleSize: '2px' },
    standard: { borderWidth: '2px', glowOpacity: '0.3', sparkleSize: '3px' },
    prominent: { borderWidth: '2px', glowOpacity: '0.4', sparkleSize: '4px' }
  };

  const currentColor = colorConfig[color];
  const currentVariant = variantConfig[variant];
  const duration = speedConfig[speed];

  return (
    <div className={cn('relative w-full', className)}>
      {/* Layer for the rotating conic gradient border */}
      <motion.div
        className="absolute inset-0 rounded-lg overflow-hidden"
        style={{
          padding: currentVariant.borderWidth,
          background: `conic-gradient(from 0deg, transparent 0%, ${currentColor} 30%, transparent 60%)`,
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: 'linear' }}
      />

      {/* Layer for the pulsing glow effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: `0 0 20px ${currentColor}`,
          opacity: 0,
          transform: 'translateZ(0)'
        }}
        animate={{ opacity: [0, parseFloat(currentVariant.glowOpacity), 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Layer for the content, with a background to obscure the animation behind it */}
      <div className="relative bg-background rounded-[calc(1rem-2px)] p-px">
         <div className="relative bg-background rounded-[calc(1rem-3px)]">
            {children}
         </div>
      </div>

      {/* Layer for the traveling sparkles */}
      {sparkle && (
        <>
          <motion.div
            className="absolute top-0 left-0 rounded-full"
            style={{
              width: currentVariant.sparkleSize,
              height: currentVariant.sparkleSize,
              background: currentColor,
              boxShadow: `0 0 8px ${currentColor}`,
              transform: 'translateZ(0)',
              willChange: 'transform'
            }}
            animate={{
              offsetDistance: ['0%', '100%'],
            }}
            transition={{
              duration: duration * 1.5,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              offsetPath: `path('M 0,0 H calc(100% - ${currentVariant.sparkleSize}) V calc(100% - ${currentVariant.sparkleSize}) H 0 Z')`
            }}
          />
        </>
      )}
    </div>
  );
};

export default AnimatedAccentBorder;