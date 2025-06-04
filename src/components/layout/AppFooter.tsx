
'use client'; // Required for useEffect and useState

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
  
  const solutionsNav = MAIN_NAV_LINKS.find(link => link.label === 'Solutions');
  const solutionLinks = solutionsNav?.subLinks?.slice(0, 3) || [];

  const industriesNav = MAIN_NAV_LINKS.find(link => link.label === 'Industries');
  const industryLinks = industriesNav?.subLinks?.slice(0, 3) || [];
  
  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/why-flow-networks', label: 'Why Flow Networks?'},
  ];
  
  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ];

  const resourceLinks = [
    { href: '/resources', label: 'Resources' }, 
    { href: '/partners', label: 'Our Partners' },
  ];


  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16"> {/* Increased padding */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"> {/* Adjusted for potentially more columns */}
          <div className="lg:col-span-1"> {/* Logo column */}
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Transforming venues into intelligent, responsive environments.
            </p>
          </div>
          
          {/* Dynamic Columns based on MAIN_NAV_LINKS logic */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-1 lg:col-span-3 lg:grid-cols-4">
            <div>
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Solutions</h4>
              <ul className="mt-4 space-y-2">
                {solutionLinks.map(link => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
                ))}
                 <li><Link href="/solutions" className="text-sm font-semibold text-muted-foreground hover:text-primary">View All Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Industries</h4>
              <ul className="mt-4 space-y-2">
                {industryLinks.map(link => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
                ))}
                 <li><Link href="/industries" className="text-sm font-semibold text-muted-foreground hover:text-primary">View All Industries</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
              <ul className="mt-4 space-y-2">
                {companyLinks.map(link => (
                   <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
                ))}
              </ul>
            </div>
             <div>
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Resources</h4>
              <ul className="mt-4 space-y-2">
                 {resourceLinks.map(link => (
                   <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
                 ))}
                 {legalLinks.map(link => (
                   <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row"> {/* Increased top margin */}
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear || new Date().getFullYear()} Flow Networks. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Github" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
