
'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import Link from 'next/link';
import { MAIN_NAV_LINKS } from '@/lib/constants';
import { useState, useEffect } from 'react';

const AppFooter = () => {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  const productsLinks = MAIN_NAV_LINKS.find(link => link.label === 'Products')?.subLinks?.slice(0, 4) || [];
  const solutionLinks = MAIN_NAV_LINKS.find(link => link.label === 'Solutions')?.subLinks?.slice(0, 4) || [];
  const companyLinks = MAIN_NAV_LINKS.find(link => link.label === 'Company')?.subLinks?.slice(0, 4) || [];
  const resourceLinks = MAIN_NAV_LINKS.find(link => link.label === 'Resources')?.subLinks?.slice(0, 4) || [];


  return (
    <footer className="bg-background/50 border-t border-border/50 mt-16">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Transforming venues into intelligent, data-driven ecosystems with our AI Gateway and integrated network solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:col-span-1 lg:col-span-4">
            <div>
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Products</h4>
              <ul className="mt-4 space-y-3">
                {productsLinks.map(link => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Solutions</h4>
              <ul className="mt-4 space-y-3">
                {solutionLinks.map(link => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
              <ul className="mt-4 space-y-3">
                {companyLinks.map(link => (
                   <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                ))}
              </ul>
            </div>
             <div>
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Resources</h4>
              <ul className="mt-4 space-y-3">
                 {resourceLinks.map(link => (
                   <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link></li>
                 ))}
                 <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/50 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex space-x-4">
              <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear || new Date().getFullYear()} Flow Networks. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Github" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
