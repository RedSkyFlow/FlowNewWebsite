
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

const productImages: { [key: string]: { src: string; hint: string } } = {
  'Intelligent Venue WiFi': { src: 'https://placehold.co/1200x800.png', hint: 'network data visualization' },
  'All Axxess Events': { src: 'https://placehold.co/1200x800.png', hint: 'music festival crowd' },
  'Everlytic Messaging': { src: 'https://placehold.co/1200x800.png', hint: 'mobile phone notifications' },
  'CNNTAP': { src: 'https://placehold.co/1200x800.png', hint: 'airport lounge news' },
  'Friendly WiFi': { src: 'https://placehold.co/1200x800.png', hint: 'family using tablet' },
  'Internet Connectivity': { src: 'https://placehold.co/1200x800.png', hint: 'fiber optic cables' },
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

      <div className="container mx-auto px-4 md:px-6 space-y-20 md:space-y-28">
        {productPillars.map((product, index) => {
          const imageDetails = productImages[product.label] || { src: 'https://placehold.co/1200x800.png', hint: 'abstract technology' };
          const isReversed = index % 2 !== 0;

          return (
            <ScrollAnimatedSection key={product.label} delay={index * 0.1}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={cn("order-2", isReversed ? 'md:order-1' : 'md:order-2')}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <product.icon className="w-8 h-8 text-primary" />
                    </div>
                    <AnimatedHeading
                      text={product.label}
                      as="h2"
                      className="text-3xl font-bold text-foreground sm:text-4xl !font-headline"
                    />
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">
                    {product.description || 'Detailed description coming soon.'}
                  </p>
                  <EnhancedButton asChild variant="secondary" glow>
                    <Link href={product.href}>
                      Learn More <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </EnhancedButton>
                </div>
                <div className={cn("order-1", isReversed ? 'md:order-2' : 'md:order-1')}>
                  <Image
                    src={imageDetails.src}
                    alt={product.label}
                    width={1200}
                    height={800}
                    data-ai-hint={imageDetails.hint}
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
