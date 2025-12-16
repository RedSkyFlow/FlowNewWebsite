'use client';

import React from 'react';
import OrbitEngine from '../marketing/OrbitEngine';
import ChatSimulation from '../marketing/ChatSimulation';

// Orbit Data representing the Ecosystem (from Manifest)
const orbitData = [
    {
        id: 'purple',
        title: 'Purple WiFi',
        // Fallback gradient since images might strictly not exist yet
        gradient: 'linear-gradient(135deg, #5b21b6 0%, #7c3aed 100%)',
        desc: 'The world-class connectivity engine.',
        chat: [{ sender: 'bot', text: 'Secure Connection Established. Identity Verified.' }]
    },
    {
        id: 'flow',
        title: 'Flow Connect',
        gradient: 'linear-gradient(135deg, #14D8CC 0%, #0496FF 100%)',
        desc: 'The AI Gateway that acts on presence.',
        chat: [
            { sender: 'bot', text: 'Welcome back, Sarah! You are in the VIP Lounge.' },
            { sender: 'bot', text: 'Would you like your usual Sauvignon Blanc?' }
        ]
    },
    {
        id: 'data',
        title: 'First-Party Data',
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        desc: 'You own the relationship, not Big Tech.',
        chat: [{ sender: 'bot', text: 'CRM Updated: Customer visited 5 times this month.' }]
    }
];

export function EcosystemSection() {
    return (
        <section className="relative w-full py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
                        The Venue OS Ecosystem
                    </h2>
                    <p className="text-[#F5F0F6]/60 text-lg">
                        Powered by Purple. Orchestrated by Flow.
                    </p>
                </div>

                <OrbitEngine
                    items={orbitData as any}
                    renderItem={(item, isActive) => (
                        <div className="glass-panel w-full h-full p-6 rounded-2xl flex flex-col items-center text-center bg-[#131629] border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md">
                            {/* Card Content */}
                            <h3 className="text-2xl font-bold mb-2 text-white relative z-10">{item.title}</h3>
                            <p className="text-gray-400 mb-6 relative z-10 text-sm">{item.desc}</p>

                            <div className="flex-1 w-full rounded-xl overflow-hidden relative bg-black/20 border border-white/5">
                                {isActive ? (
                                    <ChatSimulation messages={item.chat as any} />
                                ) : (
                                    <div
                                        className="w-full h-full opacity-50 transition-opacity duration-500"
                                        style={{ background: item.gradient }}
                                    />
                                )}
                            </div>

                            {/* Background Glow for Card */}
                            <div
                                className="absolute inset-0 opacity-10 pointer-events-none"
                                style={{ background: item.gradient, filter: 'blur(40px)' }}
                            />
                        </div>
                    )}
                />
            </div>
        </section>
    );
}
