
'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, ShieldCheck, Brain, Settings, type LucideIcon } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

type WhyChooseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const whyChooseItems: WhyChooseItem[] = [
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Our certified engineers bring years of experience in designing and managing complex network infrastructures for diverse industries.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability & Security',
    description: 'We prioritize robust security protocols and resilient network designs to ensure maximum uptime and protect your critical assets.',
  },
  {
    icon: Brain,
    title: 'Strategic Partnership',
    description: 'We collaborate closely with you to understand your unique business goals and deliver tailored, future-proof solutions.',
  },
  {
    icon: Settings,
    title: 'Innovative Technology',
    description: 'Leveraging cutting-edge technologies and best practices to provide you with a scalable and efficient network solutions.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Why Partner with Flow Networks?"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4 !font-headline"
        />
        <motion.p
          className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choosing the right network solutions provider is crucial. Flow Networks stands out through commitment to excellence, innovation, and client success.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whyChooseItems.map((item, i) => (
            <div
              key={item.title}
              className="h-full"
            >
              <Card className="group h-full text-center bg-card rounded-xl overflow-hidden border border-border/50 flex flex-col transition-all duration-slow ease-gentle shadow-[var(--shadow-level-1)] hover:shadow-[var(--shadow-level-3),var(--glow-gold)] hover:border-accent/40 will-change-transform will-change-shadow will-change-border-color hover:scale-[1.02] hover:-translate-y-[4px]">
                <CardHeader className="pt-8 pb-4">
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-5 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-semibold font-headline text-foreground transition-colors duration-300 group-hover:text-accent">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8 flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
