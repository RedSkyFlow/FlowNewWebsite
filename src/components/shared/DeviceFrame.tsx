'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface DeviceFrameProps {
    children: React.ReactNode;
    className?: string;
    type?: 'mobile' | 'tablet';
}

const DeviceFrame: React.FC<DeviceFrameProps> = ({ children, className, type = 'mobile' }) => {
    const isMobile = type === 'mobile';

    return (
        <div className={cn(
            "relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] shadow-xl overflow-hidden glass-card-border",
            isMobile ? "max-w-[300px] h-[600px]" : "max-w-[800px] h-[500px] rounded-[2rem]",
            className
        )}>
            {/* Specular Highlight on Bezel */}
            <div className="absolute inset-0 rounded-[2rem] border border-white/20 pointer-events-none z-50"></div>

            {/* Dynamic Island / Notch */}
            {isMobile && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[25px] w-[100px] bg-black rounded-b-[1rem] z-50 flex justify-center items-center">
                    <div className="w-16 h-4 bg-gray-800/50 rounded-full blur-[1px]"></div>
                </div>
            )}

            {/* Screen Content */}
            <div className="w-full h-full bg-background overflow-hidden relative">
                {/* Progressive Blur / Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none z-10"></div>

                <div className="h-full w-full overflow-y-auto scrollbar-hide relative z-0">
                    {children}
                </div>
            </div>

            {/* Side Buttons (Cosmetic) */}
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[100px] rounded-l-lg shadow-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[160px] rounded-l-lg shadow-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[10px] top-[140px] rounded-r-lg shadow-lg"></div>
        </div>
    );
};

export default DeviceFrame;
