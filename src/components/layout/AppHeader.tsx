
'use client';

import Link from 'next/link';
import { Menu, X, Layers, type LucideIcon, ChevronRight as ChevronRightIcon, Package, Home, Lightbulb, Building2, Handshake, Library, Info, HelpCircle, Wifi, Brain, Ticket, Send, Tv2, ShieldCheck, Globe, Link2, PackageSearch, Megaphone, View, HandCoins, ClipboardList, Lock, Settings2, Bot, Puzzle, DollarSign, Gift, CalendarDays, Store, PlugZap, AreaChart, Cpu, UsersRound, Users2, UserSquare, Share2, BookOpen, FileText, Wrench, Gavel, Shield, FileBadge, DatabaseZap, Cookie, Rss, FileCheck, Headset, MessageSquareText, MailOpen, ExternalLink, UserCog, ArrowRight, Server as ServerIcon, BuildingIcon, Route, Drama, School, TrainFront, Users, Newspaper, Edit3, Map, Monitor, MailCheck, Settings, HardDrive, Phone, LifeBuoy, Book, BarChart, ShoppingCart, Plane, GraduationCap, Factory, LayoutGrid, Calendar, Target, TrendingUp, Compass, HeartHandshake, Rocket, Award, FlaskConical, CircleDollarSign, Fingerprint, Search as SearchIcon, Bell, Clock, Eye, LightbulbOff, Key, Landmark, ShoppingBag, BadgeCheck, FolderGit2, UserCircle2, BookUser, ShieldAlert, BadgeInfo, FileQuestion, BookCopy, FerrisWheel, Hotel, ConciergeBell, ScrollText, Bus, Train } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState, useEffect, createElement } from 'react';
import { motion } from 'framer-motion';

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
        "sticky top-0 z-50 w-full transition-shadow duration-300 bg-[#0A0903]/80 backdrop-blur-lg border-b border-white/10",
        isScrolled ? "shadow-lg shadow-black/20" : "shadow-none"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <nav className="hidden items-center space-x-1 md:flex flex-grow justify-center">
          {MAIN_NAV_LINKS.map((link) => (
            link.subLinks && link.subLinks.length > 0 ? (
              <DesktopDropdownMenu key={link.label} navLink={link} pathname={pathname} isSubLinkActive={isSubLinkActive} />
            ) : (
              <Button key={link.href} variant="ghost" asChild
                className={cn(
                  "text-sm font-medium px-3 py-2 rounded-md",
                  isLinkActive(link) ? "text-[#0282F2] font-semibold bg-[#0282F2]/10" : "text-[#E2FDFF]/80 hover:text-[#E2FDFF] hover:bg-[#E2FDFF]/5"
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
                <Menu className="h-6 w-6 text-[#E2FDFF]" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-[#0F0E08] p-6 text-[#E2FDFF] border-l border-[#2D2C27]">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex-shrink-0">
                  <Logo />
                </div>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6 text-[#E2FDFF]" />
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
                          "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-[#1A1913] hover:no-underline",
                           (link.basePath && pathname.startsWith(link.basePath)) || (link.subLinks?.some(sl => isSubLinkActive(sl.href) || sl.subLinks?.some(ssl => isSubLinkActive(ssl.href))))
                            ? "bg-[#1A1913] text-[#0282F2]" : "text-[#E2FDFF]/80"
                        )}>
                          <div className="flex items-center">
                            {link.icon && <link.icon className="mr-2 h-5 w-5 text-[#FFCB47]" />}
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
                                      "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-[#1A1913] hover:no-underline",
                                       (subLink.basePath && pathname.startsWith(subLink.basePath)) || (subLink.subLinks.some(ssl => isSubLinkActive(ssl.href)))
                                        ? "bg-[#1A1913] text-[#0282F2]" : "text-[#E2FDFF]/80"
                                    )}>
                                      <div className="flex items-center">
                                        {subLink.icon && <subLink.icon className="mr-2 h-4 w-4 text-[#FFCB47]" />}
                                        {subLink.label}
                                      </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pt-1 pb-0">
                                      <div className="ml-4 flex flex-col space-y-1">
                                        {subLink.subLinks.map(ssl => (
                                          <SheetClose asChild key={ssl.href}>
                                            <Link href={ssl.href} className={cn("flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-[#1A1913]", isSubLinkActive(ssl.href) ? "bg-[#1A1913] text-[#0282F2] font-semibold" : "text-[#E2FDFF]/70")}>
                                              {ssl.icon && <ssl.icon className="mr-2 h-4 w-4 text-[#FFCB47]" />}
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
                                      "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-[#1A1913]",
                                      isSubLinkActive(subLink.href) ? "bg-[#1A1913] text-[#0282F2] font-semibold" : "text-[#E2FDFF]/70"
                                    )}
                                  >
                                    {subLink.icon && <subLink.icon className="mr-2 h-4 w-4 text-[#FFCB47]" />}
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
                          "flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-[#1A1913]",
                          isLinkActive(link) ? "bg-[#1A1913] text-[#0282F2] font-semibold" : "text-[#E2FDFF]/70"
                        )}
                      >
                         {link.icon && <link.icon className="mr-2 h-5 w-5 text-[#FFCB47]" />}
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

type ProductColumn = {
  heading: string;
  icon?: LucideIcon;
  items?: NavLinkWithSubLinks[];
  type?: 'default' | 'intelligentVenue';
  content?: {
    plans?: { heading: string; items: NavLinkWithSubLinks[] };
    addOns?: { heading: string; items: NavLinkWithSubLinks[] };
    compareLink?: NavLinkWithSubLinks;
  };
};

type GroupedSubLinks = Record<string, { headingIcon?: LucideIcon; items: NavLinkWithSubLinks[] }>;


const DesktopDropdownMenu = ({ navLink, pathname, isSubLinkActive }: { navLink: NavLinkWithSubLinks, pathname: string, isSubLinkActive: (href: string | undefined) => boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const activeParent = (navLink.basePath && pathname.startsWith(navLink.basePath)) || (navLink.subLinks?.some(sl => isSubLinkActive(sl.href) || sl.subLinks?.some(ssl => isSubLinkActive(ssl.href))));

  let gridColsClass = '';
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
    default:
      gridColsClass = 'grid-cols-2';
  }

  const productColumns: ProductColumn[] = [];
  let finalGroupedSubLinks: GroupedSubLinks = {};

  if (navLink.label === 'Products') {
    if (navLink.subLinks) {
      const allProductLinks = navLink.subLinks;

      const guestWiFiData = allProductLinks.find(sl => sl.label === "Guest WiFi");
      if (guestWiFiData) {
        productColumns.push({
          heading: guestWiFiData.label,
          icon: guestWiFiData.icon,
          items: guestWiFiData.subLinks || [],
          type: 'default',
        });
      }

      const intelligentVenueWiFiData = allProductLinks.find(sl => sl.label === "Intelligent Venue WiFi (Purple)");
      if (intelligentVenueWiFiData && intelligentVenueWiFiData.subLinks) {
        const plans = intelligentVenueWiFiData.subLinks.filter(item => ["Connect Plan", "Capture Plan", "Engage Plan"].includes(item.label));
        const addOns = intelligentVenueWiFiData.subLinks.filter(item => item.label.startsWith("Add-On:"));
        const comparePlansLink = intelligentVenueWiFiData.subLinks.find(item => item.label === "Compare Purple Plans");

        productColumns.push({
          heading: intelligentVenueWiFiData.label,
          icon: intelligentVenueWiFiData.icon,
          type: 'intelligentVenue',
          content: {
            plans: { heading: "Plans", items: plans },
            addOns: { heading: "Add-Ons", items: addOns },
            compareLink: comparePlansLink,
          }
        });
      }

      const keyServicesItems = allProductLinks.filter(sl => sl.category === "Key Services");
      if (keyServicesItems.length > 0) {
        productColumns.push({
          heading: "Key Services",
          icon: Layers,
          items: keyServicesItems,
          type: 'default',
        });
      }
    }
  } else {
    finalGroupedSubLinks = navLink.subLinks?.reduce((acc, subLink) => {
      const category = subLink.category || subLink.label;
      if (!acc[category]) {
        acc[category] = { headingIcon: subLink.icon || Layers, items: [] };
      }
      if (subLink.subLinks && subLink.subLinks.length > 0) {
        // This is a nested group, like 'Technology Partners'
        acc[category].items.push(...subLink.subLinks);
      } else {
        // This is a direct link
        acc[category].items.push(subLink);
      }
      return acc;
    }, {} as GroupedSubLinks) || {};
  }


  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Button
        variant="ghost"
        className={cn(
          "text-sm font-medium flex items-center px-3 py-2 rounded-md",
          activeParent ? "text-[#0282F2] font-semibold bg-[#0282F2]/10" : "text-[#E2FDFF]/80 hover:text-[#E2FDFF] hover:bg-[#E2FDFF]/5"
        )}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {navLink.icon && <navLink.icon className="mr-2 h-4 w-4" />}
        {navLink.label}
        <ChevronRightIcon className={cn("ml-1 h-3 w-3 transform transition-transform duration-200", isOpen ? "rotate-90" : "")} />
      </Button>

      {isOpen && navLink.subLinks && navLink.subLinks.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 p-8 rounded-2xl bg-[#0F0E08] shadow-[0_15px_40px_rgba(0,0,0,0.4)] border border-[#2D2C27] ring-1 ring-[#0A0903] z-50 transform-gpu overflow-hidden w-[1000px]"
          style={{ ['--tw-backdrop-blur' as any]: 'blur(8px)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={cn("grid gap-x-8 gap-y-6", gridColsClass)}>
            {navLink.label === 'Products' ? (
              productColumns.map((col, colIndex) => (
                <div key={col.heading + colIndex} className="space-y-4">
                  {col.heading && (
                    <h3 className="font-headline text-lg font-bold text-[#E2FDFF] mb-4 uppercase tracking-wider flex items-center">
                      {col.icon && createElement(col.icon, { className: "mr-3 h-5 w-5 text-[#FFCB47]" })}
                      {col.heading}
                    </h3>
                  )}
                  {col.type === 'intelligentVenue' && col.content ? (
                    <div className="space-y-4">
                      {col.content.plans && (
                        <div>
                          <h4 className="font-headline text-base font-semibold text-[#E2FDFF]/90 mb-2">{col.content.plans.heading}</h4>
                          <ul className="space-y-1.5">
                            {col.content.plans.items.map(itemLink => (
                              <li key={itemLink.href}>
                                <Link href={itemLink.href} className="py-1 px-2 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md transition-colors duration-200 flex items-center group/item" onClick={() => setIsOpen(false)}>
                                  {itemLink.icon && createElement(itemLink.icon, { className: "mr-2 h-4 w-4 text-[#FFCB47] group-hover/item:text-[#F46036]" })}
                                  {itemLink.label}
                                </Link>
                                {itemLink.shortDescription && <p className="text-xs text-[#E2FDFF]/60 pl-2 mt-1 mb-3">{itemLink.shortDescription}</p>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {col.content.addOns && (
                        <div className="mt-3">
                          <h4 className="font-headline text-base font-semibold text-[#E2FDFF]/90 mb-2">{col.content.addOns.heading}</h4>
                          <ul className="space-y-1.5">
                            {col.content.addOns.items.map(itemLink => (
                              <li key={itemLink.href}>
                                <Link href={itemLink.href} className="py-1 px-2 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md transition-colors duration-200 flex items-center group/item" onClick={() => setIsOpen(false)}>
                                  {itemLink.icon && createElement(itemLink.icon, { className: "mr-2 h-4 w-4 text-[#FFCB47] group-hover/item:text-[#F46036]" })}
                                  {itemLink.label}
                                </Link>
                                {itemLink.shortDescription && <p className="text-xs text-[#E2FDFF]/60 pl-2 mt-1 mb-3">{itemLink.shortDescription}</p>}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {col.content.compareLink && (
                        <div className="mt-4">
                            <Link href={col.content.compareLink.href} className="py-1 px-2 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md transition-colors duration-200 flex items-center group/item font-semibold" onClick={() => setIsOpen(false)}>
                                {col.content.compareLink.icon && createElement(col.content.compareLink.icon, { className: "mr-2 h-4 w-4 text-[#FFCB47] group-hover/item:text-[#F46036]" })}
                                {col.content.compareLink.label}
                            </Link>
                        </div>
                      )}
                    </div>
                  ) : (
                    <ul className="space-y-1.5">
                      {col.items?.map((itemLink) => (
                        <li key={itemLink.href}>
                          <Link href={itemLink.href} className="py-1 px-2 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md transition-colors duration-200 flex items-center group/item" onClick={() => setIsOpen(false)}>
                            {itemLink.icon && createElement(itemLink.icon, { className: "mr-2 h-4 w-4 text-[#FFCB47] group-hover/item:text-[#F46036]" })}
                            {itemLink.label}
                          </Link>
                          {itemLink.shortDescription && <p className="text-xs text-[#E2FDFF]/60 pl-2 mt-1 mb-3">{itemLink.shortDescription}</p>}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              Object.keys(finalGroupedSubLinks).map(heading => (
                <div key={heading} className="space-y-4">
                   <h3 className="font-headline text-lg font-bold text-[#E2FDFF] mb-4 uppercase tracking-wider flex items-center">
                     {finalGroupedSubLinks[heading].headingIcon && createElement(finalGroupedSubLinks[heading].headingIcon as LucideIcon, { className: "mr-3 h-5 w-5 text-[#FFCB47]" })}
                      {heading}
                  </h3>
                   <ul className="space-y-1.5">
                  {finalGroupedSubLinks[heading].items.map((itemLink) => (
                    <li key={itemLink.href}>
                        <Link href={itemLink.href} className="py-1 px-2 text-sm text-[#E2FDFF]/80 hover:text-[#0282F2] hover:bg-[#1A1913] rounded-md transition-colors duration-200 flex items-center group/item" onClick={() => setIsOpen(false)}>
                          {itemLink.icon && createElement(itemLink.icon, { className: "mr-2 h-4 w-4 text-[#FFCB47] group-hover/item:text-[#F46036]" })}
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
        </motion.div>
      )}
    </div>
  );
};


export default AppHeader;
