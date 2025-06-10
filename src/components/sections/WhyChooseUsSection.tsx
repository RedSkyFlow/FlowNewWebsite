
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Award, Users, ShieldCheck, Lightbulb, LucideIcon } from 'lucide-react';

type WhyChooseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const whyChooseItems: WhyChooseItem[] = [
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Our certified engineers and architects bring years of experience in designing and managing complex network infrastructures.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliability & Security',
    description: 'We prioritize robust security measures and resilient network designs to ensure uptime and protect your critical assets.',
  },
  {
    icon: Users,
    title: 'Customer-Centric Approach',
    description: 'We partner with you to understand your unique needs and deliver tailored solutions with dedicated support.',
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We stay at the forefront of networking technology to provide you with cutting-edge solutions for future growth.',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Why Choose Flow Networks?"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12 !font-headline"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseItems.map((item) => (
            <Card key={item.title} className="text-center shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold font-headline text-foreground">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
