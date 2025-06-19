
'use client';

import Link from 'next/link';
import { Menu, X, Layers, type LucideIcon, ChevronRight as ChevronRightIcon } from 'lucide-react'; // Added ChevronRightIcon
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
    if (link.href === '/' && pathname !== '/') return false;
    if (link.basePath) return pathname.startsWith(link.basePath);
    return pathname === link.href;
  };

  const isSubLinkActive = (subLinkHref: string | undefined) => subLinkHref ? pathname === subLinkHref : false;

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
            link.subLinks && link.subLinks.length > 0 ? (
              <DesktopDropdownMenu key={link.label} navLink={link} pathname={pathname} isSubLinkActive={isSubLinkActive} />
            ) : (
              <Button key={link.href} variant="ghost" asChild
                className={cn(
                  "text-sm font-medium",
                  isLinkActive(link) ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
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
                  link.subLinks && link.subLinks.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full" key={link.label}>
                      <AccordionItem value={link.label} className="border-b-0">
                        <AccordionTrigger className={cn(
                          "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:no-underline",
                           (link.basePath && pathname.startsWith(link.basePath)) || (link.subLinks?.some(sl => isSubLinkActive(sl.href) || sl.subLinks?.some(ssl => isSubLinkActive(ssl.href))))
                            ? "bg-muted text-primary" : "text-foreground/80"
                        )}>
                          <div className="flex items-center">
                            {link.icon && <link.icon className="mr-2 h-5 w-5" />}
                            {link.label}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-1 pb-0">
                          <div className="ml-4 flex flex-col space-y-1">
                            {link.subLinks.map(subLink => (
                              subLink.subLinks && subLink.subLinks.length > 0 ? (
                                <Accordion type="single" collapsible className="w-full" key={subLink.label}>
                                  <AccordionItem value={subLink.label} className="border-b-0">
                                    <AccordionTrigger className={cn(
                                      "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:no-underline",
                                       (subLink.basePath && pathname.startsWith(subLink.basePath)) || (subLink.subLinks.some(ssl => isSubLinkActive(ssl.href)))
                                        ? "bg-muted text-primary" : "text-foreground/80"
                                    )}>
                                      <div className="flex items-center">
                                        {subLink.icon && <subLink.icon className="mr-2 h-4 w-4" />}
                                        {subLink.label}
                                      </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-1 pb-0">
                                      <div className="ml-4 flex flex-col space-y-1">
                                        {subLink.subLinks.map(ssl => (
                                          <SheetClose asChild key={ssl.href}>
                                            <Link href={ssl.href} className={cn("flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-muted", isSubLinkActive(ssl.href) ? "bg-muted text-primary font-semibold" : "text-foreground/70")}>
                                              {ssl.icon && <ssl.icon className="mr-2 h-4 w-4" />}
                                              {ssl.label}
                                            </Link>
                                          </SheetClose>
                                        ))}
                                      </div>
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              ) : (
                                <SheetClose asChild key={subLink.href}>
                                  <Link
                                    href={subLink.href}
                                    className={cn(
                                      "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-muted",
                                      isSubLinkActive(subLink.href) ? "bg-muted text-primary font-semibold" : "text-foreground/70"
                                    )}
                                  >
                                    {subLink.icon && <subLink.icon className="mr-2 h-4 w-4" />}
                                    {subLink.label}
                                  </Link>
                                </SheetClose>
                              )
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
                         {link.icon && <link.icon className="mr-2 h-5 w-5" />}
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

const DesktopDropdownMenu = ({ navLink, pathname, isSubLinkActive }: { navLink: NavLinkWithSubLinks, pathname: string, isSubLinkActive: (href?: string) => boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeParent = (navLink.basePath && pathname.startsWith(navLink.basePath)) || (navLink.subLinks?.some(sl => isSubLinkActive(sl.href) || sl.subLinks?.some(ssl => isSubLinkActive(ssl.href))));

  let gridColsClass = 'md:grid-cols-1'; // Default
  switch (navLink.label) {
    case 'Products':
      gridColsClass = 'grid-cols-4'; // Guest WiFi, Intelligent Venue, Key Services, Optional Visual/CTA (omitted for now)
      break;
    case 'Solutions':
      gridColsClass = 'grid-cols-3';
      break;
    case 'Industries':
      gridColsClass = 'grid-cols-4';
      break;
    case 'Partners':
      gridColsClass = 'grid-cols-2';
      break;
    case 'Resources':
      gridColsClass = 'grid-cols-2';
      break;
    case 'Company':
      gridColsClass = 'grid-cols-3';
      break;
    case 'Links':
      gridColsClass = 'grid-cols-3';
      break;
  }

  type ProductColumnType = {
    heading: string;
    icon?: LucideIcon;
    items?: NavLinkWithSubLinks[]; // For direct items like Guest WiFi / Key Services
    subHeadings?: { title: string; items: NavLinkWithSubLinks[] }[]; // For Intelligent Venue WiFi
    compareLink?: NavLinkWithSubLinks; // For "Compare Purple Plans"
  };

  type GroupedSubLinksType = Record<string, { icon?: LucideIcon; items: NavLinkWithSubLinks[] }>;

  let productColumns: ProductColumnType[] = [];
  let finalGroupedSubLinks: GroupedSubLinksType = {};

  if (navLink.label === 'Products' && navLink.subLinks) {
    const guestWiFiData = navLink.subLinks.find(sl => sl.label === "Guest WiFi");
    const intelligentVenueWiFiData = navLink.subLinks.find(sl => sl.label === "Intelligent Venue WiFi (Purple)");
    const keyServicesItems = navLink.subLinks.filter(sl =>
      ["All Axxess Events", "Everlytic Messaging", "CNNTAP Advertising", "Friendly WiFi Certification", "Internet Connectivity"].includes(sl.label)
    );

    if (guestWiFiData) {
      productColumns.push({
        heading: guestWiFiData.label,
        icon: guestWiFiData.icon,
        items: guestWiFiData.subLinks || [],
      });
    }

    if (intelligentVenueWiFiData && intelligentVenueWiFiData.subLinks) {
      productColumns.push({
        heading: intelligentVenueWiFiData.label,
        icon: intelligentVenueWiFiData.icon,
        subHeadings: [
          {
            title: "Plans",
            items: intelligentVenueWiFiData.subLinks.filter(item => ["Connect Plan", "Capture Plan", "Engage Plan"].includes(item.label))
          },
          {
            title: "Add-Ons",
            items: intelligentVenueWiFiData.subLinks.filter(item => item.label.startsWith("Add-On:"))
          },
        ],
        compareLink: intelligentVenueWiFiData.subLinks.find(item => item.label === "Compare Purple Plans")
      });
    }

    if (keyServicesItems.length > 0) {
      productColumns.push({
        heading: "Key Services",
        icon: Layers, 
        items: keyServicesItems,
      });
    }
  } else if (navLink.subLinks) {
    finalGroupedSubLinks = navLink.subLinks.reduce((acc, subLink) => {
      if (subLink.subLinks && subLink.subLinks.length > 0) {
        acc[subLink.label] = {
            icon: subLink.icon,
            items: subLink.subLinks
        };
      } else {
        const groupKey = subLink.category || navLink.label;
        if (!acc[groupKey]) {
            acc[groupKey] = {
                icon: subLink.category ? subLink.icon : (groupKey === navLink.label ? navLink.icon : subLink.icon),
                items: []
            };
        }
        if (!acc[groupKey].items.find(item => item.href === subLink.href)) {
              acc[groupKey].items.push(subLink);
        }
      }
      return acc;
    }, {} as GroupedSubLinksType);
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Button
        variant="ghost"
        className={cn(
          "text-sm font-medium flex items-center",
          activeParent ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {navLink.icon && <navLink.icon className="mr-2 h-4 w-4" />}
        {navLink.label}
        <ChevronRightIcon className="ml-1 h-3 w-3 transform transition-transform duration-200 group-hover:rotate-90 data-[state=open]:rotate-90" />
      </Button>

      {isOpen && navLink.subLinks && navLink.subLinks.length > 0 && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 p-8 rounded-2xl bg-[#0F0E08] shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-[#2D2C27] ring-1 ring-[#0A0903] z-50 transform-gpu overflow-hidden w-[1000px]"
          style={{ '--tw-backdrop-blur': 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' } as React.CSSProperties}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={cn("grid gap-x-8 gap-y-6", gridColsClass)}>
            {navLink.label === 'Products' ? (
              productColumns.map((col, colIndex) => (
                <div key={col.heading + colIndex} className="space-y-4">
                  <h3 className="font-headline text-lg font-bold text-[#E2FDFF] mb-4 uppercase tracking-wider flex items-center">
                    {col.icon && <col.icon className="mr-3 h-5 w-5 text-[#FFCB47]" />}
                    {col.heading}
                  </h3>
                  {col.items && !col.subHeadings && (
                    <ul className="space-y-1.5">
                      {col.items.map((itemLink) => (
                        <li key={itemLink.href}>
                          <Link
                            href={itemLink.href}
                            className="flex items-center py-1 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md px-2 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {itemLink.icon && <itemLink.icon className="inline-block mr-2 h-4 w-4 align-middle text-[#E2FDFF]/70" />}
                            {itemLink.label}
                          </Link>
                          {itemLink.shortDescription && <p className="text-xs text-[#E2FDFF]/60 pl-2 mt-1 mb-3">{itemLink.shortDescription}</p>}
                        </li>
                      ))}
                    </ul>
                  )}
                  {col.subHeadings && (
                    <div className="space-y-4">
                      {col.subHeadings.map(subH => (
                        <div key={subH.title}>
                          <h4 className="font-headline text-base font-semibold text-[#E2FDFF]/90 mb-2">{subH.title}</h4>
                          <ul className="space-y-1.5 grid grid-cols-1">
                            {subH.items.map((itemLink) => (
                              <li key={itemLink.href}>
                                <Link
                                  href={itemLink.href}
                                  className="flex items-center py-1 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md px-2 transition-colors duration-200"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {itemLink.icon && <itemLink.icon className="inline-block mr-2 h-4 w-4 align-middle text-[#E2FDFF]/70" />}
                                  {itemLink.label}
                                </Link>
                                {itemLink.shortDescription && <p className="text-xs text-[#E2FDFF]/60 pl-2 mt-1 mb-3">{itemLink.shortDescription}</p>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {col.compareLink && (
                         <div className="mt-3">
                           <Link
                              href={col.compareLink.href}
                              className="flex items-center py-1 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md px-2 transition-colors duration-200 font-semibold"
                              onClick={() => setIsOpen(false)}
                            >
                               {col.compareLink.icon && <col.compareLink.icon className="inline-block mr-2 h-4 w-4 align-middle text-[#E2FDFF]/70" />}
                               {col.compareLink.label}
                            </Link>
                         </div>
                      )}
                    </div>
                  )}
                </div>
              ))
            ) : (
              Object.keys(finalGroupedSubLinks).map(heading => (
                <div key={heading} className="space-y-4">
                   <h3 className="font-headline text-lg font-bold text-[#E2FDFF] mb-4 uppercase tracking-wider flex items-center">
                     {finalGroupedSubLinks[heading].icon && <finalGroupedSubLinks[heading].icon className="mr-3 h-5 w-5 text-[#FFCB47]" />}
                     {heading}
                  </h3>
                   <ul className="space-y-1.5">
                  {finalGroupedSubLinks[heading].items.map((itemLink) => (
                    <li key={itemLink.href}>
                        <Link
                            href={itemLink.href}
                            className="flex items-center py-1 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md px-2 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                          {itemLink.icon && <itemLink.icon className="inline-block mr-2 h-4 w-4 align-middle text-[#E2FDFF]/70" />}
                          {itemLink.label}
                        </Link>
                        {itemLink.shortDescription && (
                          <p className="text-xs text-[#E2FDFF]/60 pl-2 mt-1 mb-3">{itemLink.shortDescription}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                 </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppHeader;
