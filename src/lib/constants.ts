
import {
  Home, Briefcase, Cpu, Building2, Info, Library, Mail, Network, Settings2, Cloud, Shield, Layers, Server as ServerIcon, Building, Users, Newspaper, Edit3, FileText, BookOpen, Wifi, Globe, type LucideIcon,
  Map, Monitor, MailCheck, Handshake, DollarSign, Zap, Link as LinkIcon, HardDrive, Lightbulb, Phone, LifeBuoy, Book, UserCheck, BarChart, ShoppingCart, Plane, GraduationCap, Gavel, Factory,
  LayoutGrid, Calendar, Megaphone, Lock, Activity, RefreshCw, MessageSquare, CreditCard, Box, Code, GitFork, Target, TrendingUp, Compass, HeartHandshake, Puzzle, Rocket,
  Award, FlaskConical, CircleDollarSign, Fingerprint, Search, Bell, Clock, Eye, LightbulbOff, Key, DatabaseZap, ShieldCheck, HelpCircle, Send, Tv2, Tag, Sparkles, ClipboardList, CalendarCheck, Headset, CalendarDays, MapPin,
  Ticket, Landmark, Cookie, Package, ShoppingBag, Brain, BadgeCheck, Link2, Bot, PlugZap, AreaChart, FerrisWheel, Hotel, ConciergeBell, ScrollText, Store, Bus, Train, Wrench, FileCheck, ExternalLink, UserCog, PackageSearch, View, HandCoins, Presentation, Users2, BuildingIcon, Route, Drama, School, TrainFront, UsersRound, UserSquare, Share2, Rss, MailOpen, Gift,
  FileBadge, UserCircle2, BookUser, MessageSquareText, ShieldAlert, BadgeInfo, FileQuestion, BookCopy, Palette
} from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: LucideIcon; // Icon is now optional
  shortDescription?: string;
  description?: string;
};

export type NavLinkWithSubLinks = NavLink & {
  subLinks?: NavLinkWithSubLinks[];
  basePath?: string;
  category?: string; // Used for grouping in mega menus
};

// MAIN_NAV_LINKS reflecting the Blueprint v2.1 sitemap
export const MAIN_NAV_LINKS: NavLinkWithSubLinks[] = [
  { href: '/', label: 'Home', icon: Home },
  {
    label: 'Solutions',
    icon: Lightbulb,
    href: '/solutions',
    basePath: '/solutions',
    subLinks: [
      {
        href: '/solutions/intelligent-wifi',
        label: 'Intelligent Wi-Fi',
        icon: Wifi,
        shortDescription: 'The foundation for data capture and analytics.',
        category: 'Core Solutions',
      },
      {
        href: '/solutions/automated-communication',
        label: 'Automated Communication',
        icon: Send,
        shortDescription: 'AI-triggered, personalized user engagement.',
        category: 'Core Solutions',
      },
      {
        href: '/solutions/premium-content',
        label: 'Premium Content Delivery',
        icon: Tv2,
        shortDescription: 'Enriching experiences with premium media.',
        category: 'Core Solutions',
      },
    ],
  },
  {
    label: 'AI Gateway',
    icon: Cpu,
    href: '/ai-gateway',
    basePath: '/ai-gateway',
    subLinks: [
      {
        href: '/ai-gateway/what-it-is',
        label: 'What it is',
        icon: HelpCircle,
        shortDescription: 'Core concepts of the AI Gateway.',
        category: 'Explore',
      },
      {
        href: '/ai-gateway/benefits',
        label: 'Benefits',
        icon: TrendingUp,
        shortDescription: 'Advantages for venues and users.',
        category: 'Explore',
      },
      {
        href: '/ai-gateway/technology',
        label: 'Technology',
        icon: ServerIcon,
        shortDescription: 'Infrastructure and architecture.',
        category: 'Explore',
      },
    ],
  },
  {
    label: 'Industries',
    icon: Building2,
    href: '/industries',
    basePath: '/industries',
    subLinks: [
      { href: '/industries/airports', label: 'Airports', icon: Plane, shortDescription: 'Enhancing traveler connectivity and experience.', category: 'By Vertical' },
      { href: '/industries/hospitality', label: 'Hospitality', icon: ConciergeBell, shortDescription: 'Intelligent solutions for hotels and restaurants.', category: 'By Vertical' },
      { href: '/industries/retail', label: 'Retail', icon: ShoppingCart, shortDescription: 'Smart WiFi and analytics for retail performance.', category: 'By Vertical' },
      { href: '/industries/healthcare', label: 'Healthcare', icon: HeartHandshake, shortDescription: 'Secure connectivity for healthcare facilities.', category: 'By Vertical' },
      { href: '/industries/education', label: 'Education', icon: GraduationCap, shortDescription: 'Connected learning environments for campuses.', category: 'By Vertical' },
    ],
  },
  {
    label: 'Company',
    icon: Info,
    href: '/about',
    basePath: '/about', // Adjusted base path
    subLinks: [
      { href: '/about', label: 'About Us', icon: Users, shortDescription: "Our mission and vision.", category: 'Our Story' },
      { href: '/partners', label: 'Partners', icon: Handshake, shortDescription: "Our collaborative ecosystem.", category: 'Our Story' },
      { href: '/why-flow-networks', label: 'Why Flow Networks?', icon: Sparkles, shortDescription: "Our unique advantage.", category: 'Our Story' },
      { href: '/privacy-policy', label: 'Privacy Policy', icon: Shield, shortDescription: "Commitment to your privacy.", category: 'Legal' },
      { href: '/terms-of-service', label: 'Terms of Service', icon: FileBadge, shortDescription: "Terms for using our services.", category: 'Legal' },
    ],
  },
  {
    label: 'Resources',
    icon: Library,
    href: '/resources',
    basePath: '/resources',
    subLinks: [
      { href: '/resources', label: 'Resource Hub', icon: BookOpen, shortDescription: 'Articles, case studies, and more.', category: 'Knowledge Base' },
      // { href: '/resources/case-studies', label: 'Case Studies', icon: BookOpen, shortDescription: "Real-world success stories.", category: 'Knowledge Base' },
      // { href: '/resources/blog', label: 'Blog', icon: Rss, shortDescription: "Latest news and articles.", category: 'Knowledge Base' },
    ],
  },
  { href: '/contact', label: 'Contact', icon: Mail },
];


