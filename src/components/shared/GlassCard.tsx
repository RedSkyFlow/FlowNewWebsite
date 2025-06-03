'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  whileHoverScale?: number;
};

const GlassCard = ({ children, className, whileHoverScale = 1.03 }: GlassCardProps) => {
  return (
    <motion.div
      className={cn('glass-card p-6 shadow-xl transition-shadow duration-300 hover:shadow-2xl', className)}
      whileHover={{ scale: whileHoverScale }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
