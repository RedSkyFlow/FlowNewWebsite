'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, AnimationProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

interface LogoShimmerProps {
  children: React.ReactNode;
  intensity?: 'subtle' | 'standard' | 'prominent';
  speed?: 'slow' | 'normal' | 'fast';
  color?: 'white' | 'accent' | 'primary';
  trigger?: 'hover' | 'always' | 'interval' | 'inView';
  className?: string;
  intervalDelay?: number;
}

const intensityMap = {
  subtle: { width: '50%', blur: '20px', opacity: 0.5 },
  standard: { width: '75%', blur: '30px', opacity: 0.7 },
  prominent: { width: '100%', blur: '40px', opacity: 0.9 },
};

const speedMap = {
  slow: 5,
  normal: 3,
  fast: 1.5,
};

// CORRECTED: colorMap now uses the correct CSS variables and hsla format
const colorMap = {
  white: 'hsla(var(--foreground), 0.7)',
  accent: 'hsla(var(--accent), 0.7)',
  primary: 'hsla(var(--primary), 0.7)',
};

const LogoShimmer: React.FC<LogoShimmerProps> = ({
  children,
  intensity = 'standard',
  speed = 'normal',
  color = 'white',
  trigger = 'interval',
  className,
  intervalDelay = 5000,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });
  const [isMounted, setIsMounted] = useState(false);
  
  const currentIntensity = intensityMap[intensity];
  const currentSpeed = speedMap[speed];
  const currentColor = colorMap[color];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (trigger !== 'interval' || !inView || !isMounted) return;
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, intervalDelay);
    return () => clearInterval(interval);
  }, [trigger, intervalDelay, inView, isMounted]);

  const showShimmer =
    isMounted &&
    (
      trigger === 'always' ||
      (trigger === 'hover' && isHovered) ||
      (trigger === 'inView' && inView) ||
      (trigger === 'interval' && inView)
    );

  const animationProps: AnimationProps = {
    initial: { x: '-150%', opacity: 0 },
    animate: { x: '150%', opacity: [0, currentIntensity.opacity, 0] },
    transition: { duration: currentSpeed, ease: 'linear' },
  };

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      style={{ isolation: 'isolate' }}
      onMouseEnter={() => trigger === 'hover' && setIsHovered(true)}
      onMouseLeave={() => trigger === 'hover' && setIsHovered(false)}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {isMounted && (
        <AnimatePresence>
          {showShimmer && (
            <motion.div
              key={trigger === 'interval' ? key : undefined}
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${currentColor} 50%, transparent 100%)`,
                width: currentIntensity.width,
                filter: `blur(${currentIntensity.blur})`,
                transform: 'translateZ(0)',
                willChange: 'transform, opacity',
                mixBlendMode: 'color-dodge',
              }}
              {...animationProps}
            />
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default LogoShimmer;