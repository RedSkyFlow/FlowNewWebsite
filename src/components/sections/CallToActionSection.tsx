
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-20 md:py-28 gradient-orange-blue text-primary-foreground relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-29c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm63 59c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zM34 90c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm56-76c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23FFFFFF' fill-opacity='0.08' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          backgroundSize: '300px 300px',
        }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <AnimatedHeading 
          text="Ready to Transform Your Network Infrastructure?" 
          as="h2" 
          className="text-3xl font-bold sm:text-4xl md:text-5xl mb-6 !font-headline text-white" 
        />
        <motion.p 
          className="mx-auto max-w-xl text-lg text-primary-foreground/90 md:text-xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Partner with Flow Networks to build a resilient, secure, and future-ready network. Contact our experts today for a personalized consultation and let's engineer your success.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 120 }}
        >
          <Button 
            asChild 
            size="lg" 
            className="group bg-white text-primary hover:bg-gray-100 shadow-xl transform transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded-lg px-8 py-3 text-base font-semibold" 
          >
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;

    