
'use client'

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
  const card3dClasses = "hover:[transform:perspective(1000px)_rotateX(2deg)_rotateY(-4deg)_scale(1.05)]";

  return (
    <motion.div
      className={cn(
        "group relative h-full transform-gpu transition-all duration-standard ease-gentle",
        variant === '3d' && card3dClasses,
        className
      )}
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
