
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, DollarSign, Zap, Handshake, BarChart3, UserCheck, Tv2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const WiFiMonetisationPage: NextPage = () => {
  const monetisationStrategies = [
    { 
      icon: Zap, 
      title: 'Tiered Paid Access', 
      description: 'Offer a free basic connection while generating direct revenue from power users who need high-speed, premium access for streaming, gaming, or business calls.',
      ctaLink: '/products/intelligent-wifi/add-ons/paid-wifi',
    },
    { 
      icon: Handshake, 
      title: 'Sponsored WiFi', 
      description: 'Partner with non-competing brands to sponsor your free WiFi. Their brand gets valuable exposure to your captive audience, and you get a new revenue stream.',
      ctaLink: '/solutions/sponsored-wifi',
    },
    { 
      icon: BarChart3, 
      title: 'Data-Driven Marketing', 
      description: 'Leverage the rich, first-party data captured via WiFi to drive highly targeted marketing campaigns that boost sales for your own products and services.',
      ctaLink: '/solutions/wifi-marketing',
    },
     { 
      icon: Tv2, 
      title: 'Premium Content & Ad Delivery', 
      description: 'Utilize platforms like CNNTAP to deliver curated content and premium brand advertising to your guests\' devices, creating a revenue share opportunity.',
      ctaLink: '/products/cnntap',
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
        
          <p className="font-semibold text-accent mb-4 text-gradient-animated">Flow Networks Solutions</p>
          <AnimatedHeading text="WiFi Monetisation: Your Network is a Revenue Engine" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
          <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            Transform your guest WiFi from a mandatory cost center into a powerful, multi-faceted asset that generates direct revenue, enhances marketing ROI, and creates new partnership opportunities.
          </motion.p>
        
      </ScrollAnimatedSection>

      <ScrollAnimatedSection as="div" className="py-16 md:py-24">
        
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <AnimatedHeading text="Unlocking Your Digital Real Estate" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
              <p className="text-lg text-muted-foreground font-body space-y-4">
                <span>Every guest who connects to your WiFi is part of a valuable, captive audience. Their attention is your digital real estate. For too long, this asset has been either given away for free or ignored entirely.</span>
                <br/>
                <span>Our platform provides a suite of sophisticated, flexible tools to monetize this digital real estate ethically and effectively. We help you create a fair value exchange that benefits your business, your partners, and your guests.</span>
              </p>
            </div>
            <div>
              <Image src="https://placehold.co/800x600.png" alt="An abstract visualization of data points and dollar signs flowing from a central WiFi icon." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A sleek, 3D graphic. A central, glowing WiFi symbol. From this symbol, lines of light flow outwards, connecting to other icons representing a credit card (Paid Access), a handshake (Sponsorship), and a bar chart (Marketing ROI). The overall feeling is about value creation and flow." />
            </div>
          </div>
        
      </ScrollAnimatedSection>

      <ScrollAnimatedSection as="div" className="py-16 md:py-24">
       
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedHeading text="Four Proven Monetisation Strategies" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            <p className="text-lg text-muted-foreground font-body">Our platform supports a range of strategies that can be used alone or in combination to create the perfect monetization model for your venue.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {monetisationStrategies.map((strategy, i) => (
              <motion.div key={strategy.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                <GlassCard className="flex flex-col h-full">
                  <CardHeader>
                    <div className="mb-4 inline-block"><strategy.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{strategy.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="font-body text-muted-foreground">{strategy.description}</p>
                  </CardContent>
                  <CardFooter>
                    <EnhancedButton asChild variant="link" className="p-0 h-auto font-semibold group">
                      <Link href={strategy.ctaLink}>
                        <span className="flex items-center gap-2">Explore Strategy <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></span>
                      </Link>
                    </EnhancedButton>
                  </CardFooter>
                </GlassCard>
              </motion.div>
            ))}
          </div>
      
      </ScrollAnimatedSection>
      
      <div className="py-16 md:py-24">
        <CallToActionSection 
          title="Ready to Turn Connectivity into Profit?"
          description="Stop viewing your WiFi as just an expense. Let our experts help you design and implement a monetization strategy that aligns with your brand and drives significant returns."
          ctaText="Develop Your Monetisation Strategy"
          ctaLink="/contact?subject=WiFiMonetisationStrategy"
        />
      </div>
    </div>
  );
};

export default WiFiMonetisationPage;
