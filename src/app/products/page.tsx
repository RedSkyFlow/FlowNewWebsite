
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { MAIN_NAV_LINKS } from '@/lib/constants';
import { CardFooter } from '@/components/ui/card';
import GlassCard from '@/components/shared/GlassCard';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import CallToActionSection from '@/components/sections/CallToActionSection';

const ProductsPage: NextPage = () => {
  const productsNavLink = MAIN_NAV_LINKS.find(link => link.label === 'Products');
  const productPillars = productsNavLink?.subLinks || [];
  const glowClasses = ['hover-glow-primary', 'hover-glow-secondary', 'hover-glow-accent', 'hover-glow-impact', 'hover-glow-premium', 'hover-glow-innovation'];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <ScrollAnimatedSection as="div" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
        <AnimatedHeading text="Our Core Product Pillars" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
        <motion.p 
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          We integrate best-in-class technologies to build our comprehensive solutions. These are the powerful, standalone products that form the foundation of our intelligent venue ecosystem.
        </motion.p>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection as="div" className="py-16 md:py-24">
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
                <GlassCard className={cn("flex flex-col h-full text-center items-center p-6", glowClasses[i % glowClasses.length])}>
                  {Icon && (
                    <div className="p-4 rounded-full bg-primary/10 inline-block mb-4">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                  )}
                  <h3 className="font-headline text-xl text-foreground font-bold">{product.label}</h3>
                  <p className="text-muted-foreground text-sm mt-2 flex-grow">{product.shortDescription}</p>
                  <CardFooter className="p-0 pt-6 mt-auto w-full">
                    <EnhancedButton asChild variant="outline" size="sm" className="w-full">
                      <Link href={product.href}>
                         <span className="flex items-center gap-2">View Product Details <ArrowRight className="ml-2 h-4 w-4" /></span>
                      </Link>
                    </EnhancedButton>
                  </CardFooter>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </ScrollAnimatedSection>
      <div className="py-16 md:py-24">
        <CallToActionSection />
      </div>
    </div>
  );
}

export default ProductsPage;
