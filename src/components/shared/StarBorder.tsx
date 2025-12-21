import React from 'react';
import { cn } from "@/lib/utils";

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties['animationDuration'];
    thickness?: number;
    active?: boolean;
};

export const StarBorder = <T extends React.ElementType = 'button'>({
    as,
    className = '',
    color = 'white',
    speed = '6s',
    thickness = 1,
    active = true,
    children,
    ...rest
}: StarBorderProps<T>) => {
    const Component = as || 'button';

    return (
        <Component
            className={cn("relative inline-block overflow-hidden rounded-[20px] p-[1px]", className)}
            {...(rest as any)}
        >
            <div
                className={cn(
                    "absolute w-[400%] h-[30%] opacity-100 bottom-[-11px] right-[-250%] rounded-full z-0",
                    "star-border-glow",
                    "animate-star-movement-bottom",
                    "blur-sm"
                )}
            ></div>
            <div
                className={cn(
                    "absolute w-[400%] h-[30%] opacity-100 top-[-10px] left-[-250%] rounded-full z-0",
                    "star-border-glow",
                    "animate-star-movement-top",
                    "blur-sm"
                )}
            ></div>
            <div className="relative z-[1] bg-brand-base border border-white/10 text-white text-center text-[16px] py-[12px] px-[24px] rounded-[20px] transition-colors hover:bg-brand-base/80">
                {children}
            </div>
        </Component>
    );
};

