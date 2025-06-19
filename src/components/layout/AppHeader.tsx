
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
        "sticky top-0 z-50 w-full transition-shadow duration-300 bg-background/70 backdrop-blur-lg border-b border-white/5", 
        isScrolled ? "shadow-lg" : "shadow-none" 
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex-shrink-0">
          <Logo />
        </div>
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
        <div className="md:hidden flex-shrink-0">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex-shrink-0">
                  <Logo />
                </div>
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
  const activeParent = (navLink.basePath && pathname.startsWith(navLink.basePath)) || (navLink.subLinks?.some(sl => isSubLinkActive(sl.href || '#') || sl.subLinks?.some(ssl => isSubLinkActive(ssl.href))));

  const numFirstLevelSubLinks = navLink.subLinks?.length || 0;
  let gridColsClass = 'md:grid-cols-1'; 
  if (numFirstLevelSubLinks > 1 && numFirstLevelSubLinks <=3) gridColsClass = 'md:grid-cols-2';
  if (numFirstLevelSubLinks > 3 && numFirstLevelSubLinks <=6) gridColsClass = 'md:grid-cols-3';
  if (numFirstLevelSubLinks > 6) gridColsClass = 'md:grid-cols-4';


  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Button variant="ghost"
        className={cn(
          "text-sm font-medium flex items-center",
          activeParent ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
        )}
        asChild={!!navLink.href && !navLink.subLinks?.length}
      >
        {navLink.href && !navLink.subLinks?.length ? (
          <Link href={navLink.href} className="flex items-center">
            <navLink.icon className="mr-2 h-4 w-4" />
            {navLink.label}
          </Link>
        ) : (
          <span className={cn("flex items-center", navLink.href ? "cursor-pointer" : "cursor-default")} 
            onClick={() => {
              if (navLink.href) {
                 window.location.href = navLink.href; // Use NextLink for client-side nav if possible, or router.push
              }
            }}
          >
            <navLink.icon className="mr-2 h-4 w-4" />
            {navLink.label}
          </span>
        )}
      </Button>
      {isOpen && navLink.subLinks && navLink.subLinks.length > 0 && (
        <div 
          className={cn(
            "absolute top-full left-1/2 -translate-x-1/2 mt-1 p-6 rounded-lg bg-popover shadow-xl ring-1 ring-black ring-opacity-5 z-50",
            "w-auto min-w-[60rem] max-w-screen-xl" 
          )}
          onClick={(e) => e.stopPropagation()} 
        >
          <div className={cn("grid gap-x-8 gap-y-6", gridColsClass)}>
            {navLink.subLinks.map((categoryLink) => (
              <div key={categoryLink.label} className="space-y-3">
                <Link
                  href={categoryLink.href || '#'} 
                  className={cn(
                    "flex items-center text-sm font-semibold text-popover-foreground hover:text-primary",
                    (categoryLink.basePath && pathname.startsWith(categoryLink.basePath)) || isSubLinkActive(categoryLink.href || '#') ? "text-primary" : ""
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <categoryLink.icon className="mr-2 h-5 w-5 flex-shrink-0 text-primary" />
                  {categoryLink.label}
                </Link>
                {categoryLink.shortDescription && (
                  <p className="text-xs text-muted-foreground pl-7 mb-2">{categoryLink.shortDescription}</p>
                )}
                {categoryLink.subLinks && categoryLink.subLinks.length > 0 && (
                  <ul className={cn(
                    "space-y-1.5 pl-6", // Adjusted pl-7 to pl-6
                     categoryLink.label === 'Intelligent Venue WiFi (Purple)' ? 'grid grid-cols-2 gap-x-4 gap-y-2' : '' // Increased gap-y-1.5 to gap-y-2
                  )}>
                    {categoryLink.subLinks.map((itemLink) => (
                      <li key={itemLink.label}>
                        <Link
                          href={itemLink.href}
                          className={cn(
                            "flex items-center py-1.5 text-xs text-popover-foreground hover:text-primary", // Adjusted py-1 to py-1.5
                            isSubLinkActive(itemLink.href) ? "text-primary font-medium" : ""
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {itemLink.icon && <itemLink.icon className="inline-block mr-1.5 h-4 w-4 align-middle text-muted-foreground group-hover:text-primary" />} {/* Adjusted h-3 w-3 to h-4 w-4 */}
                          {itemLink.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
