
'use client';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card } from '@/components/ui/card';
import { Wifi, Map, Megaphone, DollarSign, Handshake, Sparkles } from 'lucide-react'; 

const offerings = [
  {
    icon: <Wifi className="w-8 h-8 text-primary" />,
    title: "Intelligent WiFi Infrastructure",
    description: "The secure, high-performance foundation. Our enterprise-grade WiFi, powered by Purple, is the gateway to all your venue's intelligent capabilities.",
    features: ["Enterprise-Grade Security", "High-Density Coverage", "Seamless Onboarding"],
    premium: false,
  },
  {
    icon: <Map className="w-8 h-8 text-primary" />,
    title: "Location Intelligence",
    description: "Understand your space like never before. Turn real-time visitor movement into actionable insights for operational excellence and enhanced experiences.",
    features: ["Visitor Flow Analysis", "Heatmap Generation", "Dwell Time Metrics"],
    premium: false,
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: "Digital Engagement Suite",
    description: "Connect with your audience through powerful WiFi Marketing, dynamic Digital Signage, and targeted Email & SMS campaigns from Everlytic.",
    features: ["Automated Marketing", "Personalized Content", "Multi-Channel Campaigns"],
    premium: false,
  },
  {
    icon: <DollarSign className="w-8 h-8 text-primary" />,
    title: "WiFi Monetisation",
    description: "Transform your network into a revenue-generating asset through premium access tiers, sponsored WiFi, and targeted advertising opportunities.",
    features: ["Paid Access Tiers", "Sponsored Splash Pages", "Ad Integration"],
    premium: false,
  },
  {
    icon: <Handshake className="w-8 h-8 text-primary" />,
    title: "Professional Services",
    description: "From strategic AI readiness consulting to full implementation and support, our expert team ensures you maximize the value of your intelligent venue.",
    features: ["AI Readiness Consulting", "Full Implementation", "Ongoing Support"],
    premium: false,
  },
  {
    icon: <Sparkles className="w-8 h-8 text-accent" />,
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
             <Card key={i} className={`group glass-card h-full flex flex-col p-6 hover-glow-${offering.premium ? 'accent' : 'primary'}`}>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br from-${offering.premium ? 'accent' : 'primary'}/20 to-secondary/10 flex items-center justify-center mr-4 shadow-lg shadow-primary/10`}>
                      {offering.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{offering.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{offering.description}</p>
                {offering.features && (
                    <div className="space-y-2 mt-auto">
                      {offering.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-foreground/80">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${offering.premium ? 'accent' : 'primary'} mr-3`}></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreOfferingsSection;
