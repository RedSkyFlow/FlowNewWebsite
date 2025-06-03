'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type AnimatedHeadingProps = {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
  staggerChildren?: number;
  wordAnimation?: boolean;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedHeading = ({
  text,
  as: Tag = 'h1',
  className,
  staggerChildren = 0.05,
  wordAnimation = false,
}: AnimatedHeadingProps) => {
  const words = wordAnimation ? text.split(' ') : [text];

  return (
    <Tag className={cn('font-headline', className)}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren }}
        aria-hidden
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={defaultAnimations}
            className="inline-block"
            style={wordAnimation ? { marginRight: '0.25em' } : {}} // Add space between words if wordAnimation is true
          >
            {word === ' ' ? '\u00A0' : word} 
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default AnimatedHeading;
