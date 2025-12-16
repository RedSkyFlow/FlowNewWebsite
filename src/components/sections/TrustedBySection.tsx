"use client";

import React from "react";
import { Command, Feather, Figma, Framer, Github, Globe, Hexagon, Layers, Slack, Trello, Triangle } from "lucide-react";

export function TrustedBySection() {
    const logos = [
        { name: "Global Venues", icon: Globe },
        { name: "TechCorp", icon: Hexagon },
        { name: "LayerStack", icon: Layers },
        { name: "Framer", icon: Framer },
        { name: "Feather Dev", icon: Feather },
        { name: "Command +", icon: Command },
    ];

    return (
        <section className="w-full py-12 border-b border-white/5 relative z-20">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-medium text-[#F5F0F6]/40 mb-8 uppercase tracking-widest">
                    Trusted by Innovative Spaces Worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="group flex items-center gap-2 text-[#F5F0F6]/40 hover:text-brand-primary transition-colors duration-300 cursor-pointer"
                        >
                            <logo.icon className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" />
                            <span className="text-lg font-bold hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-2 group-hover:ml-0">
                                {logo.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
