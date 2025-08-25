// src/components/sections/TestimonialsSection.tsx
'use client';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { Star } from 'lucide-react';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { CardContent } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';

// Placeholder data - this should eventually come from a CMS or constants file
const testimonials = [
  {
    quote: "Flow Networks transformed our guest WiFi from a simple utility into our most powerful marketing asset. The data we capture is invaluable.",
    name: "Elena Rodriguez",
    title: "Director of Guest Experience",
    company: "The Grand Plaza Hotel",
    logoUrl: "/images/logos/Miami Heat logo.webp",
    logoHint: "luxury hotel logo",
  },
  {
    quote: "The reliability and performance of their high-density solution for our stadium was flawless. We had 50,000+ fans connected without a single issue.",
    name: "David Chen",
    title: "Chief Technology Officer",
    company: "Titans Stadium", // Assuming Titans Stadium maps to Nascar
    logoUrl: "/images/logos/Nascar logo.webp",
    logoHint: "sports stadium logo",
  },
  {
    quote: "Understanding shopper flow with their Location Intelligence has been a game-changer for our mall. We've optimized layouts and increased tenant satisfaction.",
    name: "Fatima Al-Jamil",
    title: "Operations Manager",
    company: "Galleria Malls", // Assuming Galleria Malls maps to Newcastle Utd
    logoUrl: "/images/logos/Newcastle Utd Logo.webp",
    logoHint: "shopping mall logo",
  },
  {
    quote: "The Allxs integration for our cashless festival was seamless. It dramatically increased per-capita spend and eliminated queues. We'll never go back to cash.",
    name: "Marcus Thorne",
    title: "Event Producer",
    company: "VibeFest", // Assuming VibeFest maps to Kaseya Centre
    logoUrl: "/images/logos/Kaseya Centre Logo.webp",
    logoHint: "music festival logo",
  },
  {
    quote: "The secure, segmented network they deployed for our corporate campus gives us total peace of mind. Employee and guest networks are perfectly isolated.",
    name: "Samantha Lee",
    title: "Head of IT Infrastructure",
    company: "Innovatech Corp", // Assuming Innovatech Corp maps to Baron Group
    logoUrl: "/images/logos/Baron Group Logo Round.webp",
    logoHint: "tech company logo",
  },
];

const TestimonialsSection = () => {
  return (
    <ScrollAnimatedSection as="section" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedHeading
            text="Trusted by Industry Leaders"
            as="h2"
            className="text-3xl font-bold sm:text-4xl"
          />
          <p className="text-lg text-muted-foreground font-body mt-4">
            Our platform is engineered for the most demanding environments. Here's what our partners have to say.
          </p>
        </div>
      </div>
      {/* 
        DEFINITIVE FIX: The Marquee component renders its children in a single long line. 
        This line was overflowing the page bounds. By wrapping it in a div with `w-full` 
        and `overflow-hidden`, we constrain the marquee's visible area to the screen width,
        preventing it from affecting the overall page layout. The CSS mask provides a 
        nice visual fade on the edges.
      */}
      <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee
          gradient={false} // The gradient is now handled by the CSS mask on the parent
          speed={40}
          pauseOnHover={true}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="mx-4 w-[350px] md:w-[450px]">
              <GlassCard className="h-full flex flex-col">
                <CardContent className="p-6 flex-grow">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-left font-body text-muted-foreground italic">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
                <div className="p-6 pt-4 border-t border-primary/20 mt-auto flex items-center gap-4">
                  <Image
                    src={testimonial.logoUrl}
                    alt={`${testimonial.company} Logo`}
                    width={40}
                    height={40}
                    data-ai-hint={testimonial.logoHint}
                    className="rounded-full bg-muted object-contain"
                  />
                  <div>
                    <p className="font-semibold text-foreground text-left">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground text-left">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </Marquee>
      </div>
    </ScrollAnimatedSection>
  );
};

export default TestimonialsSection;
