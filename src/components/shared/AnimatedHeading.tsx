'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface AnimatedHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  wordAnimation?: boolean;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  as: Component = 'h2',
  className = '',
  wordAnimation = false
}) => {
  const words = text.split(' ');

  return (
    <Component className={cn('font-headline', className)}>
      {wordAnimation ? (
        words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.4, 0.0, 0.2, 1]
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))
      ) : (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        >
          {text}
        </motion.span>
      )}
    </Component>
  );
};

export default AnimatedHeading;
