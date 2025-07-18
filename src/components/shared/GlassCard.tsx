'use client';

import React from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// Define the glow colors based on the theme
const glowColors = {
  primary: 'hover:shadow-glow-primary',
  secondary: 'hover:shadow-glow-secondary',
  accent: 'hover:shadow-glow-accent',
  impact: 'hover:shadow-glow-impact',
};

interface GlassCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: keyof typeof glowColors;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glowColor = 'primary', // Default glow color
  ...props // All other motion props
}) => {
  return (
    <motion.div
      className={cn(
        'glass-card p-6 md:p-8 rounded-2xl h-full', // Use .glass-card from globals.css
        glowColors[glowColor], // Dynamically apply hover glow class
        className
      )}
      {...props} // Spread the remaining props, which no longer include glowColor
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
