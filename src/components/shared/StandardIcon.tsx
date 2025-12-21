"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StandardIconProps {
    icon: LucideIcon;
    variant?: "primary" | "secondary" | "accent";
    className?: string;
    size?: "sm" | "md" | "lg";
}

const colorMap = {
    primary: "text-[#14D8CC] border-[#14D8CC]/20 group-hover:border-[#14D8CC]/60 bg-brand-base/40",
    secondary: "text-[#0496FF] border-[#0496FF]/20 group-hover:border-[#0496FF]/60 bg-brand-base/40",
    accent: "text-[#FFC145] border-[#FFC145]/20 group-hover:border-[#FFC145]/60 bg-brand-base/40",
};

const glowMap = {
    primary: "group-hover:drop-shadow-[0_0_2px_#ffffff] group-hover:drop-shadow-[0_0_8px_#14D8CC]",
    secondary: "group-hover:drop-shadow-[0_0_2px_#ffffff] group-hover:drop-shadow-[0_0_8px_#0496FF]",
    accent: "group-hover:drop-shadow-[0_0_2px_#ffffff] group-hover:drop-shadow-[0_0_8px_#FFC145]",
};

const sizeMap = {
    sm: "w-10 h-10 p-2.5",
    md: "w-14 h-14 p-3.5",
    lg: "w-20 h-20 p-5",
};

export function StandardIcon({ icon: Icon, variant = "primary", className, size = "md" }: StandardIconProps) {
    return (
        <div
            className={cn(
                "relative flex items-center justify-center rounded-xl border transition-all duration-300 backdrop-blur-sm group",
                colorMap[variant],
                sizeMap[size],
                className
            )}
        >
            <div className={cn("transition-all duration-300 group-hover:scale-110", glowMap[variant])}>
                <Icon className="w-full h-full stroke-[1.5]" />
            </div>
        </div>
    );
}