export const AI_GATEWAY_SUB_LINKS = MAIN_NAV_LINKS.find(link => link.label === 'AI Gateway')?.subLinks || [];


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

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'airports',
    name: 'Airports',
    icon: Plane,
    title: 'Enhanced Connectivity & Traveler Experience for Airports',
    description: 'Provide robust, high-capacity WiFi for travelers, power real-time information displays, and gather passenger flow insights to optimize operations. Our platform supports future AI-driven enhancements for operational efficiency.',
    features: [
      { title: 'High-Density Traveler WiFi', description: 'Seamless and reliable internet access across terminals and gates, designed for thousands of concurrent users.', icon: Wifi },
      { title: 'Real-Time Flight Information Displays', description: 'Power digital signage for flight schedules, gate changes, travel alerts, and airport wayfinding.', icon: Monitor },
      { title: 'Passenger Flow Analytics', description: 'Understand passenger movement and dwell times to improve queue management, resource allocation, and retail opportunities.', icon: Route },
    ],
    cta: 'Optimize Airport Operations',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'airport terminal analytics',
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: ConciergeBell,
    title: 'Modern Connectivity Solutions for the Hospitality Sector',
    description: 'Empower restaurants, cafes, pubs, and various hospitality venues with reliable guest WiFi, digital menus, and marketing automation tools to improve customer experience and operational efficiency.',
    features: [
      { title: 'Reliable Customer WiFi', description: 'Offer seamless internet access to patrons, enhancing their visit and enabling digital engagement.', icon: Wifi },
      { title: 'Digital Menu & Ordering Integration', description: 'Support QR-code menus and online ordering systems through robust network infrastructure.', icon: ClipboardList },
      { title: 'Automated Customer Marketing', description: 'Utilize captured data for targeted email/SMS campaigns, loyalty programs, and special offers.', icon: Megaphone },
    ],
    cta: 'Boost Hospitality Services',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'restaurant cafe wifi',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingCart,
    title: 'Smart WiFi & Analytics for Enhanced Retail Performance',
    description: 'Leverage in-store WiFi for shopper analytics, personalized marketing, and dynamic digital signage to drive sales and improve customer experience. Our system supports future AI-driven personalization.',
    features: [
      { title: 'Shopper Behavior Analytics', description: 'Understand foot traffic, dwell times, and popular zones using WiFi data to optimize store layout and merchandising.', icon: Search },
      { title: 'Personalized In-Store Marketing', description: 'Deliver targeted offers and product recommendations via WiFi landing pages, email, or SMS.', icon: Tag },
      { title: 'Dynamic Product & Promotion Displays', description: 'Utilize digital signage for eye-catching promotions, new arrivals, and brand storytelling.', icon: Presentation },
    ],
    cta: 'Optimize Retail Spaces',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'retail store analytics',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HeartHandshake,
    title: 'Secure & Reliable Connectivity for Healthcare Facilities',
    description: 'Deliver secure WiFi for patients, visitors, and staff, alongside tools for communication and information access. Our systems ensure data privacy and support future integration of AI-assisted patient services.',
    features: [
      { title: 'Secure Patient & Staff WiFi', description: 'HIPAA-compliant, filtered internet access, ensuring data security and easy connectivity for all users.', icon: ShieldCheck },
      { title: 'Digital Wayfinding & Patient Information', description: 'Implement digital screens for easy navigation, health advisories, and service information within facilities.', icon: Compass },
      { title: 'Critical Staff Communication', description: 'Leverage the network for efficient internal communication, alerts, and coordination, improving response times.', icon: Send },
    ],
    cta: 'Enhance Patient Care',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'hospital patient wifi',
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    title: 'Connected Learning Environments for Educational Institutions',
    description: 'Empower students and faculty with robust campus-wide WiFi, secure network access, content filtering, and tools for digital content delivery. Our solutions are built for the future of education, including AI learning aids.',
    features: [
      { title: 'Campus-Wide Secure WiFi', description: 'Reliable internet for learning, research, and administration, supporting BYOD policies across all areas.', icon: Wifi },
      { title: 'Content Filtering & Network Security', description: 'Ensure safe internet usage with CIPA-compliant filtering and protect network resources from threats.', icon: ShieldCheck },
      { title: 'Digital Signage for Announcements & Events', description: 'Communicate campus news, event schedules, and emergency alerts effectively via digital displays.', icon: Megaphone },
    ],
    cta: 'Future-Proof Your Campus',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'university students library wifi',
  },
];
