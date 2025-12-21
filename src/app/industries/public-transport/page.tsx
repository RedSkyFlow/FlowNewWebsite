"use client";

import React from "react";
import { TrainFront, Wifi, ShieldCheck, Megaphone, BarChart3, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import AnimatedHeading from "@/components/shared/AnimatedHeading";
import GlassCard from "@/components/shared/GlassCard";
import ScrollAnimatedSection from "@/components/shared/ScrollAnimatedSection";
import { ShineBorder } from "@/components/shared/ShineBorder";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import CallToActionSection from '@/components/sections/CallToActionSection';

const transportFeatures = [
  {
    icon: Wifi,
    title: 'Reliable On-the-Go Connectivity',
    description: 'Provide passengers with a stable and reliable internet connection throughout their journey, turning travel time into productive or entertaining time.'
  },
  {
    icon: ShieldCheck,
    title: 'Certified Safe & Secure',
    description: 'Ensure a safe browsing experience for all passengers with Friendly WiFi certified content filtering, a critical feature for public and family-oriented transport.'
  },
  {
    icon: Megaphone,
    title: 'Passenger Communication Channel',
    description: 'Use the captive portal to deliver real-time service alerts, next-stop information, and promotional messages from your transport authority or brand partners.'
  },
];

export default function PublicTransportPage() {
  return (
    <div className="min-h-screen bg-brand-base text-white overflow-x-hidden">

      {/* --- Hero Section: Full Viewport, Image Background, Bottom-Left Glass Panel --- */}
      <section className="relative w-full h-screen min-h-[800px] flex items-end justify-start overflow-hidden">

        {/* 1. Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/industries/Transport hubs (2).png"
            alt="Modern Public Transport Hub"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 2. Overlays & Gradients */}
        {/* Lighter overlay to let the image shine */}
        <div className="absolute inset-0 bg-brand-base/20 z-10" />
        {/* Gradient for text readability at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-base/90 via-brand-base/40 to-transparent z-10" />

        {/* 3. Content Panel - Bottom Left */}
        <div className="container relative z-20 px-4 pb-20 md:pb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="relative w-full group">
              <ShineBorder variant="primary" className="rounded-3xl" />
              <GlassCard className="p-8 md:p-10 backdrop-blur-xl bg-brand-base/60 border-white/10 shadow-2xl flex flex-col items-start text-left relative z-20">

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6 shadow-glow-primary"
                >
                  <TrainFront className="w-3 h-3" />
                  Public Transit
                </motion.div>

                {/* Headline */}
                <div className="mb-6 w-full">
                  <AnimatedHeading
                    text="Connecting the Journey, Enhancing the Experience"
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-lg text-left"
                  />
                </div>

                {/* Subhead */}
                <p className="text-brand-text/90 text-lg md:text-xl mb-8 leading-relaxed font-light drop-shadow-md">
                  For the modern commuter, the journey is part of the day. Onboard WiFi is no longer a perk; it's an expectation.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <EnhancedButton size="lg" className="rounded-full bg-brand-primary text-brand-base font-bold text-lg h-12 px-8 hover:shadow-[0_0_25px_rgba(20,216,204,0.5)] transition-all">
                    Upgrade Your Fleet
                  </EnhancedButton>
                  <EnhancedButton size="lg" variant="outline" className="rounded-full border-white/30 text-white font-medium text-lg h-12 px-8 hover:bg-white/10">
                    See Case Studies
                  </EnhancedButton>
                </div>

              </GlassCard>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2 text-brand-text/50"
        >
          <span className="text-xs uppercase tracking-[0.2em] vertical-rl rotate-180">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary/50 to-transparent" />
        </motion.div>
      </section>

      {/* --- Intro / Concept Section --- */}
      <section className="py-24 container mx-auto px-4 relative z-20">
        <ScrollAnimatedSection className="prose prose-invert prose-lg mx-auto text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">More Than Just a Ride</h3>
          <p className="text-brand-text/80">
            Providing a fast, reliable, and safe connection is key to improving passenger satisfaction.
            Our solutions are engineered for mobile environments, delivering robust hardware and intelligent software for a consistent connection.
          </p>
        </ScrollAnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {transportFeatures.map((feature, idx) => (
            <ScrollAnimatedSection key={feature.title} delay={idx * 0.1}>
              <GlassCard className="h-full p-8 border-brand-primary/30 bg-brand-primary/5 hover:bg-brand-primary/10 transition-colors">
                <div className="mb-6 inline-block p-3 rounded-full bg-brand-primary/20">
                  <feature.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-sm text-brand-text/70 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </ScrollAnimatedSection>
          ))}
        </div>
      </section>

      {/* --- Operational Intelligence Section --- */}
      <section className="py-24 bg-black/20 relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <ScrollAnimatedSection>
            <GlassCard className="p-8 md:p-12 text-center flex flex-col items-center border-brand-accent2/30 bg-brand-accent2/5">
              <div className="mb-6 inline-block p-4 rounded-full bg-brand-accent2/20">
                <BarChart3 className="w-10 h-10 text-brand-accent2" />
              </div>
              <AnimatedHeading text="Operational Intelligence On the Move" className="text-3xl sm:text-4xl font-bold mb-6 text-white" />
              <p className="mx-auto max-w-3xl text-lg text-brand-text/80 mb-8 leading-relaxed">
                Our platform does more than connect passengers. It provides valuable operational data. Understand passenger counts on specific routes, identify peak travel times, and measure engagement to optimize your service.
              </p>
              <EnhancedButton variant="outline" className="rounded-full border-brand-accent2 text-brand-accent2 hover:bg-brand-accent2 hover:text-white transition-all">
                <Link href="/products/intelligent-wifi/location-intelligence">Explore Passenger Analytics</Link>
              </EnhancedButton>
            </GlassCard>
          </ScrollAnimatedSection>
        </div>
      </section>

      <CallToActionSection
        title="Ready to Upgrade Your Passenger Experience?"
        description="Deliver the reliable, safe, and value-added connectivity that modern commuters expect."
        ctaText="Consult with a Transport Expert"
        ctaLink="/contact"
      />

    </div>
  );
}