'use client';

import React from 'react';
import OrbitEngine from '../marketing/OrbitEngine';
import ChatSimulation from '../marketing/ChatSimulation';

// Orbit Data representing the Ecosystem (from Manifest)
interface OrbitItem {
    id: string;
    title: string;
    image: string;
    gradient: string;
    desc: string;
    chat: { sender: 'bot' | 'user'; text: string }[];
}

const orbitData: OrbitItem[] = [
    {
        id: 'purple',
        title: 'Purple WiFi',
        image: '/Images/solutions/Venue WiFi.jpg',
        gradient: 'bg-gradient-to-br from-brand-primary to-brand-accent2',
        desc: 'The world-class connectivity engine.',
        chat: [{ sender: 'bot', text: 'Secure Connection Established. Identity Verified.' }]
    },
    {
        id: 'flow',
        title: 'Flow Connect',
        image: '/Images/solutions/Gateway Flow AI.png',
        gradient: 'bg-gradient-to-br from-brand-primary to-brand-accent2',
        desc: 'The AI Gateway that acts on presence.',
        chat: [
            { sender: 'bot', text: 'Welcome back, Sarah! You are in the VIP Lounge.' },
            { sender: 'bot', text: 'Would you like your usual Sauvignon Blanc?' }
        ]
    },
    {
        id: 'data',
        title: 'First-Party Data',
        image: '/Images/solutions/capture wifi- CRM data.jpg',
        gradient: 'bg-gradient-to-br from-brand-secondary to-brand-accent1',
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
                    <p className="text-brand-text/60 text-lg">
                        Powered by <span className="text-brand-primary font-medium">Purple</span>. Orchestrated by <span className="text-brand-accent2 font-medium">Flow</span>.
                    </p>
                </div>

                <OrbitEngine<OrbitItem>
                    items={orbitData}
                    renderItem={(item, isActive) => (
                        <div className="glass-panel w-full h-full p-6 rounded-2xl flex flex-col items-center text-center bg-brand-base border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md">
                            {/* Card Content */}
                            <h3 className="text-2xl font-bold mb-2 text-white relative z-10">{item.title}</h3>
                            <p className="text-gray-400 mb-6 relative z-10 text-sm">{item.desc}</p>

                            <div className="flex-1 w-full rounded-xl overflow-hidden relative bg-black/20 border border-white/5">
                                {isActive ? (
                                    <ChatSimulation messages={item.chat} />
                                ) : (
                                    <div className="relative w-full h-full">
                                        <div className="absolute inset-0 bg-brand-base/40 z-10 mix-blend-multiply pointer-events-none transition-opacity duration-500" />
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Background Glow for Card */}
                            <div
                                className={`absolute inset-0 opacity-10 pointer-events-none blur-[40px] ${item.gradient}`}
                            />
                        </div>
                    )}
                />
            </div>
        </section>
    );
}
