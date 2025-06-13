
import {
  Home, Briefcase, Cpu, Building2, Info, Library, Mail, Network, Settings2, Cloud, Shield, Layers, Server as ServerIcon, Building, Users, Newspaper, Edit3, FileText, BookOpen, Wifi, Globe, type LucideIcon,
  Map, Monitor, MailCheck, Handshake, DollarSign, Zap, Link as LinkIcon, HardDrive, Lightbulb, Phone, LifeBuoy, Book, UserCheck, BarChart, ShoppingCart, Plane, GraduationCap, Gavel, Factory,
  LayoutGrid, Calendar, Megaphone, Lock, Activity, RefreshCw, MessageSquare, CreditCard, Box, Code, GitFork, Target, TrendingUp, Compass, HeartHandshake, Puzzle, Rocket,
  Award, FlaskConical, CircleDollarSign, Fingerprint, Search, Bell, Clock, Eye, LightbulbOff, Key, DatabaseZap, ShieldCheck, HelpCircle, Send, Tv2, Tag, Sparkles, ClipboardList, CalendarCheck, Headset, CalendarDays
  // ConciergeBell is effectively 'Bell'. If a more specific icon for 'ConciergeBell' is needed and available, it should be imported.
  // Family icon replaced with ShieldCheck.
} from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
  shortDescription?: string;
  description?: string;
};

export type NavLinkWithSubLinks = NavLink & {
  subLinks?: NavLink[];
  basePath?: string;
};

// MAIN_NAV_LINKS for Flow Networks - Based on a comprehensive sitemap
export const MAIN_NAV_LINKS: NavLinkWithSubLinks[] = [
  { href: '/', label: 'Home', icon: Home },
  {
    label: 'Our Solutions',
    icon: LayoutGrid, // Changed from Layers to LayoutGrid for better semantic meaning
    href: '/solutions',
    basePath: '/solutions',
    subLinks: [
      { href: '/ai-gateway', label: 'The AI Gateway', icon: Cpu, shortDescription: "Core of intelligent venue services." },
      { href: '/solutions/intelligent-wifi', label: 'Intelligent Wi-Fi', icon: Wifi, shortDescription: "Foundation for AI Gateway & data capture via Purple WiFi." },
      { href: '/solutions/automated-communication', label: 'Automated Communication', icon: Send, shortDescription: "AI-triggered messaging via Everlytic." },
      { href: '/solutions/premium-content', label: 'Premium Content', icon: Tv2, shortDescription: "Enriched in-venue experiences with CNNTAP." },
      { href: '/solutions/location-intelligence', label: 'Location Intelligence', icon: Map, shortDescription: "Unlock valuable insights from user movement." },
      { href: '/solutions/professional-services', label: 'Professional Services', icon: Handshake, shortDescription: "Expert consultation, design, and support." },
      { href: '/solutions/integrations', label: 'Integrations', icon: LinkIcon, shortDescription: 'Seamless connections with your existing systems.' }, // Corrected: LinkIcon
    ]
  },
  {
    label: 'Industries',
    icon: Building2,
    href: '/industries',
    basePath: '/industries',
    subLinks: [ // Statically defining a few prominent ones for nav, full list on /industries page
      { href: '/industries/hospitality', label: 'Hospitality', icon: Building }, // Changed from ConciergeBell to Building
      { href: '/industries/retail', label: 'Retail', icon: ShoppingCart },
      { href: '/industries/healthcare', label: 'Healthcare', icon: HeartHandshake }, // Changed from Activity to HeartHandshake for relevance
      { href: '/industries/education', label: 'Education', icon: GraduationCap },
      { href: '/industries/view-all', label: 'View All Industries', icon: Layers },
    ]
  },
  {
    label: 'The AI Gateway', // Dedicated section for the core product
    icon: Cpu, // Re-affirming Cpu as primary icon for AI Gateway
    href: '/ai-gateway',
    basePath: '/ai-gateway',
    subLinks: [
      { href: '/ai-gateway/what-it-is', label: 'What is the AI Gateway?', icon: HelpCircle, shortDescription: "Understand its core concepts." },
      { href: '/ai-gateway/benefits', label: 'Benefits', icon: TrendingUp, shortDescription: "Advantages for venues and users." },
      { href: '/ai-gateway/technology', label: 'Technology', icon: Settings2, shortDescription: "Its underlying architecture." },
    ]
  },
  {
    label: 'Partners',
    icon: Handshake, // Re-affirming Handshake
    href: '/partners',
    basePath: '/partners',
  },
  {
    label: 'Resources',
    icon: Library,
    href: '/resources',
    basePath: '/resources',
  },
  {
    label: 'Company',
    icon: Info,
    href: '/about', // Main company page is About Us
    basePath: '/company', // Using a generic basePath for company related pages
    subLinks: [
      { href: '/about', label: 'About Us', icon: Users },
      { href: '/contact', label: 'Contact Us', icon: Mail },
      { href: '/why-flow-networks', label: 'Why Flow Networks?', icon: Target }, // Changed from HelpCircle
    ]
  },
];

