
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
  linkHref?: string;
  linkText?: string;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className,
  variant,
  linkHref,
  linkText,
  ...props
}) => {
  const is3D = variant === '3d';

  const cardVariants = {
    initial: {
      transform: is3D ? 'perspective(1000px) rotateX(5deg) rotateY(-5deg)' : 'none',
    },
    hover: {
      transform: is3D
        ? 'perspective(1000px) rotateX(2deg) rotateY(5deg) translateY(-8px) scale(1.02)'
        : 'translateY(-4px) scale(1.02)',
    }
  };

  return (
    <motion.div
      className={cn("group relative h-full will-change-transform", className)}
      style={{ transformStyle: "preserve-3d" }}
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
    >
      <Card
        className={cn(
          "relative h-full flex flex-col",
          is3D ? "perspex-card" : "border border-border/20 bg-card/5 backdrop-blur-lg",
          props.className
        )}
        {...props}
      >
        <div className="relative z-10 flex h-full flex-col">
          {children}
          {linkHref && linkText && (
            <CardFooter className="p-6 pt-4 mt-auto">
              <Link href={linkHref} className="group/link inline-flex items-center text-sm font-semibold text-accent hover:text-foreground transition-colors">
                {linkText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </CardFooter>
          )}
        </div>
      </Card>
    </motion.div>
  );
};
