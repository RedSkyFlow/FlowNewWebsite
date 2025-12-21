"use client"

import React from 'react';
import InfiniteMenu from '@/components/shared/InfiniteMenu';
import { motion } from 'framer-motion';
import { ShineBorder } from '@/components/shared/ShineBorder';
import { ParticleThemeTrigger } from "@/components/shared/ParticleThemeTrigger";

const sectors = [
    {
        image: '/images/sectors/shopping-malls.jpg',
        link: '/industries/shopping-malls',
        title: 'Shopping Malls',
        description: 'Transforming retail destinations with real-time visitor insights.'
    },
    {
        image: '/images/sectors/retail.jpg',
        link: '/industries/retail',
        title: 'Retail Stores',
        description: 'The Digital Handshake: Personalized engagement for every shopper.'
    },
    {
        image: '/images/sectors/campus.jpg',
        link: '/industries/college-campuses',
        title: 'Campuses',
        description: 'Smart Campus Concierge: Enhancing the student and faculty experience.'
    },
    {
        image: '/images/sectors/healthcare.jpg',
        link: '/industries/healthcare',
        title: 'Healthcare',
        description: 'Connected Care: Wayfinding and asset tracking for modern facilities.'
    },
    {
        image: '/images/sectors/hospitality.jpg',
        link: '/industries/hospitality',
        title: 'Hospitality',
        description: '5-Star Digital Concierge: Zero-friction guest experiences.'
    },
    {
        image: '/images/sectors/transport.jpg',
        link: '/industries/public-transport',
        title: 'Public Transport',
        description: 'Optimizing terminal ops and passenger flow with AI.'
    },
    {
        image: '/images/sectors/venues.jpg',
        link: '/industries/venues',
        title: 'Venues',
        description: 'Venue OS: Unleashing the power of fan data at scale.'
    }
];

export default function SectorExplorer() {
    return (
        <section className="relative py-24 bg-brand-base overflow-hidden min-h-[800px] flex flex-col items-center justify-center">
            <ParticleThemeTrigger colors={["#FF6B6B", "#FFC145", "#4ECDC4"]} className="absolute inset-0 pointer-events-none" />
            <div className="container mx-auto px-4 z-20 text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block"
                >
                    Vertical Intelligence
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                >
                    Explore the <span className="text-brand-primary">Connected City</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0.5, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-brand-text/60 text-lg max-w-2xl mx-auto"
                >
                    Click and spin to explore how Flow Networks transforms different environments into smart, data-driven ecosystems.
                </motion.p>
            </div>

            <div className="w-full h-[600px] relative z-10">
                <InfiniteMenu items={sectors} />

                {/* Ambient Glows */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-brand-accent2/10 rounded-full blur-[120px] pointer-events-none" />
            </div>

            {/* Decorative Shine Border for the whole section background subtle */}
            <ShineBorder
                className="opacity-10"
                borderWidth={1}
                duration={20}
            />
        </section>
    );
}
