
'use client'

import { motion, type MotionProps } from 'framer-motion'
import type { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils'

interface ScrollAnimatedSectionProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

export function ScrollAnimatedSection({ 
  children, 
  className, 
  delay = 0, 
  as: Component = 'div', // Default to 'div'
  ...rest 
}: ScrollAnimatedSectionProps) {
  
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={cn(className)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 1, 0.5, 1] 
      }}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}
