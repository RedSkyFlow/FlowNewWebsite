'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-10 animation-wave-bg"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 40h2l-2 2V40zm-2 2h2l-2 2h-2v-2zm-2-2h2l-2 2h-2v-2zM2 0h2L0 2V0zm2 2h2L2 4H2V2zm-2 2h2L0 6V4zm0 2h2L0 8V6z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E\")"
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <AnimatedHeading 
          text="Ready to Transform Your Business?" 
          as="h2" 
          className="text-3xl font-bold sm:text-4xl md:text-5xl mb-6 !font-headline"
        />
        <motion.p 
          className="mx-auto max-w-xl text-lg text-primary-foreground/80 md:text-xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Join the forefront of AI innovation. Contact us today for a personalized demo and discover how FlowAI Gateway can elevate your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 150 }}
        >
          <Button asChild size="lg" className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl transform transition-transform duration-300 hover:scale-105 focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary">
            <Link href="/contact">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
