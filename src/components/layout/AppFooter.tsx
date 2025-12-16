"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

export default function AppFooter() {
  return (
    <footer className="relative bg-[#1c203c] pt-32 pb-12 overflow-hidden">

      {/* 1. GRADIENT MESH BANNER (CTA) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFC145]/50 to-transparent" />
      <div className="container mx-auto px-4 relative z-10 mb-20">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-24 text-center group">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-accent2/20 to-[#1c203c] opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-[url('/Images/global/grid.svg')] opacity-20" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Ready to Upgrade Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14D8CC] to-[#0496FF]">Venue Operating System?</span>
            </h2>
            <p className="text-lg text-[#F5F0F6]/70 mb-10">
              Join the 20,000+ venues using Flow Networks to verify presence, capture data, and personalize the guest journey.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#FFC145] text-[#1c203c] font-bold text-lg hover:shadow-[0_0_30px_rgba(255,193,69,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-2"
              >
                Get Started Now <ArrowRight size={20} />
              </Link>
              <Link
                href="/demos"
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-md"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER LINKS */}
      <div className="container mx-auto px-4 border-t border-white/5 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <BrandLogo className="h-10 w-auto" />
            </Link>
            <p className="text-[#F5F0F6]/50 mb-8 max-w-sm leading-relaxed">
              We don't replace the human connection; we give it superpowers. The comprehensive AI Gateway for intelligent spaces.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
              <SocialLink href="#" icon={<Github size={20} />} />
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Platform</h4>
            <ul className="space-y-4">
              <FooterLink href="/purple-wifi">Purple WiFi</FooterLink>
              <FooterLink href="/flow-connect">Flow Connect</FooterLink>
              <FooterLink href="/analytics">Analytics</FooterLink>
              <FooterLink href="/integrations">Integrations</FooterLink>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Solutions</h4>
            <ul className="space-y-4">
              <FooterLink href="/retail">Retail</FooterLink>
              <FooterLink href="/hospitality">Hospitality</FooterLink>
              <FooterLink href="/venues">Large Venues</FooterLink>
              <FooterLink href="/education">Education</FooterLink>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/partners">Partners</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Legal</h4>
            <ul className="space-y-4">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/security">Security</FooterLink>
              <FooterLink href="/gdpr">GDPR</FooterLink>
            </ul>
          </div>
        </div>

        {/* 3. COPYRIGHT */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#F5F0F6]/30">
          <p>© {new Date().getFullYear()} Flow Networks. All rights reserved.</p>
          <p>Designed for the Future.</p>
        </div>
      </div>
    </footer>
  );
}

// Helper Components
const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#FFC145] hover:text-[#1c203c] transition-all duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <Link
      href={href}
      className="text-[#F5F0F6]/60 hover:text-[#14D8CC] transition-colors"
    >
      {children}
    </Link>
  </li>
);