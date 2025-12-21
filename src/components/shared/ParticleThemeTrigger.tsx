"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useParticleTheme } from "@/context/ParticleThemeContext";

interface ParticleThemeTriggerProps {
    colors: string[];
    className?: string; // Optional wrapper class
    children?: React.ReactNode; // Can wrap content or be self-closing
}

export function ParticleThemeTrigger({ colors, className, children }: ParticleThemeTriggerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 }); // Trigger when 50% visible
    const { setColors } = useParticleTheme();

    useEffect(() => {
        if (isInView) {
            setColors(colors);
        }
    }, [isInView, colors, setColors]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
