
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Zap } from 'lucide-react'; // Zap for empower

export const metadata: Metadata = {
  title: 'About Us | Flow Networks',
  description: 'Learn about Flow Networks mission, vision, and how we are revolutionizing intelligent venues with our AI Gateway.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="About Flow Networks"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-12 !font-headline"
      />
      <div className="max-w-4xl mx-auto space-y-12">
        <Card className="shadow-xl bg-card">
          <CardHeader className="items-center text-center">
            <Target className="w-12 h-12 text-primary mb-3" />
            <CardTitle className="font-headline text-3xl text-primary">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center prose prose-lg max-w-none text-muted-foreground">
            <p>
              Flow Networks is dedicated to transforming physical venues into intelligent, data-driven ecosystems. 
              We achieve this by deploying bespoke AI agents and solutions, made accessible exclusively and securely 
              when users authenticate on the venue's specific WiFi network.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-xl bg-card">
          <CardHeader className="items-center text-center">
            <Eye className="w-12 h-12 text-accent mb-3" />
            <CardTitle className="font-headline text-3xl text-accent">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-center prose prose-lg max-w-none text-muted-foreground">
            <p>
              Our vision is to empower spaces to think, adapt, and deliver unparalleled, hyper-local experiences. 
              We make WiFi the authenticated gateway to a new realm of curated on-premise AI capabilities,
              enabling secure, presence-verified intelligent services that unlock new value and enhance engagement.
            </p>
          </CardContent>
        </Card>
        
        <div className="mt-8 p-6 bg-secondary/30 border-l-4 border-primary rounded-md text-foreground">
          <h3 className="font-headline text-xl font-semibold mb-2 flex items-center">
            <Zap className="mr-2 h-6 w-6 text-primary" /> Phase 1 Focus
          </h3>
          <p className="text-muted-foreground">
            This page currently outlines our core Mission and Vision. Further details, such as our Leadership Team and the Flow Networks Story, 
            will be added in subsequent phases as per our website development manifest (Section 5.7).
          </p>
        </div>

        <div className="mt-16 text-center">
          <AnimatedHeading
            text="Get in Touch"
            as="h2"
            className="font-headline text-2xl text-foreground mb-4"
          />
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Interested in learning more about how Flow Networks can transform your venue or want to discuss your specific needs? We'd love to hear from you.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
