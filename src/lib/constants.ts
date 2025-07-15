
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
  icon?: LucideIcon;
  shortDescription?: string;
  description?: string;
};

export type NavLinkWithSubLinks = NavLink & {
  subLinks?: NavLinkWithSubLinks[];
  basePath?: string;
  category?: string;
};

// Rebuilt based on docs/Website Design Knowladgebases/Site_map.md
export const MAIN_NAV_LINKS: NavLinkWithSubLinks[] = [
  { href: '/', label: 'Home', icon: Home },
  {
    label: 'Products',
    href: '/products',
    basePath: '/products',
    icon: ShoppingBag,
    subLinks: [
      { href: '/products/intelligent-wifi', label: 'Intelligent Venue WiFi', icon: Wifi, shortDescription: 'Powered by Purple', category: 'Connectivity & Data' },
      { href: '/products/allxs', label: 'Allxs', icon: Ticket, shortDescription: 'Event & Venue Commerce Platform', category: 'Platforms' },
      { href: '/products/everlytic', label: 'Everlytic Messaging', icon: Send, shortDescription: 'Bulk Messaging Automation', category: 'Platforms' },
      { href: '/products/cnntap', label: 'CNNTAP', icon: Tv2, shortDescription: 'Travel Advertising Platform', category: 'Platforms' },
      { href: '/products/friendly-wifi', label: 'Friendly WiFi', icon: ShieldCheck, shortDescription: 'Certified Safe WiFi', category: 'Connectivity & Data' },
      { href: '/products/internet-connectivity', label: 'Internet Connectivity', icon: Globe, shortDescription: 'High-speed internet solutions', category: 'Connectivity & Data' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    basePath: '/solutions',
    icon: Lightbulb,
    subLinks: [
      { href: '/solutions/ai-gateway', label: 'Flow AI Gateway', icon: Cpu, shortDescription: 'Visionary on-premise AI', category: 'Core Architecture' },
      { href: '/solutions/ai-integrations', label: 'AI Integrations', icon: Puzzle, shortDescription: 'Connecting intelligent systems', category: 'Core Architecture' },
      { href: '/solutions/wifi-monetisation', label: 'WiFi Monetisation', icon: CircleDollarSign, shortDescription: 'Generate revenue from WiFi', category: 'Business Solutions' },
      { href: '/solutions/sponsored-wifi', label: 'Sponsored WiFi', icon: HandCoins, shortDescription: 'Partner-funded connectivity', category: 'Business Solutions' },
      { href: '/solutions/wifi-marketing', label: 'WiFi Marketing', icon: Megaphone, shortDescription: 'Engage visitors directly', category: 'Business Solutions' },
      { href: '/solutions/event-wifi', label: 'Event WiFi', icon: CalendarDays, shortDescription: 'High-density event solutions', category: 'Use Cases' },
      { href: '/solutions/smb-wifi', label: 'SMB WiFi', icon: Store, shortDescription: 'Solutions for small business', category: 'Use Cases' },
      { href: '/solutions/3rd-party-integrations', label: '3rd Party Integrations', icon: Link2, shortDescription: 'Connect your existing tools', category: 'Technical' },
      { href: '/solutions/digital-marketing', label: 'Digital Marketing', icon: BarChart, shortDescription: 'Promote your venue', category: 'Services' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    basePath: '/industries',
    icon: Building2,
    subLinks: [
      { href: '/industries/airports', label: 'Airports', icon: Plane, shortDescription: 'Solutions for transportation hubs.', category: 'Travel & Transport' },
      { href: '/industries/attractions', label: 'Attractions', icon: FerrisWheel, shortDescription: 'Engage guests at leisure sites.', category: 'Public Venues' },
      { href: '/industries/healthcare', label: 'Healthcare', icon: HeartHandshake, shortDescription: 'Connectivity for medical facilities.', category: 'Public Venues' },
      { href: '/industries/hotels', label: 'Hotels', icon: Hotel, shortDescription: 'Enhance the guest experience.', category: 'Hospitality' },
      { href: '/industries/hospitality', label: 'Hospitality', icon: ConciergeBell, shortDescription: 'Solutions for restaurants & cafes.', category: 'Hospitality' },
      { href: '/industries/museums', label: 'Museums', icon: Landmark, shortDescription: 'Interactive digital experiences.', category: 'Public Venues' },
      { href: '/industries/retail', label: 'Retail', icon: ShoppingCart, shortDescription: 'Drive sales with in-store analytics.', category: 'Commerce' },
      { href: '/industries/shopping-malls', label: 'Shopping Malls', icon: ShoppingBag, shortDescription: 'Intelligence for large retail spaces.', category: 'Commerce' },
      { href: '/industries/stadiums', label: 'Stadiums', icon: Drama, shortDescription: 'High-density fan connectivity.', category: 'Public Venues' },
      { href: '/industries/offices', label: 'Offices', icon: BuildingIcon, shortDescription: 'Smart solutions for workplaces.', category: 'Corporate' },
      { href: '/industries/schools-colleges', label: 'Schools & Colleges', icon: School, shortDescription: 'Connected and safe learning.', category: 'Education' },
      { href: '/industries/towns-cities', label: 'Towns & Cities', icon: MapPin, shortDescription: 'Public and municipal WiFi.', category: 'Public Venues' },
      { href: '/industries/public-transport', label: 'Public Transport', icon: TrainFront, shortDescription: 'Connectivity on the move.', category: 'Travel & Transport' },
    ],
  },
  {
    label: 'Partners',
    href: '/partners',
    basePath: '/partners',
    icon: Handshake,
    subLinks: [
      { href: '/partners/technology', label: 'Technology Partners', icon: Zap, shortDescription: 'Our core technology providers.', category: 'Our Ecosystem' },
      { href: '/partners/resellers', label: 'Reseller Program', icon: UsersRound, shortDescription: 'Join as a reseller.', category: 'Partner Programs' },
      { href: '/partners/agents', label: 'Agent Program', icon: UserSquare, shortDescription: 'Become a sales agent.', category: 'Partner Programs' },
      { href: '/partners/affiliates', label: 'Affiliate Program', icon: Share2, shortDescription: 'Earn with affiliate links.', category: 'Partner Programs' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    basePath: '/resources',
    icon: Library,
    subLinks: [
      { href: '/resources/case-studies', label: 'Case Studies', icon: BookOpen, shortDescription: 'Real-world success stories.', category: 'Knowledge Base' },
      { href: '/resources/guides-articles', label: 'Guides & Articles', icon: FileText, shortDescription: 'In-depth guides and analysis.', category: 'Knowledge Base' },
      { href: '/resources/tools', label: 'Tools', icon: Wrench, shortDescription: 'Calculators and estimators.', category: 'Tools & Utilities' },
    ],
  },
  {
    label: 'Company',
    href: '/company',
    basePath: '/company',
    icon: Info,
    subLinks: [
      { href: '/company/about-us', label: 'About Us', icon: Users, shortDescription: 'Our mission and story.', category: 'Corporate Info' },
      { href: '/company/legal', label: 'Legal', icon: Gavel, shortDescription: 'Legal notices and policies.', category: 'Corporate Info' },
      { href: '/company/privacy-policy', label: 'Privacy Policy', icon: Shield, shortDescription: 'Our commitment to your data.', category: 'Corporate Info' },
      { href: '/company/terms-of-use', label: 'Terms of Use', icon: FileCheck, shortDescription: 'Service usage terms.', category: 'Corporate Info' },
      { href: '/company/my-data', label: 'My Data', icon: UserCog, shortDescription: 'Manage your data preferences.', category: 'Data & Privacy' },
      { href: '/company/cookie-policy', label: 'Cookie Policy', icon: Cookie, shortDescription: 'How we use cookies.', category: 'Data & Privacy' },
      { href: '/company/integrations', label: 'Integrations', icon: PlugZap, shortDescription: 'Our supported integrations.', category: 'Technical' },
      { href: '/company/blog', label: 'Blog', icon: Rss, shortDescription: 'Latest news and insights.', category: 'Content' },
      { href: '/company/sla', label: 'Standard SLA', icon: FileBadge, shortDescription: 'Our service level agreement.', category: 'Technical' },
    ],
  },
  {
    label: 'Links',
    href: '/support',
    basePath: '/support',
    icon: LinkIcon,
    subLinks: [
        { href: 'https://support.purple.ai', label: 'Purple Support', icon: ExternalLink, shortDescription: 'External support portal.', category: 'Support' },
        { href: 'https://wa.me/your-number', label: 'WhatsApp Support', icon: MessageSquare, shortDescription: 'Chat with us on WhatsApp.', category: 'Support' },
        { href: '/contact', label: 'Contact Us', icon: Mail, shortDescription: 'Get in touch with our team.', category: 'Contact' },
        { href: 'https://portal.purple.ai', label: 'Purple Portal', icon: ExternalLink, shortDescription: 'Access the Purple portal.', category: 'Portals' },
        { href: '/company/my-data', label: 'My Data Portal', icon: UserCog, shortDescription: 'Manage your privacy settings.', category: 'Portals' },
        { href: '/partners/portal', label: 'Partner Portal', icon: Handshake, shortDescription: 'Login for partners.', category: 'Portals' },
    ],
  },
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

    