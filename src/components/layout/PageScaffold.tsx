import React from "react";
import { ParticleBackground } from "@/components/shared/ParticleBackground";
import { FloatingNavbar } from "@/components/layout/FloatingNavbar";
import AppFooter from "@/components/layout/AppFooter";

interface PageScaffoldProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export function PageScaffold({ title, subtitle, children }: PageScaffoldProps) {
    return (
        <main className="relative min-h-screen bg-[#1c203c] overflow-x-hidden selection:bg-brand-primary/30 text-[#F5F0F6]">
            {/* --- 0. BACKGROUND LAYERS --- */}
            <ParticleBackground
                className="fixed inset-0 z-0 opacity-20"
                particleCount={30}
                speed={0.1}
                lineDistance={150}
            />

            {/* --- 1. NAVIGATION --- */}
            <FloatingNavbar />

            <div className="relative z-10 pt-32 pb-20 container mx-auto px-4 min-h-[60vh] flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl text-[#F5F0F6]/60 max-w-2xl mx-auto mb-8">
                        {subtitle}
                    </p>
                )}
                <div className="w-24 h-1 bg-brand-primary rounded-full mb-12 opacity-50" />

                {children}

                {/* Placeholder Content */}
                {!children && (
                    <div className="glass-card p-12 rounded-3xl border border-white/10 max-w-lg mx-auto">
                        <p className="text-[#F5F0F6]/40 italic">
                            This page is currently under construction. <br />
                            Content for {title} is coming soon.
                        </p>
                    </div>
                )}
            </div>

            <AppFooter />
        </main>
    );
}
