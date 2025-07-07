
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
 
  // Define the path for the animation (top, right, bottom, left edges, accounting for border width)
  const path = `M 0 0 L 100% 0 L 100% 100% L 0 100% L 0 0`;

  // Define the offsets for the animation along the path
  const pathOffsets = [
    0, 0.25, 0.5, 0.75, 1
  ];

  return (
    <div className={cn("relative w-full h-full", className)}>
      
      {/* Layer 1: The container with the static glowing border */}
      <div
        className="absolute inset-0 rounded-lg"
        style={{
          boxShadow: `0 0 8px ${gradientColor}`, // Faint glow around the border
        }}
      />
      
      {/* Layer 2: The inner background to create the border effect
          and hide the glow in the center.
      */}
      <div
        className="absolute bg-background rounded-[calc(var(--radius)-1px)]"
        style={{
          inset: currentVariant.borderWidth,
        }}
      />

      {/* Layer 3: The animating spark/beam positioned absolutely within the container */}
      <motion.div
        className="absolute w-4 h-4 rounded-full" // Adjust size of the spark as needed
        style={{
          backgroundColor: gradientColor,
          boxShadow: `0 0 6px ${gradientColor}, 0 0 10px ${gradientColor}`, // Brighter glow for the spark
          // Position the spark at the top-left corner initially, accounting for its size
          width: '8px', // Adjust size of the spark as needed
          height: '8px', // Adjust size of the spark as needed
          position: 'absolute',
          // We will animate its position along the path using motion's capabilities
        }}
        animate={{
          // Animate the element along the defined SVG path.
          // `pathLength` animates a point from the start (0) to the end (1) of the path.
          pathLength: pathOffsets,
        }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
      ><svg width="0" height="0"><path id="borderPath" d={path} /></svg></motion.div>

      {/* Layer 3: The actual content, placed on top with a relative z-index. */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};

export default AnimatedAccentBorder;
