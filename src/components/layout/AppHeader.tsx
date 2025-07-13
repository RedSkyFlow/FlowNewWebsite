
'use client';

import Link from 'next/link';
import { Menu, X, type LucideIcon, ChevronDown as ChevronDownIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect, createElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from '@/components/shared/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MAIN_NAV_LINKS, type NavLinkWithSubLinks } from '@/lib/constants';
import { EnhancedButton } from '../ui/enhanced-button';
import LogoShimmer from '../shared/LogoShimmer';

const AppHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLinkActive = (link: NavLinkWithSubLinks) => {
    if (link.href === '/' && pathname !== '/') return false;
    if (link.basePath) return pathname.startsWith(link.basePath);
    return pathname === link.href;
  };

  const isSubLinkActive = (subLinkHref: string | undefined) => subLinkHref ? pathname === subLinkHref : false;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-card/30 backdrop-blur-xl border-b border-primary/20 shadow-2xl shadow-black/20" : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex-shrink-0">
          <LogoShimmer intensity="subtle" speed="fast" color="accent" trigger="hover">
            <Logo />
          </LogoShimmer>
        </div>
        <nav className="hidden items-center space-x-1 md:flex flex-grow justify-center">
          {MAIN_NAV_LINKS.map((link) => (
            link.subLinks && link.subLinks.length > 0 ? (
              <DesktopDropdownMenu key={link.label} navLink={link} pathname={pathname} isSubLinkActive={isSubLinkActive} />
            ) : (
              <Button key={link.href} variant="ghost" asChild
                className={cn(
                  "text-sm font-medium px-3 py-2 rounded-md transition-colors",
                  isLinkActive(link) ? "text-secondary font-semibold bg-secondary/10 [text-shadow:0_0_10px_hsl(var(--secondary))]" : "text-foreground/90 hover:text-primary hover:bg-primary/5"
                )}
              >
                <Link href={link.href} className="flex items-center">
                  {link.icon && <link.icon className="mr-2 h-4 w-4" />}
                  {link.label}
                </Link>
              </Button>
            )
          ))}
        </nav>
        <div className="hidden md:flex flex-shrink-0">
            <EnhancedButton asChild variant="secondary" size="sm" glow>
                <Link href="/contact">Contact Sales</Link>
            </EnhancedButton>
        </div>
        <div className="md:hidden flex-shrink-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-card/95 backdrop-blur-xl p-6 text-foreground border-l border-border/70">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex-shrink-0">
                  <LogoShimmer intensity="subtle" speed="fast" color="accent" trigger="hover">
                    <Logo />
                  </LogoShimmer>
                </div>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6 text-foreground" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-1">
                {MAIN_NAV_LINKS.map((link) => (
                  link.subLinks && link.subLinks.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full" key={link.label}>
                      <AccordionItem value={link.label} className="border-b-0">
                        <AccordionTrigger className={cn(
                          "flex items-center justify-between rounded-md px-3 py-2 text-base font-medium hover:bg-foreground/5 hover:no-underline",
                           (link.basePath && pathname.startsWith(link.basePath)) || (link.subLinks?.some(sl => isSubLinkActive(sl.href) || sl.subLinks?.some(ssl => isSubLinkActive(ssl.href))))
                            ? "bg-secondary/10 text-secondary [text-shadow:0_0_10px_hsl(var(--secondary))]" : "text-foreground/90"
                        )}>
                          <div className="flex items-center">
                            {link.icon && <link.icon className="mr-2 h-5 w-5" />}
                            {link.label}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-1 pb-0">
                          <div className="ml-4 flex flex-col space-y-1">
                            {link.subLinks.map(subLink => (
                                <SheetClose asChild key={subLink.href}>
                                  <Link
                                    href={subLink.href}
                                    className={cn(
                                      "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-foreground/5",
                                      isSubLinkActive(subLink.href) ? "bg-secondary/10 text-secondary font-semibold" : "text-foreground/80"
                                    )}
                                  >
                                    {subLink.icon && <subLink.icon className="mr-2 h-4 w-4 text-accent" />}
                                    {subLink.label}
                                  </Link>
                                </SheetClose>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center rounded-md px-3 py-2 text-base font-medium hover:bg-foreground/5",
                          isLinkActive(link) ? "bg-secondary/10 text-secondary font-semibold" : "text-foreground/80"
                        )}
                      >
                         {link.icon && <link.icon className="mr-2 h-5 w-5" />}
                        {link.label}
                      </Link>
                    </SheetClose>
                  )
                ))}
              </nav>
              <div className="mt-8 pt-4 border-t border-border/50">
                <EnhancedButton asChild variant="secondary" className="w-full" glow>
                    <Link href="/contact">Contact Sales</Link>
                </EnhancedButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const DesktopDropdownMenu = ({ navLink, pathname, isSubLinkActive }: { navLink: NavLinkWithSubLinks, pathname: string, isSubLinkActive: (href: string | undefined) => boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeParent = (navLink.basePath && pathname.startsWith(navLink.basePath)) || (navLink.subLinks?.some(sl => isSubLinkActive(sl.href)));

  // Group sublinks by category
  const groupedSubLinks = navLink.subLinks?.reduce((acc, item) => {
    const category = item.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, NavLinkWithSubLinks[]>);


  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Button
        variant="ghost"
        className={cn(
          "text-sm font-medium flex items-center px-3 py-2 rounded-md transition-colors",
          activeParent ? "text-secondary font-semibold bg-secondary/10 [text-shadow:0_0_10px_hsl(var(--secondary))]" : "text-foreground/90 hover:text-primary hover:bg-primary/5"
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {navLink.icon && <navLink.icon className="mr-2 h-4 w-4" />}
        {navLink.label}
        <ChevronDownIcon className={cn("ml-1 h-3 w-3 transform transition-transform duration-200", isOpen ? "rotate-180" : "")} />
      </Button>

      <AnimatePresence>
        {isOpen && groupedSubLinks && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-6 rounded-2xl bg-card/90 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-primary/20 ring-1 ring-black/10 z-50 transform-gpu overflow-hidden"
          >
            <div className="flex gap-x-10">
              {Object.entries(groupedSubLinks).map(([category, links]) => (
                <div key={category} className="flex flex-col gap-y-1 min-w-[220px]">
                  <p className="font-headline text-sm font-semibold text-accent mb-3 pb-2 border-b border-primary/20">{category}</p>
                  {links.map((itemLink) => (
                    <Link 
                      href={itemLink.href} 
                      key={itemLink.href}
                      className="group flex items-start gap-4 p-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {itemLink.icon && (
                        <div className="p-2 bg-primary/20 rounded-md transition-colors group-hover:bg-primary">
                          {createElement(itemLink.icon, { className: "h-5 w-5 text-primary transition-colors group-hover:text-primary-foreground" })}
                        </div>
                      )}
                      <div>
                        <p className={cn("font-semibold text-foreground text-sm", isSubLinkActive(itemLink.href) && "text-secondary")}>{itemLink.label}</p>
                        {itemLink.shortDescription && (
                          <p className="text-xs text-muted-foreground mt-1">{itemLink.shortDescription}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default AppHeader;
