
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
            link.subLinks ? (
              <DesktopDropdownMenu key={link.label} navLink={link} pathname={pathname} isSubLinkActive={isSubLinkActive} />
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
                           (link.basePath && pathname.startsWith(link.basePath)) || (link.subLinks?.some(sl => isSubLinkActive(sl.href) || sl.subLinks?.some(ssl => isSubLinkActive(ssl.href))))
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
                              // If a subLink has further subLinks, render another Accordion
                              subLink.subLinks && subLink.subLinks.length > 0 ? (
                                <Accordion type="single" collapsible className="w-full" key={subLink.label}>
                                  <AccordionItem value={subLink.label} className="border-b-0">
                                    <AccordionTrigger className={cn(
                                      "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:no-underline",
                                       (subLink.basePath && pathname.startsWith(subLink.basePath)) || (subLink.subLinks.some(ssl => isSubLinkActive(ssl.href)))
                                        ? "bg-muted text-primary" : "text-foreground/80"
                                    )}>
                                      <div className="flex items-center">
                                        <subLink.icon className="mr-2 h-4 w-4" />
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
                              ) : ( // Otherwise, it's a direct link
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

const DesktopDropdownMenu = ({ navLink, pathname, isSubLinkActive }: { navLink: NavLinkWithSubLinks, pathname: string, isSubLinkActive: (href: string) => boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeParent = (navLink.basePath && pathname.startsWith(navLink.basePath)) || (navLink.subLinks?.some(sl => isSubLinkActive(sl.href) || sl.subLinks?.some(ssl => isSubLinkActive(ssl.href))));

  let gridColsClass = 'grid-cols-1'; // Default
  switch (navLink.label) {
    case 'Products':
      gridColsClass = 'grid-cols-4';
      break;
    case 'Solutions':
      gridColsClass = 'grid-cols-3';
      break;
    case 'Industries':
      gridColsClass = 'grid-cols-4';
      break;
    case 'Resources':
      gridColsClass = 'grid-cols-2';
      break;
     case 'Partners': // Partners is a direct link, no grid needed, but case is here to exclude from default
      gridColsClass = 'grid-cols-1'; // Will not be used as it's a direct link
      break;
    case 'Company':
      gridColsClass = 'grid-cols-3';
      break;
    case 'Links':
      gridColsClass = 'grid-cols-3';
      break;
  }

  // If it's the Partners link, render it as a direct link without a dropdown.
  if (navLink.label === 'Partners') {
    return null; // Or render a simple Link component here if needed outside the main nav loop
  }

  // Specific content structuring for 'Products'
  let productColumns: { heading: string; items: NavLinkWithSubLinks[]; type?: 'default' | 'intelligentVenue' }[] = [];
  if (navLink.label === 'Products' && navLink.subLinks) {
    const guestWiFiData = navLink.subLinks.find(sl => sl.label === "Guest WiFi");
    const intelligentVenueWiFiData = navLink.subLinks.find(sl => sl.label === "Intelligent Venue WiFi (Purple)");
    const keyServicesItems = navLink.subLinks.filter(sl => 
      ["All Axxess Events", "Everlytic Messaging", "CNNTAP Advertising", "Friendly WiFi Certification", "Internet Connectivity"].includes(sl.label)
    );

    if (guestWiFiData) {
      productColumns.push({ heading: "Guest WiFi", items: guestWiFiData.subLinks || [], type: 'default' });
    }
    if (intelligentVenueWiFiData) {
      productColumns.push({ heading: "Intelligent Venue WiFi (Purple)", items: intelligentVenueWiFiData.subLinks || [], type: 'intelligentVenue' });
    }
    if (keyServicesItems.length > 0) {
      productColumns.push({ heading: "Key Services", items: keyServicesItems, type: 'default' });
    }
    // The 4th column for 'Products' will be empty as per omission of visual/CTA for now.
    // If there are less than 4 populated columns, the grid layout will handle it.
  }

  // Group sub-links for other mega menus into columns based on headings
  const groupedSubLinks = navLink.subLinks?.reduce((acc, subLink) => {
      const heading = subLink.category || 'Other'; // Assume subLink has a 'category' property or group under 'Other'
      if (!acc[heading]) {
          acc[heading] = [];
      }
      acc[heading].push(subLink);
      return acc;
  }, {} as Record<string, NavLinkWithSubLinks[]>);

  return (
 <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} >
      <Button
        variant="ghost"
        className={cn(
          "text-sm font-medium flex items-center",
          activeParent ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
        )}
        // If it's a direct link (no subLinks for dropdown), make it behave like a Link.
        // Otherwise, it's just a trigger for the dropdown.
        asChild={!!navLink.href && (!navLink.subLinks || navLink.subLinks.length === 0)} 
      >
        {/* If it's 'Partners', it should always be a direct link and not a dropdown */}
        {navLink.label === 'Partners' || (navLink.href && (!navLink.subLinks || navLink.subLinks.length === 0)) ? (
          <Link href={navLink.href} className="flex items-center">
            {/* Hide the icon for "Partners" as per common design, unless specifically requested otherwise */}
            {navLink.label !== 'Partners' && <navLink.icon className="mr-2 h-4 w-4" />} 
            <navLink.icon className="mr-2 h-4 w-4" />
            {navLink.label}
          </Link>
        ) : (
<span className={cn("flex items-center", navLink.href ? "cursor-pointer" : "cursor-default")}
            onClick={() => {
              if (navLink.href && !isOpen) { // Navigate if it has a direct link and menu isn't already open
                // Only navigate if it's *not* a mega menu (i.e., no subLinks or subLinks are empty)
                // If it has subLinks, click on parent just keeps the dropdown behavior on hover.
                if (!navLink.subLinks || navLink.subLinks.length === 0) {
                   window.location.href = navLink.href; // Or use Next router.push
                }
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
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 p-8 rounded-2xl bg-[#0F0E08] shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-[#2D2C27] backdrop-blur-md transform-gpu overflow-hidden transition-all duration-300 ease-in-out origin-top w-full max-w-[1200px] lg:w-[1000px] xl:w-[1200px]"
          onClick={(e) => e.stopPropagation()} // Prevent sheet from closing when clicking inside
        >
          <div className={cn("grid gap-x-8 gap-y-6", gridColsClass)}>
            {navLink.label === 'Products' ? (
              productColumns.map((col, colIndex) => (
                <div key={col.heading + colIndex} className="space-y-4">
                  <h3 className="font-headline text-lg font-bold text-[#E2FDFF] mb-4 uppercase tracking-wider">
                    {col.heading}
                  </h3>
                  {col.type === 'intelligentVenue' ? (
                    <div className="space-y-3">
                       {/* Specific structure for Purple (Intelligent Venue WiFi) */}
                       {(col.items.filter(item => item.label.includes("Plan")).length > 0) && (
                         <div>
                           <h4 className="font-semibold text-sm text-[#E2FDFF]/70 mb-1.5">Plans</h4>
                           <ul className="space-y-1">
                             {(col.items.filter(item => item.label.includes("Plan"))).map((itemLink) => (
                               <li key={itemLink.href}>
                                 <Link
                                   href={itemLink.href}
                                   className="flex items-center py-1 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md px-2 transition-colors duration-200"
                                   onClick={() => setIsOpen(false)}
                                 >
                                   {itemLink.icon && <itemLink.icon className="inline-block mr-1.5 h-4 w-4 align-middle text-[#FFCB47] transition-colors duration-200 group-hover:text-[#F46036]" />}
                                   {itemLink.label}
                                 </Link>
                               </li>
                             ))}
                           </ul>
                         </div>
                       )}
                      {(col.items.filter(item => item.label.startsWith("Add-On:")).length > 0) && (
                        <div className="pt-2">
                         <h4 className="font-semibold text-sm text-[#E2FDFF]/70 mb-1.5">Add-Ons</h4>
                        <ul className="space-y-1">
                          {(col.items.filter(item => item.label.startsWith("Add-On:"))).map((itemLink) => (
                            <li key={itemLink.href}>
                              <Link
                                href={itemLink.href}
                                className="flex items-center py-1 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md px-2 transition-colors duration-200 hover:text-[#0282F2]"
                                onClick={() => setIsOpen(false)}
                                >
                                {itemLink.icon && <itemLink.icon className="inline-block mr-1.5 h-4 w-4 align-middle text-muted-foreground group-hover:text-primary" />}
                                {itemLink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      )}
                      {/* "Compare Plans" link */}
                      {(col.items.find(item => item.label.includes("Compare Purple Plans"))) && (
                         <div className="pt-2">
                           {/* Find the specific "Compare Plans" link */}
                           <Link
                              href={(col.items.find(item => item.label.includes("Compare Purple Plans")))?.href || '#'}
                              className="flex items-center py-1 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md px-2 transition-colors duration-200 font-semibold"
                              onClick={() => setIsOpen(false)}
                            >
                               View All Purple Plans
                            </Link>
                         </div>
                      )}
                    </div>
                  ) : (
                    <ul className="space-y-1">
                      {col.items.map((itemLink) => (
                        <li key={itemLink.href}>
                          <Link
                            href={itemLink.href}
                            className="flex items-center py-1 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md px-2 transition-colors duration-200"
                            onClick={() => setIsOpen(false)} // Close dropdown on click
                          >
                            {itemLink.icon && <itemLink.icon className="inline-block mr-1.5 h-4 w-4 align-middle text-[#E2FDFF]/70 transition-colors duration-200 group-hover:text-[#0282F2]" />}
                            {itemLink.label}
                          </Link>
                          {itemLink.shortDescription && (
                            <p className="text-xs text-[#E2FDFF]/60 pl-2 mt-1 mb-3">{itemLink.shortDescription}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              // Default rendering for other mega menus (excluding Partners)
              Object.keys(groupedSubLinks || {}).map(heading => (
                <div key={heading} className="space-y-4">
                  <h3 className="font-headline text-lg font-bold text-[#E2FDFF] mb-4 uppercase tracking-wider flex items-center">
                     {/* Find an icon for the heading if available in the grouped items */}
                     {groupedSubLinks?.[heading][0]?.icon && <groupedSubLinks?.[heading][0]?.icon className="mr-2 h-5 w-5 text-[#FFCB47]" />}{/* Corrected icon usage */}
                     {heading}
                  </h3>
                   <ul className="space-y-1 pl-0">
                  {groupedSubLinks?.[heading].map((itemLink) => (
                    <li key={itemLink.href}>
                        <Link
                            href={itemLink.href}
                            className="py-1 px-2 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md transition-colors duration-200 flex items-center"
                          onClick={() => setIsOpen(false)}
                        >
                          {itemLink.icon && <itemLink.icon className="inline-block mr-1.5 h-4 w-4 align-middle text-[#E2FDFF]/70 group-hover:text-primary" />}{/* Corrected icon usage */}
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
export default AppHeader;
