// src/components/shared/ShimmeringHaze.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ShimmeringHazeProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
}

// Helper function for random animation properties
const getRandomAnimation = () => ({
  opacity: [0, Math.random() * 0.15 + 0.05, 0], // Random peak opacity (5% to 20%)
  scale: [1, Math.random() * 0.5 + 1.2, 1],   // Random scale (1.2x to 1.7x)
  transition: {
    duration: Math.random() * 10 + 10, // Random duration (10s to 20s)
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
  const colorConfig = {
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    accent: 'hsl(var(--accent))',
  };
  const currentColor = colorConfig[color];

  // Create an array of glow elements to scatter
  const glows = Array.from({ length: 5 });

  return (
    <div className={cn('absolute inset-0 w-full h-full overflow-hidden', className)}>
      {glows.map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: '800px', // Large size for a hazy feel
            height: '800px',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${currentColor} 0%, transparent 70%)`,
            filter: 'blur(120px)', // Very strong blur for the haze effect
            transform: 'translate(-50%, -50%)',
          }}
          animate={getRandomAnimation()}
        />
      ))}
    </div>
  );
};

export default ShimmeringHaze;