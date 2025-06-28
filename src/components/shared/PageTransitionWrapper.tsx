'use client';

import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

type PageTransitionWrapperProps = {
  children: ReactNode;
};

// Exact Brand Guide Animation Variants
const variants = {
  initial: { 
    opacity: 0, 
    transform: 'translateY(20px) translateZ(0)',
    filter: 'blur(4px)'
  },
  animate: { 
    opacity: 1, 
    transform: 'translateY(0px) translateZ(0)',
    filter: 'blur(0px)'
  },
  exit: { 
    opacity: 0, 
    transform: 'translateY(-20px) translateZ(0)',
    filter: 'blur(4px)'
  },
};

const PageTransitionWrapper = ({ children }: PageTransitionWrapperProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ 
          duration: 0.6, 
          ease: [0.4, 0.0, 0.2, 1],
          type: "tween"
        }}
        className="w-full"
        style={{ 
          willChange: 'transform, opacity, filter',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;
