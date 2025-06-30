
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { ArrowRight, Wifi, Map, Monitor, MailCheck, Settings } from 'lucide-react'; // Default icon
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { MAIN_NAV_LINKS } from '@/lib/constants'; 
import { motion } from 'framer-motion';

const ServicesOverviewSection = () => {
  // Extract services from MAIN_NAV_LINKS, looking for "Our Solutions"
  const solutionsNavLink = MAIN_NAV_LINKS.find(link => link.label === 'Our Solutions');
  
  const defaultItemIcon = Settings; // Fallback icon

  // Get up to 4 services for the overview
  const displayedServices = solutionsNavLink?.subLinks?.slice(0, 4) || [
    // Fallback or default services if not found in constants
    { href: '/solutions/intelligent-wifi-infrastructure', label: 'Intelligent WiFi', icon: Wifi, description: 'Cutting-edge WiFi solutions for seamless, high-performance connectivity.' },
    { href: '/solutions/location-intelligence', label: 'Location Intelligence', icon: Map, description: 'Leverage location data for powerful insights and enhanced experiences.' },
    { href: '/solutions/digital-content-signage', label: 'Digital Signage', icon: Monitor, description: 'Dynamic content delivery to engage and inform your audience effectively.' },
    { href: '/solutions/email-sms-marketing', label: 'Marketing Automation', icon: MailCheck, description: 'Targeted communication strategies to boost engagement and growth.' },
  ];
  
   const servicesWithDetails = displayedServices.map(service => ({
    ...service,
    icon: service.icon || defaultItemIcon, // Ensure there's always an icon
    description: service.description || `Explore our expert ${service.label.toLowerCase()} solutions.`,
  }));

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-muted/20 backdrop-blur-sm"> {/* Subtle background */}
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading
          text="Our Core Service Pillars"
          as="h2"
          className="text-3xl font-bold text-center text-foreground sm:text-4xl mb-4 !font-headline"
        />
        <motion.p 
          className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Flow Networks provides a suite of integrated services designed to optimize your connectivity, intelligence, and engagement capabilities.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"> {/* Adjusted gap */}
          {servicesWithDetails.map((service, i) => (
            <motion.div
              key={service.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="h-full"
            >
              <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden group flex flex-col border border-border/50 hover:border-primary/30 h-full"> {/* Dribbble inspired card */}
                <CardHeader className="items-center text-center p-6 pt-8">
                  <div className="p-4 rounded-full bg-primary/10 inline-block mb-4 transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl text-foreground group-hover:text-primary transition-colors">{service.label}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center px-6 pb-6">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                </CardContent>
                <div className="p-6 pt-0 mt-auto"> {/* Ensure button is at the bottom */}
                  <EnhancedButton asChild variant="tertiary" size="sm" className="w-full">
                    <Link href={service.href}>
                      Learn More <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </EnhancedButton>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <EnhancedButton asChild size="lg" variant="secondary" glow>
            <Link href="/solutions">
              View All Solutions <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </EnhancedButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
