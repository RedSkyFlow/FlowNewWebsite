// src/components/shared/ShimmeringHaze.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShimmeringHazeProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
}

const getRandomAnimation = () => ({
  opacity: [0, Math.random() * 0.15 + 0.05, 0],
  scale: [1, Math.random() * 0.5 + 1.2, 1],
  transition: {
    duration: Math.random() * 10 + 10,
    repeat: Infinity,
    repeatType: 'mirror' as const,
    delay: Math.random() * 8,
    ease: 'easeInOut',
  },
});

const ShimmeringHaze: React.FC<ShimmeringHazeProps> = ({
  className,
  color = 'primary',
}) => {
  // CORRECTED: This now correctly uses the CSS variables from our theme.
  const colorConfig = {
    primary: 'hsla(var(--primary), 0.7)',
    secondary: 'hsla(var(--secondary), 0.7)',
    accent: 'hsla(var(--accent), 0.7)',
  };
  const currentColor = colorConfig[color];

  const glows = Array.from({ length: 5 });

  return (
    <div className={cn('absolute inset-0 w-full h-full overflow-hidden -z-10', className)}>
      {glows.map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: '800px',
            height: '800px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            // CORRECTED: The background now uses the themed color variable.
            background: `radial-gradient(circle, ${currentColor} 0%, transparent 70%)`,
            filter: 'blur(120px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={getRandomAnimation()}
        />
      ))}
    </div>
  );
};

export default ShimmeringHaze;