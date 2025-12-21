"use client";

import React from "react";
import { GraduationCap, MapPin, Calendar, ShieldCheck, Users, Search, BookOpen, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

import AnimatedHeading from "@/components/shared/AnimatedHeading";
import GlassCard from "@/components/shared/GlassCard";
import ScrollAnimatedSection from "@/components/shared/ScrollAnimatedSection";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { ShineBorder } from "@/components/shared/ShineBorder";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToActionSection from '@/components/sections/CallToActionSection';

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-brand-base overflow-hidden text-white">

      {/* --- Hero Section: Full Viewport, Image Background, Bottom-Left Glass Panel --- */}
      <section className="relative w-full h-screen min-h-[800px] flex items-end justify-start overflow-hidden">

        {/* 1. Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/industries/campus wifi.png"
            alt="Smart Campus Connectivity"
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
              <ShineBorder variant="accent" className="rounded-3xl" />
              <GlassCard className="p-8 md:p-10 backdrop-blur-xl bg-brand-base/60 border-white/10 shadow-2xl flex flex-col items-start text-left relative z-20">

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent2/30 bg-brand-accent2/10 text-brand-accent2 text-xs font-bold uppercase tracking-wider mb-6 shadow-glow-accent"
                >
                  <GraduationCap className="w-3 h-3" />
                  Higher Education
                </motion.div>

                {/* Headline */}
                <div className="mb-6 w-full">
                  <AnimatedHeading
                    text="Transform Your Campus into a Smart Community"
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-lg text-left"
                  />
                </div>

                {/* Subhead */}
                <p className="text-brand-text/90 text-lg md:text-xl mb-8 leading-relaxed font-light drop-shadow-md">
                  Your school's WiFi is about to get a superpower. Meet the <span className="text-brand-accent2 font-medium">Smart Campus Concierge</span>.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <EnhancedButton size="lg" className="rounded-full bg-brand-accent2 text-white font-bold text-lg h-12 px-8 hover:shadow-[0_0_25px_rgba(4,150,255,0.5)] transition-all">
                    Explore the Tech
                  </EnhancedButton>
                  <EnhancedButton size="lg" variant="outline" className="rounded-full border-white/30 text-white font-medium text-lg h-12 px-8 hover:bg-white/10">
                    Campus Demo
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
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent2/50 to-transparent" />
        </motion.div>
      </section>

      {/* --- The Concept Section --- */}
      <section className="py-24 container mx-auto px-4 max-w-4xl relative z-20">
        <ScrollAnimatedSection className="prose prose-invert prose-lg mx-auto text-center mb-16">
          <h3 className="text-3xl font-bold text-white mb-6">More Than Just Connectivity</h3>
          <p className="text-brand-text/80">
            Think of your current WiFi as a key that only unlocks one door: the internet.
            Now imagine upgrading that key into an intelligent assistant that knows who you are, understands you're on campus, and helps you navigate your day.
          </p>
        </ScrollAnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <ScrollAnimatedSection>
            <GlassCard className="p-8 border-brand-accent2/30 bg-brand-accent2/5">
              <ShieldCheck className="w-10 h-10 text-brand-accent2 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">The Magic Key: Physical Presence</h4>
              <p className="text-sm text-brand-text/70">
                Using <b>Passpoint</b> technology, securely logging into the campus WiFi becomes the authentication trigger. It proves you are physically on site, unlocking exclusive, hyper-local tools.
              </p>
            </GlassCard>
          </ScrollAnimatedSection>
          <ScrollAnimatedSection delay={0.2}>
            <GlassCard className="p-8 border-brand-primary/30 bg-brand-primary/5">
              <Users className="w-10 h-10 text-brand-primary mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Role-Based AI</h4>
              <p className="text-sm text-brand-text/70">
                The AI Concierge knows if you are a Student, Faculty, or Visitor, and adapts its interface instantly to serve your specific needs.
              </p>
            </GlassCard>
          </ScrollAnimatedSection>
        </div>
      </section>

      {/* --- Role-Based Demo (Tabs) --- */}
      <section className="py-24 bg-black/20 relative z-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">A Day at Northwood High</h2>
            <p className="text-brand-text/60">Selected a persona to see how the AI Concierge helps.</p>
          </div>

          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-white/5 border border-white/10 rounded-full p-2 mb-12">
              <TabsTrigger value="student" className="rounded-full data-[state=active]:bg-brand-accent2">Student</TabsTrigger>
              <TabsTrigger value="faculty" className="rounded-full data-[state=active]:bg-brand-accent2">Faculty</TabsTrigger>
              <TabsTrigger value="staff" className="rounded-full data-[state=active]:bg-brand-accent2">Staff</TabsTrigger>
              <TabsTrigger value="visitor" className="rounded-full data-[state=active]:bg-brand-accent2">Visitor</TabsTrigger>
            </TabsList>

            {/* Student Content */}
            <TabsContent value="student">
              <div className="grid md:grid-cols-3 gap-6">
                <GlassCard className="p-6">
                  <MapPin className="w-8 h-8 text-brand-primary mb-4" />
                  <div className="font-bold text-white mb-2">Wayfinding</div>
                  <p className="text-xs text-brand-text/60">"Where is my new science lab?"</p>
                  <div className="mt-4 p-3 bg-white/5 rounded text-xs text-brand-text/90 italic">
                    "Room 304, Building B. Take the east stairwell."
                  </div>
                </GlassCard>
                <GlassCard className="p-6">
                  <Search className="w-8 h-8 text-brand-secondary mb-4" />
                  <div className="font-bold text-white mb-2">Resources</div>
                  <p className="text-xs text-brand-text/60">"Is study room 4 free?"</p>
                  <div className="mt-4 p-3 bg-white/5 rounded text-xs text-brand-text/90 italic">
                    "Yes, I've booked it for you until 2 PM."
                  </div>
                </GlassCard>
                <GlassCard className="p-6">
                  <Calendar className="w-8 h-8 text-brand-accent2 mb-4" />
                  <div className="font-bold text-white mb-2">Schedule</div>
                  <p className="text-xs text-brand-text/60">"When is the football game?"</p>
                  <div className="mt-4 p-3 bg-white/5 rounded text-xs text-brand-text/90 italic">
                    "Friday at 7 PM vs. The Tigers."
                  </div>
                </GlassCard>
              </div>
            </TabsContent>

            {/* Faculty Content */}
            <TabsContent value="faculty">
              <div className="grid md:grid-cols-3 gap-6">
                <GlassCard className="p-6">
                  <BookOpen className="w-8 h-8 text-brand-primary mb-4" />
                  <div className="font-bold text-white mb-2">Classroom Prep</div>
                  <p className="text-xs text-brand-text/60">"Is the smartboard working in Room 201?"</p>
                  <div className="mt-4 p-3 bg-white/5 rounded text-xs text-brand-text/90 italic">
                    "All systems green in Room 201."
                  </div>
                </GlassCard>
                <GlassCard className="p-6">
                  <AlertTriangle className="w-8 h-8 text-brand-accent1 mb-4" />
                  <div className="font-bold text-white mb-2">Support Ticket</div>
                  <p className="text-xs text-brand-text/60">"Projector bulb is dim."</p>
                  <div className="mt-4 p-3 bg-white/5 rounded text-xs text-brand-text/90 italic">
                    "[Ticket #402] logged with IT."
                  </div>
                </GlassCard>
                <GlassCard className="p-6">
                  <Search className="w-8 h-8 text-brand-secondary mb-4" />
                  <div className="font-bold text-white mb-2">Research Asistant</div>
                  <p className="text-xs text-brand-text/60">"Find sources for Roman Aqueducts paper."</p>
                  <div className="mt-4 p-3 bg-white/5 rounded text-xs text-brand-text/90 italic">
                    "Found 3 approved databases and 2 library books."
                  </div>
                </GlassCard>
              </div>
            </TabsContent>

            {/* Staff Content */}
            <TabsContent value="staff">
              <div className="bg-[#1a1f3c] border border-brand-accent1/30 p-8 rounded-2xl flex items-center gap-8">
                <div className="shrink-0 w-16 h-16 rounded-full bg-brand-accent1/20 flex items-center justify-center text-brand-accent1">
                  <AlertTriangle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Maintenance Alert</h4>
                  <p className="text-brand-text/70 mb-4">
                    "Water leak detected in the Gym."
                  </p>
                  <div className="p-4 bg-black/40 rounded border border-white/10 font-mono text-xs text-brand-primary">
                    AI ACTION: Retrieved building schematics.
                    <br />&gt; Located nearest shut-off valve: Hallway B, Panel 4.
                    <br />&gt; Directed Dave (Maintenance) to location.
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Visitor Content */}
            <TabsContent value="visitor">
              <div className="grid md:grid-cols-2 gap-6">
                <GlassCard className="p-6">
                  <Users className="w-8 h-8 text-brand-primary mb-4" />
                  <div className="font-bold text-white mb-2">Visiting Parent</div>
                  <p className="text-xs text-brand-text/60">Connects to Guest WiFi...</p>
                  <div className="mt-4 p-3 bg-white/5 rounded text-xs text-brand-text/90 italic">
                    "Welcome! Here is a map to the Main Office and the PTA meeting schedule."
                  </div>
                </GlassCard>
                <GlassCard className="p-6">
                  <Users className="w-8 h-8 text-brand-accent2 mb-4" />
                  <div className="font-bold text-white mb-2">Visiting Team</div>
                  <p className="text-xs text-brand-text/60">Connects to Guest WiFi...</p>
                  <div className="mt-4 p-3 bg-white/5 rounded text-xs text-brand-text/90 italic">
                    "Welcome! Locker rooms are in the East Wing. Concession stands are open."
                  </div>
                </GlassCard>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>

      <CallToActionSection
        title="Upgrade Your Campus Experience"
        description="Deploy a secure, intelligent network that serves every member of your educational community."
        ctaText="Schedule a Consultation"
        ctaLink="/contact"
      />

    </div>
  );
}