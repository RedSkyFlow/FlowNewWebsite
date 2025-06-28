
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wifi, Search, Activity, Settings2, Lightbulb, Cpu, LucideIcon } from 'lucide-react'; 
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { MAIN_NAV_LINKS, INDUSTRIES_DATA } from '@/lib/constants'; 
import { motion } from 'framer-motion';

const getIcon = (iconName: string | LucideIcon | undefined): LucideIcon => {
  if (typeof iconName === 'function') {
    return iconName;
  }
  // This function might need more robust icon mapping if icon names are just strings
  switch(iconName?.toString()) { // Convert icon to string if it's a function for switch case
    case 'Wifi': return Wifi;
    case 'Search': return Search;
    case 'Activity': return Activity;
    case 'Settings2': return Settings2;
    // Add more cases as needed or use a more dynamic approach
    default: return Settings2; // Fallback icon
  }
};

const corePillarsData = MAIN_NAV_LINKS.find(link => link.label === 'Solutions');
const corePillars = corePillarsData?.subLinks?.slice(0, 4).map(pillar => ({
  ...pillar,
  icon: getIcon(pillar.icon), // Ensure icon is resolved to a component
  description: pillar.shortDescription || `Explore our ${pillar.label.toLowerCase()} services.`,
  linkText: `Explore ${pillar.label}`
})) || [
  { title: 'Flow AI Gateway (Vision)', description: "Future-focused AI orchestration.", icon: Wifi, href: '/solutions/flow-ai-gateway', linkText: 'Explore Smart WiFi' },
  { title: 'AI Integrations', description: "Connecting AI to your systems.", icon: Search, href: '/solutions/ai-integrations', linkText: 'Discover Insights' },
  { title: 'WiFi Monetisation', description: "Generate revenue from WiFi.", icon: Activity, href: '/solutions/wifi-monetisation', linkText: 'Engage Users' },
  { title: 'Sponsored WiFi', description: "Offer WiFi via sponsorships.", icon: Settings2, href: '/solutions/sponsored-wifi', linkText: 'Our Expertise' },
];


const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

const HomepageKeyPointsSection = () => {

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Comprehensive Network Solutions"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl lg:text-5xl mb-6 !font-headline"
        />
        <motion.p 
          className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg lg:text-xl mb-16 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Flow Networks delivers a spectrum of advanced networking services, from intelligent infrastructure to strategic insights, ensuring your business stays connected and competitive.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {corePillars.map((pillar, i) => (
            <div
              key={pillar.href}
              className="h-full"
            >
              <Card className="bg-card rounded-xl overflow-hidden flex flex-col border border-border/50 h-full transition-all duration-700 ease-in group hover:scale-105 hover:-translate-y-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.1),0_0_10px_rgba(0,122,128,0.3)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.2),var(--glow-teal)] hover:border-flow-primary-teal/40">
                <CardHeader className="items-center text-center p-6 md:p-8 pt-8 md:pt-10">
                  <div className="p-4 rounded-full bg-primary/10 inline-block mb-5 transition-transform duration-300 group-hover:scale-110">
                    <pillar.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl lg:text-2xl text-foreground transition-colors duration-300 group-hover:text-accent">{pillar.label}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center px-6 md:px-8 pb-6 md:pb-8">
                  <p className="text-muted-foreground text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">{pillar.description}</p>
                </CardContent>
                <div className="p-6 md:p-8 pt-0 mt-auto">
                  <Link href={pillar.href || '/solutions'} className="inline-flex items-center justify-center w-full group/link text-primary font-semibold text-sm lg:text-base no-underline p-2 rounded-lg transition-all duration-300 hover:bg-flow-primary-teal/20 hover:backdrop-blur-sm hover:text-foreground">
                      {'View more'} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
         <div className="text-center mt-20">
          <Button asChild size="lg" className="group btn-primary-glow rounded-lg px-8 py-4 text-base lg:text-lg font-semibold">
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
