'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { MAIN_NAV_LINKS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import GlassCard from '@/components/shared/GlassCard';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';

const productsNavLink = MAIN_NAV_LINKS.find(link => link.label === 'Products');
const productPillars = productsNavLink?.subLinks || [];

const ProductsPage: NextPage = () => {

  const glowClasses = ['hover-glow-primary', 'hover-glow-secondary', 'hover-glow-accent', 'hover-glow-impact', 'hover-glow-premium', 'hover-glow-innovation'];

  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      
      {/* --- Hero Section --- */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/solutions/Flow AI networks.png"
          alt="An abstract visualization of an interconnected network of products and solutions."
          fill
          className="object-cover object-center -z-20"
          priority
        />
        <div className="absolute inset-0 bg-black/70 -z-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <AnimatedHeading text="Our Core Product Pillars" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <motion.p 
              className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We integrate best-in-class technologies to build our comprehensive solutions. These are the powerful, standalone products that form the foundation of our intelligent venue ecosystem.
            </motion.p>
        </div>
      </section>

      <ScrollAnimatedSection as="section" className="relative z-10">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {productPillars.map((product, i) => {
                const Icon = product.icon;
                return (
                  <motion.div 
                    key={product.label}
                    initial={{ opacity: 0, y: 40 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true, amount: 0.3 }} 
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="h-full"
                  >
                    <GlassCard className={cn("flex flex-col h-full text-center items-center", glowClasses[i % glowClasses.length])}>
                      <CardHeader className="items-center p-6">
                        {Icon && (
                          <div className="p-4 rounded-full bg-primary/10 inline-block mb-4">
                            <Icon className="w-10 h-10 text-primary" />
                          </div>
                        )}
                        <CardTitle className="font-headline text-xl text-foreground">{product.label}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow px-6">
                        <p className="text-muted-foreground text-sm">{product.shortDescription}</p>
                      </CardContent>
                      <CardFooter className="p-6 pt-0 mt-auto w-full">
                        <EnhancedButton asChild variant="outline" size="sm" className="w-full">
                          <Link href={product.href}>
                            View Product Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </EnhancedButton>
                      </CardFooter>
                    </GlassCard>
                  </motion.div>
                )
              })}
            </div>
        </div>
      </ScrollAnimatedSection>
    </div>
  );
}

export default ProductsPage;
