'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Exact Brand Guide Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007A80]/20 via-[#0A0903] to-[#6A0DAD]/20"></div>
      
      {/* Particle Background Effect - Exact Match */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #007A80 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #0282F2 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, #D4AF37 0%, transparent 50%)`,
          backgroundSize: '300px 300px, 400px 400px, 200px 200px',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
        animate={{ 
          backgroundPosition: ['0% 0%, 100% 100%, 50% 50%', '100% 100%, 0% 0%, 25% 75%', '0% 0%, 100% 100%, 50% 50%']
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear",
          type: "tween"
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        {/* Badge - Exact Brand Guide Style */}
        <motion.div
          className="inline-flex items-center rounded-full border border-[#007A80]/30 bg-[#0F0E08]/50 backdrop-blur-md px-4 py-2 text-sm text-[#E2FDFF] mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        >
          <span className="text-[#D4AF37] mr-2">✨</span>
          Transform Your Network Infrastructure
        </motion.div>

        {/* Heading - Exact Brand Guide Typography */}
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-6 text-[#E2FDFF]"
          style={{
            background: 'linear-gradient(135deg, #E2FDFF 0%, #D4AF37 50%, #0282F2 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
        >
          Ready to Transform Your Network?
        </motion.h2>
        
        {/* Description - Exact Brand Guide Style */}
        <motion.p 
          className="mx-auto max-w-2xl text-lg text-[#E2FDFF]/80 md:text-xl mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        >
          Partner with Flow Networks to build a resilient, secure, and future-ready network. 
          Contact our experts today for a personalized consultation and let's engineer your success.
        </motion.p>
        
        {/* Buttons - Exact Brand Guide Implementation */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        >
          {/* Primary Button - Exact Brand Guide Style */}
          <motion.div
            whileHover={{ 
              y: -4,
              scale: 1.02,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2), 0 0 20px rgba(2, 130, 242, 0.3)'
            }}
            whileTap={{ y: -2, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            style={{ transform: 'translateZ(0)', willChange: 'transform' }}
          >
            <Button 
              asChild 
              size="lg" 
              className="group bg-[#0282F2] text-[#E2FDFF] hover:bg-[#0282F2]/90 border border-[#0282F2]/30 shadow-lg px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              style={{ transform: 'translateZ(0)', willChange: 'transform' }}
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Secondary Button - Exact Brand Guide Style */}
          <motion.div
            whileHover={{ 
              y: -4,
              scale: 1.02,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 122, 128, 0.3)'
            }}
            whileTap={{ y: -2, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            style={{ transform: 'translateZ(0)', willChange: 'transform' }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="group bg-transparent text-[#007A80] border border-[#007A80]/30 hover:bg-[#007A80]/10 hover:text-[#E2FDFF] hover:border-[#007A80]/50 backdrop-blur-md px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              style={{ transform: 'translateZ(0)', willChange: 'transform' }}
            >
              Learn More
              <Mail className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
