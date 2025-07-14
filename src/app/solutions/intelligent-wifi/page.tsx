
import type { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wifi, DatabaseZap, Megaphone, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import AnimatedBorder from '@/components/shared/AnimatedBorder';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Intelligent WiFi Infrastructure | Secure Guest WiFi Solutions | Flow Networks',
  description: "Discover Flow Networks' enterprise-grade Intelligent WiFi solutions, powered by Purple.ai. We provide secure, compliant, and data-rich guest WiFi that forms the foundation of your smart venue.",
};

const pillars = [
  {
    icon: Wifi,
    title: 'Seamless & Secure Connectivity',
    description: 'Provide a frictionless, secure, and fully branded WiFi experience for your guests. Our hardware-agnostic solution layers over your existing infrastructure, ensuring enterprise-grade performance and 99.9% uptime.',
  },
  {
    icon: DatabaseZap,
    title: 'Compliant First-Party Data',
    description: 'Turn your WiFi into your most valuable data source. Capture rich, opt-in user data through customizable splash pages, fully compliant with POPIA and GDPR, to build a powerful first-party database.',
  },
  {
    icon: Megaphone,
    title: 'Personalized Engagement',
    description: 'Leverage captured data to deliver hyper-personalized messages, targeted promotions, and real-time surveys. Drive loyalty, increase spend, and enhance your brand\'s reputation.',
  },
];

const features = [
  { name: 'Captive Portal', description: 'Fully customizable, multilingual splash pages that reinforce your brand.' },
  { name: 'Diverse Authentication', description: 'Flexible login options including social media, forms, and seamless automatic connection with SecurePass.' },
  { name: 'Purple Shield Content Filtering', description: 'Ensure a safe, family-friendly browsing environment by blocking inappropriate content and online threats.' },
  { name: 'Tiered & Paid WiFi', description: 'Monetize your network by offering premium, high-speed access tiers.' },
  { name: 'Real-time Surveys', description: 'Gather immediate, in-venue feedback with high-response-rate surveys.' },
];

export default function IntelligentWifiSolutionPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-background relative">
        <div className="container mx-auto px-4 md:px-6 z-10 relative">
          <div className="text-center">
            <AnimatedHeading
              text="The Foundation of Your Intelligent Venue."
              as="h1"
              className="text-5xl md:text-6xl text-gradient-animated"
            />
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              More than just connectivity. Our Intelligent WiFi Infrastructure, powered by Purple.ai's world-class platform, is the secure and compliant foundation for capturing data, engaging visitors, and unlocking the full potential of your physical space.
            </p>
          </div>
          <ScrollAnimatedSection delay={0.3}>
            <div className="mt-16 flex justify-center">
               <Image 
                src="https://placehold.co/1200x800.png"
                alt="Guest engagement portal on a phone"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                data-ai-hint="guest wifi portal"
                priority
               />
            </div>
          </ScrollAnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading
            text="Connect, Capture, and Engage"
            as="h2"
            className="text-center text-4xl mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <ScrollAnimatedSection key={pillar.title} delay={index * 0.15}>
                <Card className="glass-card hover-glow-primary h-full">
                  <CardHeader className="items-center text-center">
                    <div className="p-3 bg-accent/10 rounded-full mb-3">
                      <pillar.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <AnimatedHeading
                text="A Feature-Rich Platform for Unmatched Control"
                as="h2"
                className="text-4xl"
              />
              <ul className="mt-6 space-y-4">
                {features.map(feature => (
                  <li key={feature.name} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">{feature.name}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image 
                src="https://placehold.co/800x1200.png"
                alt="Cycling through WiFi features on a phone"
                width={400}
                height={800}
                className="rounded-2xl shadow-2xl"
                data-ai-hint="mobile app interface"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedBorder color="accent" className="p-8 md:p-12">
            <div className="text-center">
              <AnimatedHeading
                text="The Foundation for True Venue Intelligence"
                as="h2"
                className="text-4xl mb-6"
              />
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
                Our Intelligent WiFi Infrastructure does more than connect your guests—it creates the data-rich foundation for the future of your venue. Every connection, every piece of data, and every interaction prepares your space for the next generation of hyper-local services. This is the first step towards activating the <strong>Flow AI Gateway</strong>, where your venue doesn't just provide access, it anticipates, interacts, and adapts in real-time.
              </p>
              <EnhancedButton asChild variant="tertiary" size="lg">
                <Link href="/solutions/ai-gateway">Explore the AI Gateway Vision</Link>
              </EnhancedButton>
            </div>
          </AnimatedBorder>
        </div>
      </section>

      <CallToActionSection />
    </>
  );
}
