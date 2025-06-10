
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Network, Settings, Cloud, Shield, LayoutGrid } from 'lucide-react';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { MAIN_NAV_LINKS } from '@/lib/constants'; 

const ServicesOverviewSection = () => {
  // Extract services from MAIN_NAV_LINKS, looking for "Our Solutions"
  const solutionsNavLink = MAIN_NAV_LINKS.find(link => link.label === 'Our Solutions');
  
  // Use a sensible default icon if the main category icon isn't what's needed for items
  const defaultItemIcon = Settings;

  const displayedServices = solutionsNavLink?.subLinks?.slice(0, 4) || [
    // Fallback or default services if not found in constants, more aligned with Flow Networks
    { href: '/solutions/intelligent-wifi-infrastructure', label: 'Intelligent WiFi', icon: Wifi, description: 'Advanced WiFi infrastructure for seamless connectivity.' },
    { href: '/solutions/location-intelligence', label: 'Location Intelligence', icon: Map, description: 'Gain insights from location data to optimize spaces.' },
    { href: '/solutions/digital-content-signage', label: 'Digital Signage', icon: Monitor, description: 'Dynamic content delivery across your venue.' },
    { href: '/solutions/professional-services', label: 'Professional Services', icon: Handshake, description: 'Expert consulting and implementation for your network needs.' },
  ];
  
   const servicesWithDetails = displayedServices.map(service => ({
    ...service,
    icon: service.icon || defaultItemIcon, // Ensure there's always an icon
    description: service.description || `Explore our expert ${service.label.toLowerCase()} solutions.`,
  }));


  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Comprehensive Network Solutions"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-12 !font-headline"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesWithDetails.map((service) => (
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
            <Link href="/solutions">
              View All Solutions <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
