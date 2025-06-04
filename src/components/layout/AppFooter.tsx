
import { Github, Linkedin, Twitter } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import Link from 'next/link';
import { MAIN_NAV_LINKS, INDUSTRIES_DATA } from '@/lib/constants';

const AppFooter = () => {
  const currentYear = new Date().getFullYear();
  
  // Extract solution links from MAIN_NAV_LINKS or INDUSTRIES_DATA
  const solutionNav = MAIN_NAV_LINKS.find(link => link.label === 'Solutions by Industry');
  const solutionLinks = solutionNav?.subLinks?.slice(0, 3) || 
                        INDUSTRIES_DATA.slice(0,3).map(ind => ({ href: `/ai-agents/${ind.id}`, label: ind.name }));

  // Company links based on new structure
  const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    // { href: '/#pricing', label: 'Pricing' }, // Pricing not in Phase 1 sitemap
  ];
  
  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-of-service', label: 'Terms of Service' },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">
              Empowering businesses with intelligent AI solutions.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Solutions</h4>
              <ul className="mt-4 space-y-2">
                {solutionLinks.map(link => (
                  <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
                ))}
                 <li><Link href="/ai-agents" className="text-sm text-muted-foreground hover:text-primary">View All Solutions</Link></li>
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
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h4>
              <ul className="mt-4 space-y-2">
                 {legalLinks.map(link => (
                   <li key={link.href}><Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link></li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Flow Networks. All rights reserved.
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
