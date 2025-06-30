
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Settings2, type LucideIcon } from 'lucide-react'; 
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { MAIN_NAV_LINKS } from '@/lib/constants'; 
import { EnhancedButton } from '../ui/enhanced-button';
import { Button } from '../ui/button';

const getIcon = (iconName: string | LucideIcon | undefined): LucideIcon => {
  if (typeof iconName === 'function') return iconName;
  return Settings2; // Fallback icon
};

const solutionsNavLink = MAIN_NAV_LINKS.find(link => link.label === 'Solutions');
const corePillars = solutionsNavLink?.subLinks?.slice(0, 4).map(pillar => ({
  ...pillar,
  icon: getIcon(pillar.icon),
  description: pillar.shortDescription || `Explore our ${pillar.label.toLowerCase()} services.`,
})) || [];


const HomepageKeyPointsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Comprehensive Network Solutions"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl lg:text-5xl mb-6 !font-headline"
          wordAnimation
        />
        <p className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg lg:text-xl mb-16 leading-relaxed">
          Flow Networks delivers a spectrum of advanced networking services, from intelligent infrastructure to strategic insights, ensuring your business stays connected and competitive.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {corePillars.map((pillar) => (
            <Card key={pillar.href} className="group bg-card rounded-xl overflow-hidden flex flex-col text-center transition-all duration-500 ease-gentle shadow-lg hover:shadow-primary/20 hover:border-primary/30 will-change-transform hover:-translate-y-1">
              <CardHeader className="items-center p-6 md:p-8">
                <div className="p-4 rounded-full bg-primary/10 inline-block mb-5 transition-transform duration-300 group-hover:scale-110">
                  <pillar.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl lg:text-2xl text-foreground transition-colors duration-300 group-hover:text-primary">{pillar.label}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow px-6 md:px-8">
                <p className="text-muted-foreground text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">{pillar.description}</p>
              </CardContent>
              <div className="p-6 md:p-8 pt-0 mt-auto">
                 <Button asChild variant="outline" className="w-full group/link">
                  <Link href={pillar.href || '/solutions'}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
         <div className="text-center mt-20">
          <Button asChild size="lg" variant="secondary" className="btn-secondary-glow">
            <Link href="/solutions"> 
              Explore All Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomepageKeyPointsSection;
