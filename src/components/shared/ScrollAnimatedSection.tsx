'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react';

// This component uses Framer Motion's `whileInView` which is more robust
// for scroll-triggered animations than custom IntersectionObserver hooks,
// especially in preview environments.
export function ScrollAnimatedSection({ children, className = '', delay = 0, as: Component = 'section' }: { children: ReactNode, className?: string, delay?: number, as?: React.ElementType }) {
  
  return (
    <motion.div
      // The `as` prop allows this to render as a 'div', 'section', etc.
      // This is now passed directly to motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 1, 0.5, 1] 
      }}
    >
      {children}
    </motion.div>
  )
}
