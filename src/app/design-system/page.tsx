// src/app/design-system/page.tsx
'use client';

import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { Palette, Type, Component, Sparkles, Layers, PaintBucket, MousePointerClick, ToggleLeft, TextCursorInput } from 'lucide-react';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AnimatedBorderCard } from '@/components/shared/AnimatedBorderCard';

const CatalogueSection = ({ title, icon: Icon, children, className }: { title: string, icon: React.ElementType, children: React.ReactNode, className?: string }) => (
  <ScrollAnimatedSection as="section" className="py-16 md:py-24 border-b border-border/30">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-primary/10 rounded-lg border border-primary/20"><Icon className="w-8 h-8 text-accent" /></div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      </div>
      <div className={className}>
        {children}
      </div>
    </div>
  </ScrollAnimatedSection>
);

const DesignSystemPage: NextPage = () => {
  const brandColors = [
    { name: 'Primary (Teal)', var: '--primary' }, { name: 'Secondary (Blue)', var: '--secondary' },
    { name: 'Accent (Gold)', var: '--accent' }, { name: 'Impact (Orange)', var: '--impact' },
    { name: 'Foreground', var: '--foreground' }, { name: 'Background', var: '--background' },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      
      <div className="relative z-10">
        <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-center container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          >
            <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[hsl(var(--primary))] to-[hsl(var(--secondary))] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </motion.div>
          <AnimatedHeading text="Visual & Effects Sandbox" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            A creative and technical showcase of the Flow Networks Design System. This is our live reference for building a world-class, intelligent digital experience.
          </motion.p>
        </div>

        <CatalogueSection title="Color Palette" icon={Palette}>
          <div className="perspex-card p-8 group">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {brandColors.map(color => (
                <motion.div 
                  key={color.name} 
                  className="flex flex-col items-center text-center space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div style={{ backgroundColor: `hsl(var(${color.var}))` }} className="w-full h-24 rounded-md border border-border/50 transition-transform duration-300 group-hover:scale-105"></div>
                  <p className="font-semibold text-sm">{color.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </CatalogueSection>

        <CatalogueSection title="Typography" icon={Type} className="font-body">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="perspex-card p-8 md:p-10">
                    <h3 className="text-2xl font-headline font-bold mb-4">Unified Typography <span className="text-accent text-sm">(Inter)</span></h3>
                    <p className="text-xs text-muted-foreground mb-6">`font-headline` used for all text.</p>
                    <h1 className="text-4xl font-headline font-extrabold mb-2">Heading 1</h1>
                    <h2 className="text-3xl font-headline font-bold mb-2">Heading 2</h2>
                    <p className="font-headline text-lg">Body copy using Inter. The quick brown fox jumps over the lazy dog. This provides a clean, consistent, and modern feel throughout the entire user interface.</p>
                </div>
                 <div className="perspex-card p-8 md:p-10">
                    <h3 className="text-2xl font-headline font-bold mb-4">Contrasting Typography <span className="text-accent text-sm">(Inter & Roboto)</span></h3>
                    <p className="text-xs text-muted-foreground mb-6">`font-headline` for headers, `font-body` for paragraphs.</p>
                    <h1 className="text-4xl font-headline font-extrabold mb-2">Heading 1</h1>
                    <h2 className="text-3xl font-headline font-bold mb-2">Heading 2</h2>
                    <p className="font-body text-lg">Body copy using Roboto. The quick brown fox jumps over the lazy dog. This creates a subtle distinction between headings and readable content.</p>
                </div>
            </div>
        </CatalogueSection>
        
        <CatalogueSection title="Surfaces & Layering" icon={Layers}>
            <div className="relative h-[450px] flex items-center justify-center">
                <motion.div 
                  className="absolute z-0 w-full max-w-2xl"
                  initial={{ y: 50, scale: 0.9, opacity: 0 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                    <Card className="perspex-card p-8 w-full">
                        <CardTitle className="text-accent">.perspex-card (Z-Index 0)</CardTitle>
                        <CardContent className="pt-2"><p className="text-muted-foreground text-sm">The base layer for premium content. Note the corner glows and edge lighting.</p></CardContent>
                    </Card>
                </motion.div>
                <motion.div 
                  className="absolute z-10 w-full max-w-md"
                  initial={{ y: -20, scale: 0.95, opacity: 0 }}
                  whileInView={{ y: 0, scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                    <GlassCard className="p-8 w-full shadow-l4">
                        <CardTitle>.glass-card (Z-Index 1)</CardTitle>
                        <CardContent className="pt-2"><p className="text-muted-foreground text-sm">Floats above other surfaces, blurring the content behind it. Ideal for focused content blocks.</p></CardContent>
                        <div className="mt-4 flex gap-2">
                           <EnhancedButton variant="secondary" glow>Live Button</EnhancedButton>
                           <EnhancedButton variant="outline">Another Button</EnhancedButton>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </CatalogueSection>

        <CatalogueSection title="Effects & Animations" icon={Sparkles}>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="font-semibold text-accent">Animated Borders</h3>
                    <AnimatedBorderCard>
                        <h4 className="text-xl font-bold">AnimatedBorderCard</h4>
                        <p className="text-muted-foreground mt-2">A reusable component that wraps content with a rotating conic-gradient border.</p>
                    </AnimatedBorderCard>
                    <p className="text-xs text-muted-foreground mt-2">Use Case: To highlight extremely important cards or calls-to-action.</p>
                </div>
                <div className="space-y-4">
                    <h3 className="font-semibold text-accent">Interactive Glows</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <EnhancedButton variant="primary" className="h-20" glow>Hover for Primary Glow</EnhancedButton>
                        <EnhancedButton variant="secondary" className="h-20" glow>Hover for Secondary Glow</EnhancedButton>
                        <EnhancedButton variant="outline" className="h-20" glow>Hover for Accent Glow</EnhancedButton>
                        <EnhancedButton variant="destructive" className="h-20">No Glow</EnhancedButton>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Use Case: The `glow` prop on `EnhancedButton` applies the corresponding colored shadow from our design tokens.</p>
                </div>
            </div>
        </CatalogueSection>
      </div>
    </div>
  );
};

export default DesignSystemPage;