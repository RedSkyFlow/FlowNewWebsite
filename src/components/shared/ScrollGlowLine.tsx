'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrollGlowLineProps {
    className?: string;
}

const ScrollGlowLine: React.FC<ScrollGlowLineProps> = ({ className }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const width = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <div ref={containerRef} className={cn("relative w-full h-px my-20 flex justify-center items-center", className)}>
            {/* Base Line */}
            <div className="absolute inset-0 bg-white/10 w-full h-px" />

            {/* Activation Line */}
            <motion.div
                style={{ width, opacity }}
                className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(20,216,204,0.8)]"
            />
        </div>
    );
};

export default ScrollGlowLine;
