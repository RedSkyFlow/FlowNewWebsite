"use client";

import React from "react";
import { ArrowRight, ShoppingBag, Route, BarChart3, Megaphone, DollarSign, Store, Smartphone, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import AnimatedHeading from "@/components/shared/AnimatedHeading";
import GlassCard from "@/components/shared/GlassCard";
import { ShineBorder } from "@/components/shared/ShineBorder";
import ScrollAnimatedSection from "@/components/shared/ScrollAnimatedSection";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToActionSection from '@/components/sections/CallToActionSection';
import { StarBorder } from "@/components/shared/StarBorder";

export default function ShoppingMallsPage() {
  return (
    <div className="min-h-screen bg-brand-base overflow-hidden text-white">

      {/* --- Hero Section: Full Viewport, Image Background, Bottom-Left Glass Panel --- */}
      <section className="relative w-full h-screen min-h-[800px] flex items-end justify-start overflow-hidden">

        {/* 1. Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/solutions/capture wifi- CRM data.jpg"
            alt="Shopping Mall Customer Experience"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* 2. Overlays & Gradients */}
        <div className="absolute inset-0 bg-brand-base/20 z-10" />
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
                  <ShoppingBag className="w-3 h-3" />
                  Retail Destinations
                </motion.div>

                {/* Headline */}
                <div className="mb-6 w-full">
                  <AnimatedHeading
                    text="Reimagining the Mall as a Data-Driven Destination"
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-lg text-left"
                  />
                </div>

                {/* Subhead */}
                <p className="text-brand-text/90 text-lg md:text-xl mb-8 leading-relaxed font-light drop-shadow-md">
                  Transform your property from a collection of stores into a <span className="text-brand-primary font-medium">Connected Experience</span>.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center">
                  <StarBorder
                    as="button"
                    color="cyan"
                    speed="4s"
                    className="rounded-full w-full sm:w-auto"
                  >
                    <div className="flex items-center gap-2 text-brand-primary font-bold uppercase tracking-wider text-sm">
                      Modernize Your Mall
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </StarBorder>

                  <EnhancedButton size="lg" variant="outline" className="rounded-full border-white/30 text-white font-medium text-lg h-12 px-8 hover:bg-white/10 group">
                    View Platform Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

      {/* --- Core Features Grid --- */}
      <section className="relative z-20 py-24 bg-brand-base">
        <div className="container mx-auto px-4">
          <ScrollAnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">The Operator's Advantage</span>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">From Landlord to Experience Curator</h3>
            <p className="text-brand-text/80 text-lg">
              The modern mall is an entertainment destination. Our platform provides the central intelligence layer to understand your shoppers as a single, cohesive audience.
            </p>
          </ScrollAnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimatedSection delay={0.1}>
              <div className="relative h-full group">
                <ShineBorder variant="primary" className="rounded-3xl" />
                <GlassCard className="p-8 h-full border-brand-primary/30 bg-brand-primary/5 hover:bg-brand-primary/10 transition-colors relative z-20">
                  <div className="p-4 rounded-2xl bg-brand-primary/20 w-fit mb-6">
                    <Route className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Journey Analytics</h4>
                  <p className="text-base text-brand-text/70 leading-relaxed">
                    Understand popular zones and common paths. Optimize rent based on actual footfall data, not just square footage.
                  </p>
                </GlassCard>
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection delay={0.2}>
              <div className="relative h-full group">
                <ShineBorder variant="accent" className="rounded-3xl" />
                <GlassCard className="p-8 h-full border-brand-accent2/30 bg-brand-accent2/5 hover:bg-brand-accent2/10 transition-colors relative z-20">
                  <div className="p-4 rounded-2xl bg-brand-accent2/20 w-fit mb-6">
                    <Megaphone className="w-8 h-8 text-brand-accent2" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Mall-Wide Marketing</h4>
                  <p className="text-base text-brand-text/70 leading-relaxed">
                    Send event notifications ("Fashion Show in 5 mins") to every connected device in the building.
                  </p>
                </GlassCard>
              </div>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection delay={0.3}>
              <div className="relative h-full group">
                <ShineBorder variant="secondary" className="rounded-3xl" />
                <GlassCard className="p-8 h-full border-brand-secondary/30 bg-brand-secondary/5 hover:bg-brand-secondary/10 transition-colors relative z-20">
                  <div className="p-4 rounded-2xl bg-brand-secondary/20 w-fit mb-6">
                    <DollarSign className="w-8 h-8 text-brand-secondary" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Tenant Success</h4>
                  <p className="text-base text-brand-text/70 leading-relaxed">
                    Give tenants access to traffic data outside their store. Prove the value of your location with hard numbers.
                  </p>
                </GlassCard>
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </section>

      {/* --- Role-Based Experience (Detailed Tabs) --- */}
      <section className="py-24 bg-gradient-to-b from-brand-base to-brand-base/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Unified Platform</h2>
            <p className="text-brand-text/60 text-lg max-w-2xl mx-auto">See how Venue OS serves both the Shopper and the Tenant in real-time.</p>
          </div>

          <Tabs defaultValue="shopper" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white/5 border border-white/10 rounded-full p-1.5 h-auto">
                <TabsTrigger value="shopper" className="rounded-full px-8 py-3 text-base data-[state=active]:bg-brand-primary data-[state=active]:text-brand-base transition-all">The Shopper</TabsTrigger>
                <TabsTrigger value="tenant" className="rounded-full px-8 py-3 text-base data-[state=active]:bg-brand-accent2 transition-all">The Tenant</TabsTrigger>
              </TabsList>
            </div>

            {/* Shopper Content */}
            <TabsContent value="shopper" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary font-bold shadow-glow-primary">1</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Seamless Auto-Login</h4>
                      <p className="text-brand-text/70 leading-relaxed">Shoppers connect once. As they move from floor to floor, or even between your properties, they stay connected instantly.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary font-bold shadow-glow-secondary">2</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Smart Offers</h4>
                      <p className="text-brand-text/70 leading-relaxed">"Lunch time? Get 10% off at the Food Court." Context-aware notifications drive spend precisely when it matters.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-full bg-brand-accent2/20 flex items-center justify-center text-brand-accent2 font-bold shadow-glow-accent">3</div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Digital Wayfinding</h4>
                      <p className="text-brand-text/70 leading-relaxed">Help guests find their car or that specific store with blue-dot navigation directly in their browser.</p>
                    </div>
                  </div>
                </div>

                {/* Mock UI - Phone */}
                <div className="relative mx-auto lg:ml-auto w-[320px] h-[640px] bg-black rounded-[45px] border-8 border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                  <div className="absolute inset-0 bg-white flex flex-col">
                    <div className="h-8 bg-black w-full" />
                    <div className="bg-brand-primary p-6 rounded-b-[30px] shadow-lg relative z-10">
                      <div className="text-brand-base font-extrabold text-xl mb-1">WESTFIELD APP</div>
                      <div className="text-brand-base/80 text-sm">Welcome back, Sarah!</div>
                    </div>
                    <div className="flex-1 bg-gray-50 relative overflow-hidden">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-100 rounded-full blur-xl opacity-50 animate-pulse" />
                      <div className="grid grid-cols-4 gap-4 p-4 opacity-10">
                        {[...Array(12)].map((_, i) => <div key={i} className="bg-gray-300 h-16 rounded-md" />)}
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-4 h-4 bg-brand-accent2 rounded-full shadow-[0_0_0_8px_rgba(4,150,255,0.2)] animate-pulse" />
                      </div>
                    </div>
                    <div className="bg-white p-5 rounded-t-[30px] shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
                      <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-4" />
                      <div className="flex gap-4 items-center mb-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center font-bold text-brand-base text-lg">N</div>
                        <div>
                          <div className="font-bold text-gray-800">Nike Store</div>
                          <div className="text-xs text-gray-500">2nd Floor • 2 min walk</div>
                        </div>
                      </div>
                      <div className="w-full py-3 bg-brand-base text-white text-center rounded-xl font-bold text-sm">Start Navigation</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Tenant Content */}
            <TabsContent value="tenant" className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 relative aspect-video group">
                  <ShineBorder variant="luxury" className="rounded-xl" />
                  <GlassCard className="relative aspect-video bg-[#0c0e1a]/80 rounded-xl overflow-hidden border-white/10 p-6 flex flex-col shadow-2xl z-20">
                    {/* Mock Dashboard Header */}
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                      <div className="text-sm font-bold text-white tracking-wide">TENANT PORTAL</div>
                      <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold">Live Data</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-xs text-gray-400 mb-1">Pass-by Traffic</div>
                        <div className="text-2xl font-bold text-white">12,408</div>
                      </div>
                      <div className="bg-white/5 p-4 rounded-lg">
                        <div className="text-xs text-gray-400 mb-1">Store Capture Rate</div>
                        <div className="text-2xl font-bold text-brand-secondary">8.4%</div>
                      </div>
                    </div>

                    {/* Graph */}
                    <div className="flex-1 flex items-end justify-between gap-2 px-1">
                      {[30, 45, 35, 60, 80, 55, 70, 90, 65, 50, 40, 60].map((h, i) => (
                        <div
                          key={i}
                          className={cn(
                            "w-full bg-brand-primary/20 hover:bg-brand-primary/40 transition-colors rounded-t-sm relative group",
                            h === 30 && "h-[30%]",
                            h === 45 && "h-[45%]",
                            h === 35 && "h-[35%]",
                            h === 60 && "h-[60%]",
                            h === 80 && "h-[80%]",
                            h === 55 && "h-[55%]",
                            h === 70 && "h-[70%]",
                            h === 90 && "h-[90%]",
                            h === 65 && "h-[65%]",
                            h === 50 && "h-[50%]",
                            h === 40 && "h-[40%]"
                          )}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">{h}%</div>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>


                <div className="order-1 lg:order-2 space-y-8">
                  <h3 className="text-3xl font-bold text-white">Prove Your Value to Tenants</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-brand-accent2/10 text-brand-accent2 ring-1 ring-brand-accent2/30"><Store size={24} /></div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Footfall Attribution</h4>
                        <p className="text-brand-text/70">Show tenants exactly how many window shoppers converted into store visitors. Justify rent with hard data.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-brand-secondary/10 text-brand-secondary ring-1 ring-brand-secondary/30"><Users size={24} /></div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Demographic Insights</h4>
                        <p className="text-brand-text/70">"Your peak hour is 2PM. Your primary demographic is Females 25-34." Help them staff and stock more effectively.</p>
                      </div>
                    </div>
                  </div>
                  <EnhancedButton variant="outline" className="mt-4">
                    Download Sample Tenant Report
                  </EnhancedButton>
                </div>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>

      <CallToActionSection
        title="Ready to Build a Smarter Mall?"
        description="Transform your property into an intelligent retail destination. Contact us to learn how our integrated solutions can boost shopper engagement and empower your tenants."
        ctaText="Consult with an Expert"
        ctaLink="/contact?subject=MallSolution"
      />
    </div>
  );
}