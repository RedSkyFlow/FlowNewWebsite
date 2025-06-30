'use client';

import { useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from "next/image";

// Your original testimonials data
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

// Calculate the total width for the animation
// Card width (basis-1/3) + gap (p-4). Adjust if your sizing changes.
const CARD_WIDTH_PERCENT = 33.33;
const GAP_PERCENT = 2; // Approximation
const TOTAL_WIDTH = testimonials.length * (CARD_WIDTH_PERCENT + GAP_PERCENT);

const TestimonialsSection = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (direction: 'forward' | 'backward') => {
    if (!scrollerRef.current) return;
    scrollerRef.current.style.animationPlayState = 'running';
    scrollerRef.current.style.animationDirection = direction === 'forward' ? 'normal' : 'reverse';
  };

  const handleMouseLeave = () => {
    if (!scrollerRef.current) return;
    scrollerRef.current.style.animationPlayState = 'paused';
  };

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      {/* This style tag contains the necessary animation.
          Best practice is to move this to your global CSS file. */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-${TOTAL_WIDTH}%));
            }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
            animation-play-state: paused; /* Start paused */
          }
        `}
      </style>

      <div className="container mx-auto px-4 md:px-6 relative">
        <AnimatedHeading
          text="Trusted by Industry Leaders"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4 !font-headline"
        />
        <p className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12 leading-relaxed">
          Hear from our valued clients who have experienced the Flow Networks difference and achieved remarkable results.
        </p>

        {/* --- Navigation Buttons --- */}
        <button
          onMouseEnter={() => handleMouseEnter('backward')}
          onMouseLeave={handleMouseLeave}
          className="absolute left-[-10px] sm:left-4 top-1/2 -translate-y-1/2 z-10 text-primary hover:text-primary/80 max-sm:hidden bg-card/80 hover:bg-card border-border shadow-md rounded-full w-10 h-10 flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onMouseEnter={() => handleMouseEnter('forward')}
          onMouseLeave={handleMouseLeave}
          className="absolute right-[-10px] sm:right-4 top-1/2 -translate-y-1/2 z-10 text-primary hover:text-primary/80 max-sm:hidden bg-card/80 hover:bg-card border-border shadow-md rounded-full w-10 h-10 flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6" />
        </button>


        {/* --- Scroller --- */}
        <div className="w-full max-w-5xl mx-auto overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div
            ref={scrollerRef}
            className="flex w-max animate-scroll"
          >
            {/* The magic trick: render the list of testimonials TWICE for a seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="w-[30vw] md:w-[33vw] lg:w-[30vw] flex-shrink-0 p-4">
                 <Card className="h-full flex flex-col bg-card rounded-xl overflow-hidden border border-border/50 group transition-all duration-slow ease-gentle shadow-[var(--shadow-level-1)] will-change-transform will-change-shadow will-change-border-color">
                   <CardHeader className="p-6 pb-2">
                     {testimonial.companyLogo && (
                       <div className="h-8 mb-4 flex items-center">
                         <Image
                           src={testimonial.companyLogo}
                           alt={`${testimonial.company} Logo`}
                           width={100}
                           height={32}
                           data-ai-hint={testimonial.logoHint}
                           className="object-contain w-auto h-full opacity-70"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
