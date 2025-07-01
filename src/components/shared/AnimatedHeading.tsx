'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface AnimatedHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  wordAnimation?: boolean;
  staggerChildren?: number;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  as: Component = 'h2',
  className = '',
  wordAnimation = false,
  staggerChildren = 0.05
}) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <Component className={cn('font-headline', className)}>
      {wordAnimation ? (
        <motion.span
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="inline-block"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="inline-block mr-2" // Adjust spacing between words as needed
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      ) : (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          className="inline-block"
        >
          {text}
        </motion.span>
      )}
    </Component>
  );
};

export default AnimatedHeading;
