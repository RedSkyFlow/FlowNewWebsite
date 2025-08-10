
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, type LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect, createElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { MAIN_NAV_LINKS, type NavLinkWithSubLinks } from '@/lib/constants';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const AppHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLinkActive = (link: NavLinkWithSubLinks) => {
    if (link.basePath) return pathname.startsWith(link.basePath);
    if (link.href === '/') return pathname === '/';
    return pathname.startsWith(link.href) && link.href !== '/';
  };

  const isSubLinkActive = (subLinkHref?: string) => subLinkHref ? pathname === subLinkHref : false;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-standard ease-gentle",
        hasMounted && isScrolled 
          ? "bg-card/30 backdrop-blur-xl border-b border-primary/20 shadow-l4" 
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Flow Networks Home" className="flex items-center group">
            <Image src="/images/logos/Flow-2D-logo.png" alt="Flow Networks 2D Logo" className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" width={32} height={32} />
            <div className="flex flex-col justify-center ml-2">
              <span className="text-accent text-sm font-bold uppercase text-gradient-animated">Flow</span>
              <span className="text-accent text-sm font-bold uppercase text-gradient-animated -mt-1">Networks</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden items-center space-x-1 md:flex flex-grow justify-center">
          {MAIN_NAV_LINKS.map((link) => (
            link.subLinks && link.subLinks.length > 0 ? (
              <DesktopDropdownMenu key={link.label} navLink={link} pathname={pathname} />
            ) : (
              <EnhancedButton key={link.href} variant="ghost" asChild
                className={cn(
                  "text-sm",
                  isLinkActive(link) ? "text-secondary font-semibold bg-secondary/10" : "text-foreground/90"
                )}
              >
                <Link href={link.href}>
                  <span className="flex items-center gap-2">
                    {link.icon && <link.icon className="h-4 w-4" />}
                    {link.label}
                  </span>
                </Link>
              </EnhancedButton>
            )
          ))}
        </nav>

        <div className="hidden md:flex flex-shrink-0">
            <EnhancedButton asChild variant="secondary" size="sm" glow>
                <Link href="/contact">
                  <span className="flex items-center gap-2">Contact Sales</span>
                </Link>
            </EnhancedButton>
        </div>

        <div className="md:hidden flex-shrink-0">
          <MobileMenu isLinkActive={isLinkActive} isSubLinkActive={isSubLinkActive} />
        </div>
      </div>
    </header>
  );
};

