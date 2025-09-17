'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Lock, UserCheck, EyeOff, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';

const SecureAccessPage: NextPage = () => {
  const securityLayers = [
    { 
      icon: Lock, 
      title: 'Enterprise-Grade Encryption', 
      description: 'We utilize WPA2/3 Enterprise security standards, ensuring that all data transmitted between a user\'s device and our network is fully encrypted and protected from eavesdropping.' 
    },
    { 
      icon: UserCheck, 
      title: 'Secure & Flexible Authentication', 
      description: 'From simple social logins to advanced Passpoint (SecurePass) profiles and PMS integration, we provide multiple secure methods for authenticating users onto your network.' 
    },
    { 
      icon: EyeOff, 
      title: 'Content Filtering & Brand Safety', 
      description: 'Powered by our Shield add-on and Friendly WiFi certification, we provide robust tools to block inappropriate content, ensuring a safe browsing experience for all guests.' 
    },
     { 
      icon: Network, 
      title: 'Network Isolation & Segmentation', 
      description: 'Guest traffic is always kept separate from your critical corporate network (e.g., POS, back-office systems), preventing any potential for lateral movement or unauthorized access.' 
    },
  ];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/products/intelligent-wifi" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to Intelligent WiFi
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Intelligent WiFi Cluster Page</p>
            <AnimatedHeading text="Secure Access: The Foundation of Trust" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
              In a world of digital threats, your guest WiFi cannot be a vulnerability. Our platform is architected with multi-layered, enterprise-grade security to protect your data, your guests, and your brand.
            </motion.p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedHeading text="Your Digital Front Door, Fortified" as="h2" className="text-3xl sm:text-4xl font-bold mb-6" />
                <p className="text-lg text-muted-foreground font-body space-y-4">
                  <span>Every connection to your network is a potential entry point. For us, security is not an afterthought; it is the bedrock upon which our entire platform is built.</span>
                  <br/>
                  <span>We go beyond basic passwords to create a secure digital perimeter around your venue. From the moment a guest connects to the data they transmit, every step is protected by industry-leading protocols, ensuring a safe and compliant environment for everyone.</span>
                </p>
              </div>
              <div className="flex justify-center">
                <Image src="/images/solutions/secure safe wifi.jpg" alt="A stylized, glowing digital fortress or shield icon, representing network security." width={800} height={600} className="rounded-lg shadow-l4" data-ai-hint="A powerful, abstract visual. A large, semi-transparent shield icon with intricate, glowing circuits inside. The shield is deflecting incoming abstract 'threat' icons (perhaps red, jagged shapes). The overall aesthetic is dark, high-tech, and conveys a sense of impenetrable security." />
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <AnimatedHeading text="Our Multi-Layered Security Architecture" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityLayers.map((layer) => (
                <GlassCard key={layer.title}>
                  <CardHeader>
                    <div className="mb-4 inline-block"><layer.icon className="w-8 h-8 text-primary" /></div>
                    <CardTitle>{layer.title}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="font-body text-muted-foreground">{layer.description}</p></CardContent>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="perspex-card p-8 md:p-12 text-center flex flex-col items-center">
              <div className="mb-6 inline-block">
                 <Image src="/images/logos/FRIENDLY WIFI APPROVED WHITE.PNG" alt="Friendly WiFi Certification Symbol" width={80} height={80} data-ai-hint="The official green and white Friendly WiFi logo." />
              </div>
              <AnimatedHeading text="Certified Safe for Complete Peace of Mind" as="h2" className="text-3xl sm:text-4xl font-bold mb-4" />
              <p className="mx-auto max-w-3xl text-lg text-muted-foreground font-body">
                Our commitment to safety is validated by our adherence to the Friendly WiFi certification standard. This ensures our content filtering is best-in-class, providing a publicly recognized seal of approval that your venue is a safe digital space for all, especially families.
              </p>
              <div className="mt-8">
                <EnhancedButton asChild variant="outline" glow>
                  <Link href="/products/friendly-wifi">Explore Friendly WiFi Certification <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </EnhancedButton>
              </div>
            </Card>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection 
          title="Ready to Fortify Your Network?"
          description="Don't compromise on security. Partner with Flow Networks to deploy an enterprise-grade, secure, and compliant WiFi solution that protects your business and builds guest trust."
          ctaText="Request a Security Consultation"
          ctaLink="/contact?subject=SecurityConsultation"
        />
      </div>
    </div>
  );
};

export default SecureAccessPage;