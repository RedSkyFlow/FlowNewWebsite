
import type { Metadata } from 'next';
import Link from 'next/link';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ArrowRight } from 'lucide-react';
import { MAIN_NAV_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Our Solutions',
  description: 'Explore Flow Networks\' comprehensive solutions, including the visionary AI Gateway, Intelligent Wi-Fi, WiFi Marketing, and 3rd Party Integrations for intelligent venues.',
};

const solutionsNavLink = MAIN_NAV_LINKS.find(link => link.label === 'Solutions');
const solutionPillars = solutionsNavLink?.subLinks || [];

export default function SolutionsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading
        text="Flow Networks Solutions"
        as="h1"
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-6 !font-headline"
      />
      <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg mb-12">
        Flow Networks delivers integrated solutions designed to transform your physical spaces into dynamic, responsive, and intelligent environments. Our primary focus is the AI Gateway, which acts as the central orchestrator for all our services.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {solutionPillars.map((solution) => (
          <Card key={solution.label} className="group bg-card rounded-xl overflow-hidden border border-border/50 flex flex-col transition-all duration-500 ease-gentle shadow-lg hover:shadow-primary/20 hover:border-primary/30 will-change-transform hover:-translate-y-1">
            <CardHeader className="items-center text-center p-6">
              <div className="p-4 rounded-full bg-primary/10 inline-block mb-4 transition-all duration-300 group-hover:scale-110">
                <solution.icon className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl text-foreground transition-colors group-hover:text-primary">{solution.label}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow px-6 text-center">
              <p className="text-muted-foreground text-sm mb-4">{solution.shortDescription}</p>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <EnhancedButton asChild variant="tertiary" size="sm" className="w-full">
                <Link href={solution.href}>
                  Learn More <ArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </EnhancedButton>
            </div>
          </Card>
        ))}
      </div>

       <div className="mt-20 text-center bg-card border border-border/50 p-8 md:p-12 rounded-lg shadow-lg">
          <AnimatedHeading
            text="The AI Gateway: Orchestrating Excellence"
            as="h2"
            className="font-headline text-2xl text-primary mb-4"
          />
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our AI Gateway is the heart of our solutions, providing the intelligence to connect and amplify the capabilities of each foundational service. Discover its transformative potential.
        </p>
        <EnhancedButton asChild size="lg" variant="secondary" glow>
            <Link href="/ai-gateway">
                Explore the AI Gateway <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/>
            </Link>
        </EnhancedButton>
      </div>
    </div>
  );
}