// Mobile Menu Extracted for clarity
const MobileMenu = ({ isLinkActive, isSubLinkActive }: { isLinkActive: (l: NavLinkWithSubLinks) => boolean, isSubLinkActive: (h?: string) => boolean }) => (
  <Sheet>
    <SheetTrigger asChild>
      <EnhancedButton variant="ghost" size="icon">
        <Menu className="h-6 w-6 text-foreground" />
        <span className="sr-only">Open menu</span>
      </EnhancedButton>
    </SheetTrigger>
    <SheetContent side="right" className="w-full max-w-xs bg-card/95 backdrop-blur-xl p-6 text-foreground border-l border-border/70">
      <div className="mb-6 flex items-center justify-between">
        <Link href="/" aria-label="Flow Networks Home" className="flex items-center">
          <Image src="/images/logos/Flow-2D-logo.png" alt="Flow Networks 2D Logo" className="h-8 w-auto" width={32} height={32} />
        </Link>
        <SheetClose asChild>
          <EnhancedButton variant="ghost" size="icon">
            <X className="h-6 w-6 text-foreground" />
            <span className="sr-only">Close menu</span>
          </EnhancedButton>
        </SheetClose>
      </div>
      <nav className="flex flex-col space-y-1">
        {MAIN_NAV_LINKS.map((link) => (
          link.subLinks && link.subLinks.length > 0 ? (
            <Accordion type="single" collapsible className="w-full" key={link.label}>
              <AccordionItem value={link.label} className="border-b-0">
                <AccordionTrigger className={cn(
                  "flex items-center justify-between rounded-md px-3 py-2 text-base font-medium hover:bg-foreground/5 hover:no-underline",
                   isLinkActive(link) ? "bg-secondary/10 text-secondary" : "text-foreground/90"
                )}>
                  <span className="flex items-center gap-2">
                    {link.icon && <link.icon className="h-5 w-5" />}
                    {link.label}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-0">
                  <div className="ml-4 flex flex-col space-y-1 border-l-2 border-primary/20 pl-4">
                    {link.subLinks.map(subLink => (
                        <SheetClose asChild key={subLink.href}>
                          <Link href={subLink.href || '#'} className={cn(
                            "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-foreground/5",
                            isSubLinkActive(subLink.href) ? "text-secondary font-semibold" : "text-foreground/80"
                          )}>
                            <span className="flex items-center gap-2">
                               {subLink.icon && <subLink.icon className="h-4 w-4 text-accent" />}
                               {subLink.label}
                            </span>
                          </Link>
                        </SheetClose>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ) : (
            <SheetClose asChild key={link.href}>
              <Link href={link.href} className={cn(
                "flex items-center rounded-md px-3 py-2 text-base font-medium hover:bg-foreground/5",
                isLinkActive(link) ? "bg-secondary/10 text-secondary font-semibold" : "text-foreground/80"
              )}>
                 <span className="flex items-center gap-2">
                   {link.icon && <link.icon className="h-5 w-5" />}
                   {link.label}
                 </span>
              </Link>
            </SheetClose>
          )
        ))}
      </nav>
      <div className="mt-8 pt-4 border-t border-border/50">
        <EnhancedButton asChild variant="secondary" className="w-full" glow>
            <Link href="/contact">
              <span className="flex items-center gap-2">Contact Sales</span>
            </Link>
        </EnhancedButton>
      </div>
    </SheetContent>
  </Sheet>
);

// Desktop Menu Extracted for clarity
const DesktopDropdownMenu = ({ navLink, pathname }: { navLink: NavLinkWithSubLinks, pathname: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeParent = (navLink.basePath && pathname.startsWith(navLink.basePath));
  const isSubLinkActive = (href?: string) => href ? pathname === href : false;

  const groupedSubLinks = React.useMemo(() => {
    if (!navLink.subLinks) return {};
    return navLink.subLinks.reduce((acc, item) => {
      const category = item.category || 'General';
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {} as Record<string, NavLinkWithSubLinks[]>);
  }, [navLink.subLinks]);
  
  const columnCount = Object.keys(groupedSubLinks).length;
  const menuWidth = columnCount > 1 ? `${columnCount * 260}px` : '300px';

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <EnhancedButton variant="ghost" asChild className={cn("text-sm", activeParent ? "text-secondary font-semibold bg-secondary/10" : "text-foreground/90")}>
        <Link href={navLink.href}>
          <span className="flex items-center gap-2">
            {navLink.icon && <navLink.icon className="h-4 w-4" />}
            {navLink.label}
          </span>
        </Link>
      </EnhancedButton>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 p-6 rounded-2xl bg-card/90 backdrop-blur-xl shadow-l4 border border-primary/20 ring-1 ring-black/10 z-50 transform-gpu overflow-hidden"
            style={{ width: menuWidth, maxWidth: '1000px' }}
          >
            <div className={cn("grid gap-x-8", `grid-cols-${columnCount}`)}>
              {Object.entries(groupedSubLinks).map(([category, links]) => (
                <div key={category} className="flex flex-col gap-y-1">
                  <p className="font-headline text-sm font-semibold text-accent mb-3 pb-2 border-b border-primary/20">{category}</p>
                  {links.map((itemLink) => (
                    <Link 
                      href={itemLink.href || '#'} 
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
                        {itemLink.shortDescription && <p className="text-xs text-muted-foreground mt-1">{itemLink.shortDescription}</p>}
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
