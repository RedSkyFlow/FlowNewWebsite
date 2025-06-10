
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Network, Settings, Cloud, Shield } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { MAIN_NAV_LINKS } from '@/lib/constants'; // Ensure this path and content are correct

const ServicesOverviewSection = () => {
  // Extract services from MAIN_NAV_LINKS, assuming 'Services' is a top-level item with subLinks
  const servicesNavLink = MAIN_NAV_LINKS.find(link => link.label === 'Services');
  const displayedServices = servicesNavLink?.subLinks?.slice(0, 4) || [
    // Fallback or default services if not found in constants
    { href: '/services/network-design', label: 'Network Design & Consulting', icon: Network, description: 'Strategic planning and design for robust network architectures.' },
    { href: '/services/managed-network', label: 'Managed Network Services', icon: Settings, description: 'Proactive management and support for optimal network performance.' },
    { href: '/services/cloud-connectivity', label: 'Cloud Connectivity', icon: Cloud, description: 'Seamless and secure access to cloud resources and applications.' },
    { href: '/services/network-security', label: 'Network Security Solutions', icon: Shield, description: 'Comprehensive protection against evolving cyber threats.' },
  ];
  
  // Add descriptions if not present in constants.ts sublinks
   const servicesWithDescriptions = displayedServices.map(service => ({
    ...service,
    description: service.description || `Explore our expert ${service.label.toLowerCase()} solutions.`,
  }));


  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Comprehensive Network Services"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12 !font-headline"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesWithDescriptions.map((service) => (
            <Card key={service.label} className="shadow-lg hover:shadow-xl transition-shadow bg-card flex flex-col">
              <CardHeader className="items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 inline-block mb-3">
                  <service.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="font-headline text-xl text-foreground">{service.label}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-center">
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="outline" className="w-full group border-primary/50 text-primary hover:bg-primary/5 hover:text-primary hover:border-primary">
                  <Link href={service.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
