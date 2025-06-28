
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Award, ShieldCheck, Brain, Settings, LucideIcon } from 'lucide-react'; // Updated icons
import { motion } from 'framer-motion';

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
    description: 'Leveraging cutting-edge technologies and best practices to provide you with scalable and efficient network solutions.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

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
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="h-full text-center bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden border border-border/50 flex flex-col"> 
                <CardHeader className="pt-8 pb-4">
                  <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold font-headline text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8 flex-grow">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
