
'use client';

import React from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: 'default' | 'primary' | 'secondary' | 'accent' | 'impact';
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
    impact: 'border-flow-orange/70',
  };

  const glowClasses = {
    default: 'hover:shadow-glow-primary', // Default hover glow is Primary
    primary: 'hover:shadow-glow-primary',
    secondary: 'hover:shadow-glow-secondary',
    accent: 'hover:shadow-glow-accent',
    impact: 'hover:shadow-glow-impact',
  };

  return (
    <motion.div
      className={cn(
        'glass-card relative h-full rounded-2xl border-0 p-6 md:p-8 overflow-hidden', // Removed default border, handled by glass-card/specular
        'before:absolute before:inset-0 before:rounded-2xl before:border-t before:border-white/40 before:pointer-events-none', // Specular Top Highlight (Pseudo-element style)
        'after:absolute after:inset-0 after:rounded-2xl after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] after:pointer-events-none', // Inner Bevel
        borderClasses[borderColor], // We might rely on drop-shadows or inner-borders now
        glowClasses[borderColor],
        className
      )}
      {...props}
    >
      {/* Stage Lighting Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
