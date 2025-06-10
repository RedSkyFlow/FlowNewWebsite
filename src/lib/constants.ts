
import { Home, Briefcase, Cpu, Building2, Info, Library, Mail, Network, Settings, Cloud, Shield, Layers, Server as ServerIcon, Building, Users, Newspaper, Edit3, FileText, BookOpen, Wifi, Globe, LucideIcon } from 'lucide-react';
// Note: Some icons from the previous version like Zap, MessageSquare, TrendingUp, Plane, HeartPulse, GraduationCap, Copy, Sparkles, Send, Tv2, Handshake, Ticket might be reused or replaced based on final manifest.

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type NavLinkWithSubLinks = NavLink & {
  subLinks?: NavLink[];
  basePath?: string; // For active state checking if parent href is a general path
};

// MAIN_NAV_LINKS for Flow Networks
export const MAIN_NAV_LINKS: NavLinkWithSubLinks[] = [
  { href: '/', label: 'Home', icon: Home },
  {
    label: 'Services',
    icon: Briefcase,
    href: '/services',
    basePath: '/services',
    subLinks: [
      { href: '/services/network-design', label: 'Network Design & Consulting', icon: Network },
      { href: '/services/managed-network', label: 'Managed Network Services', icon: Settings },
      { href: '/services/cloud-connectivity', label: 'Cloud Connectivity', icon: Cloud },
      { href: '/services/network-security', label: 'Network Security Solutions', icon: Shield },
    ]
  },
  {
    label: 'Technology',
    icon: Cpu,
    href: '/technology',
    basePath: '/technology',
    subLinks: [
      { href: '/technology/platform', label: 'Our Platform', icon: Layers },
      { href: '/technology/infrastructure', label: 'Infrastructure Solutions', icon: ServerIcon },
    ]
  },
  {
    label: 'Industries',
    icon: Building2,
    href: '/industries',
    basePath: '/industries',
    subLinks: [
      { href: '/industries/enterprise', label: 'Enterprise', icon: Building },
      { href: '/industries/smb', label: 'Small & Medium Business', icon: Briefcase },
      // Add more industries here based on the new manifest
    ]
  },
  {
    label: 'Company',
    icon: Info,
    href: '/company', // Main landing page for company info
    basePath: '/company',
    subLinks: [
      { href: '/company/about-us', label: 'About Flow Networks', icon: Users },
      { href: '/company/careers', label: 'Careers', icon: Briefcase },
      { href: '/company/news', label: 'News & Events', icon: Newspaper },
    ]
  },
  {
    label: 'Resources',
    icon: Library,
    href: '/resources',
    basePath: '/resources',
    subLinks: [
      { href: '/resources/blog', label: 'Blog', icon: Edit3 },
      { href: '/resources/case-studies', label: 'Case Studies', icon: FileText },
      { href: '/resources/whitepapers', label: 'Whitepapers', icon: BookOpen },
    ]
  },
  { href: '/contact', label: 'Contact Us', icon: Mail },
];

export type IndustryFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Industry = {
  id: string;
  name: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: IndustryFeature[];
  cta: string;
  image: string;
  imageHint: string;
};

// Placeholder INDUSTRIES_DATA for Flow Networks
// This data will need to be updated based on the new manifest.
export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: Building,
    title: 'Network Solutions for Modern Enterprises',
    description: 'Discover scalable, secure, and high-performance network solutions tailored for large organizations and complex operational needs.',
    features: [
      { title: 'Campus & Branch Networking', description: 'Robust wired and wireless infrastructure for seamless connectivity.', icon: Wifi },
      { title: 'Data Center Modernization', description: 'High-performance networking for critical data center operations.', icon: ServerIcon },
      { title: 'Advanced Network Security', description: 'Comprehensive security protecting your enterprise assets.', icon: Shield },
    ],
    cta: 'Transform Your Enterprise Network',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'modern office building',
  },
  {
    id: 'smb',
    name: 'Small & Medium Business',
    icon: Briefcase,
    title: 'Reliable Networking for Growing Businesses',
    description: 'Cost-effective and reliable network solutions designed to support the growth and operational efficiency of small to medium-sized businesses.',
    features: [
      { title: 'Managed Wi-Fi Solutions', description: 'Hassle-free, secure wireless networking for your business.', icon: Wifi },
      { title: 'Cloud-Managed Networks', description: 'Simplified network management with cloud-based tools.', icon: Cloud },
      { title: 'Cybersecurity for SMBs', description: 'Protect your business data and customer information.', icon: Shield },
    ],
    cta: 'Empower Your SMB with Better Networking',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'small office team',
  },
  // Add more specific industries based on the Flow Networks manifest
];
