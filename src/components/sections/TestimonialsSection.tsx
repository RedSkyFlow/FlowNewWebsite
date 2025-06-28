
'use client';

import { motion } from 'framer-motion';
import { Star, UserCircle, Quote } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: 'Sarah Chen, CTO at Innovatech Solutions',
    imageHint: 'professional woman portrait',
    quote: "Flow Networks delivered a robust and scalable network infrastructure that has been pivotal for our growth. Their expertise and support are top-notch.",
    rating: 5,
    companyLogo: 'https://placehold.co/120x40.png?text=Innovatech', 
    logoHint: 'innovatech logo',
  },
  {
    name: 'John Miller, Operations Director at Alpha Logistics',
    imageHint: 'man corporate suit',
    quote: "The reliability of our new WiFi system, implemented by Flow Networks, has drastically improved our operational efficiency. We've seen a significant reduction in downtime.",
    rating: 5,
    companyLogo: 'https://placehold.co/120x40.png?text=AlphaLogistics',
    logoHint: 'alpha logistics logo',
  },
  {
    name: 'Linda Rodriguez, IT Manager at Summit Retail Group',
    imageHint: 'professional woman smiling',
    quote: 'From consultation to deployment, Flow Networks was a true partner. Their location intelligence solution has provided us with invaluable customer insights.',
    rating: 4,
    companyLogo: 'https://placehold.co/120x40.png?text=SummitRetail',
    logoHint: 'summit retail logo',
  },
   {
    name: 'David Kim, General Manager at The Grand Plaza Hotel',
    imageHint: 'hotel manager professional',
    quote: 'Our guests consistently praise the seamless WiFi experience. Flow Networks understood our unique hospitality needs and delivered beyond expectations.',
    rating: 5,
    companyLogo: 'https://placehold.co/120x40.png?text=GrandPlaza',
    logoHint: 'grand plaza hotel logo',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background"> 
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading 
          text="Trusted by Industry Leaders" 
          as="h2" 
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4 !font-headline"
        />
        <motion.p 
          className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hear from our valued clients who have experienced the Flow Networks difference and achieved remarkable results.
        </motion.p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto" 
        >
          <CarouselContent className="-ml-4"> 
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4"> 
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col bg-card shadow-lg rounded-xl overflow-hidden border border-border/50 group transition-all duration-[980ms] ease-in-out hover:-translate-y-1.5 hover:shadow-brand-lg hover:shadow-glow-teal animate-float-brand">
                    <CardHeader className="p-6 pb-0">
                      {testimonial.companyLogo && (
                        <div className="h-10 mb-4 flex items-center">
                           <Image 
                            src={testimonial.companyLogo} 
                            alt={`${testimonial.name.split(',')[1]?.trim() || 'Client'} Logo`}
                            width={100} 
                            height={32} 
                            data-ai-hint={testimonial.logoHint}
                            className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      )}
                       <div className="flex items-center mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-primary fill-primary' : 'text-muted-foreground/30'}`}
                            />
                          ))}
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-2 flex-grow flex flex-col">
                      <Quote className="w-8 h-8 text-primary/50 mb-3 transform -scale-x-100" />
                      <p className="text-base text-foreground italic mb-6 flex-grow">"{testimonial.quote}"</p>
                      <div className="mt-auto">
                        <p className="text-sm font-semibold text-foreground">{testimonial.name.split(',')[0]}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.name.split(',')[1]?.trim()}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-20px] top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 disabled:opacity-30 max-sm:hidden bg-background/80 hover:bg-background border-border shadow-md"/>
          <CarouselNext className="absolute right-[-20px] top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 disabled:opacity-30 max-sm:hidden bg-background/80 hover:bg-background border-border shadow-md"/>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
