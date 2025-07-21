
'use client';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { MAIN_NAV_LINKS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const productsNavLink = MAIN_NAV_LINKS.find(link => link.label === 'Products');
const productPillars = productsNavLink?.subLinks || [];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Our Core Products"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-12">
        We integrate best-in-class technologies to build our comprehensive solutions. These are the powerful, standalone products that form the foundation of our intelligent venue ecosystem.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {productPillars.map((product) => (
          <Card key={product.label} className="group bg-card rounded-xl overflow-hidden border border-border/50 flex flex-col transition-all duration-500 ease-gentle shadow-lg hover:shadow-primary/20 hover:border-primary/30 will-change-transform hover:-translate-y-1">
            <CardHeader className="items-center text-center p-6">
              <div className="p-4 rounded-full bg-primary/10 inline-block mb-4 transition-all duration-300 group-hover:scale-110">
                <product.icon className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl text-foreground transition-colors group-hover:text-primary">{product.label}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow px-6 text-center">
              <p className="text-muted-foreground text-sm mb-4">{product.shortDescription}</p>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <EnhancedButton asChild variant="tertiary" size="sm" className="w-full">
                <Link href={product.href}>
                  View Product Details <ArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </EnhancedButton>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
