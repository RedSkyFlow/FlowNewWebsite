
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { MAIN_NAV_LINKS } from '@/lib/constants';
import CallToActionSection from '@/components/sections/CallToActionSection';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Explore the best-in-class platforms integrated by Flow Networks, from Intelligent WiFi and event management to automated messaging and premium content delivery. We build solutions on a foundation of excellence.',
};

const productsNavLink = MAIN_NAV_LINKS.find(link => link.label === 'Products');
const productPillars = productsNavLink?.subLinks || [];

export default function ProductsPage() {
  return (
    <>
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/10 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="A Curated Ecosystem of Best-in-Class Products"
          as="h1"
          className="text-4xl font-bold text-center text-foreground sm:text-5xl md:text-6xl mb-6 !font-headline"
        />
        <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-12">
          Flow Networks builds intelligent solutions on a foundation of proven, world-class technology. We select and integrate powerful, specialized platforms, orchestrating them through our AI Gateway to create a unified and seamless experience for your venue.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {productPillars.map((product) => (
            <Card key={product.label} className="group bg-card rounded-xl overflow-hidden border border-border/50 flex flex-col transition-all duration-500 ease-gentle shadow-lg hover:shadow-primary/20 hover:border-primary/30 will-change-transform hover:-translate-y-1">
              <CardHeader className="items-center text-center p-6">
                <div className="p-4 rounded-full bg-primary/10 inline-block mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <product.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-foreground transition-colors group-hover:text-primary">{product.label}</CardTitle>
                {product.shortDescription && (
                   <p className="text-sm text-muted-foreground pt-1">{product.shortDescription}</p>
                )}
              </CardHeader>
              <div className="p-6 pt-0 mt-auto text-center">
                <EnhancedButton asChild variant="tertiary" size="sm">
                  <Link href={product.href}>
                    Learn More <ArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </EnhancedButton>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
    <CallToActionSection />
    </>
  );
}
