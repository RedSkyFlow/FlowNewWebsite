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
    shineColor: _shineColor, // Destructure but don't use
    className,
    ...props
}: ShineBorderProps) {
    return (
        <div
            className={cn(
                "shine-border-base",
                variant === 'primary' && "shine-primary",
                variant === 'secondary' && "shine-secondary",
                variant === 'accent' && "shine-accent",
                variant === 'luxury' && "shine-luxury",
                className
            )}
            {...props}
        />
    )
}
