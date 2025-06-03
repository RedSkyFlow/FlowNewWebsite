'use client';

import Link from 'next/link';
import { Menu, X, Briefcase, Users, MessageSquare, Home, Zap, LayoutGrid } from 'lucide-react';
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
} from "@/components/ui/accordion"

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { 
    label: 'AI Agents', 
    icon: Zap,
    subLinks: [
      { href: '/ai-agents/hospitality', label: 'Hospitality', icon: Users },
      { href: '/ai-agents/retail', label: 'Retail', icon: Briefcase },
      { href: '/ai-agents/custom', label: 'Custom Solutions', icon: LayoutGrid },
    ]
  },
  { href: '/contact', label: 'Contact Us', icon: MessageSquare },
];

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

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Logo />
        <nav className="hidden items-center space-x-2 md:flex">
          {navLinks.map((link) => (
            link.subLinks ? (
              <DesktopDropdownMenu key={link.label} link={link} pathname={pathname} />
            ) : (
              <Button key={link.href} variant="ghost" asChild
                className={cn(
                  "text-sm font-medium",
                  pathname === link.href ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
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
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  link.subLinks ? (
                    <Accordion type="single" collapsible className="w-full" key={link.label}>
                      <AccordionItem value={link.label} className="border-b-0">
                        <AccordionTrigger className={cn(
                          "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:no-underline",
                          link.subLinks.some(sl => pathname.startsWith(sl.href)) ? "bg-muted text-primary" : "text-foreground/80"
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
                                  pathname === subLink.href ? "bg-muted text-primary font-semibold" : "text-foreground/70"
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
                          pathname === link.href ? "bg-muted text-primary font-semibold" : "text-foreground/70"
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

const DesktopDropdownMenu = ({ link, pathname }: { link: any, pathname: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <Button variant="ghost"
        className={cn(
          "text-sm font-medium flex items-center",
          link.subLinks.some((sl:any) => pathname.startsWith(sl.href)) ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
        )}
      >
        <link.icon className="mr-2 h-4 w-4" />
        {link.label}
      </Button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 rounded-md bg-popover shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50">
          {link.subLinks.map((subLink: any) => (
            <Link
              key={subLink.href}
              href={subLink.href}
              className={cn(
                "block px-4 py-2 text-sm hover:bg-muted",
                pathname === subLink.href ? "text-primary font-semibold" : "text-popover-foreground"
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
