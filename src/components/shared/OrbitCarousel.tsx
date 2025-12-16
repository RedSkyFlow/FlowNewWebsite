'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';

interface OrbitItem {
    id: string;
    title: string;
    description: string;
    icon?: React.ElementType;
    content?: React.ReactNode;
}

interface OrbitCarouselProps {
    items: OrbitItem[];
    className?: string;
}

const OrbitCarousel: React.FC<OrbitCarouselProps> = ({ items, className }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const getPosition = (index: number) => {
        const diff = (index - activeIndex + items.length) % items.length;
        if (diff === 0) return 'center';
        if (diff === 1 || diff === - (items.length - 1)) return 'right';
        if (diff === items.length - 1 || diff === -1) return 'left';
        return 'hidden';
    };

    return (
        <div className={cn('relative w-full h-[500px] flex items-center justify-center perspective-1000', className)}>
            {/* Orbital Rings Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[600px] h-[600px] rounded-full border border-primary/30 animate-spin-slow absolute" style={{ animationDuration: '60s' }} />
                <div className="w-[450px] h-[450px] rounded-full border border-secondary/30 animate-spin-slow absolute" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
            </div>

            <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center">
                <AnimatePresence mode='popLayout'>
                    {items.map((item, index) => {
                        const position = getPosition(index);
                        if (position === 'hidden') return null;

                        let x = 0;
                        let scale = 1;
                        let zIndex = 0;
                        let opacity = 1;
                        let rotateY = 0;

                        if (position === 'center') {
                            x = 0;
                            scale = 1;
                            zIndex = 20;
                            opacity = 1;
                            rotateY = 0;
                        } else if (position === 'left') {
                            x = -300; // Adjust spacing
                            scale = 0.8;
                            zIndex = 10;
                            opacity = 0.6;
                            rotateY = 25;
                        } else if (position === 'right') {
                            x = 300; // Adjust spacing
                            scale = 0.8;
                            zIndex = 10;
                            opacity = 0.6;
                            rotateY = -25;
                        }

                        return (
                            <motion.div
                                key={item.id}
                                layoutId={item.id}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{
                                    x,
                                    scale,
                                    opacity,
                                    zIndex,
                                    rotateY,
                                    transition: { type: 'spring', stiffness: 300, damping: 30 }
                                }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className={cn(
                                    "absolute w-[350px] h-[450px] rounded-2xl p-6 flex flex-col items-center justify-center text-center cursor-pointer backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300",
                                    position === 'center' ? 'bg-card/80 border-primary/50 shadow-glow-primary' : 'bg-card/20 border-white/5 hover:bg-card/40'
                                )}
                                onClick={() => setActiveIndex(index)}
                            >
                                {/* Specular Highlight for Active Card */}
                                {position === 'center' && (
                                    <div className="absolute inset-0 rounded-2xl border-t border-white/50 pointer-events-none" />
                                )}

                                <div className="mb-6 p-4 rounded-full bg-background/50 ring-1 ring-white/10">
                                    {item.icon && <item.icon className={cn("w-12 h-12", position === 'center' ? "text-primary icon-glow-primary" : "text-muted-foreground")} />}
                                </div>

                                <h3 className={cn("text-2xl font-bold mb-3", position === 'center' ? "text-foreground" : "text-muted-foreground")}>
                                    {item.title}
                                </h3>

                                <p className="text-sm text-muted-foreground line-clamp-4">
                                    {item.description}
                                </p>

                                {position === 'center' && (
                                    <div className="mt-6">
                                        <EnhancedButton variant="outline" size="sm" glow>
                                            Explore
                                        </EnhancedButton>
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-4 flex gap-4 z-30">
                <EnhancedButton onClick={prevSlide} variant="ghost" size="icon" className="rounded-full bg-background/50 hover:bg-background/80">
                    <ChevronLeft className="w-6 h-6" />
                </EnhancedButton>
                <EnhancedButton onClick={nextSlide} variant="ghost" size="icon" className="rounded-full bg-background/50 hover:bg-background/80">
                    <ChevronRight className="w-6 h-6" />
                </EnhancedButton>
            </div>
        </div>
    );
};

export default OrbitCarousel;
