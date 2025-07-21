'use client';

import React from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: 'default' | 'primary' | 'secondary' | 'accent';
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  borderColor = 'default',
  ...props
}) => {
  const borderClasses = {
    default: 'border-border/50',
    primary: 'border-primary/70',
    secondary: 'border-secondary/70',
    accent: 'border-accent/70',
  };

  const glowClasses = {
    default: 'hover:shadow-glow-primary', // Default hover glow is Primary
    primary: 'hover:shadow-glow-primary',
    secondary: 'hover:shadow-glow-secondary',
    accent: 'hover:shadow-glow-accent',
  };

  return (
    <motion.div
      className={cn(
        'glass-card h-full rounded-2xl border p-6 md:p-8',
        borderClasses[borderColor],
        glowClasses[borderColor],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;