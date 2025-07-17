
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ArrowRight } from 'lucide-react';
import { MAIN_NAV_LINKS } from '@/lib/constants';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Our Products | Flow Networks',
  description: 'Explore the best-in-class platforms integrated by Flow Networks, from Intelligent WiFi and event management to automated messaging and premium content delivery. We build solutions on a foundation of excellence.',
};

const productsNavLink = MAIN_NAV_LINKS.find(link => link.label === 'Products');
const productPillars = productsNavLink?.subLinks || [];

const productContent: { [key: string]: { description: string; image: { src: string; hint: string } } } = {
  'Intelligent Venue WiFi': {
    description: "We leverage Purple's world-class, hardware-agnostic platform to provide the foundational data layer for your venue. This isn't just about connectivity; it's about transforming your WiFi network into a rich source of first-party data. By capturing visitor analytics and behavioral insights, we lay the groundwork for the AI Gateway to deliver truly intelligent, presence-aware experiences.",
    image: { src: 'https://placehold.co/1200x800.png', hint: 'network data visualization' }
  },
  'All Axxess Events': {
    description: 'Our integration with Allxs provides a powerful, all-in-one transactional engine for events and educational institutions. While Allxs manages cashless payments, POS, and ticketing, the Flow AI Gateway adds a critical layer of intelligence, using presence verification to trigger interactions and combining transactional data with location analytics for a complete 360-degree view of the attendee experience.',
    image: { src: 'https://placehold.co/1200x800.png', hint: 'music festival crowd' }
  },
  'Everlytic Messaging': {
    description: 'Everlytic is our powerful communication engine, enabling targeted, multi-channel messaging. The Flow AI Gateway acts as the trigger, transforming real-time venue data—like a customer entering a specific zone—into immediate, personalized engagement via SMS, email, or push notifications. We turn physical presence into proactive communication.',
    image: { src: 'https://placehold.co/1200x800.png', hint: 'mobile phone notifications' }
  },
  'CNNTAP': {
    description: "Through our strategic partnership with CNN, we integrate the CNN Travel Advertising Platform (TAP) to deliver premium, world-class content to your guests. The AI Gateway makes this content dynamic and contextual, using the WiFi login as the secure key to unlock a branded, engaging media experience on any guest device, enhancing your venue's prestige and creating new ancillary revenue opportunities.",
    image: { src: 'https://placehold.co/1200x800.png', hint: 'airport lounge news' }
  },
  'Friendly WiFi': {
    description: 'As the exclusive South African partner for Friendly WiFi, we provide a globally recognized certification for online safety. Powered by Purple Shield technology, this solution ensures your venue offers a secure, family-friendly browsing environment, turning a compliance necessity into a powerful statement of brand trust and social responsibility.',
    image: { src: 'https://placehold.co/1200x800.png', hint: 'family using tablet' }
  },
  'Internet Connectivity': {
    description: 'The backbone of any intelligent venue is flawless connectivity. We partner with leading providers to ensure your space is equipped with robust, high-speed, and reliable internet infrastructure, creating the stable foundation upon which all our advanced AI and data solutions are built.',
    image: { src: 'https://placehold.co/1200x800.png', hint: 'fiber optic cables' }
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedHeading
            text="A Curated Ecosystem of Best-in-Class Products"
            as="h1"
            className="text-4xl font-bold text-center text-foreground sm:text-5xl md:text-6xl mb-6 !font-headline"
          />
          <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-16">
            Flow Networks builds intelligent solutions on a foundation of proven, world-class technology. We select and integrate powerful, specialized platforms, orchestrating them through our AI Gateway to create a unified and seamless experience for your venue.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 space-y-20 md:space-y-28 mb-24">
        {productPillars.map((product, index) => {
          const content = productContent[product.label] || { 
            description: 'Detailed description coming soon.',
            image: { src: 'https://placehold.co/1200x800.png', hint: 'abstract technology' }
          };
          const isReversed = index % 2 !== 0;
          const Icon = product.icon; // FIX: Assign component to capitalized variable

          return (
            <ScrollAnimatedSection key={product.label} delay={index * 0.1}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={cn("order-2", isReversed ? 'md:order-1' : 'md:order-2')}>
                  <div className="flex items-center gap-4 mb-4">
                    {Icon && ( // FIX: Check if icon exists before rendering
                      <div className="p-3 rounded-full bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    )}
                    <AnimatedHeading
                      text={product.label}
                      as="h2"
                      className="text-3xl font-bold text-foreground sm:text-4xl !font-headline"
                    />
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {content.description}
                  </p>
                  <EnhancedButton asChild variant="secondary" glow>
                    <Link href={product.href}>
                      Learn More <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </EnhancedButton>
                </div>
                <div className={cn("order-1", isReversed ? 'md:order-2' : 'md:order-1')}>
                  <Image
                    src={content.image.src}
                    alt={product.label}
                    width={1200}
                    height={800}
                    data-ai-hint={content.image.hint}
                    className="rounded-xl shadow-2xl object-cover aspect-[3/2]"
                  />
                </div>
              </div>
            </ScrollAnimatedSection>
          );
        })}
      </div>

      <CallToActionSection />
    </>
  );
}
