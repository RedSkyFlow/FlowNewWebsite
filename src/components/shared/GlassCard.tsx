// src/components/shared/GlassCard.tsx
'use client';

import React from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// Simplified props, removing the conflicting glowColor
interface GlassCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      className={cn(
        'glass-card p-6 md:p-8 rounded-2xl h-full', // Use .glass-card from globals.css
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;