
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Building, Briefcase } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import Image from 'next/image';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: 'Enterprise Network Transformation for Innovatech Corp',
    industry: 'Technology',
    icon: Building,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'modern office tech',
    summary: 'Discover how Flow Networks redesigned Innovatech\'s infrastructure for enhanced scalability, performance, and future growth.',
    href: '/resources/case-studies/innovatech-corp', 
  },
  {
    title: 'SMB Growth Powered by Secure Connectivity for LocalBiz Co.',
    industry: 'Retail',
    icon: Briefcase,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'small retail store',
    summary: 'Learn how our managed services and secure WiFi solutions helped LocalBiz Co. expand their operations efficiently and safely.',
    href: '/resources/case-studies/localbiz-co', 
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};


const CaseStudiesTeaserSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/20 backdrop-blur-sm"> 
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Real Results, Real Impact"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4 !font-headline"
        />
        <motion.p 
          className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore how Flow Networks has partnered with organizations like yours to deliver transformative network solutions and measurable success.
        </motion.p>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group flex flex-col border border-border/50 hover:border-primary/30 h-full"> 
                <div className="relative h-52 w-full overflow-hidden"> 
                  <Image 
                    src={study.image} 
                    alt={study.title} 
                    layout="fill" 
                    objectFit="cover" 
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={study.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> 
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <study.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs font-semibold uppercase text-primary tracking-wider">{study.industry}</span>
                  </div>
                  <CardTitle className="font-headline text-xl text-foreground group-hover:text-primary transition-colors">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 flex-grow">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{study.summary}</p>
                </CardContent>
                <div className="p-6 pt-2 mt-auto"> 
                  <Button asChild variant="link" className="text-primary p-0 h-auto group/link font-semibold hover:text-primary/80">
                    <Link href={study.href}>
                      Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg" variant="outline" className="group rounded-lg px-8 py-3 text-base font-semibold border-primary/50 text-primary hover:bg-primary/5 hover:border-primary hover:text-primary">
            <Link href="/resources/case-studies"> 
              Explore All Case Studies <BookOpen className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:rotate-3" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesTeaserSection;

    
