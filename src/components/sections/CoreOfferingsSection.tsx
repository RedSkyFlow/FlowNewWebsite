
'use client';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { FlowNetworksFeatureCard } from '../shared/NeonGlassCardExamples';
import { Wifi, Map, Megaphone, DollarSign, Handshake, Sparkles } from 'lucide-react'; 

const offerings = [
  {
    icon: <Wifi className="w-6 h-6 text-white" />,
    title: "Intelligent WiFi Infrastructure",
    description: "The secure, high-performance foundation. Our enterprise-grade WiFi, powered by Purple, is the gateway to all your venue's intelligent capabilities.",
    features: ["Enterprise-Grade Security", "High-Density Coverage", "Seamless Onboarding"],
  },
  {
    icon: <Map className="w-6 h-6 text-white" />,
    title: "Location Intelligence",
    description: "Understand your space like never before. Turn real-time visitor movement into actionable insights for operational excellence and enhanced experiences.",
    features: ["Visitor Flow Analysis", "Heatmap Generation", "Dwell Time Metrics"],
  },
  {
    icon: <Megaphone className="w-6 h-6 text-white" />,
    title: "Digital Engagement Suite",
    description: "Connect with your audience through powerful WiFi Marketing, dynamic Digital Signage, and targeted Email & SMS campaigns from Everlytic.",
    features: ["Automated Marketing", "Personalized Content", "Multi-Channel Campaigns"],
  },
  {
    icon: <DollarSign className="w-6 h-6 text-white" />,
    title: "WiFi Monetisation",
    description: "Transform your network into a revenue-generating asset through premium access tiers, sponsored WiFi, and targeted advertising opportunities.",
    features: ["Paid Access Tiers", "Sponsored Splash Pages", "Ad Integration"],
  },
  {
    icon: <Handshake className="w-6 h-6 text-white" />,
    title: "Professional Services",
    description: "From strategic AI readiness consulting to full implementation and support, our expert team ensures you maximize the value of your intelligent venue.",
    features: ["AI Readiness Consulting", "Full Implementation", "Ongoing Support"],
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: "The Future, Today",
    description: "Explore our innovation roadmap and discover how we're pioneering the next generation of AI-driven venue services.",
    features: ["AI Gateway Vision", "Innovation Roadmap", "Next-Gen Services"],
    premium: true,
  }
];

const CoreOfferingsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0A0903]">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="A Comprehensive Suite of Intelligent Venue Solutions"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4 !font-headline"
          wordAnimation
        />
        <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-16">
          We don't just provide connectivity; we deliver a complete ecosystem of tools designed to help you understand your space, engage your audience, and drive business growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, i) => (
            <FlowNetworksFeatureCard
              key={i}
              icon={offering.icon}
              title={offering.title}
              description={offering.description}
              features={offering.features}
              premium={offering.premium}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferingsSection;
