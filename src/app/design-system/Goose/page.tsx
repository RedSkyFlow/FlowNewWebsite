'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Paintbrush, Type, Palmtree } from 'lucide-react';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import AnimatedBorder from '@/components/shared/AnimatedBorder';
import { cn } from '@/lib/utils';

// Helper component for the showcase
const ShowcaseSection = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
  <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
    <div className="flex items-center gap-4 mb-8">
      <Icon className="w-8 h-8 text-accent" />
      <AnimatedHeading text={title} as="h2" className="text-3xl sm:text-4xl font-bold" />
    </div>
    {children}
  </div>
);

const DesignShowcasePage: NextPage = () => {
  const colors = [
    { name: 'Primary (Teal)', className: 'bg-primary' },
    { name: 'Secondary (Blue)', className: 'bg-secondary' },
    { name: 'Accent (Yellow)', className: 'bg-accent' },
    { name: 'Impact (Orange)', className: 'bg-flow-orange' },
    { name: 'Premium (Gold)', className: 'bg-flow-gold' },
    { name: 'Innovation (Purple)', className: 'bg-flow-purple' },
    { name: 'Foreground', className: 'bg-foreground' },
    { name: 'Background', className: 'bg-background' },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">
        {/* --- Hero Section --- */}
        <div className="text-center pt-32 pb-20 md:pt-40 md:pb-24">
          <div className="container mx-auto px-4 md:px-6">
            <p className="font-semibold text-accent mb-4 text-gradient-animated">Flow Networks Design System</p>
            <AnimatedHeading text="The Visual Language Catalog" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              A comprehensive and interactive showcase of the atomic components, visual effects, and design principles that define our brand's digital expression.
            </motion.p>
          </div>
        </div>

        {/* --- Typography Section --- */}
        <ShowcaseSection title="Typography & Gradients" icon={Type}>
          <GlassCard className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 border-b pb-2">Fonts</h3>
                <h1 className="font-headline text-5xl mb-2">Headline Font (Inter)</h1>
                <p className="font-body text-lg text-muted-foreground">Body Font (Roboto) - The quick brown fox jumps over the lazy dog.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 border-b pb-2">Animated Gradients</h3>
                <p className="text-2xl font-bold text-gradient-animated mb-4">Default Animated Gradient</p>
                 {/* You would define these new gradient utility classes in globals.css */}
                <p className="text-2xl font-bold text-gradient-impact mb-4">Impact Animated Gradient (Orange/Yellow)</p>
                <p className="text-2xl font-bold text-gradient-innovation">Innovation Animated Gradient (Purple/Blue)</p>
              </div>
            </div>
          </GlassCard>
        </ShowcaseSection>
        
        {/* --- Color Palette Section --- */}
        <ShowcaseSection title="Color Palette" icon={Paintbrush}>
          <GlassCard className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {colors.map(color => (
                <div key={color.name} className="text-center">
                  <div className={cn("h-24 w-full rounded-md border-2 border-border", color.className)}></div>
                  <p className="mt-2 text-sm font-body">{color.name}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </ShowcaseSection>

        {/* --- Button Variants Section --- */}
        <ShowcaseSection title="Buttons & Interactions" icon={Palmtree}>
          <GlassCard className="p-8 space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Standard Variants</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <EnhancedButton variant="primary">Primary</EnhancedButton>
                <EnhancedButton variant="secondary">Secondary</EnhancedButton>
                <EnhancedButton variant="outline">Outline</EnhancedButton>
                <EnhancedButton variant="ghost">Ghost</EnhancedButton>
                <EnhancedButton variant="link">Link</EnhancedButton>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Glow & Shimmer Effects</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <EnhancedButton variant="primary" glow>Primary Glow</EnhancedButton>
                <EnhancedButton variant="secondary" glow>Secondary Glow</EnhancedButton>
                 {/* Shimmer effect would need to be added to EnhancedButton component */}
                <EnhancedButton variant="primary" shimmer>Primary Shimmer</EnhancedButton>
              </div>
            </div>
          </GlassCard>
        </ShowcaseSection>

        {/* --- Card & Effects Section --- */}
        <ShowcaseSection title="Cards & Interactive Effects" icon={Sparkles}>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Glass Card Showcase */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold">GlassCard Variants</h3>
              <GlassCard><CardContent className="p-6"><p>Default GlassCard</p></CardContent></GlassCard>
              <GlassCard className="hover-glow-secondary"><CardContent className="p-6"><p>GlassCard with Secondary Hover Glow</p></CardContent></GlassCard>
              <GlassCard className="border-accent/40"><CardContent className="p-6"><p>GlassCard with Static Accent Border</p></CardContent></GlassCard>
            </div>
            
            {/* Perspex Card Showcase */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold">PerspexCard & Animated Borders</h3>
              <Card className="perspex-card"><CardContent className="p-6"><p>Default PerspexCard (Hover me)</p></CardContent></Card>
              
              <AnimatedBorder variant="beam" color="accent">
                <Card className="w-full"><CardContent className="p-6"><p>Card with "Beam" Animated Border</p></CardContent></Card>
              </AnimatedBorder>

              {/* Sparkle Effect would require a specific component or class setup */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-primary rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000 animate-pulse" />
                <Card className="relative perspex-card"><CardContent className="p-6"><p>Card with a simple Pulse/Sparkle effect on hover</p></CardContent></Card>
              </div>
            </div>
          </div>
        </ShowcaseSection>
      </div>
    </div>
  );
};

export default DesignShowcasePage;