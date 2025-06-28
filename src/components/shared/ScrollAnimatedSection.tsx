'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import type { ReactNode } from 'react';

// Usage component
export function ScrollAnimatedSection({ children, className = '', delay = 0 }: { children: ReactNode, className?: string, delay?: number}) {
  const { ref, isVisible } = useScrollAnimation({ triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.4, 0.0, 0.2, 1] 
      }}
    >
      {children}
    </motion.div>
  )
}
