
'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

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

const AppHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLinkActive = (link: NavLinkWithSubLinks) => {
    if (link.href === '/' && pathname !== '/') return false; // Exact match for home
    if (link.basePath) return pathname.startsWith(link.basePath);
    return pathname === link.href;
  };
  
  const isSubLinkActive = (subLinkHref: string) => pathname === subLinkHref;


  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center space-x-1 md:flex">
          {MAIN_NAV_LINKS.map((link) => (
            link.subLinks ? (
              <DesktopDropdownMenu key={link.label} navLink={link} pathname={pathname} isLinkActive={isLinkActive} isSubLinkActive={isSubLinkActive} />
            ) : (
              <Button key={link.href} variant="ghost" asChild
                className={cn(
                  "text-sm font-medium",
                  isLinkActive(link) ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
                )}
              >
                <Link href={link.href}>
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.label}
                </Link>
              </Button>
            )
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="mb-6 flex items-center justify-between">
                <Logo />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-1">
                {MAIN_NAV_LINKS.map((link) => (
                  link.subLinks ? (
                    <Accordion type="single" collapsible className="w-full" key={link.label}>
                      <AccordionItem value={link.label} className="border-b-0">
                        <AccordionTrigger className={cn(
                          "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:no-underline",
                           (link.basePath && pathname.startsWith(link.basePath)) || (link.subLinks.some(sl => isSubLinkActive(sl.href)))
                            ? "bg-muted text-primary" : "text-foreground/80"
                        )}>
                          <div className="flex items-center">
                            <link.icon className="mr-2 h-5 w-5" />
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
                                    "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
                                    isSubLinkActive(subLink.href) ? "bg-muted text-primary font-semibold" : "text-foreground/70"
                                  )}
                                >
                                  <subLink.icon className="mr-2 h-4 w-4" />
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
                          "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
                          isLinkActive(link) ? "bg-muted text-primary font-semibold" : "text-foreground/70"
                        )}
                      >
                        <link.icon className="mr-2 h-5 w-5" />
                        {link.label}
                      </Link>
                    </SheetClose>
                  )
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const DesktopDropdownMenu = ({ navLink, pathname, isLinkActive, isSubLinkActive }: { navLink: NavLinkWithSubLinks, pathname: string, isLinkActive: (link: NavLinkWithSubLinks) => boolean, isSubLinkActive: (href: string) => boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeParent = (navLink.basePath && pathname.startsWith(navLink.basePath)) || (navLink.subLinks?.some(sl => isSubLinkActive(sl.href)));

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Button variant="ghost"
        className={cn(
          "text-sm font-medium flex items-center",
          activeParent ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
        )}
        // If the parent link itself should be clickable, wrap in Link asChild
        // For now, it just opens the dropdown. If navLink.href is important, adjust this.
        // e.g. for /ai-agents to be a clickable page.
        asChild={!!navLink.href} 
      >
        {navLink.href ? (
          <Link href={navLink.href} className="flex items-center">
            <navLink.icon className="mr-2 h-4 w-4" />
            {navLink.label}
          </Link>
        ) : (
          <>
            <navLink.icon className="mr-2 h-4 w-4" />
            {navLink.label}
          </>
        )}
      </Button>
      {isOpen && navLink.subLinks && (
        <div className="absolute top-full left-0 mt-1 w-56 rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50">
          {navLink.subLinks.map((subLink) => (
            <Link
              key={subLink.href}
              href={subLink.href}
              className={cn(
                "block px-4 py-2 text-sm hover:bg-muted",
                isSubLinkActive(subLink.href) ? "text-primary font-semibold bg-muted" : "text-popover-foreground"
              )}
              onClick={() => setIsOpen(false)}
            >
               <subLink.icon className="mr-2 h-4 w-4 inline-block" />
              {subLink.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppHeader;
