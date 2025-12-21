
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
  const cardRef = React.useRef<HTMLDivElement>(null);
  const borderClasses = {
    default: 'border-white/10', // Updated default
    primary: 'border-primary/50',
    secondary: 'border-secondary/50',
    accent: 'border-accent/50',
    impact: 'border-flow-orange/50',
  };

  const glowClasses = {
    default: 'hover:shadow-glow-primary',
    primary: 'hover:shadow-glow-primary',
    secondary: 'hover:shadow-glow-secondary',
    accent: 'hover:shadow-glow-accent',
    impact: 'hover:shadow-glow-impact',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'glass-card relative h-full rounded-2xl p-6 md:p-8',
        'before:absolute before:inset-0 before:rounded-2xl before:border-t before:border-white/20 before:pointer-events-none', // Highlight
        borderClasses[borderColor],
        glowClasses[borderColor],
        className
      )}
      {...props}
    >
      {/* 3D Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
