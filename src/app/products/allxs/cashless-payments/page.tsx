'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, Wallet, Fingerprint, QrCode, ShieldCheck, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const CashlessPaymentsPage: NextPage = () => {
  const paymentMethods = [
    { 
      icon: Wallet, 
      title: 'Closed-Loop Cards & Wristbands', 
      description: 'Issue branded, NFC/RFID-enabled cards or wristbands that act as a secure digital wallet, perfect for events, schools, and resorts.' 
    },
    { 
      icon: Fingerprint, 
      title: 'Biometric Authentication', 
      description: 'For the ultimate in security and convenience, link user profiles to their unique biometric data, enabling truly seamless, hands-free payments.' 
    },
    { 
      icon: QrCode, 
      title: 'QR Code Payments', 
      description: 'Enable fast and easy payments directly from a user\'s smartphone. Ideal for quick-service environments and reducing physical contact.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/products/allxs" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to Allxs
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Allxs Platform Deep Dive</p>
            <AnimatedHeading text="Unified Cashless Payments: The Heartbeat of Your Venue" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Streamline every transaction and eliminate the risks of cash. Our unified platform provides a secure, flexible, and data-rich foundation for all commerce within your venue.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="Beyond Convenience, It's Transformation" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Going cashless is more than just a payment method upgrade. It's a fundamental shift in your operational model.</span>
                  <br/>
                  <span>It enhances security for your staff and guests, dramatically speeds up service, and, most importantly, turns every single transaction into a valuable data point. This data is the key to understanding your customers and optimizing your business for profitability.</span>
                </p>
              </div>
              <div>
                <Image src="/images/allxs-cashless-hero.jpg" alt="A customer effortlessly tapping an RFID wristband at a festival food stall to make a payment." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A close-up, dynamic shot focusing on a person's wrist with a brightly colored festival wristband tapping a sleek, modern POS terminal. The transaction confirmation (a green checkmark) is visible on the screen. The background is a vibrant, slightly blurred festival scene, conveying energy and speed." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Flexible Payment Technologies" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {paymentMethods.map((method) => (
                <GlassCard key={method.title}>
                  <CardHeader>
                    <div className="mb-4 inline-block"><method.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{method.description}</p></CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-4 inline-block"><BarChart3 className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="Every Tap Tells a Story" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Our unified system doesn't just process payments; it captures intelligence. Understand what your most valuable customers are buying, identify your best-selling products, and track revenue in real-time. This transactional data is a critical input for our AI Gateway, enabling predictive inventory and personalized offers.
              </p>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Go Cashless?"
          description="Unlock a new level of efficiency, security, and intelligence. Contact our specialists to design a cashless payment ecosystem tailored to your venue's unique needs."
          ctaText="Design Your Cashless Solution"
          ctaLink="/contact?subject=CashlessSolution"
        />
      </div>
    </div>
  );
};

export default CashlessPaymentsPage;