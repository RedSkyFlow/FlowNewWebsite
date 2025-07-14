'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  wordAnimation?: boolean;
  staggerChildren?: number;
  delay?: number;
}

const sentenceVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      delay,
      staggerChildren: 0.08, // Default stagger for letters/words
    },
  }),
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

const singleBlockVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1],
      delay,
    },
  }),
};

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  as: Component = 'h2',
  className = '',
  wordAnimation = false,
  staggerChildren = 0.04,
  delay = 0,
}) => {
  const words = text.split(' ').map(word => word + '\u00A0'); // Add non-breaking space

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: staggerChildren,
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
          viewport={{ once: true, amount: 0.5 }}
        >
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              variants={wordVariants}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      ) : (
        <motion.span
          variants={singleBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          custom={delay}
          className="inline-block"
        >
          {text}
        </motion.span>
      )}
    </Component>
  );
};

export default AnimatedHeading;