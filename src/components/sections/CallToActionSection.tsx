
'use client';

import { motion } from 'framer-motion';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { EnhancedButton } from '@/components/ui/enhanced-button';

const CallToActionSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          className="inline-flex items-center rounded-full border border-primary/30 bg-card/50 backdrop-blur-md px-4 py-2 text-sm text-foreground mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        >
          <span className="text-primary mr-2">✨</span>
          Ready to Elevate Your Venue?
        </motion.div>

        <AnimatedHeading
            text="Let's Build Your Intelligent Environment"
            as="h2"
            className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground !font-headline"
            wordAnimation
            staggerChildren={0.02}
        />
        
        <motion.p 
          className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
        >
          Partner with Flow Networks to build a resilient, secure, and future-ready network. 
          Contact our experts today for a personalized consultation and let's engineer your success.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
        >
            <EnhancedButton asChild size="lg" variant="secondary" glow>
              <Link href="/contact">
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </EnhancedButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
