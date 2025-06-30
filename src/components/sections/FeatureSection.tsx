'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, Users, Brain } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';

const features = [
  {
    icon: Zap,
    title: 'Rapid AI Integration',
    description: 'Seamlessly deploy AI agents into your existing systems with our intuitive gateway. Content adapted from flowhq.co.za for maximum relevance.',
    color: 'text-primary',
  },
  {
    icon: Users,
    title: 'Industry-Specific Solutions',
    description: 'Tailored AI agents for Hospitality, Retail, and more, designed to address unique industry challenges and opportunities.',
    color: 'text-accent',
  },
  {
    icon: Brain,
    title: 'Intelligent Automation',
    description: 'Leverage Purple.ai\'s core innovations, reframed within the AI Gateway narrative, to automate complex tasks and boost productivity.',
    color: 'text-secondary', 
  },
  {
    icon: CheckCircle,
    title: 'Scalable & Secure',
    description: 'Built for growth, our AI Gateway ensures robust security and scalability to meet your evolving business needs.',
    color: 'text-primary',
  },
];

const FeatureSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading 
          text="Why Choose FlowAI Gateway?" 
          as="h2" 
          className="text-3xl font-bold text-center text-foreground sm:text-4xl md:text-5xl mb-4"
        />
        <motion.p 
          className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the powerful features that make FlowAI Gateway the leading solution for integrating AI into your business operations.
        </motion.p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <GlassCard className="h-full flex flex-col items-start text-left border-border/30 hover:border-primary/50 transition-colors duration-300">
                <div className="mb-4 p-3 rounded-full bg-card/80 shadow-md">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground flex-grow">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
