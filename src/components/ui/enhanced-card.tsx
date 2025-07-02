
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardFooter, type CardProps } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface EnhancedCardProps extends CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: '3d';
  glowColor?: 'primary' | 'secondary' | 'accent';
  linkHref?: string;
  linkText?: string;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className,
  variant,
  glowColor = 'primary',
  linkHref,
  linkText,
  ...props
}) => {
  const is3D = variant === '3d';

  const cardVariants = {
    initial: {
      transform: is3D ? 'perspective(1000px) rotateX(5deg) rotateY(-5deg)' : 'none',
      boxShadow: 'var(--shadow-level-1)', // Initial shadow
    },
    hover: {
      transform: is3D
        ? 'perspective(1000px) rotateX(2deg) rotateY(5deg) translateY(-8px) scale(1.02)'
        : 'translateY(-4px) scale(1.02)',
      boxShadow: `var(--shadow-level-4), var(--glow-${glowColor})`,
    }
  };

  return (
    <motion.div
      className={cn(
        "group relative h-full will-change-transform",
        className
      )}
      style={{ transformStyle: "preserve-3d" }}
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
    >
      <Card
        className={cn(
          "relative z-10 h-full flex flex-col",
          "bg-transparent backdrop-blur-lg", // Keep transparent background and blur
          "border border-primary/30", // Default state: thin, semi-transparent teal border
          "transition-colors duration-slow ease-gentle", // For border transition
          "group-hover:border-primary/60", // Hover state: brighter border
          "shadow-none" // Shadows are handled by the motion div
        )}
        style={{
          transform: 'translateZ(0)', // GPU acceleration layer for stability
        }}
        {...props}
      >
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
