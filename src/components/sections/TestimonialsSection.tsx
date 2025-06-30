'use client';

import { Star, Quote } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: 'Sarah Chen, CTO',
    company: 'Innovatech Solutions',
    quote: "Flow Networks delivered a robust and scalable network infrastructure that has been pivotal for our growth. Their expertise and support are top-notch.",
    rating: 5,
    companyLogo: 'https://placehold.co/120x40.png?text=Innovatech', 
    logoHint: 'innovatech logo',
  },
  {
    name: 'John Miller, Operations Director',
    company: 'Alpha Logistics',
    quote: "The reliability of our new WiFi system has drastically improved our operational efficiency. We've seen a significant reduction in downtime.",
    rating: 5,
    companyLogo: 'https://placehold.co/120x40.png?text=AlphaLogistics',
    logoHint: 'alpha logistics logo',
  },
  {
    name: 'Linda Rodriguez, IT Manager',
    company: 'Summit Retail Group',
    quote: 'From consultation to deployment, Flow Networks was a true partner. Their location intelligence solution has provided us with invaluable customer insights.',
    rating: 4,
    companyLogo: 'https://placehold.co/120x40.png?text=SummitRetail',
    logoHint: 'summit retail logo',
  },
   {
    name: 'David Kim, General Manager',
    company: 'The Grand Plaza Hotel',
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
        <p className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12 leading-relaxed">
          Hear from our valued clients who have experienced the Flow Networks difference and achieved remarkable results.
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto" 
        >
          <CarouselContent className="-ml-4 px-2"> 
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4"> 
                <Card className="h-full flex flex-col bg-card rounded-xl overflow-hidden border border-border/50 group transition-all duration-slow ease-gentle shadow-[var(--shadow-level-1)] hover:shadow-[var(--shadow-level-4),var(--glow-yellow)] hover:border-accent/40 will-change-transform will-change-shadow will-change-border-color hover:scale-[1.02] hover:-translate-y-[4px]">
                  <CardHeader className="p-6 pb-2">
                    {testimonial.companyLogo && (
                      <div className="h-8 mb-4 flex items-center">
                         <Image 
                          src={testimonial.companyLogo} 
                          alt={`${testimonial.company} Logo`}
                          width={100} 
                          height={32} 
                          data-ai-hint={testimonial.logoHint}
                          className="object-contain w-auto h-full opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                    )}
                     <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground/30'}`}
                          />
                        ))}
                      </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-2 flex-grow flex flex-col">
                    <Quote className="w-8 h-8 text-accent/30 mb-3 transform -scale-x-100" />
                    <p className="text-base text-foreground/90 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div className="mt-auto">
                      <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-40px] top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 disabled:opacity-30 max-sm:hidden bg-card/80 hover:bg-card border-border shadow-md"/>
          <CarouselNext className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-primary hover:text-primary/80 disabled:opacity-30 max-sm:hidden bg-card/80 hover:bg-card border-border shadow-md"/>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
