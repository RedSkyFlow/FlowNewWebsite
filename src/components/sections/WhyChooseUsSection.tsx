'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Zap, 
  Users, 
  Award,
  TrendingUp,
  Clock,
  CheckCircle,
  Star
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security protocols with advanced threat detection and real-time monitoring.",
    badge: "Secure",
    color: "teal"
  },
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Ultra-fast network speeds with 99.9% uptime guarantee and intelligent load balancing.",
    badge: "Fast",
    color: "blue"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "24/7 dedicated support from certified network engineers and solution architects.",
    badge: "Support",
    color: "gold"
  },
  {
    icon: Award,
    title: "Industry Leading",
    description: "Award-winning solutions trusted by Fortune 500 companies worldwide.",
    badge: "Trusted",
    color: "orange"
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Future-proof infrastructure that scales seamlessly with your business needs.",
    badge: "Scalable",
    color: "teal"
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Quick implementation with minimal downtime and comprehensive migration support.",
    badge: "Quick",
    color: "blue"
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Exact Brand Guide Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F0E08]/50 via-[#0A0903] to-[#0F0E08]/50"></div>
      
      {/* Particle Effect Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#007A80] rounded-full animate-float-brand"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#0282F2] rounded-full animate-float-brand" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-float-brand" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header - Exact Brand Guide Style */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center rounded-full border border-[#007A80]/30 bg-[#0F0E08]/50 backdrop-blur-md px-4 py-2 text-sm text-[#E2FDFF] mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
            style={{ transform: 'translateZ(0)', willChange: 'transform' }}
          >
            <Star className="mr-2 h-4 w-4 text-[#D4AF37]" />
            Why Choose Flow Networks
          </motion.div>

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
            Excellence in Every Connection
          </motion.h2>
          
          <motion.p 
            className="mx-auto max-w-2xl text-lg text-[#E2FDFF]/80 md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            style={{ transform: 'translateZ(0)', willChange: 'transform' }}
          >
            Discover why industry leaders trust Flow Networks for their critical infrastructure needs. 
            Our commitment to innovation and excellence sets us apart.
          </motion.p>
        </div>

        {/* Features Grid - Exact Brand Guide Implementation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const glowColors = {
              teal: 'hover:shadow-glow-teal',
              blue: 'hover:shadow-glow-blue', 
              gold: 'hover:shadow-glow-gold',
              orange: 'hover:shadow-glow-orange'
            };
            
            const iconColors = {
              teal: 'text-[#007A80]',
              blue: 'text-[#0282F2]',
              gold: 'text-[#D4AF37]',
              orange: 'text-[#F46036]'
            };

            const badgeColors = {
              teal: 'bg-[#007A80]/20 text-[#007A80] border-[#007A80]/30',
              blue: 'bg-[#0282F2]/20 text-[#0282F2] border-[#0282F2]/30',
              gold: 'bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30',
              orange: 'bg-[#F46036]/20 text-[#F46036] border-[#F46036]/30'
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + (index * 0.1), 
                  ease: [0.4, 0.0, 0.2, 1] 
                }}
                style={{ transform: 'translateZ(0)', willChange: 'transform' }}
              >
                <motion.div
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    rotateY: 2,
                    rotateX: 2
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
                  style={{ 
                    transform: 'translateZ(0)',
                    willChange: 'transform',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <Card className={`glass-card h-full p-6 text-center group cursor-pointer ${glowColors[feature.color as keyof typeof glowColors]}`}>
                    <CardContent className="p-0">
                      {/* Icon with Animation */}
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0F0E08]/50 backdrop-blur-md border border-[#E2FDFF]/10 mb-6 ${iconColors[feature.color as keyof typeof iconColors]}`}
                        whileHover={{ 
                          scale: 1.1,
                          rotateY: 180
                        }}
                        transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
                        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                      >
                        <Icon className="h-8 w-8" />
                      </motion.div>

                      {/* Badge */}
                      <Badge 
                        className={`mb-4 ${badgeColors[feature.color as keyof typeof badgeColors]} backdrop-blur-md`}
                        style={{ transform: 'translateZ(0)' }}
                      >
                        {feature.badge}
                      </Badge>

                      {/* Title */}
                      <motion.h3 
                        className="text-xl font-semibold mb-4 text-[#E2FDFF] group-hover:text-[#D4AF37] transition-colors duration-300"
                        style={{ transform: 'translateZ(0)', willChange: 'color' }}
                      >
                        {feature.title}
                      </motion.h3>

                      {/* Description */}
                      <p className="text-[#E2FDFF]/70 leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Check Icon */}
                      <motion.div
                        className="mt-6 inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#007A80]/20 text-[#007A80]"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
                        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
                      >
                        <CheckCircle className="h-5 w-5" />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA - Exact Brand Guide Style */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.4, 0.0, 0.2, 1] }}
          style={{ transform: 'translateZ(0)', willChange: 'transform' }}
        >
          <p className="text-[#E2FDFF]/60 mb-6 text-lg">
            Ready to experience the Flow Networks difference?
          </p>
          <motion.button
            className="btn-primary-brand inline-flex items-center px-8 py-4 text-lg font-semibold"
            whileHover={{ 
              y: -4,
              scale: 1.02,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2), 0 0 20px rgba(2, 130, 242, 0.3)'
            }}
            whileTap={{ y: -2, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
            style={{ transform: 'translateZ(0)', willChange: 'transform' }}
          >
            Get Started Today
            <motion.div
              className="ml-2"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
