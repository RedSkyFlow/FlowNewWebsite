// src/components/layout/AppFooter.tsx
'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { MAIN_NAV_LINKS } from '@/lib/constants';
import { useState, useEffect } from 'react';
import LogoShimmer from '@/components/shared/LogoShimmer';
import { cn } from '@/lib/utils';
import Image from 'next/image';

// Corrected Logo component for direct use here
const FooterLogo = ({ className = '' }: { className?: string }) => {
  return (
    <Link href="/" className={cn('inline-flex items-center', className)}>
      <Image
        src="/Images/Flow-2D-logo.png"
        alt="Flow Networks Logo"
        width={32} 
        height={32}
        className="mr-2 h-8 w-auto"
      />
       <div className="flex flex-col justify-center">
          <span className="text-accent text-sm font-bold uppercase text-gradient-animated">Flow</span>
          <span className="text-accent text-sm font-bold uppercase text-gradient-animated -mt-1">Networks</span>
        </div>
    </Link>
  );
};


const AppFooter = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Fetching links from our single source of truth
  const productsLinks = MAIN_NAV_LINKS.find(link => link.label === 'Products')?.subLinks?.slice(0, 4) || [];
  const solutionLinks = MAIN_NAV_LINKS.find(link => link.label === 'Solutions')?.subLinks?.slice(0, 4) || [];
  const companyLinks = MAIN_NAV_LINKS.find(link => link.label === 'Company')?.subLinks?.slice(0, 4) || [];
  const resourceLinks = MAIN_NAV_LINKS.find(link => link.label === 'Resources')?.subLinks?.slice(0, 4) || [];

  return (
    <footer className="bg-background/50 border-t border-border/50 mt-auto">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          
          <div className="lg:col-span-4">
            <LogoShimmer intensity="subtle" speed="slow" color="primary" trigger="interval">
              <FooterLogo />
            </LogoShimmer>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs font-body">
              Transforming venues into intelligent, data-driven ecosystems with our AI Gateway and integrated network solutions.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div>
              <h4 className="font-semibold uppercase tracking-wider text-foreground/80 text-sm">Products</h4>
              <ul className="mt-4 space-y-3">
                {productsLinks.map(link => (
                  <li key={link.href}><Link href={link.href || '#'} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold uppercase tracking-wider text-foreground/80 text-sm">Solutions</h4>
              <ul className="mt-4 space-y-3">
                {solutionLinks.map(link => (
                  <li key={link.href}><Link href={link.href || '#'} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold uppercase tracking-wider text-foreground/80 text-sm">Company</h4>
              <ul className="mt-4 space-y-3">
                {companyLinks.map(link => (
                   <li key={link.href}><Link href={link.href || '#'} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
             <div>
              <h4 className="font-semibold uppercase tracking-wider text-foreground/80 text-sm">Resources</h4>
              <ul className="mt-4 space-y-3">
                 {resourceLinks.map(link => (
                   <li key={link.href}><Link href={link.href || '#'} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                 ))}
                 <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border/50 pt-8 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-xs text-muted-foreground order-2 sm:order-1">
            © {currentYear} Flow Networks. All rights reserved.
          </p>
          <div className="flex space-x-4 order-1 sm:order-2">
            {/* These links should also ideally come from constants.ts, but are acceptable here for now */}
            <Link href="/company/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/company/terms-of-use" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Use</Link>
          </div>
          <div className="flex space-x-4 order-3">
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;