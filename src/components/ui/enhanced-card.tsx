
'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardFooter, type CardProps } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import AnimatedAccentBorder from '../shared/AnimatedAccentBorder';

interface EnhancedCardProps extends CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: '3d' | 'glassmorphic';
  glowColor?: 'primary' | 'secondary' | 'accent' | 'gold' | 'teal' | 'blue' | 'orange';
  linkHref?: string;
  linkText?: string;
  animatedBorder?: boolean;
  blurStrength?: 'sm' | 'md' | 'lg';
  backgroundOpacityLevel?: 'ultra-subtle' | 'subtle' | 'normal' | 'strong';
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className,
  variant,
  glowColor = 'primary',
  linkHref,
  linkText,
  animatedBorder = false,
  blurStrength = 'md',
  backgroundOpacityLevel = 'ultra-subtle',
  ...props
}) => {
  const is3D = variant === '3d';

  const accentBorderColorMap = {
    primary: 'primary',
    secondary: 'secondary',
    accent: 'accent',
    gold: 'accent',
    teal: 'primary',
    blue: 'primary',
    orange: 'secondary',
  };

  const blurConfig = {
    sm: 'blur(8px)',
    md: 'blur(16px)',
    lg: 'blur(24px)'
  };

  const opacityConfig = {
    'ultra-subtle': '0.05',
    subtle: '0.1',
    normal: '0.25',
    strong: '0.4'
  };

  const currentBackgroundOpacity = opacityConfig[backgroundOpacityLevel];
  const currentBlurStrength = blurConfig[blurStrength];

  const cardVariants = {
    initial: {
      transform: is3D ? 'perspective(1000px) rotateX(5deg) rotateY(-5deg)' : 'none',
      boxShadow: 'var(--shadow-level-1)'
    },
    hover: {
      transform: is3D
        ? 'perspective(1000px) rotateX(2deg) rotateY(5deg) translateY(-8px) scale(1.02)'
        : 'translateY(-4px) scale(1.02)',
      boxShadow: `var(--shadow-level-4), var(--glow-${accentBorderColorMap[glowColor]})`,
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
      {animatedBorder && (
        <AnimatedAccentBorder
          color={accentBorderColorMap[glowColor]}
          className="absolute inset-0 z-0"
          sparkle={true}
          variant="subtle"
        />
      )}

      <Card
        className={cn(
          "relative z-10 h-full flex flex-col border-none shadow-none"
        )}
        style={{
          transform: 'translateZ(0)',
          backgroundColor: `hsla(var(--card) / ${currentBackgroundOpacity})`,
          backdropFilter: currentBlurStrength,
          WebkitBackdropFilter: currentBlurStrength,
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
