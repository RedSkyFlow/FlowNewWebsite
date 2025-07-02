
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

  const is3D = variant === '3d';

  // Define animation variants for the main motion wrapper
  const cardVariants = {
    initial: {
      transform: is3D ? 'perspective(1000px) rotateX(5deg) rotateY(-5deg)' : 'none',
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
      style={{ transformStyle: "preserve-3d" }} // Crucial for containing 3D children
      initial="initial"
      whileHover="hover"
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
      
      <Card
        className={cn(
          "relative z-10 h-full flex flex-col transition-colors duration-standard ease-gentle",
          "bg-card/80 backdrop-blur-md", // Consistent glass effect
          animatedBorder ? "border-none" : "border border-border/50",
          "shadow-lg group-hover:border-primary/50"
        )}
        style={{ transform: 'translateZ(0)' }} // Promote to its own rendering layer to prevent flickering
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
