
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import AnimatedAccentBorder from '../shared/AnimatedAccentBorder';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: '3d';
  glowColor?: 'primary' | 'secondary' | 'accent';
  linkHref?: string;
  linkText?: string;
  animatedBorder?: boolean;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className,
  variant,
  glowColor = 'primary',
  linkHref,
  linkText,
  animatedBorder = false,
}) => {
  // Define animation variants for Framer Motion
  const cardVariants = {
    initial_3d: {
      transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1)',
    },
    hover_3d: {
      // On hover, lift, scale, and tilt to the right to expose the left edge
      transform: 'perspective(1000px) rotateX(2deg) rotateY(5deg) translateY(-8px) scale(1.02)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), var(--glow-primary-strong)',
    },
    initial_default: {
      transform: 'translateY(0px) scale(1)',
    },
    hover_default: {
      transform: 'translateY(-4px) scale(1.02)',
    }
  };

  const is3D = variant === '3d';

  return (
    <motion.div
      className={cn(
        "group relative h-full transform-gpu",
        className
      )}
      initial={is3D ? 'initial_3d' : 'initial_default'}
      whileHover={is3D ? 'hover_3d' : 'hover_default'}
      variants={cardVariants}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
    >
      {animatedBorder && (
        <AnimatedAccentBorder 
          color={glowColor} 
          className="absolute inset-0 z-0" 
          sparkle={true}
        />
      )}
      
      <Card className={cn(
        "relative z-10 h-full flex flex-col transition-all duration-standard ease-gentle",
        "will-change-transform", // Performance optimization
        animatedBorder 
          ? "bg-card/80 border-none shadow-none"
          : "glass-card"
      )}>
        {children}
        {linkHref && linkText && (
          <CardFooter className="p-6 pt-4 mt-auto">
            <Link href={linkHref} className="group/link inline-flex items-center text-sm font-semibold text-accent hover:text-foreground transition-colors">
              {linkText}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
};
