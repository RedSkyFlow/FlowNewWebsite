"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { BrandLogo } from "@/components/shared/BrandLogo";

const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Solutions", href: "#solutions" },
    { name: "Resources", href: "#resources" },
    { name: "Company", href: "#company" },
    { name: "Pricing", href: "#pricing" },
];

export function FloatingNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={cn(
            "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 transition-all duration-300",
            scrolled ? "bg-brand-base/80 backdrop-blur-md py-4 shadow-xl" : "bg-transparent"
        )}>

            {/* 1. LEFT: LOGO (Base Layer) */}
            <Link href="/" className="flex items-center gap-2 group z-50">
                <BrandLogo className="h-8 md:h-10 w-auto" />
            </Link>

            {/* 2. CENTER: NAV PILL (Floating) */}
            <div className="hidden md:flex flex-1 justify-center">
                <nav
                    className={cn(
                        "flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-300",
                        "bg-[#1c203c]/80 backdrop-blur-xl border border-[#F5F0F6]/10 shadow-lg", // The Pill
                        scrolled ? "bg-brand-base/50" : ""
                    )}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[#F5F0F6] hover:text-brand-primary transition-colors hover:scale-105 transform"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* 3. RIGHT: CTA (Base Layer) */}
            <div className="hidden md:flex items-center gap-4 z-50">
                <Link href="/login" className="text-sm font-medium text-[#F5F0F6] hover:text-white transition-colors">
                    Login
                </Link>
                <Link
                    href="/contact"
                    className="px-6 py-2.5 rounded-full bg-brand-primary text-[#1c203c] font-bold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(20,216,204,0.3)] hover:scale-105"
                >
                    Contact Sales
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-[#F5F0F6] z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Nav Dropdown */}
            {mobileMenuOpen && (
                <div className="absolute top-0 inset-x-0 p-4 transition transform origin-top-right md:hidden">
                    <div className="rounded-2xl ring-1 ring-black ring-opacity-5 bg-[#1c203c] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl pt-20 pb-6 px-6">
                        <div className="flex flex-col gap-6 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-[#F5F0F6] hover:text-brand-primary"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="w-full h-px bg-white/10 my-2" />
                            <Link
                                href="/contact"
                                className="w-full text-center px-6 py-3 rounded-full bg-brand-primary text-[#1c203c] font-bold hover:brightness-110"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
