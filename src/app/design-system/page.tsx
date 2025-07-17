// src/app/design-system/page.tsx
'use client';

import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Type, Component, Sparkles, Layers, PaintBucket } from 'lucide-react';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';

const CatalogueSection = ({ title, icon: Icon, children }: { title: string, icon: React.ElementType, children: React.ReactNode }) => (
  <ScrollAnimatedSection as="section" className="py-12 md:py-16 border-b border-border/50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex items-center gap-4 mb-8">
        <Icon className="w-8 h-8 text-accent" />
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <div className="grid gap-8">
        {children}
      </div>
    </div>
  </ScrollAnimatedSection>
);

const DesignSystemPage: NextPage = () => {
  const brandColors = [
    { name: 'Background', var: '--background', hex: '#0A0903', use: 'Primary page background.' },
    { name: 'Foreground', var: '--foreground', hex: '#E2FDFF', use: 'Primary text color.' },
    { name: 'Card', var: '--card', hex: '#151417', use: 'Base for card components.' },
    { name: 'Primary (Teal)', var: '--primary', hex: '#007A80', use: 'Authority, borders, tertiary actions.' },
    { name: 'Secondary (Blue)', var: '--secondary', hex: '#0282F2', use: 'Main CTAs, interactive elements.' },
    { name: 'Accent (Gold)', var: '--accent', hex: '#D4AF37', use: 'Highlights, icons, premium features.' },
    { name: 'Impact (Orange)', var: '--impact', hex: '#F46036', use: 'Secondary solid CTAs, alerts.' },
  ];

  return (
    <div className="bg-background text-foreground relative isolate">
      <ParticleBackground className="absolute inset-0 -z-10" />
      
      <div className="relative z-10">
        {/* --- Hero Section --- */}
        <ScrollAnimatedSection as="section" className="pt-32 pb-16 md:pt-40 md:pb-20 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedHeading text="Design System Catalogue" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              A living visual reference for all Flow Networks brand components, effects, and styles. This is our single source of truth for building a consistent and premium user experience.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        {/* --- Color Palette Section --- */}
        <CatalogueSection title="Color Palette" icon={Palette}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {brandColors.map(color => (
              <div key={color.name} className="flex flex-col items-center text-center">
                <div style={{ backgroundColor: `hsl(var(${color.var}))` }} className="w-24 h-24 rounded-lg border border-border mb-2"></div>
                <p className="font-bold text-sm">{color.name}</p>
                <p className="text-xs text-muted-foreground">{color.hex}</p>
                <p className="text-xs text-muted-foreground mt-1 px-2">{color.use}</p>
              </div>
            ))}
          </div>
        </CatalogueSection>

        {/* --- Typography Section --- */}
        <CatalogueSection title="Typography & Headings" icon={Type}>
            <div className="perspex-card p-8">
                <AnimatedHeading text="Animated H1 Heading" as="h1" className="text-5xl font-extrabold mb-4" />
                <h2 className="text-4xl font-bold mb-4">Standard H2 Heading</h2>
                <h3 className="text-3xl font-semibold mb-4">Standard H3 Heading</h3>
                <h4 className="text-2xl font-semibold mb-4">Standard H4 Heading</h4>
                <p className="text-lg mb-2">This is standard body text (p tag, text-lg). It's used for introductory paragraphs and descriptive content that needs to be easily readable.</p>
                <p className="text-base text-muted-foreground">This is muted body text (p tag, text-base, text-muted-foreground). Ideal for subtitles, descriptions, and less critical information.</p>
                <p className="text-sm text-muted-foreground mt-2">This is small muted text (p tag, text-sm, text-muted-foreground). Perfect for captions, footnotes, or legal disclaimers.</p>
                <p className="mt-4"><span className="text-gradient-animated font-bold">.text-gradient-animated:</span> Use this class for special, high-impact text that needs to draw attention.</p>
            </div>
        </CatalogueSection>
        
        {/* --- Interactive Components Section --- */}
        <CatalogueSection title="Interactive Components" icon={Component}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                <div>
                    <h3 className="font-semibold mb-4 text-accent">EnhancedButton</h3>
                    <div className="p-6 glass-card flex flex-col items-start gap-4">
                        <EnhancedButton variant="secondary" glow>Secondary CTA</EnhancedButton>
                        <EnhancedButton variant="primary">Primary Action</EnhancedButton>
                        <EnhancedButton variant="outline" glow>Outline Action</EnhancedButton>
                        <EnhancedButton variant="ghost">Ghost Action</EnhancedButton>
                        <EnhancedButton variant="destructive">Destructive</EnhancedButton>
                        <EnhancedButton asChild><a href="#">Link Button</a></EnhancedButton>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Use Case: The primary component for all user actions. `variant="secondary"` is the main CTA. `glow` prop adds the configured glow effect.</p>
                </div>
                 <div>
                    <h3 className="font-semibold mb-4 text-accent">Accordion</h3>
                    <div className="p-6 glass-card">
                        {/* You would import and use your Accordion component here */}
                        <p className="text-muted-foreground">Accordion component for FAQs and collapsible content.</p>
                    </div>
                     <p className="text-xs text-muted-foreground mt-2">Use Case: To concisely display large amounts of information, like in FAQs or technical specification sections.</p>
                </div>
                 <div>
                    <h3 className="font-semibold mb-4 text-accent">Form Inputs</h3>
                    <div className="p-6 glass-card">
                        {/* You would import and use your Input, Label, etc. here */}
                         <p className="text-muted-foreground">Standard form elements like Input, Textarea, Checkbox, etc.</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Use Case: For all forms, such as contact pages and login screens.</p>
                </div>
            </div>
        </CatalogueSection>

        {/* --- Card & Surface Styles Section --- */}
        <CatalogueSection title="Surfaces & Cards" icon={Layers}>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-semibold mb-4 text-accent">.glass-card</h3>
                    <GlassCard className="p-8">
                        <CardTitle>Glass Card</CardTitle>
                        <CardContent className="pt-4">
                            <p className="text-muted-foreground">A semi-transparent card with blurred backdrop and a subtle border. Hovering adds a primary color glow.</p>
                        </CardContent>
                    </GlassCard>
                    <p className="text-xs text-muted-foreground mt-2">Use Case: The workhorse card for displaying content blocks, features, and plans. Provides depth without being distracting.</p>
                </div>
                <div className="group">
                     <h3 className="font-semibold mb-4 text-accent">.perspex-card</h3>
                    <Card className="perspex-card p-8">
                         <CardTitle>Perspex Card</CardTitle>
                        <CardContent className="pt-4">
                            <p className="text-muted-foreground">A high-fidelity transparent card with inset colored highlights that intensify on hover. Used inside a `.group` for hover effects.</p>
                        </CardContent>
                    </Card>
                    <p className="text-xs text-muted-foreground mt-2">Use Case: For high-impact, premium sections that need to stand out, like testimonials, final CTAs, or showcasing visionary concepts.</p>
                </div>
            </div>
        </CatalogueSection>
        
        {/* --- Effects & Animations Section --- */}
        <CatalogueSection title="Glows & Shadows" icon={PaintBucket}>             
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-semibold mb-2 text-accent">Glows</h3>
                    <div className="p-6 glass-card flex flex-col gap-4">
                        <div className="h-10 rounded-md flex items-center justify-center" style={{ boxShadow: 'var(--glow-primary)' }}>.shadow-glow-primary</div>
                        <div className="h-10 rounded-md flex items-center justify-center" style={{ boxShadow: 'var(--glow-secondary)' }}>.shadow-glow-secondary</div>
                        <div className="h-10 rounded-md flex items-center justify-center" style={{ boxShadow: 'var(--glow-accent)' }}>.shadow-glow-accent</div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Use Case: Applied via `box-shadow` utility classes on interactive elements to add a subtle, colored aura.</p>
                </div>
                <div>
                    <h3 className="font-semibold mb-2 text-accent">Shadows</h3>
                    <div className="p-6 glass-card flex flex-col gap-4">
                        <div className="h-10 rounded-md bg-card/50 flex items-center justify-center" style={{ boxShadow: 'var(--shadow-level-1)' }}>.shadow-l1</div>
                        <div className="h-10 rounded-md bg-card/50 flex items-center justify-center" style={{ boxShadow: 'var(--shadow-level-2)' }}>.shadow-l2</div>
                        <div className="h-10 rounded-md bg-card/50 flex items-center justify-center" style={{ boxShadow: 'var(--shadow-level-3)' }}>.shadow-l3</div>
                    </div>
                     <p className="text-xs text-muted-foreground mt-2">Use Case: Standard elevation shadows for creating depth on non-transparent elements like modals or pop-ups.</p>
                </div>
            </div>
        </CatalogueSection>

      </div>
    </div>
  );
};

export default DesignSystemPage;