import React from 'react';

export const FlowLogo = ({ className = "w-8 h-8", ...props }: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            {/* Center Dot (Teal) */}
            <circle cx="50" cy="65" r="6" fill="#14D8CC" />

            {/* Inner Wifi Arc (Teal) */}
            <path
                d="M35 50 C35 50 42 42 50 42 C58 42 65 50 65 50"
                stroke="#14D8CC"
                strokeWidth="8"
                strokeLinecap="round"
            />

            {/* Outer Wifi Arc (Teal) */}
            <path
                d="M25 40 C25 40 38 25 50 25 C62 25 75 40 75 40"
                stroke="#14D8CC"
                strokeWidth="8"
                strokeLinecap="round"
            />

            {/* Left Circuit Wing (Gold) */}
            <path
                d="M20 30 L15 35 C15 35 5 50 5 70 C5 90 35 110 50 120"
                stroke="#FFC145"
                strokeWidth="6"
                strokeLinecap="round"
            />
            <path
                d="M30 65 C25 75 25 85 40 95"
                stroke="#FFC145"
                strokeWidth="6"
                strokeLinecap="round"
            />
            <circle cx="30" cy="65" r="4" fill="#FFC145" />

            {/* Right Circuit Wing (Gold) */}
            <path
                d="M80 30 L85 35 C85 35 95 50 95 70 C95 90 65 110 50 120"
                stroke="#FFC145"
                strokeWidth="6"
                strokeLinecap="round"
            />
            <path
                d="M70 65 C75 75 75 85 60 95"
                stroke="#FFC145"
                strokeWidth="6"
                strokeLinecap="round"
            />
            <circle cx="70" cy="65" r="4" fill="#FFC145" />

        </svg>
    );
};
