'use client';

import React from 'react';
import OrbitCarousel from "@/components/shared/OrbitCarousel";
import { Wifi, Shield, Zap, BarChart3, Users } from "lucide-react";

const HomeHeroCarousel = () => {
    const carouselItems = [
        {
            id: "connect",
            title: "Flow Connect",
            description: "Seamless, secure WiFi onboarding that transforms guest access into a powerful engagement channel.",
            icon: Wifi,
        },
        {
            id: "capture",
            title: "Flow Capture",
            description: "Capture verified first-party data and build rich customer profiles compliant with GDPR/CCPA.",
            icon: Users,
        },
        {
            id: "engage",
            title: "Flow Engage",
            description: "Trigger real-time, location-based marketing campaigns based on guest behavior and demographics.",
            icon: Zap,
        },
        {
            id: "sense",
            title: "Flow Sense",
            description: "Location analytics and heatmaps to understand foot traffic and optimize venue operations.",
            icon: BarChart3,
        },
    ];

    return (
        <OrbitCarousel items={carouselItems} />
    );
};

export default HomeHeroCarousel;
