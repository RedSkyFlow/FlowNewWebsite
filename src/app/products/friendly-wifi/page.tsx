'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Users, Building, HeartHandshake, CheckCircle, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';

const FriendlyWiFiPillarPage: NextPage = () => {
  const programPillars = [
    { 
      icon: Users, 
      title: 'Certification for Public Venues', 
      description: 'Provide a certified safe online environment for families, children, and all visitors. The Friendly WiFi symbol is a clear declaration that your brand prioritizes public safety and trust.',
      points: ['Attract family-oriented customers', 'Enhance your brand reputation', 'Meet growing public expectations for safety'],
      ctaLink: '/industries',
    },
    { 
      icon: Building, 
      title: 'Certification for Workplaces', 
      description: 'Demonstrate a profound commitment to employee well-being and digital safety. Fulfill your duty of care by ensuring your internal network is a productive and safe space.',
      points: ['Support employee digital wellness', 'Strengthen your ESG and DEI initiatives', 'Prevent exposure to inappropriate content'],
      ctaLink: '/solutions/smb-wifi', // Example link
    },
  ];

  const standards = [
    { title: 'Blocks Pornography', description: 'Ensures a professional and family-friendly browsing environment.' },
    { title: 'Blocks IWF & CSAM Content', description: 'Actively blocks webpages identified by the Internet Watch Foundation as hosting child sexual abuse material.' },
    { title: 'Blocks Terrorist Content', description: 'Adheres to global standards for preventing access to extremist and terrorist material.' },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        {/* --- 1. Hero Section --- */}
        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
              <Image src="https://placehold.co/150x150.png" alt="Friendly WiFi Certification Symbol" width={120} height={120} className="mx-auto mb-6" data-ai-hint="The official green and white Friendly WiFi logo." />
            </motion.div>
            <AnimatedHeading text="The Global Standard for Safe & Secure Public WiFi" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              Build unshakable trust with your customers and staff. Our Friendly WiFi certification transforms your network from a simple utility into a powerful statement of your commitment to safety.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        {/* --- 2. Strategic Overview (The "Why") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-xl">
                <AnimatedHeading text="The Digital Handshake of Trust" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>In an open digital world, providing WiFi comes with a responsibility. An uncertified network is an unknown quantity, creating hesitation for parents and a potential liability for businesses.</span>
                  <br />
                  <span>The Friendly WiFi symbol acts as a universal sign of safety. It's a digital handshake that instantly tells your visitors, "This is a safe space." It's the most effective way to turn a potential risk into a powerful asset for building brand trust.</span>
                </p>
              </div>
              <div>
                <Image src="/images/products/Friendly Wifi Family.jpg" alt="A family in a cafe, smiling and using a tablet, with the Friendly WiFi symbol glowing softly nearby." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A warm, inviting photo of a family (diverse parents with a child) in a bright, modern cafe. The child is safely using a tablet. A subtle, glowing Friendly WiFi logo is overlaid in the corner to signify the safe environment." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- 3. The Certification Programs (The "What") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Two Paths to a Safer Digital Space" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground font-body">We offer tailored certification programs to meet the distinct needs of public-facing venues and internal corporate environments.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {programPillars.map((pillar, i) => (
                <motion.div key={pillar.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <GlassCard className="flex flex-col h-full">
                    <CardHeader>
                      <div className="mb-4 inline-block bg-primary/10 p-3 rounded-full"><pillar.icon className="w-8 h-8 text-primary" /></div>
                      <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground font-body mb-4">{pillar.description}</p>
                      <ul className="space-y-2 text-sm">
                        {pillar.points.map(point => (
                          <li key={point} className="flex items-start font-body"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-accent shrink-0" /><span>{point}</span></li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <EnhancedButton asChild variant="link" className="p-0 h-auto font-semibold group">
                        <Link href={pillar.ctaLink}>Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /></Link>
                      </EnhancedButton>
                    </CardFooter>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
        
        {/* --- 4. The Standard of Safety (The "How") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Our Uncompromising Standard" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="text-lg text-muted-foreground font-body">Initiated by the UK Government, our certification guarantees that your network actively blocks harmful content at the source.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {standards.map(standard => (
                <Card key={standard.title} className="perspex-card text-center p-8">
                    <CardTitle className="text-xl">{standard.title}</CardTitle>
                    <CardContent className="pt-4"><p className="font-body text-muted-foreground">{standard.description}</p></CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* --- 5. Integration Advantage (The "Synergy") --- */}
        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center">
              <div className="mb-4 inline-block"><ShieldCheck className="w-10 h-10 text-accent" /></div>
              <AnimatedHeading text="The Security Layer of Intelligent WiFi" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Friendly WiFi certification is a core component of our Secure & Compliant Access solution. It integrates seamlessly with our Intelligent WiFi platform, providing the essential security layer that underpins a trusted, data-rich, and engaging digital environment.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/intelligent-wifi/secure-access">Explore Secure Access <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>

        {/* --- 6. Final CTA Section --- */}
        <CallToActionSection 
          title="Become a Certified Safe Venue" 
          description="Join a global network of responsible brands. Contact us today to begin the simple process of certifying your venue and demonstrating your commitment to a safer digital world." 
          ctaText="Get Friendly WiFi Certified" 
          ctaLink="/contact?subject=FriendlyWiFiCertification" 
        />
      </div>
    </div>
  );
};

export default FriendlyWiFiPillarPage;