'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, ShoppingCart, Search, Tag, Presentation, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

import { INDUSTRIES_DATA } from '@/lib/constants';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const RetailPage: NextPage = () => {
  const industry = INDUSTRIES_DATA.find(i => i.id === 'retail');

  if (!industry) return null;

  const featureGlowClasses = ['hover-glow-primary', 'hover-glow-secondary', 'hover-glow-accent'];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      
      {/* --- Hero Section --- */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/industries/malls.png"
          alt="A modern, stylish retail environment."
          fill
          className="object-cover object-center -z-20"
          priority
        />
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <Link href="/industries" className="text-sm font-semibold text-white/80 hover:text-white transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to All Industries
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Industry Focus: Retail</p>
            <AnimatedHeading text={industry.title} as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
        </div>
      </section>

      <div className="relative z-10">
        <ScrollAnimatedSection as="section" className="-mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="perspex-card border border-accent/30 hover-glow-accent p-8 md:p-12 rounded-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                  <AnimatedHeading text="Bringing E-commerce Insights In-Store" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                  <p className="text-lg text-muted-foreground font-body space-y-4">
                    <span>Online retailers have a massive advantage: they can track every click, view, and interaction. Brick-and-mortar stores have been flying blind—until now.</span>
                    <br/>
                    <span>Our platform gives your physical retail space a digital nervous system. We provide the tools to understand shopper behavior with the same clarity as a website, enabling you to optimize layouts, personalize marketing, and make data-driven decisions that directly impact your bottom line.</span>
                  </p>
                </div>
                <div>
                  <Image src="/images/industries/reatail data.png" alt="A dashboard showing retail analytics and customer behavior data." width={800} height={600} className="rounded-lg shadow-l4" />
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Solutions for the Modern Retailer" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.features.map((feature, i) => (
                <motion.div key={feature.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard className={cn("flex flex-col h-full", featureGlowClasses[i % featureGlowClasses.length])}>
                    <CardHeader>
                      <div className="mb-4 inline-block"><feature.icon className="w-8 h-8 text-primary" /></div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent><p className="font-body text-muted-foreground">{feature.description}</p></CardContent>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
        
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><BarChart3 className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Understand the Complete Shopper Journey" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                By integrating our Location Intelligence with your POS data via Allxs, you can connect the dots between where shoppers go and what they buy. Understand which displays drive sales, how dwell time impacts basket size, and which paths lead to the checkout.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <EnhancedButton asChild variant="secondary" glow>
                  <Link href="/products/intelligent-wifi/location-intelligence">Explore Location Intelligence</Link>
                </EnhancedButton>
                <EnhancedButton asChild variant="outline">
                  <Link href="/products/allxs">Explore Allxs for Retail</Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        <CallToActionSection 
          title="Ready to Optimize Your Retail Space?"
          description="Stop guessing and start measuring. Let's equip your store with the intelligence it needs to thrive in the modern retail landscape. Contact us for a free consultation."
          ctaText={industry.cta}
          ctaLink="/contact?subject=RetailSolution"
        />
      </div>
    </div>
  );
};

export default RetailPage;