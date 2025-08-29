
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  imageUrl?: string;
  altText?: string;
  speed?: number; // Speed factor (e.g., 0.5 for half speed)
}

export function ParallaxSection({ 
  children, 
  className, 
  imageUrl,
  altText = "",
  speed = 0.2 
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'], // Animate from when the top of the section hits the top of the viewport, until the bottom of the section hits the top
  });
  
  // Create a parallax effect on the y-axis
  // The '30%' determines the total travel distance of the background
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`]);

  return (
    <section ref={ref} className={cn("relative overflow-hidden", className)}>
      {imageUrl && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-cover object-center"
            priority={true} // Prioritize hero images
          />
          {/* Optional: Add an overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
