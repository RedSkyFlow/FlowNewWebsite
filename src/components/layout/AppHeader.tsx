
'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-standard ease-gentle",
        isScrolled 
          ? "bg-card/30 backdrop-blur-xl border-b border-primary/20 shadow-l4" 
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Flow Networks Home" className="flex items-center group">
            <Image src="/Images/Flow-2D-logo.png" alt="Flow Networks 2D Logo" className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" width={32} height={32} />
            <div className="flex flex-col justify-center ml-2">
              <span className="text-accent text-sm font-bold uppercase text-gradient-animated">Flow</span>
              <span className="text-accent text-sm font-bold uppercase text-gradient-animated -mt-1">Networks</span>
            </div>
          </Link>
        </div>
        
        <nav className="hidden items-center space-x-1 md:flex flex-grow justify-center">
          {MAIN_NAV_LINKS.map((link) => (
            <EnhancedButton
              key={link.href}
              variant="ghost"
              asChild
              className={cn("text-sm", isLinkActive(link) ? "text-secondary font-semibold bg-secondary/10" : "text-foreground/90")}
            >
              <Link href={link.href}>
                <span className="flex items-center gap-2">
                  {link.icon && React.createElement(link.icon, { className: "h-4 w-4" })}
                  {link.label}
                </span>
              </Link>
            </EnhancedButton>
          ))}
        </nav>

        <div className="hidden md:flex flex-shrink-0">
            <EnhancedButton asChild variant="secondary" size="sm" glow>
              <Link href="/contact">
                 <span className="flex items-center justify-center gap-2">Contact Sales</span>
              </Link>
            </EnhancedButton>
        </div>

        <div className="md:hidden flex-shrink-0">
          <MobileMenu isLinkActive={isLinkActive} />
        </div>
      </div>
    </header>
  );
};

const MobileMenu = ({ isLinkActive }: { isLinkActive: (l: NavLinkWithSubLinks) => boolean }) => (
    <Sheet>
        <SheetTrigger asChild>
            <EnhancedButton variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
            </EnhancedButton>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-sm bg-card/95 backdrop-blur-xl border-l-border/50 p-0">
            <nav className="flex flex-col h-full">
                <div className="flex-grow p-6">
                    <Accordion type="multiple" className="w-full">
                        {MAIN_NAV_LINKS.map((link) =>
                            link.subLinks && link.subLinks.length > 0 ? (
                                <AccordionItem key={link.label} value={link.label} className="border-b border-border/50">
                                    <AccordionTrigger asChild>
                                      {/* THE DEFINITIVE FIX: Wrapping button contents in a single button element */}
                                      <button className="flex w-full items-center justify-between text-lg font-semibold text-foreground/90 hover:text-primary transition-colors py-3">
                                          <span className="flex items-center gap-2">
                                            {link.icon && React.createElement(link.icon, { className: "h-4 w-4" })}
                                            {link.label}
                                          </span>
                                      </button>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-2">
                                        <ul className="space-y-1 pl-4">
                                            {link.subLinks.map((subLink) => (
                                                <li key={subLink.href}>
                                                    <SheetClose asChild>
                                                        <Link href={subLink.href} className="flex items-center gap-3 p-2 rounded-md hover:bg-primary/10 transition-colors">
                                                          <span className="flex items-center gap-2 text-foreground/80">
                                                              {subLink.icon && React.createElement(subLink.icon, { className: "h-4 w-4" })}
                                                              {subLink.label}
                                                          </span>
                                                        </Link>
                                                    </SheetClose>
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            ) : (
                                <SheetClose key={link.href} asChild>
                                    <Link href={link.href} className={cn("flex items-center text-lg font-semibold py-3 border-b border-border/50", isLinkActive(link) ? 'text-primary' : 'text-foreground/90')}>
                                       {/* THE DEFINITIVE FIX: Wrapping link contents in a single span */}
                                       <span className="flex items-center gap-2">
                                          {link.icon && React.createElement(link.icon, { className: "h-4 w-4" })}
                                          {link.label}
                                       </span>
                                    </Link>
                                </SheetClose>
                            )
                        )}
                    </Accordion>
                </div>
                <div className="mt-auto p-6 border-t border-border/50">
                    <SheetClose asChild>
                        <EnhancedButton asChild variant="secondary" glow className="w-full">
                            <Link href="/contact">
                                <span className="flex items-center justify-center gap-2">Contact Sales</span>
                            </Link>
                        </EnhancedButton>
                    </SheetClose>
                </div>
            </nav>
        </SheetContent>
    </Sheet>
);

export default AppHeader;