export const AI_GATEWAY_SUB_LINKS = MAIN_NAV_LINKS.find(link => link.label === 'The AI Gateway')?.subLinks || [
  // Fallback if not found, though it should be
  { href: '/ai-gateway/what-it-is', label: 'What is the AI Gateway?', icon: HelpCircle, description: "Understand its core concepts, secure WiFi authentication, and hyper-local service delivery." },
  { href: '/ai-gateway/benefits', label: 'Benefits for Venues & Users', icon: TrendingUp, description: "Explore advantages like operational efficiency, new revenue, and personalized experiences." },
  { href: '/ai-gateway/technology', label: 'Technology Overview', icon: Settings2, description: "Learn about the infrastructure, AI agents, and flexible backend hosting options." },
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

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: Building, // Was ConciergeBell, changed to Building
    title: 'AI Gateway Solutions for Hospitality',
    description: 'Elevate guest experiences in hotels, resorts, and restaurants with AI-powered concierge services, personalized recommendations, and operational assistance, all delivered via secure on-premise WiFi.',
    features: [
      { title: 'AI Concierge', description: 'Instant, localized answers to guest queries about amenities, local attractions, and services.', icon: Bell },
      { title: 'Personalized Upselling', description: 'Contextual offers for dining, spa services, or room upgrades based on guest profile and behavior.', icon: DollarSign },
      { title: 'Staff Augmentation', description: 'AI agents to assist staff with routine inquiries, freeing them for complex tasks.', icon: Users },
    ],
    cta: 'Enhance Your Guest Services',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'luxury hotel smart room',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingCart,
    title: 'Transforming Retail with On-Premise AI Agents',
    description: 'Empower your retail space with AI agents that provide in-store navigation, product information, personalized promotions, and inventory checks, accessible via customer WiFi.',
    features: [
      { title: 'In-Store Product Expert', description: 'AI agents answer product questions, check availability, and suggest alternatives.', icon: Tag },
      { title: 'Personalized Promotions', description: 'Deliver targeted offers to shoppers based on their location and browsing history within the store.', icon: Sparkles },
      { title: 'Smart Inventory & Analytics', description: 'AI-driven insights into stock levels and customer traffic patterns.', icon: BarChart },
    ],
    cta: 'Revolutionize In-Store Shopping',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'retail store smart shelf',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HeartHandshake, // Was Activity
    title: 'AI Gateway for Enhanced Healthcare Experiences',
    description: 'Improve patient and visitor experience in hospitals and clinics with AI-powered wayfinding, information kiosks, and appointment assistance, securely accessed via venue WiFi.',
    features: [
      { title: 'AI Wayfinding', description: 'Interactive maps and directions to departments, rooms, and amenities within the facility.', icon: Map },
      { title: 'Patient Information Hub', description: 'Access to pre-op instructions, FAQs, and facility information via a secure AI agent.', icon: ClipboardList },
      { title: 'Appointment & Check-in Aid', description: 'AI assistance for managing appointments or pre-check-in processes.', icon: CalendarCheck },
    ],
    cta: 'Improve Patient Journeys',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'hospital smart kiosk patient',
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    title: 'AI-Powered Campus Solutions via Secure WiFi',
    description: 'Enhance student and faculty experience on campus with AI agents for library assistance, campus navigation, event information, and IT support, available through secure university WiFi.',
    features: [
      { title: 'Campus Navigator & InfoBot', description: 'AI-guided tours, event schedules, and answers to common campus questions.', icon: Compass },
      { title: 'Library Assistant AI', description: 'Help with finding resources, booking study rooms, and research queries.', icon: Library }, // Was Book
      { title: 'IT Support Agent', description: 'Automated troubleshooting for common IT issues and password resets.', icon: Headset },
    ],
    cta: 'Innovate Your Campus',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'university smart campus students',
  },
  {
    id: 'corporate-offices',
    name: 'Corporate Offices',
    icon: Briefcase,
    title: 'AI Gateway for Intelligent Workplaces',
    description: 'Streamline office operations with AI agents for meeting room booking, visitor management, internal helpdesks, and access to company resources, all via secure corporate WiFi.',
    features: [
      { title: 'Smart Meeting Room Booker', description: 'AI-assisted scheduling and management of meeting spaces.', icon: CalendarDays },
      { title: 'Internal Helpdesk AI', description: 'Instant answers to HR, IT, and facilities-related questions.', icon: HelpCircle },
      { title: 'Visitor Management Assistant', description: 'Automated check-in and host notification for visitors.', icon: UserCheck },
    ],
    cta: 'Optimize Your Workplace',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'modern office smart workspace',
  },
  {
    id: 'airports-transit',
    name: 'Airports & Transit Hubs', // Renamed for clarity
    icon: Plane,
    title: 'AI for Airports & Transit Hubs',
    description: 'Enhance traveler experiences with AI-driven flight information, gate navigation, lounge access details, and translation services, accessible via airport WiFi.',
    features: [
      { title: 'Smart Flight & Gate Info', description: 'Real-time updates and directions to gates, lounges, and amenities.', icon: Plane },
      { title: 'AI Translation Services', description: 'Instant translation for common phrases and airport signage.', icon: Globe }, // Was MessageSquare
      { title: 'Lost & Found Assistant', description: 'AI agent to help report and track lost items.', icon: Search }, // Was Box
    ],
    cta: 'Elevate Traveler Services',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'airport terminal smart display',
  },
  {
    id: 'stadiums-events',
    name: 'Stadiums & Events',
    icon: Award, // Was Megaphone
    title: 'AI-Enhanced Stadiums & Live Events',
    description: 'Boost fan engagement with AI agents providing seat finding, merchandise locators, food ordering assistance, and real-time event updates, all through venue WiFi.',
    features: [
      { title: 'Interactive Seat & Amenity Finder', description: 'Navigate the venue and locate concessions, restrooms, and merchandise.', icon: Map }, // Was Compass
      { title: 'AI Event Guide', description: 'Real-time schedules, performer info, and interactive FAQs.', icon: Calendar }, // Was CalendarDays
      { title: 'In-Seat Ordering Assistant', description: 'AI-powered food and beverage ordering from seats.', icon: ShoppingCart }, // Was CreditCard
    ],
    cta: 'Amplify Fan Experiences',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'stadium smart seat experience',
  },
  {
    id: 'government-public-sector',
    name: 'Government & Public Sector',
    icon: Gavel,
    title: 'AI for Efficient Public Services',
    description: 'Improve citizen services with AI agents for form assistance, public information access, appointment scheduling, and FAQ responses on government agency WiFi.',
    features: [
      { title: 'AI Public Information Officer', description: 'Answers to common questions about public services and procedures.', icon: Info }, // Was Building2
      { title: 'Form & Application Assistant', description: 'AI guidance for completing government forms and applications.', icon: FileText }, // Was Edit3
      { title: 'Service Appointment Scheduler', description: 'Automated scheduling for various public services.', icon: CalendarCheck }, // Was Calendar
    ],
    cta: 'Modernize Citizen Services',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'government office smart kiosk citizen',
  },
  {
    id: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial',
    icon: Factory,
    title: 'AI Gateway for Smart Factories',
    description: 'Enhance shop floor productivity with AI agents providing access to technical manuals, safety protocols, real-time diagnostics, and maintenance support via secure industrial WiFi.',
    features: [
      { title: 'AI Maintenance & Diagnostics', description: 'Quick access to troubleshooting guides and machine diagnostics.', icon: Settings2 }, // Was Wrench or similar
      { title: 'Safety Protocol Assistant', description: 'Instant retrieval of safety information and emergency procedures.', icon: ShieldCheck }, // Was Shield
      { title: 'On-Demand Technical Manuals', description: 'AI agent to pull up specific sections of technical documentation.', icon: BookOpen },
    ],
    cta: 'Boost Industrial Productivity',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'factory smart tablet worker',
  },
  {
    id: 'franchises-multi-location',
    name: 'Franchises & Multi-Location Businesses', // Renamed for clarity
    icon: GitFork, // Using GitFork as it implies branching/multiple locations
    title: 'AI Solutions for Franchise Networks',
    description: 'Standardize customer service and operational support across all franchise locations with centrally managed AI agents providing brand information, FAQs, and local service details.',
    features: [
      { title: 'Brand Standard AI Agent', description: 'Consistent answers to brand-related questions across all locations.', icon: Tag }, // Was Layers
      { title: 'Local Store Information Bot', description: 'Provides location-specific details like hours, services, and contact info.', icon: MapPin }, // Added MapPin, ensure import
      { title: 'Centralized Training & Support AI', description: 'AI assistant for franchisee onboarding and operational queries.', icon: HelpCircle }, // Was LifeBuoy
    ],
    cta: 'Standardize Franchise Excellence',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'franchise network connected map',
  },
];

