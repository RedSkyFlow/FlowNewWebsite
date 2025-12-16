'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface OrbitEngineProps<T> {
    items: T[];
    renderItem: (item: T, isActive: boolean) => React.ReactNode;
    autoPlayInterval?: number;
}

const OrbitEngine = <T extends { id: string | number }>({ items, renderItem, autoPlayInterval = 5000 }: OrbitEngineProps<T>) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        if (!autoPlayInterval) return;
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % items.length);
        }, autoPlayInterval);
        return () => clearInterval(timer);
    }, [items.length, autoPlayInterval]);

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
            zIndex: 0,
            rotateY: direction > 0 ? 45 : -45,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                bounce: 0.2
            }
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
            rotateY: direction < 0 ? 45 : -45,
            transition: {
                duration: 0.6,
                type: "spring",
                bounce: 0.2
            }
        })
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto h-[500px] perspective-1000 flex items-center justify-center">
            {/* Controls */}
            <button
                onClick={handlePrev}
                className="absolute left-4 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all group"
            >
                <ChevronLeft className="w-6 h-6 text-white/50 group-hover:text-white" />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 z-20 p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all group"
            >
                <ChevronRight className="w-6 h-6 text-white/50 group-hover:text-white" />
            </button>

            {/* Orbit Stage */}
            <div className="relative w-full max-w-lg h-[400px]">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 w-full h-full"
                    >
                        {renderItem(items[currentIndex], true)}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Orbits */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex
                                ? 'w-8 bg-gradient-to-r from-[#14D8CC] to-[#0496FF] shadow-[0_0_10px_#14D8CC]'
                                : 'bg-white/20 hover:bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default OrbitEngine;
