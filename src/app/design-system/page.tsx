'use client';

import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { Palette, Type, Sparkles, Component, CaseUpper, MoveUp } from 'lucide-react';

// Import all our corrected and new components
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard'; // Import GlassCard if needed
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import AnimatedAccentBorder from '@/components/shared/AnimatedAccentBorder';
import { AnimatedBorderCard } from '@/components/shared/AnimatedBorderCard'; // Import AnimatedBorderCard
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

      {/* --- CORRECTED: Color Palette --- */}
      <CatalogueSection title="Color Hierarchy" icon={Palette}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {colors.map(color => (
            <div key={color.name} className="flex flex-col space-y-3 perspex-card p-6 text-center">
              <div
                style={{ backgroundColor: `hsl(var(${color.var}))` }}
                className="h-24 w-full rounded-md border border-border/50" 
              />
              <p className="font-bold text-lg">{color.name}</p>
              <p className="text-sm text-accent font-semibold">{color.usage}</p>
              <p className="text-xs text-muted-foreground font-mono">{color.var}</p>
            </div>
          ))}
        </div>
      </CatalogueSection>
      
      {/* --- NEW: Animated Borders & Shimmers --- */}
      <CatalogueSection title="New Animated Effects" icon={Sparkles}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                <h3 className="text-2xl font-bold mb-4">Animated Accent Border</h3>
                <p className="text-muted-foreground mb-6">A configurable component for premium attention-drawing effects. Ideal for primary CTAs and featured content.</p>
                <AnimatedAccentBorder variant="prominent" color="accent" speed="normal">
                    <EnhancedButton variant="secondary" size="lg" className="w-full">
                        Primary CTA with Border
                    </EnhancedButton>
                </AnimatedAccentBorder>
            </div>
            <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Logo Shimmer</h3>
                <p className="text-muted-foreground mb-6">Adds a subtle, premium light reflection to logos and icons.</p>
                <LogoShimmer intensity="standard" speed="normal" color="white" trigger="interval">
                    <div className="text-6xl font-black text-foreground">
                        LOGO
                    </div>
                </LogoShimmer>
            </div>
        </div>
      </CatalogueSection>

      {/* --- NEW: Animated Border Card --- */}
      <CatalogueSection title="Animated Border Card" icon={CaseUpper}> {/* Changed icon to CaseUpper for differentiation */}
        <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Showcasing the `AnimatedBorderCard` component with different color variants.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedBorderCard colorVariant="primary" className="h-48">
            <div className="flex flex-col items-center justify-center h-full">
              <h4 className="text-xl font-bold">Primary Variant</h4>
              <p className="text-muted-foreground text-sm mt-2">Animated border using primary colors.</p>
            </div>
          </AnimatedBorderCard>

          <AnimatedBorderCard colorVariant="secondary" className="h-48">
             <div className="flex flex-col items-center justify-center h-full">
              <h4 className="text-xl font-bold">Secondary Variant</h4>
              <p className="text-muted-foreground text-sm mt-2">Animated border using secondary colors.</p>
            </div>
          </AnimatedBorderCard>

          <AnimatedBorderCard colorVariant="accent" className="h-48">
             <div className="flex flex-col items-center justify-center h-full">
              <h4 className="text-xl font-bold">Accent Variant</h4>
              <p className="text-muted-foreground text-sm mt-2">Animated border using accent colors.</p>
            </div>
          </AnimatedBorderCard>
        </div>
      </CatalogueSection>

      {/* --- CORRECTED: Button & Component Showcase --- */}
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

      {/* --- PRESERVED: Custom Floating Animations --- */}
      <CatalogueSection title="Preserved Custom Animations" icon={Type}>
        <div className="perspex-card p-6 flex flex-col items-center justify-center text-center h-[200px] relative">
          <p className="font-bold text-xl mb-2">Floating Animations</p>
          <MoveUp className="w-8 h-8 text-accent absolute top-4 left-8 animate-float-1" /> {/* Changed icon to MoveUp */}
          <p className="text-xs font-mono mt-1">Your custom `.animate-float-*` classes are preserved.</p>
        </div>
      </CatalogueSection>
    </main>
  );
};

export default DesignSystemPage;