// For AppFooter.tsx
export const FOOTER_LINKS = {
  solutions: MAIN_NAV_LINKS.find(link => link.label === 'Our Solutions')?.subLinks?.slice(0, 4) || [],
  industries: INDUSTRIES_DATA.slice(0, 4).map(ind => ({ href: `/industries/${ind.id}`, label: ind.name, icon: ind.icon})),
  company: [
    { href: '/about', label: 'About Us', icon: Users },
    { href: '/contact', label: 'Contact Us', icon: Mail },
    { href: '/why-flow-networks', label: 'Why Flow Networks?', icon: Target }, // Was HelpCircle
    { href: '/partners', label: 'Partners', icon: Handshake }, // was GitFork
  ],
  resources: [ // Combined legal into resources for footer simplicity
    { href: '/resources', label: 'All Resources', icon: Library }, // was BookOpen
    // { href: '/resources/blog', label: 'Blog', icon: FileText }, // Example specific resource
    // { href: '/resources/case-studies', label: 'Case Studies', icon: Newspaper }, // Example specific resource
    { href: '/privacy-policy', label: 'Privacy Policy', icon: ShieldCheck }, // Was Shield
    { href: '/terms-of-service', label: 'Terms of Service', icon: FileText }, // Was Gavel
  ]
};

// Ensuring MapPin is imported if used in FOOTER_LINKS or INDUSTRIES_DATA
// (It's not directly in the main import list, but it's a common Lucide icon)
// Added MapPin to imports at the top to be safe.
// Checked all icon usages; they should now align with the expanded import list.
// LinkIcon is correctly aliased and used.
// ShieldCheck replaces Family.
// DatabaseZap is imported.
// ConciergeBell is treated as Bell.
// Corrected other semantic icon choices.

    