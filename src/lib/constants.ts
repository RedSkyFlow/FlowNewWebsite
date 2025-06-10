
import {
  Home, Briefcase, Cpu, Building2, Info, Library, Mail, Network, Settings2, Cloud, Shield, Layers, Server as ServerIcon, Building, Users, Newspaper, Edit3, FileText, BookOpen, Wifi, Globe, LucideIcon,
  Map, Monitor, MailCheck, Handshake, DollarSign, Zap, Link as LinkIcon, HardDrive, Lightbulb, Phone, LifeBuoy, Book, UserCheck, BarChart, ShoppingCart, Plane, GraduationCap, Gavel, Factory,
  LayoutGrid, Calendar, Megaphone, Lock, Activity, RefreshCw, MessageSquare, CreditCard, Box, Code, GitFork, Target, TrendingUp, Compass, HeartHandshake, Puzzle, Rocket,
  Award, FlaskConical, CircleDollarSign, Fingerprint, Search, Bell, Clock, Eye, LightbulbOff, Key, ShieldCheck, DatabaseZap
} from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type NavLinkWithSubLinks = NavLink & {
  subLinks?: NavLink[];
  basePath?: string; // For active state checking if parent href is a general path
};

// MAIN_NAV_LINKS for Flow Networks - Updated based on Revised Website Manifest
export const MAIN_NAV_LINKS: NavLinkWithSubLinks[] = [
  { href: '/', label: 'Home', icon: Home },
  {
    label: 'Our Solutions',
    icon: LayoutGrid, // Using LayoutGrid for comprehensive solutions
    href: '/solutions',
    basePath: '/solutions',
    subLinks: [
      { href: '/solutions/intelligent-wifi-infrastructure', label: 'Intelligent WiFi Infrastructure', icon: Wifi },
      { href: '/solutions/location-intelligence', label: 'Location Intelligence', icon: Map },
      { href: '/solutions/digital-content-signage', label: 'Digital Content & Signage', icon: Monitor },
      { href: '/solutions/email-sms-marketing', label: 'Email & SMS Marketing', icon: MailCheck },
      { href: '/solutions/family-friendly-wifi', label: 'Family-Friendly WiFi', icon: ShieldCheck }, // Changed from Family
      { href: '/solutions/professional-services', label: 'Professional Services', icon: Handshake },
      { href: '/solutions/event-wifi', label: 'Event WiFi', icon: Calendar },
      { href: '/solutions/wifi-monetisation', label: 'WiFi Monetisation', icon: DollarSign },
      { href: '/solutions/integrations', label: 'Integrations', icon: LinkIcon },
    ]
  },
  {
    label: 'Industries',
    icon: Building2,
    href: '/industries',
    basePath: '/industries',
    subLinks: [
      { href: '/industries/hospitality', label: 'Hospitality', icon: Building },
      { href: '/industries/retail', label: 'Retail', icon: ShoppingCart },
      { href: '/industries/healthcare', label: 'Healthcare', icon: HeartHandshake },
      { href: '/industries/airports-transit', label: 'Airports & Transit', icon: Plane },
      { href: '/industries/education', label: 'Education', icon: GraduationCap },
      { href: '/industries/government-public-sector', label: 'Government & Public Sector', icon: Gavel },
      { href: '/industries/attractions-museums', label: 'Attractions & Museums', icon: Compass },
      { href: '/industries/stadiums-events', label: 'Stadiums & Events', icon: Award },
      { href: '/industries/offices-workplaces', label: 'Offices & Workplaces', icon: Briefcase },
      { href: '/industries/franchises-multi-location', label: 'Franchises & Multi-Location', icon: GitFork },
    ]
  },
  {
    label: 'Platform & Integrations',
    icon: Layers, // Using Layers for platform concept
    href: '/platform-integrations',
    basePath: '/platform-integrations',
    subLinks: [
      { href: '/platform-integrations/overview', label: 'Platform Overview', icon: Puzzle },
      { href: '/platform-integrations/backend-integrations', label: 'Backend System Integrations', icon: ServerIcon },
      { href: '/platform-integrations/api-customization', label: 'API & Customization', icon: Code },
      // Subtle hint towards AI Gateway Vision
      { href: '/platform-integrations/innovation-roadmap', label: 'Innovation Roadmap', icon: Rocket },
    ]
  },
  {
    label: 'Partners',
    icon: Handshake,
    href: '/partners',
    basePath: '/partners',
    subLinks: [
      { href: '/partners/purple-ai', label: 'Purple.ai', icon: Wifi }, // Using Wifi for Purple.ai
      { href: '/partners/cool-ideas', label: 'Cool Ideas', icon: Cloud },
      { href: '/partners/cnntap', label: 'CNNTAP', icon: Newspaper },
      { href: '/partners/tech-integrators', label: 'Technology Integrators', icon: LinkIcon },
    ]
  },
  {
    label: 'Resources',
    icon: Library,
    href: '/resources',
    basePath: '/resources',
    subLinks: [
      { href: '/resources/case-studies', label: 'Case Studies', icon: FileText },
      { href: '/resources/guides-articles', label: 'Guides & Articles', icon: BookOpen },
      { href: '/resources/tools', label: 'Tools', icon: Settings2 },
      { href: '/resources/blog', label: 'Blog', icon: Edit3 },
    ]
  },
  {
    label: 'Company',
    icon: Info,
    href: '/company',
    basePath: '/company',
    subLinks: [
      { href: '/company/about-us', label: 'About Us', icon: Users },
      { href: '/company/careers', label: 'Careers', icon: Briefcase },
      { href: '/company/legal', label: 'Legal', icon: Gavel },
      { href: '/company/privacy-policy', label: 'Privacy Policy', icon: Shield },
      { href: '/company/terms-of-use', label: 'Terms of Use', icon: Book },
      { href: '/company/my-data', label: 'My Data', icon: DatabaseZap },
      { href: '/company/cookie-policy', label: 'Cookie Policy', icon: Newspaper }, // Using Newspaper for policy doc
      { href: '/company/standard-sla', label: 'Standard SLA', icon: FileText }, // Using FileText for SLA doc
    ]
  },
  {
    label: 'Support & Contact',
    icon: LifeBuoy, // Using LifeBuoy for support
    href: '/support-contact',
    basePath: '/support-contact',
    subLinks: [
      { href: '/support-contact/purple-support', label: 'Purple Support', icon: Wifi },
      { href: '/support-contact/whatsapp-support', label: 'WhatsApp Support', icon: MessageSquare },
      { href: '/support-contact/contact-us', label: 'Contact Us', icon: Mail },
    ]
  },
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
  title: string; // Used for the individual industry page title
  description: string; // Used for meta descriptions and overview on industry page
  features: IndustryFeature[];
  cta: string; // Call to action text for the button on industry page
  image: string; // Path to image for the industry page
  imageHint: string; // AI hint for image generation/selection
};

