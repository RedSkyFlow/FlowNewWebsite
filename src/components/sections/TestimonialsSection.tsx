'use client';

import { Card, CardContent } from '@/components/ui/card';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import Image from "next/image";

const testimonials = [
  {
    name: 'Sarah Chen, CTO',
    company: 'Innovatech Solutions',
    quote: "Flow Networks delivered a robust and scalable network infrastructure that has been pivotal for our growth. Their expertise and support are top-notch.",
    logo: 'https://placehold.co/120x40.png',
    logoHint: 'tech logo'
  },
  {
    name: 'John Miller, Operations Director',
    company: 'Alpha Logistics',
    quote: "The reliability of our new WiFi system has drastically improved our operational efficiency. We've seen a significant reduction in downtime.",
    logo: 'https://placehold.co/120x40.png',
    logoHint: 'logistics logo'
  },
  {
    name: 'Linda Rodriguez, IT Manager',
    company: 'Summit Retail Group',
    quote: 'From consultation to deployment, Flow Networks was a true partner. Their location intelligence solution has provided us with invaluable customer insights.',
    logo: 'https://placehold.co/120x40.png',
    logoHint: 'retail logo'
  },
  {
    name: 'David Kim, General Manager',
    company: 'The Grand Plaza Hotel',
    quote: 'Our guests consistently praise the seamless WiFi experience. Flow Networks understood our unique hospitality needs and delivered beyond expectations.',
    logo: 'https://placehold.co/120x40.png',
    logoHint: 'hotel logo'
  },
  {
    name: 'Emily Carter, Facilities Head',
    company: 'Nexus Office Parks',
    quote: "The workspace utilization analytics have been a game-changer. We've optimized our office layouts and saved significantly on operational costs.",
    logo: 'https://placehold.co/120x40.png',
    logoHint: 'office logo'
  },
  {
    name: 'Michael Bryce, Event Coordinator',
    company: 'City Convention Center',
    quote: "Event WiFi is always a challenge. Flow Networks provided a flawless, high-density solution that handled our 10,000+ attendees without a single issue.",
    logo: 'https://placehold.co/120x40.png',
    logoHint: 'event logo'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <ScrollAnimatedSection>
        <div className="container mx-auto">
          <AnimatedHeading
            text="Trusted by Visionaries"
            as="h2"
            className="text-3xl font-bold text-center !font-headline [text-shadow:0_0_20px_hsla(var(--primary)/0.4)] sm:text-4xl"
          />
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground md:text-lg mb-16">
            We partner with world-class organizations to deliver exceptional results. Discover the core features that make it possible.
          </p>
          <div
            className="group w-full overflow-hidden"
            style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
          >
            <div className="flex w-max animate-scroll-horizontal gap-8 group-hover:[animation-play-state:paused]">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <Card
                  key={index}
                  className="w-[380px] flex-shrink-0 bg-[#0F0E08] rounded-xl border border-[#2D2C27] shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:border-primary transition-all duration-300"
                >
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex-grow">
                      {testimonial.logo && (
                        <Image
                          src={testimonial.logo}
                          alt={`${testimonial.company} Logo`}
                          width={120}
                          height={40}
                          data-ai-hint={testimonial.logoHint}
                          className="opacity-70 mb-6"
                        />
                      )}
                      <blockquote className="text-base text-foreground italic">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border/50">
                      <p className="text-sm font-semibold text-accent">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>
    </section>
  );
};

export default TestimonialsSection;
