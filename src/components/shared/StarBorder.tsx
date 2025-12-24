"use client"

import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { cn } from "@/lib/utils";

export type StarBorderVariant = 'primary' | 'secondary' | 'accent' | 'luxury';
export type StarBorderActivationMode = 'immediate' | 'viewport' | 'timed' | 'viewport-and-time';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    variant?: StarBorderVariant;
    speed?: React.CSSProperties['animationDuration'];
    activationMode?: StarBorderActivationMode;
    activationDelay?: number; // in milliseconds
    showInner?: boolean; // Whether to render inner content div with button styles
};

const variantColors: Record<StarBorderVariant, string> = {
    primary: '#14D8CC',   // Turquoise
    secondary: '#0496FF', // Blue
    accent: '#FFC145',    // Gold
    luxury: '#FFD700',    // Gold Premium
};

export const StarBorder = <T extends React.ElementType = 'div'>({
    as,
    className = '',
    variant = 'primary',
    speed = '6s',
    activationMode = 'immediate',
    activationDelay = 3000,
    showInner = false,
    children,
    ...rest
}: StarBorderProps<T>) => {
    const Component = as || 'div';
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [isActive, setIsActive] = useState(activationMode === 'immediate');

    // Handle time-based activation
    useEffect(() => {
        if (activationMode === 'timed' || activationMode === 'viewport-and-time') {
            const timer = setTimeout(() => {
                setIsTimerActive(true);
            }, activationDelay);
            return () => clearTimeout(timer);
        }
    }, [activationMode, activationDelay]);

    // Update active state based on activation mode
    useEffect(() => {
        switch (activationMode) {
            case 'immediate':
                setIsActive(true);
                break;
            case 'viewport':
                setIsActive(isInView);
                break;
            case 'timed':
                setIsActive(isTimerActive);
                break;
            case 'viewport-and-time':
                setIsActive(isInView && isTimerActive);
                break;
        }
    }, [activationMode, isInView, isTimerActive]);

    const starColor = variantColors[variant];

    return (
        <Component
            ref={ref}
            className={cn("relative inline-block overflow-visible rounded-[20px] p-[1px]", className)}
            style={{
                '--star-color': starColor,
                '--star-speed': speed,
            } as React.CSSProperties}
            {...(rest as any)}
        >
            {isActive && (
                <>
                    {/* SVG for circular border path */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none z-50"
                        style={{ transform: 'rotate(-90deg)' }}
                    >
                        <defs>
                            {/* Smooth tapered gradient - thin at ends, thick in middle */}
                            <linearGradient id={`star-gradient-${variant}-1`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={starColor} stopOpacity="0" />
                                <stop offset="5%" stopColor={starColor} stopOpacity="0.2" />
                                <stop offset="15%" stopColor={starColor} stopOpacity="0.6" />
                                <stop offset="30%" stopColor={starColor} stopOpacity="1" />
                                <stop offset="50%" stopColor={starColor} stopOpacity="1" />
                                <stop offset="70%" stopColor={starColor} stopOpacity="1" />
                                <stop offset="85%" stopColor={starColor} stopOpacity="0.6" />
                                <stop offset="95%" stopColor={starColor} stopOpacity="0.2" />
                                <stop offset="100%" stopColor={starColor} stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id={`star-gradient-${variant}-2`} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={starColor} stopOpacity="0" />
                                <stop offset="5%" stopColor={starColor} stopOpacity="0.2" />
                                <stop offset="15%" stopColor={starColor} stopOpacity="0.6" />
                                <stop offset="30%" stopColor={starColor} stopOpacity="1" />
                                <stop offset="50%" stopColor={starColor} stopOpacity="1" />
                                <stop offset="70%" stopColor={starColor} stopOpacity="1" />
                                <stop offset="85%" stopColor={starColor} stopOpacity="0.6" />
                                <stop offset="95%" stopColor={starColor} stopOpacity="0.2" />
                                <stop offset="100%" stopColor={starColor} stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        {/* Beam 1 - Clockwise */}
                        <circle
                            cx="50%"
                            cy="50%"
                            r="calc(50% - 2px)"
                            fill="none"
                            stroke={`url(#star-gradient-${variant}-1)`}
                            strokeWidth="2"
                            strokeDasharray="100 1000"
                            strokeLinecap="round"
                            className="animate-star-orbit-1"
                        />
                        {/* Beam 2 - Counter-clockwise */}
                        <circle
                            cx="50%"
                            cy="50%"
                            r="calc(50% - 2px)"
                            fill="none"
                            stroke={`url(#star-gradient-${variant}-2)`}
                            strokeWidth="2"
                            strokeDasharray="100 1000"
                            strokeDashoffset="500"
                            strokeLinecap="round"
                            className="animate-star-orbit-2"
                        />
                    </svg>
                </>
            )}
            {showInner ? (
                <div className="relative z-[1] bg-brand-base border border-white/10 text-white text-center text-[16px] py-[12px] px-[24px] rounded-[20px] transition-colors hover:bg-brand-base/80">
                    {children}
                </div>
            ) : (
                children
            )}
        </Component>
    );
};

