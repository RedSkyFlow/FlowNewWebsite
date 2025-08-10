'use client'

import { motion } from 'framer-motion'
import type { ReactNode, ElementType } from 'react';
import { cn } from '@/lib/utils'

interface ScrollAnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  [key: string]: any; // Allow any other props
}

export function ScrollAnimatedSection({ 
  children, 
  className = '', 
  delay = 0, 
  as: Component = 'section', // The desired component, e.g., 'section', 'div'
  ...rest // Collect all other props, including 'id'
}: ScrollAnimatedSectionProps) {
  
  // CORRECTED: Create a motion-enabled version of the desired component.
  // This is the standard Framer Motion pattern for polymorphic components.
  const MotionComponent = motion(Component);

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
      {...rest} // Spread props like 'id' onto the dynamic motion component
    >
      {children}
    </MotionComponent>
  )
}
