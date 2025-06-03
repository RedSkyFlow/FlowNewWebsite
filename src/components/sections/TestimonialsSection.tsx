'use client';

import { motion } from 'framer-motion';
import { Star, UserCircle } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Assuming you have a carousel component or will create one

const testimonials = [
  {
    name: 'Sarah L., CEO TechStartup',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'woman portrait',
    quote: "FlowAI Gateway revolutionized our customer service. The AI agents are incredibly efficient and easy to integrate!",
    rating: 5,
  },
  {
    name: 'John B., Operations Manager',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'man corporate',
    quote: "We've seen a 30% increase in productivity since implementing FlowAI. The industry-specific solutions are a game-changer.",
    rating: 5,
  },
  {
    name: 'Emily K., Retail Chain Owner',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'woman professional',
    quote: 'The AI chatbot has significantly improved user engagement on our e-commerce platform. Highly recommended!',
    rating: 4,
  },
   {
    name: 'David H., Hotel GM',
    image: 'https://placehold.co/100x100.png',
    imageHint: 'man hospitality',
    quote: 'Our guests love the instant responses from the AI concierge. FlowAI has elevated our service standards.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading 
          text="Loved by Businesses Worldwide" 
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
          Hear what our satisfied clients have to say about FlowAI Gateway and its transformative impact on their operations.
        </motion.p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card overflow-hidden group">
                    <CardHeader className="flex flex-row items-center gap-4 p-4">
                      <Image 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        width={60} 
                        height={60} 
                        className="rounded-full border-2 border-primary group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={testimonial.imageHint}
                      />
                      <div>
                        <CardTitle className="text-md font-semibold text-foreground">{testimonial.name}</CardTitle>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 flex-grow">
                      <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 max-sm:hidden"/>
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 max-sm:hidden"/>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