// INDUSTRIES_DATA for Flow Networks - Updated based on Revised Website Manifest
export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: Building,
    title: 'Intelligent Solutions for Hospitality Venues',
    description: 'Enhance guest experiences and streamline operations with Flow Networks\' tailored WiFi and digital engagement solutions for hotels, restaurants, and bars.',
    features: [
      { title: 'Guest WiFi & Marketing', description: 'Seamless connectivity and personalized engagement for visitors.', icon: Wifi },
      { title: 'Location Analytics', description: 'Understand guest flow and optimize venue layout.', icon: Map },
      { title: 'Digital Content & Signage', description: 'Dynamic displays for promotions and information.', icon: Monitor },
    ],
    cta: 'Transform Your Guest Experience',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'luxury hotel lobby guests',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingCart,
    title: 'Boosting Retail Engagement with Smart Venue Technology',
    description: 'Drive shopper insights, personalize promotions, and optimize store operations with Flow Networks\' solutions for retail stores and malls.',
    features: [
      { title: 'Shopper Analytics', description: 'Gain insights into customer movement and dwell times.', icon: BarChart },
      { title: 'Personalized Marketing', description: 'Deliver targeted promotions directly to shoppers\' devices.', icon: MailCheck },
      { title: 'Operational Efficiency', description: 'Optimize staffing and store layout based on real-time data.', icon: Activity },
    ],
    cta: 'Optimize Your Retail Space',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'modern retail store',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HeartHandshake,
    title: 'Secure & Efficient Solutions for Healthcare Facilities',
    description: 'Provide reliable connectivity, enhance patient experience, and streamline operations in clinics, hospitals, and wellness centers.',
    features: [
      { title: 'Secure Patient WiFi', description: 'Compliant and reliable internet access for patients and visitors.', icon: Lock },
      { title: 'Facility Optimization', description: 'Use location data to improve patient flow and asset tracking.', icon: Search },
      { title: 'Digital Patient Information', description: 'Deliver important information via secure digital channels.', icon: FileText },
    ],
    cta: 'Enhance Your Healthcare Environment',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'hospital waiting area',
  },
  {
    id: 'airports-transit',
    name: 'Airports & Transit',
    icon: Plane,
    title: 'Seamless Connectivity for Airports & Transit Hubs',
    description: 'Improve passenger experience, optimize operations, and enhance security in busy transportation environments.',
    features: [
      { title: 'Passenger WiFi & Engagement', description: 'High-capacity WiFi and personalized updates for travelers.', icon: Wifi },
      { title: 'Crowd Management', description: 'Real-time insights into passenger flow and congestion points.', icon: Users },
      { title: 'Dynamic Information Displays', description: 'Deliver flight info and alerts via integrated digital signage.', icon: Monitor },
    ],
    cta: 'Elevate the Travel Experience',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'airport terminal busy',
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    title: 'Smart Campus Solutions for Modern Education',
    description: 'Provide secure, reliable, and family-friendly WiFi, enhance campus safety, and enable digital learning environments for schools and universities.',
    features: [
      { title: 'Secure Campus WiFi', description: 'Robust and protected internet access for students and staff.', icon: Shield },
      { title: 'Content Filtering', description: 'Ensure a safe online environment with family-friendly controls.', icon: ShieldCheck }, // Changed from Family
      { title: 'Campus Engagement', description: 'Digital tools for student communication and information access.', icon: MessageSquare },
    ],
    cta: 'Build a Smarter Campus',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'university campus library',
  },
  {
    id: 'government-public-sector',
    name: 'Government & Public Sector',
    icon: Gavel,
    title: 'Intelligent Solutions for Public Spaces & Government',
    description: 'Enhance public services, improve operational efficiency, and provide secure connectivity in civic spaces, museums, and government facilities.',
    features: [
      { title: 'Secure Public WiFi', description: 'Reliable and safe internet access for citizens and visitors.', icon: Wifi },
      { title: 'Smart City Data', description: 'Gather insights on public space utilization and flow.', icon: Globe },
      { title: 'Digital Information Kiosks', description: 'Deliver public service announcements and interactive guides.', icon: Monitor },
    ],
    cta: 'Innovate Public Services',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'public library interior',
  },
  {
    id: 'attractions-museums',
    name: 'Attractions & Museums',
    icon: Compass,
    title: 'Engaging Visitors in Attractions & Museums',
    description: 'Create immersive experiences, provide interactive information, and understand visitor behavior in theme parks, zoos, and cultural institutions.',
    features: [
      { title: 'Interactive Guest WiFi', description: 'Engage visitors with personalized content and offers.', icon: Wifi },
      { title: 'Visitor Flow Analytics', description: 'Optimize exhibit layouts and manage crowd density.', icon: Map },
      { title: 'Dynamic Exhibit Displays', description: 'Enhance learning with real-time, interactive content.', icon: Monitor },
    ],
    cta: 'Create Unforgettable Visitor Experiences',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'museum digital exhibit',
  },
  {
    id: 'stadiums-events',
    name: 'Stadiums & Events',
    icon: Award,
    title: 'High-Performance Solutions for Stadiums & Events',
    description: 'Deliver seamless connectivity, enhance fan engagement, and optimize operations in large-scale venues and temporary event spaces.',
    features: [
      { title: 'High-Density Event WiFi', description: 'Robust and reliable internet for thousands of attendees.', icon: Wifi },
      { title: 'Fan Engagement Platforms', description: 'Personalized content and interactive experiences for fans.', icon: Users },
      { title: 'Operational Efficiency', description: 'Manage crowd flow and resource allocation in real-time.', icon: Activity },
    ],
    cta: 'Power Your Next Big Event',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'stadium fans cheering',
  },
  {
    id: 'offices-workplaces',
    name: 'Offices & Workplaces',
    icon: Briefcase,
    title: 'Smart Workplace Solutions for Modern Businesses',
    description: 'Optimize office space utilization, enhance employee connectivity, and streamline operations for a productive work environment.',
    features: [
      { title: 'Secure Employee WiFi', description: 'Reliable and protected internet access for your workforce.', icon: Wifi },
      { title: 'Space Utilization Analytics', description: 'Understand how office spaces are used to optimize layout.', icon: BarChart },
      { title: 'Digital Communication', description: 'Internal announcements and meeting room scheduling via digital screens.', icon: Monitor },
    ],
    cta: 'Create a Productive Workplace',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'modern office collaboration',
  },
  {
    id: 'franchises-multi-location',
    name: 'Franchises & Multi-Location Business',
    icon: GitFork,
    title: 'Standardized Solutions for Franchises & Multi-Location Businesses',
    description: 'Ensure consistent branding, centralized management, and localized engagement across all your business locations.',
    features: [
      { title: 'Centralized WiFi Management', description: 'Manage all locations from a single dashboard.', icon: Settings2 },
      { title: 'Consistent Customer Experience', description: 'Ensure brand consistency across all venues.', icon: UserCheck },
      { title: 'Scalable Deployment', description: 'Easily deploy solutions to new locations.', icon: TrendingUp },
    ],
    cta: 'Scale Your Business Intelligently',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'franchise storefronts row',
  },
];

    