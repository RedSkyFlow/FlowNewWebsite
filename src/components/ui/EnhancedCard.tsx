
'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: '3d';
  glowColor?: 'primary' | 'secondary' | 'accent' | 'blue' | 'purple'; // 'blue' and 'purple' for legacy mapping
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
}) => {
  const glowClasses: Record<string, string> = {
    primary: 'hover:shadow-[var(--glow-primary-strong)]',
    secondary: 'hover:shadow-[var(--glow-secondary-strong)]',
    accent: 'hover:shadow-[var(--glow-accent-strong)]',
    blue: 'hover:shadow-[var(--glow-secondary-strong)]', // Legacy mapping
    purple: 'hover:shadow-[var(--glow-primary-strong)]', // Legacy mapping
  };

  const borderClasses: Record<string, string> = {
    primary: 'hover:border-primary/40',
    secondary: 'hover:border-secondary/40',
    accent: 'hover:border-accent/40',
    blue: 'hover:border-secondary/40', // Legacy mapping
    purple: 'hover:border-primary/40', // Legacy mapping
  }

  const cardBaseClasses = "h-full flex flex-col transform-gpu transition-all duration-slow ease-gentle bg-card/30 backdrop-blur-md border border-primary/20 shadow-[var(--shadow-level-3)]";
  const card3dClasses = "md:hover:[transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)_translateY(-8px)_scale(1.03)] md:[transform:perspective(1000px)_rotateX(5deg)_rotateY(-5deg)]";

  return (
    <motion.div
      className={cn(
        "group",
        cardBaseClasses,
        variant === '3d' && card3dClasses,
        glowClasses[glowColor],
        borderClasses[glowColor],
        className
      )}
    >
      <Card className="bg-transparent border-none shadow-none rounded-none flex flex-col flex-grow">
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
