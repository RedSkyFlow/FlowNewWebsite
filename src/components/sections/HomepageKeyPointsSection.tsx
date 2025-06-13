
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
  switch(iconName) {
    case 'Wifi': return Wifi;
    case 'Search': return Search;
    default: return Settings2; 
  }
};

const corePillarsData = MAIN_NAV_LINKS.find(link => link.label === 'Our Solutions');
const corePillars = corePillarsData?.subLinks?.slice(0, 4).map(pillar => ({
  ...pillar,
  icon: getIcon(pillar.icon),
  description: pillar.shortDescription || pillar.description || `Explore our ${pillar.label.toLowerCase()} services.`, // Prefer shortDescription
  linkText: `Explore ${pillar.label}`
})) || [
  { title: 'Intelligent WiFi', description: "Seamless, high-performance wireless connectivity tailored to your venue's needs.", icon: Wifi, href: '/solutions/intelligent-wifi-infrastructure', linkText: 'Explore Smart WiFi' },
  { title: 'Location Analytics', description: "Unlock valuable insights from user movement and behavior within your space.", icon: Search, href: '/solutions/location-intelligence', linkText: 'Discover Insights' },
  { title: 'Digital Engagement', description: "Dynamic content and communication tools to captivate your audience.", icon: Activity, href: '/solutions/digital-content-signage', linkText: 'Engage Users' },
  { title: 'Professional Services', description: "Expert consultation, design, and support for your network infrastructure.", icon: Settings2, href: '/solutions/professional-services', linkText: 'Our Expertise' },
];


const benefits = [
  { title: 'Enhanced Connectivity', description: 'Robust and reliable network performance for all users and devices.', icon: Wifi, color: 'text-primary' },
  { title: 'Actionable Insights', description: 'Data-driven understanding of your venue for smarter decision-making.', icon: Lightbulb, color: 'text-accent' },
  { title: 'Streamlined Operations', description: 'Optimize processes and improve efficiency with integrated solutions.', icon: Cpu, color: 'text-green-500' }, 
  { title: 'Future-Ready Infrastructure', description: 'Scalable and secure networks built to adapt to evolving technological demands.', icon: Settings2, color: 'text-secondary' },
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
      ease: [0.6, 0.05, -0.01, 0.9], // Smoother easing
    },
  }),
};

const HomepageKeyPointsSection = () => {
  const industryTeasers = INDUSTRIES_DATA.filter(ind => ['hospitality', 'retail', 'healthcare'].includes(ind.id)).slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 space-y-24 md:space-y-32">

        {/* Core Pillars/Offerings Section */}
        <div>
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
              <motion.div
                key={pillar.href} 
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                className="h-full"
              >
                <Card className="bg-card shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden group flex flex-col border border-border/50 hover:border-primary/40 h-full">
                  <CardHeader className="items-center text-center p-6 md:p-8 pt-8 md:pt-10">
                    <div className="p-4 rounded-full bg-primary/10 inline-block mb-5 transition-transform duration-300 group-hover:scale-110">
                      <pillar.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl lg:text-2xl text-foreground group-hover:text-primary transition-colors">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-center px-6 md:px-8 pb-6 md:pb-8">
                    <p className="text-muted-foreground text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">{pillar.description}</p>
                  </CardContent>
                  <div className="p-6 md:p-8 pt-0 mt-auto">
                    <Button asChild variant="link" className="w-full group/link text-primary font-semibold hover:text-primary/80 text-sm lg:text-base">
                      <Link href={pillar.href || '/solutions'}>
                        {pillar.linkText || 'Learn More'} <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
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

        {/* Key Benefits Showcase */}
        <div>
          <AnimatedHeading
            text="The Flow Networks Advantage"
            as="h2"
            className="text-3xl font-bold text-center text-foreground sm:text-4xl lg:text-5xl mb-6 !font-headline"
          />
          <motion.p 
            className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg lg:text-xl mb-16 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience tangible benefits designed to elevate your operations and drive growth.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
               <motion.div
                key={benefit.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                className="h-full"
              >
                <Card className="h-full text-center bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl overflow-hidden border border-border/50 flex flex-col p-6 md:p-8">
                  <CardHeader className="pt-2 pb-5">
                    <div className={`mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6`}>
                      <benefit.icon className={`w-8 h-8 ${benefit.color || 'text-primary'}`} />
                    </div>
                    <CardTitle className="text-xl lg:text-2xl font-semibold font-headline text-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-0 pb-2 flex-grow">
                    <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Teasers */}
        {industryTeasers.length > 0 && (
          <div>
            <AnimatedHeading
              text="Tailored Solutions Across Industries"
              as="h2"
              className="text-3xl font-bold text-center text-foreground sm:text-4xl lg:text-5xl mb-6 !font-headline"
            />
            <motion.p 
              className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg lg:text-xl mb-16 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We understand the unique challenges of diverse sectors, delivering specialized network strategies that drive success.
            </motion.p>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {industryTeasers.map((industry, i) => (
                <motion.div
                  key={industry.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={cardVariants}
                  className="h-full"
                >
                  <Card className="bg-card shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden group flex flex-col border border-border/50 hover:border-accent/50 h-full">
                    <CardHeader className="flex-row items-center space-x-4 p-6 md:p-8">
                       <div className="p-3.5 rounded-full bg-accent/10 transition-transform duration-300 group-hover:scale-110">
                        <industry.icon className="w-8 h-8 md:w-9 md:h-9 text-accent" />
                      </div>
                      <CardTitle className="font-headline text-xl lg:text-2xl text-foreground group-hover:text-accent transition-colors">{industry.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow p-6 md:p-8 pt-0">
                      <p className="text-muted-foreground text-sm lg:text-base mb-5 leading-relaxed line-clamp-3">{industry.description}</p>
                    </CardContent>
                    <div className="p-6 md:p-8 pt-0 mt-auto">
                      <Button asChild variant="link" className="w-full justify-start group/link text-accent font-semibold hover:text-accent/80 pl-0 text-sm lg:text-base">
                          <Link href={`/industries/${industry.id}`}>
                          Explore {industry.name} Solutions <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                          </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-20">
              <Button asChild size="lg" variant="outline" className="group rounded-lg px-8 py-4 text-base lg:text-lg font-semibold border-accent/60 text-accent hover:bg-accent/5 hover:border-accent hover:text-accent">
                <Link href="/industries">
                  View All Industry Expertise <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        )}

        {/* Future Tease Section */}
        <div className="text-center bg-muted/30 p-10 md:p-16 rounded-2xl">
            <AnimatedHeading
                text="Innovating for Tomorrow"
                as="h3"
                className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl mb-5 !font-headline"
            />
            <motion.p 
              className="mx-auto max-w-xl text-muted-foreground md:text-lg lg:text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                Flow Networks is constantly exploring the future of connectivity, including advancements in AI-driven network intelligence and automation. Stay tuned for what's next.
            </motion.p>
            <Button variant="ghost" className="text-primary hover:text-primary/80 text-sm lg:text-base">
                Learn About Our Vision <Lightbulb className="ml-2 h-4 w-4" />
            </Button>
        </div>

      </div>
    </section>
  );
};

export default HomepageKeyPointsSection;
