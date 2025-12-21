'use client';

import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { Palette, Type, Sparkles, Component, CaseUpper, MoveUp } from 'lucide-react';

// Import all our corrected and new components
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import { ShineBorder } from '@/components/shared/ShineBorder';
import { StarBorder } from '@/components/shared/StarBorder';
import LogoShimmer from '@/components/shared/LogoShimmer';


// Helper component for this page
const CatalogueSection = ({ title, icon: Icon, children }: { title: string, icon: React.ElementType, children: React.ReactNode }) => (
  <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 border-b border-border/30">
    <div className="flex items-center gap-4 mb-10">
      <div className="p-3 bg-primary/10 rounded-lg border border-primary/20"><Icon className="w-8 h-8 text-accent" /></div>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
    </div>
    <ScrollAnimatedSection as="div">{children}</ScrollAnimatedSection>
  </div>
);

const DesignSystemPage: NextPage = () => {
  const colors = [
    { name: 'Primary (Teal)', var: '--primary', hsl: '179 100% 25%', usage: 'Foundation, Borders' },
    { name: 'Secondary (Blue)', var: '--secondary', hsl: '211 98% 48%', usage: 'Primary CTAs' },
    { name: 'Accent (Yellow)', var: '--accent', hsl: '45 100% 59%', usage: 'Highlights, Icons' },
  ];

  return (
    <main className="bg-background text-foreground relative isolate overflow-hidden flex-1">
      <ParticleBackground className="absolute inset-0 -z-10" />

      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center container mx-auto px-4 md:px-6">
        <AnimatedHeading text="Flow Networks Unified Design System" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
        <motion.p
          className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
        >
          A complete showcase of our corrected, merged, and enhanced brand assets.
        </motion.p>
      </div>

      {/* --- Color Palette --- */}
      <CatalogueSection title="Color Hierarchy" icon={Palette}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {colors.map(color => (
            <div key={color.name} className="flex flex-col space-y-3 perspex-card p-6 text-center">
              <div
                className={`h-24 w-full rounded-md border border-border/50 color-swatch-${color.var.replace('--', '')}`}
              />
              <p className="font-bold text-lg">{color.name}</p>
              <p className="text-sm text-accent font-semibold">{color.usage}</p>
              <p className="text-xs text-muted-foreground font-mono">{color.var}</p>
            </div>
          ))}
        </div>
      </CatalogueSection>

      {/* --- New Animated Effects --- */}
      <CatalogueSection title="Premium Borders" icon={Sparkles}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Shine Border (Premium)</h3>
            <p className="text-muted-foreground mb-6">Our new high-performance "laser" border with multiple brand variants. Replaces AnimatedAccentBorder.</p>
            <div className="flex flex-col gap-4">
              <div className="relative group p-1">
                <ShineBorder variant="primary" className="rounded-xl" />
                <EnhancedButton variant="outline" size="lg" className="w-full bg-brand-base/50 backdrop-blur-sm relative z-20">
                  Primary Shine
                </EnhancedButton>
              </div>
              <div className="relative group p-1">
                <ShineBorder variant="luxury" className="rounded-xl" />
                <EnhancedButton variant="outline" size="lg" className="w-full bg-brand-base/50 backdrop-blur-sm relative z-20">
                  Luxury Shine
                </EnhancedButton>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Star Border (CTA)</h3>
            <p className="text-muted-foreground mb-6">Subtle rotating sparkle effect for Call-to-Action buttons and priority widgets.</p>
            <div className="flex justify-center">
              <StarBorder active={true} className="rounded-full">
                <EnhancedButton className="rounded-full px-8 py-4 text-lg">
                  Sparkling Action
                </EnhancedButton>
              </StarBorder>
            </div>
          </div>
        </div>
      </CatalogueSection>

      {/* --- Integrated Effects --- */}
      <CatalogueSection title="Integrated Effects" icon={CaseUpper}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Shine-Wrapped Content</h3>
            <div className="relative group w-full max-w-sm">
              <ShineBorder variant="accent" className="rounded-xl" />
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 text-center relative z-20 h-40 flex items-center justify-center">
                <p className="text-muted-foreground">Direct ShineBorder wrapper around nested children.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Logo Shimmer</h3>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 w-full max-w-sm flex items-center justify-center h-40">
              <LogoShimmer intensity="standard" speed="normal" color="white" trigger="interval">
                <div className="text-4xl font-black text-foreground">LOGO</div>
              </LogoShimmer>
            </div>
          </div>
        </div>
      </CatalogueSection>

      {/* --- Buttons & Components --- */}
      <CatalogueSection title="Buttons & Components" icon={Component}>
        <h3 className="text-2xl font-bold mb-6 text-center">Enhanced Buttons</h3>
        <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Using the `EnhancedButton` component with the corrected color hierarchy. Primary CTAs are Blue, Secondary are Yellow.
        </p>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <EnhancedButton variant="secondary" size="lg">Primary CTA</EnhancedButton>
          <EnhancedButton variant="outline" size="lg">Secondary CTA</EnhancedButton>
          <EnhancedButton variant="tertiary">Tertiary Action</EnhancedButton>
          <EnhancedButton variant="destructive">Destructive</EnhancedButton>
          <EnhancedButton variant="default" shimmer>Shimmer Effect</EnhancedButton>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="space-y-4">
            <h4 className="font-bold text-accent">Corrected Glass Card</h4>
            <div className="glass-card p-8 h-48 flex items-center justify-center">
              <p>Uses `.glass-card` with correct hover glow.</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-accent">Preserved Perspex Card</h4>
            <div className="perspex-card p-8 h-48 flex items-center justify-center group">
              <p>Your existing `.perspex-card` styles.</p>
            </div>
          </div>
        </div>
      </CatalogueSection>

      {/* --- Preserved Assets --- */}
      <CatalogueSection title="Typography & Motion" icon={Type}>
        <div className="perspex-card p-6 flex flex-col items-center justify-center text-center h-[200px] relative">
          <p className="font-bold text-xl mb-2">Floating Animations</p>
          <MoveUp className="w-8 h-8 text-accent absolute top-4 left-8 animate-float-1" />
          <p className="text-xs font-mono mt-1">Your custom `.animate-float-*` classes are preserved.</p>
        </div>
      </CatalogueSection>
    </main>
  );
};

export default DesignSystemPage;