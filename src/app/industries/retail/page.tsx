"use client";

import React from "react";
import { ArrowRight, ShoppingBag, Route, BarChart3, Megaphone, DollarSign, Store, Smartphone, Users, Heart, TrendingUp } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import AnimatedHeading from "@/components/shared/AnimatedHeading";
import GlassCard from "@/components/shared/GlassCard";
import ScrollAnimatedSection from "@/components/shared/ScrollAnimatedSection";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { ShineBorder } from "@/components/shared/ShineBorder";
import CallToActionSection from '@/components/sections/CallToActionSection';

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-brand-base text-white overflow-x-hidden">

      {/* --- Hero Section: Full Viewport, Image Background, Bottom-Left Glass Panel --- */}
      <section className="relative w-full h-screen min-h-[800px] flex items-end justify-start overflow-hidden">

        {/* 1. Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/industries/reatail data.png"
            alt="Retail Analytics and Data"
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
              <ShineBorder variant="secondary" className="rounded-3xl" />
              <GlassCard className="p-8 md:p-10 backdrop-blur-xl bg-brand-base/60 border-white/10 shadow-2xl flex flex-col items-start text-left relative z-20">

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-secondary/30 bg-brand-secondary/10 text-brand-secondary text-xs font-bold uppercase tracking-wider mb-6 shadow-glow-secondary"
                >
                  <ShoppingBag className="w-3 h-3" />
                  Retail Solutions
                </motion.div>

                {/* Headline */}
                <div className="mb-6 w-full">
                  <AnimatedHeading
                    text="How Shops Send You 'Welcome Back!' Messages"
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-lg text-left"
                  />
                </div>

                {/* Subhead */}
                <p className="text-brand-text/90 text-lg md:text-xl mb-8 leading-relaxed font-light drop-shadow-md">
                  Have you ever walked into your favorite store and instantly received a special discount? It's not magic. It's the <span className="text-brand-secondary font-medium">Digital Handshake</span>.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <EnhancedButton size="lg" className="rounded-full bg-brand-secondary text-brand-base font-bold text-lg h-12 px-8 hover:shadow-[0_0_25px_rgba(255,193,69,0.5)] transition-all">
                    See How It Works
                  </EnhancedButton>
                  <EnhancedButton size="lg" variant="outline" className="rounded-full border-white/30 text-white font-medium text-lg h-12 px-8 hover:bg-white/10">
                    Retail Case Studies
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
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-secondary/50 to-transparent" />
        </motion.div>
      </section>

      {/* --- The Story Section (Preserved) --- */}
      <section className="py-24 container mx-auto px-4 max-w-4xl relative z-20">
        <ScrollAnimatedSection className="prose prose-invert prose-lg mx-auto text-center mb-24">
          <h3 className="text-3xl font-bold text-white mb-6">The Magic Message</h3>
          <p className="text-brand-text/80">
            When you connect to the store's free WiFi, you are essentially introducing yourself.
            You are reaching out to the network, and in return, the network recognizes you and says:
            <br /><span className="text-brand-primary font-bold italic">"Yep, Sarah is officially here!"</span>
          </p>
        </ScrollAnimatedSection>

        {/* --- Step-by-Step Visualization --- */}
        <div className="relative">
          {/* Vertical Line for mobile, horizontal for desktop */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 md:w-full md:h-1 bg-brand-text/10 -z-10 md:bg-gradient-to-r md:from-transparent md:via-brand-text/20 md:to-transparent" />

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
            {/* Step 1 */}
            <ScrollAnimatedSection delay={0.1} className="relative pl-16 md:pl-0 md:pt-16 md:text-center">
              <div className="absolute left-0 top-0 md:left-1/2 md:-top-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-brand-base border-2 border-brand-primary flex items-center justify-center z-10 shadow-glow-primary">
                <span className="text-brand-primary font-bold">1</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">You Connect</h4>
              <p className="text-sm text-brand-text/60">You log into the free Guest WiFi. This simple action triggers the entire process.</p>
            </ScrollAnimatedSection>

            {/* Step 2 */}
            <ScrollAnimatedSection delay={0.2} className="relative pl-16 md:pl-0 md:pt-16 md:text-center">
              <div className="absolute left-0 top-0 md:left-1/2 md:-top-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-brand-base border-2 border-brand-primary flex items-center justify-center z-10 shadow-glow-primary">
                <span className="text-brand-primary font-bold">2</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">The Greeter</h4>
              <p className="text-sm text-brand-text/60">Flow Networks verifies your specific device and confirms "Physical Presence".</p>
            </ScrollAnimatedSection>

            {/* Step 3 */}
            <ScrollAnimatedSection delay={0.3} className="relative pl-16 md:pl-0 md:pt-16 md:text-center">
              <div className="absolute left-0 top-0 md:left-1/2 md:-top-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-brand-base border-2 border-brand-secondary flex items-center justify-center z-10 shadow-glow-secondary">
                <span className="text-brand-secondary font-bold">3</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">The Signal</h4>
              <p className="text-sm text-brand-text/60">A secure signal is sent to the messaging platform: "Sarah is near the Shoe Department."</p>
            </ScrollAnimatedSection>

            {/* Step 4 */}
            <ScrollAnimatedSection delay={0.4} className="relative pl-16 md:pl-0 md:pt-16 md:text-center">
              <div className="absolute left-0 top-0 md:left-1/2 md:-top-6 md:-translate-x-1/2 w-12 h-12 rounded-full bg-brand-base border-2 border-brand-accent1 flex items-center justify-center z-10 shadow-glow-accent">
                <span className="text-brand-accent1 font-bold">4</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">The Offer</h4>
              <p className="text-sm text-brand-text/60">You receive a personalized SMS: "Hi Sarah! Show this text for 15% off shoes today!"</p>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* --- Benefits Comparison --- */}
      <section className="py-24 bg-black/20 relative z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimatedSection>
              <GlassCard className="h-full p-8 border-brand-primary/20 bg-brand-primary/5 hover:bg-brand-primary/10 transition-colors">
                <Heart className="w-10 h-10 text-brand-primary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Benefits for You</h3>
                <ul className="space-y-4 text-brand-text/70">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
                    <span>Exclusive discounts relevant to where you are right now.</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
                    <span>A more personalized, VIP shopping experience.</span>
                  </li>
                </ul>
              </GlassCard>
            </ScrollAnimatedSection>

            <ScrollAnimatedSection delay={0.2}>
              <GlassCard className="h-full p-8 border-brand-secondary/20 bg-brand-secondary/5 hover:bg-brand-secondary/10 transition-colors">
                <TrendingUp className="w-10 h-10 text-brand-secondary mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Benefits for the Shop</h3>
                <ul className="space-y-4 text-brand-text/70">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                    <span>Builds true customer loyalty (71% of buyers expect personalization!).</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-2 shrink-0" />
                    <span>Increases basket size by delivering offers at the moment of decision.</span>
                  </li>
                </ul>
              </GlassCard>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      <CallToActionSection
        title="Start Your Digital Transformation"
        description="Connect with customers in real-time and drive revenue with the power of the Digital Handshake."
        ctaText="Book a Demo"
        ctaLink="/contact"
      />

    </div>
  );
}