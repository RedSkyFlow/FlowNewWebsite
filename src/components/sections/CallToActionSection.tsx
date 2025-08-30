// src/components/sections/CallToActionSection.tsx
'use client';

import { motion } from 'framer-motion';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { EnhancedButton } from '../ui/enhanced-button';
import { Card } from '../ui/card';

interface CallToActionSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

const CallToActionSection = ({
  title = "Ready to Build Your Intelligent Venue?",
  description = "Partner with Flow Networks to build a resilient, secure, and future-ready network. Contact our experts today for a personalized consultation and let's engineer your success.",
  ctaText = "Get Started Today",
  ctaLink = "/contact"
}: CallToActionSectionProps) => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="group overflow-hidden bg-transparent border-2 border-accent/20 shadow-glow-accent/50 transition-all duration-500 hover:border-accent/50 hover:shadow-glow-accent">
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-29c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm63 59c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm34 90c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm56-76c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23FFFFFF' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              backgroundSize: '300px 300px',
            }}
          ></div>
          <div className="relative z-10 text-center p-12 md:p-16">
            <AnimatedHeading 
              text={title} 
              as="h2" 
              className="text-3xl font-bold sm:text-4xl md:text-5xl mb-6" 
            />
            <motion.p 
              className="mx-auto max-w-2xl text-lg text-muted-foreground font-body md:text-xl mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: 'spring', stiffness: 120 }}
            >
              <EnhancedButton 
                asChild 
                size="lg"
                variant="secondary"
                glow
              >
                <Link href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </EnhancedButton>
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CallToActionSection;
