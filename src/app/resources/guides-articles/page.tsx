'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, FileText, BrainCircuit, Wifi, BarChart3 } from 'lucide-react';
import Image from 'next/image';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import GlassCard from '@/components/shared/GlassCard';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollAnimatedSection } from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';
import CallToActionSection from '@/components/sections/CallToActionSection';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Badge } from '@/components/ui/badge';

// Placeholder data for articles
const articles = [
  { title: 'The Future is Hyper-Local: An Introduction to the AI Gateway', category: 'AI & Innovation', icon: BrainCircuit, image: '/images/articles/ai-gateway.jpg', summary: 'Explore the architectural principles and transformative potential of presence-verified AI in physical spaces.', href: '#', },
  { title: 'From Cost Center to Profit Center: A Guide to WiFi Monetisation', category: 'Strategy & ROI', icon: BarChart3, image: '/images/articles/monetisation.jpg', summary: 'Discover four proven strategies for turning your guest WiFi network into a powerful revenue-generating asset.', href: '#', },
  { title: 'The Trust Exchange: A Guide to Ethical First-Party Data Capture', category: 'Data & Privacy', icon: Wifi, image: '/images/articles/data-privacy.jpg', summary: 'Learn how to build a loyal audience by creating a fair value exchange based on trust and consent.', href: '#', },
  { title: 'High-Density WiFi: The Ultimate Guide for Event & Stadium Planners', category: 'Technology', icon: Wifi, image: '/images/articles/high-density.jpg', summary: 'A technical deep-dive into the challenges and solutions for providing flawless connectivity in the most demanding environments.', href: '#', },
];

const GuidesArticlesPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-20 md:pt-40 md:pb-28 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <Link href="/resources" className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" /> Back to Resources
            </Link>
            <p className="font-semibold text-accent my-4 text-gradient-animated">Expert Insights</p>
            <AnimatedHeading text="Guides & Articles" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" wordAnimation />
            <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground font-body">
              Deep dives, strategic frameworks, and technical guides from the forefront of intelligent venue technology.
            </p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {articles.map((article) => (
                <GlassCard key={article.title} className="group p-0 overflow-hidden flex flex-col">
                  <div className="relative h-60 w-full overflow-hidden"> 
                    <Image 
                      src={article.image} 
                      alt={article.title} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div> 
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <CardHeader className="p-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <article.icon className="w-5 h-5 text-primary" />
                        <Badge variant="outline">{article.category}</Badge>
                      </div>
                      <CardTitle className="text-xl transition-colors group-hover:text-primary">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-4 flex-grow">
                      <p className="text-muted-foreground text-sm font-body leading-relaxed">{article.summary}</p>
                    </CardContent>
                    <CardFooter className="p-0 pt-6 mt-auto"> 
                      <EnhancedButton asChild variant="link" size="sm" className="p-0 h-auto font-semibold">
                        <Link href={article.href}>
                          Read Full Article <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </EnhancedButton>
                    </CardFooter>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
        
        <CallToActionSection />
      </div>
    </div>
  );
};

export default GuidesArticlesPage;