"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type ShineBorderVariant = 'primary' | 'secondary' | 'accent' | 'luxury';

interface ShineBorderProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Width of the border in pixels
     * @default 1
     */
    borderWidth?: number
    /**
     * Duration of the animation in seconds
     * @default 14
     */
    duration?: number
    /**
     * Color of the border, can be a single color or an array of colors.
     * Overridden if 'variant' is provided.
     */
    shineColor?: string | string[]
    /**
     * Color variant for the shine effect
     */
    variant?: ShineBorderVariant
}

const variantColors: Record<ShineBorderVariant, string[]> = {
    primary: ["#14D8CC", "#0496FF", "#14D8CC"],
    secondary: ["#00F5FF", "#7000FF", "#00F5FF"],
    accent: ["#FFC145", "#FF6B6B", "#FFC145"],
    luxury: ["#FFD700", "#B8860B", "#FFD700"],
};

/**
 * Shine Border
 *
 * An animated background border effect component with configurable properties.
 * Optimized for Flow Networks brand colors.
 */
export function ShineBorder({
    borderWidth = 1,
    duration = 14,
    variant = "primary",
    className,
    ...props
}: ShineBorderProps) {
    const colors = variantColors[variant];

    return (
        <div
            style={
                {
                    "--border-width": `${borderWidth}px`,
                    "--duration": `${duration}s`,
                    "--color-start": colors[0],
                    "--color-end": colors[1],
                    top: `-${borderWidth}px`,
                    left: `-${borderWidth}px`,
                    right: `-${borderWidth}px`,
                    bottom: `-${borderWidth}px`,
                } as React.CSSProperties
            }
            className={cn(
                "absolute pointer-events-none rounded-[inherit] z-20 shine-border-beam",
                className
            )}
            {...props}
        />
    );
}
