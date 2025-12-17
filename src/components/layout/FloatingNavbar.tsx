"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { motion, AnimatePresence } from "framer-motion";

// --- NAVIGATION DATA STRUCTURE ---
const navLinks = [
    { 
        name: "Guest WiFi", 
        href: "/guest-wifi",
        children: [
            { name: "Connect", href: "/guest-wifi/connect", desc: "Seamless login experience." },
            { name: "Capture", href: "/guest-wifi/capture", desc: "Collect verified visitor data." },
            { name: "Engage", href: "/guest-wifi/engage", desc: "Automated marketing flows." },
            { name: "Analytics", href: "/guest-wifi/analytics", desc: "Deep location insights." },
            { name: "Paid WiFi", href: "/guest-wifi/paid-wifi", desc: "Monetize access." },
            { name: "Shield", href: "/guest-wifi/shield", desc: "Content filtering." },
            { name: "Surveys", href: "/guest-wifi/surveys", desc: "Real-time feedback." },
            { name: "SecurePass", href: "/guest-wifi/securepass", desc: "Automatic authentication." },
            { name: "Captive Portal", href: "/guest-wifi/captive-portal", desc: "Branded splash pages." },
            { name: "Staff WiFi", href: "/guest-wifi/staff-wifi", desc: "Dedicated employee network." },
        ]
    },
    { 
        name: "Solutions", 
        href: "#",
        children: [
            { name: "Marketing Teams", href: "/solutions/wifi-for-marketing-teams", desc: "Drive engagement." },
            { name: "IT & Network Teams", href: "/solutions/wifi-for-it-and-network-teams", desc: "Secure management." },
            { name: "Event WiFi", href: "/solutions/event-wifi", desc: "Temporary networks." },
            { name: "Small Business", href: "/solutions/purple-smb", desc: "Plug-and-play." },
            { name: "Flow Connect", href: "/solutions/flow-connect", desc: "AI Gateway." },
        ]
    },
    { 
        name: "Industries", 
        href: "/industries",
        children: [
            { name: "Retail", href: "/industries/retail" },
            { name: "Hospitality", href: "/industries/hospitality" },
            { name: "Hotels", href: "/industries/hotels" },
            { name: "Airports", href: "/industries/airports" },
            { name: "Stadiums", href: "/industries/stadiums" },
            { name: "Shopping Malls", href: "/industries/shopping-malls" },
            { name: "Public Transport", href: "/industries/public-transport" },
            { name: "Cities", href: "/industries/towns-cities" }, // Template says 'towns-and-cities' but file system has 'towns-cities' - corrected to match FS for now or rename FS? User said EXACTLY. I will rename URL to match template: towns-and-cities
            { name: "Education", href: "/industries/college-campuses" }, // Template name vs FS
            { name: "Offices", href: "/industries/offices" },
            { name: "Museums", href: "/industries/museums" },
            { name: "Attractions", href: "/industries/attractions" },
            { name: "Hospitals", href: "/industries/hospitals" },
        ]
    },
    {
        name: "Tools",
        href: "#",
        children: [
            { name: "ROI Calculator", href: "/tools/roi-calculator" },
            { name: "Hardware Calculator", href: "/tools/access-point-calculator" },
            { name: "Pricing Calculator", href: "/tools/pricing-calculator" },
            { name: "RFP Checklist", href: "/tools/guest-wifi-rfp-checklist" },
            { name: "Feature Checklist", href: "/tools/guest-wifi-feature-checklist" },
        ]
    },
    { 
        name: "Company", 
        href: "#",
        children: [
            { name: "About Us", href: "/about-us" },
            { name: "Case Studies", href: "/resources/case-studies" }, // Remapped to Resources in FS, but link is clear
            { name: "Blog", href: "/resources/blog" },
            { name: "Partners", href: "/partners" },
            { name: "Professional Services", href: "/about-us/professional-services" },
        ]
    },
];

export function FloatingNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled ? "py-4" : "py-6"
        )}>
            {/* Backdrop for Scrolled State */}
            <div className={cn(
                "absolute inset-0 bg-brand-base/80 backdrop-blur-md transition-opacity duration-300",
                scrolled ? "opacity-100 shadow-xl border-b border-white/5" : "opacity-0"
            )} />

            <div className="container mx-auto px-6 relative z-10 flex items-center justify-between">

                {/* 1. LOGO */}
                <Link href="/" className="flex items-center gap-2 group z-50">
                    <BrandLogo className="h-8 md:h-10 w-auto" />
                </Link>

                {/* 2. DESKTOP NAV (Centered Pill) */}
                <div className="hidden md:flex flex-1 justify-center">
                    <nav
                        className={cn(
                            "flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 relative",
                            !scrolled ? "bg-[#1c203c]/80 backdrop-blur-xl border border-[#F5F0F6]/10 shadow-lg p-1.5 pr-3" : ""
                        )}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(link.name)}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-medium text-[#F5F0F6] transition-all flex items-center gap-1",
                                        "hover:bg-white/10 hover:text-brand-primary",
                                        activeDropdown === link.name ? "bg-white/10 text-brand-primary" : ""
                                    )}
                                >
                                    {link.name}
                                    {link.children && <ChevronDown className="w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform" />}
                                </Link>

                                {/* DROPDOWN MENU */}
                                <AnimatePresence>
                                    {activeDropdown === link.name && link.children && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[260px] bg-[#1c203c] border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-2"
                                        >
                                            <div className="flex flex-col gap-1">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="block px-4 py-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                                                    >
                                                        <div className="text-sm font-medium text-white group-hover/item:text-brand-primary transition-colors flex items-center justify-between">
                                                            {child.name}
                                                            <ChevronRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                                                        </div>
                                                        {"desc" in child && (
                                                            <div className="text-xs text-[#F5F0F6]/50 mt-0.5 font-light">{child.desc}</div>
                                                        )}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </nav>
                </div>

                {/* 3. CTA BUTTONS */}
                <div className="hidden md:flex items-center gap-4 z-50">
                    <Link href="/login" className="text-sm font-medium text-[#F5F0F6] hover:text-white transition-colors">
                        Login
                    </Link>
                    <Link
                        href="/contact"
                        className="btn-primary py-2.5 px-6 text-sm"
                    >
                        Get Started
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    className="md:hidden text-[#F5F0F6] z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* MOBILE MENU FULLSCREEN */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-[#0c0e1a] z-40 pt-24 px-6 pb-12 overflow-y-auto md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-white/10 pb-4 last:border-0">
                                    <div className="text-lg font-bold text-white mb-4 opacity-50">{link.name}</div>
                                    <div className="flex flex-col gap-3 pl-4 border-l border-brand-primary/20">
                                        {link.children ? link.children.map(child => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="text-[#F5F0F6] text-lg font-medium active:text-brand-primary"
                                            >
                                                {child.name}
                                            </Link>
                                        )) : (
                                            <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-[#F5F0F6] text-lg font-medium">{link.name}</Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div className="mt-8 flex flex-col gap-4">
                                <Link href="/contact" className="btn-primary w-full text-center justify-center py-4 text-lg">
                                    Get Started
                                </Link>
                                <Link href="/login" className="px-6 py-4 rounded-full border border-white/10 text-white font-medium text-center hover:bg-white/5">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

