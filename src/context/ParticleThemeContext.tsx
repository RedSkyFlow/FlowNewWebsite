"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ParticleThemeContextType {
    colors: string[];
    setColors: (colors: string[]) => void;
}

const defaultColors = ["#14D8CC", "#0496FF", "#FFC145"]; // Primary, Accent, Secondary

const ParticleThemeContext = createContext<ParticleThemeContextType | undefined>(undefined);

export function ParticleThemeProvider({ children }: { children: ReactNode }) {
    const [colors, setColors] = useState<string[]>(defaultColors);

    return (
        <ParticleThemeContext.Provider value={{ colors, setColors }}>
            {children}
        </ParticleThemeContext.Provider>
    );
}

export function useParticleTheme() {
    const context = useContext(ParticleThemeContext);
    if (context === undefined) {
        throw new Error("useParticleTheme must be used within a ParticleThemeProvider");
    }
    return context;
}
