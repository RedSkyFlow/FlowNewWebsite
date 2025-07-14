// src/components/shared/GlassCard.tsx
'use client';

import React from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'primary' | 'secondary' | 'accent' | 'impact' | 'premium';
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glowColor,
  ...props
}) => {
  const glowClasses = {
    primary: 'hover:shadow-[var(--glow-primary)]',
    secondary: 'hover:shadow-[var(--glow-secondary)]',
    accent: 'hover:shadow-[var(--glow-accent)]',
    impact: 'hover:shadow-[var(--glow-impact)]',
    premium: 'hover:shadow-[var(--glow-premium)]',
  };

  return (
    <motion.div
      className={cn(
        'glass-card p-6 md:p-8 rounded-2xl h-full', // Use .glass-card from globals.css
        glowColor && glowClasses[glowColor],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;