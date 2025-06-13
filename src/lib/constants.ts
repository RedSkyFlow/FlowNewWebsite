
import {
  Home, Briefcase, Cpu, Building2, Info, Library, Mail, Network, Settings2, Cloud, Shield, Layers, Server as ServerIcon, Building, Users, Newspaper, Edit3, FileText, BookOpen, Wifi, Globe, type LucideIcon,
  Map, Monitor, MailCheck, Handshake, DollarSign, Zap, Link as LinkIcon, HardDrive, Lightbulb, Phone, LifeBuoy, Book, UserCheck, BarChart, ShoppingCart, Plane, GraduationCap, Gavel, Factory,
  LayoutGrid, Calendar, Megaphone, Lock, Activity, RefreshCw, MessageSquare, CreditCard, Box, Code, GitFork, Target, TrendingUp, Compass, HeartHandshake, Puzzle, Rocket,
  Award, FlaskConical, CircleDollarSign, Fingerprint, Search, Bell, Clock, Eye, LightbulbOff, Key, DatabaseZap, ShieldCheck, HelpCircle, Send, Tv2, Tag, Sparkles, ClipboardList, CalendarCheck, Headset, CalendarDays, MapPin,
  Ticket, Landmark, Cookie
  // ConciergeBell is effectively 'Bell'. If a more specific icon for 'ConciergeBell' is needed and available, it should be imported.
  // Ensure ServerIcon is aliased if 'Server' is also a general term used.
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

// MAIN_NAV_LINKS for Flow Networks - Phase 1: Focus on Current Offerings
export const MAIN_NAV_LINKS: NavLinkWithSubLinks[] = [
  { href: '/', label: 'Home', icon: Home },
  {
    label: 'Our Solutions',
    icon: LayoutGrid,
    href: '/solutions',
    basePath: '/solutions',
    subLinks: [
      { href: '/solutions/intelligent-wifi', label: 'Intelligent WiFi Infrastructure', icon: Wifi, shortDescription: "High-performance, secure wireless networks." },
      { href: '/solutions/location-intelligence', label: 'Location Intelligence', icon: Map, shortDescription: "Venue analytics and user behavior insights." },
      { href: '/solutions/digital-content-signage', label: 'Digital Content & Signage', icon: Monitor, shortDescription: "Engaging digital displays and content delivery." },
      { href: '/solutions/email-sms-marketing', label: 'Email & SMS Marketing', icon: MailCheck, shortDescription: "Targeted communication and marketing automation." },
      { href: '/solutions/family-friendly-wifi', label: 'Family-Friendly WiFi', icon: ShieldCheck, shortDescription: "Safe and filtered internet access." },
      { href: '/solutions/professional-services', label: 'Professional Services', icon: Handshake, shortDescription: "Expert network design, deployment, and support." },
      { href: '/solutions/event-wifi', label: 'Event WiFi', icon: CalendarDays, shortDescription: "Reliable connectivity for temporary events." },
      { href: '/solutions/wifi-monetisation', label: 'WiFi Monetisation & Sponsored WiFi', icon: DollarSign, shortDescription: "Generate revenue from your WiFi services." },
      { href: '/solutions/integrations', label: 'Integrations', icon: LinkIcon, shortDescription: 'Seamless connections with your existing systems.' },
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
      { href: '/industries/attractions-museums', label: 'Attractions & Museums', icon: Landmark },
      { href: '/industries/stadiums-events', label: 'Stadiums & Events', icon: Award },
      { href: '/industries/offices-workplaces', label: 'Offices & Workplaces', icon: Briefcase },
      { href: '/industries/franchises-multi-location', label: 'Franchises & Multi-Location', icon: GitFork },
    ]
  },
  {
    label: 'Partners',
    icon: Handshake, // Kept from previous version, seems appropriate
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
    basePath: '/company',
    subLinks: [
      { href: '/about', label: 'About Us', icon: Users },
      { href: '/contact', label: 'Contact Us', icon: Mail },
      { href: '/why-flow-networks', label: 'Why Flow Networks?', icon: Target },
      // Careers could be added here if it's a distinct page in Phase 1 nav
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
    icon: Building,
    title: 'Enhanced Guest WiFi & Engagement for Hospitality',
    description: 'Deliver superior guest experiences in hotels, resorts,and restaurants with high-performance WiFi, location-based promotions, and targeted marketing communications, laying a foundation for future AI-enhanced services.',
    features: [
      { title: 'Robust Guest WiFi', description: 'Secure, high-speed internet access with branded captive portals and easy onboarding.', icon: Wifi },
      { title: 'Location-Aware Marketing', description: 'Send relevant offers via email/SMS based on guest location patterns and engagement data.', icon: Megaphone },
      { title: 'Operational Analytics', description: 'Utilize WiFi data for insights into guest flow and facility usage, improving operational efficiency.', icon: BarChart },
    ],
    cta: 'Elevate Your Guest Experience',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'hotel lobby wifi analytics',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingCart,
    title: 'Boost Shopper Engagement with Smart Retail WiFi',
    description: 'Leverage in-store WiFi for shopper analytics, personalized marketing, and dynamic digital signage to drive sales and improve customer experience, with potential for AI-driven personalization.',
    features: [
      { title: 'Shopper Analytics & Insights', description: 'Understand foot traffic, dwell times, and movement patterns using WiFi data to optimize store layout and staffing.', icon: Search },
      { title: 'Personalized In-Store Promotions', description: 'Deliver targeted offers via WiFi landing pages, email, or SMS based on shopper behavior.', icon: Tag },
      { title: 'Dynamic Digital Signage', description: 'Showcase promotions, product information, and brand content on in-store screens, adaptable for future AI content suggestions.', icon: Monitor },
    ],
    cta: 'Optimize Your Retail Space',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'retail analytics digital signage',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HeartHandshake,
    title: 'Secure Connectivity & Patient Engagement for Healthcare',
    description: 'Provide reliable and secure WiFi for patients, visitors, and staff, alongside tools for communication, information access, and future AI-assisted patient support.',
    features: [
      { title: 'Secure Patient & Guest WiFi', description: 'Offer safe, filtered internet access compliant with healthcare standards, ensuring data privacy.', icon: ShieldCheck },
      { title: 'Digital Wayfinding & Information', description: 'Utilize digital screens to guide visitors and provide important health information and facility maps.', icon: Map },
      { title: 'Staff Communication & Alerts', description: 'Leverage network infrastructure for efficient staff communication and critical alerts.', icon: Send },
    ],
    cta: 'Enhance Healthcare Delivery',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'hospital secure wifi staff',
  },
  {
    id: 'airports-transit',
    name: 'Airports & Transit Hubs',
    icon: Plane,
    title: 'Seamless WiFi & Traveler Information for Transit Hubs',
    description: 'Improve traveler experience in airports and stations with high-capacity WiFi, real-time updates via digital signage, and targeted travel offers, creating data points for future AI operational tools.',
    features: [
      { title: 'High-Density WiFi Coverage', description: 'Reliable connectivity for thousands of concurrent users across terminals and waiting areas.', icon: Users },
      { title: 'Real-Time Information Displays', description: 'Flight/train schedules, gate changes, and emergency alerts on digital screens.', icon: Clock },
      { title: 'Passenger Flow Analytics', description: 'Gain insights into passenger movement and dwell times to optimize operations and resource allocation.', icon: TrendingUp },
    ],
    cta: 'Improve Traveler Journeys',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'airport terminal passenger analytics',
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    title: 'Connected Learning Environments for Education',
    description: 'Empower students and faculty with robust campus-wide WiFi, secure network access, content filtering, and tools for digital content delivery, ready for future AI learning aids.',
    features: [
      { title: 'Campus-Wide Secure WiFi', description: 'Reliable internet for learning, research, administration, and BYOD support.', icon: Wifi },
      { title: 'Content Filtering & Network Security', description: 'Ensure safe internet access compliant with educational policies and protect network resources.', icon: Fingerprint },
      { title: 'Digital Notice Boards & Communication', description: 'Communicate events, announcements, and emergency alerts via campus digital signage and targeted messages.', icon: Newspaper },
    ],
    cta: 'Future-Proof Your Campus',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'university campus digital learning',
  },
  {
    id: 'government-public-sector',
    name: 'Government & Public Sector',
    icon: Gavel,
    title: 'Reliable Public WiFi & Citizen Communication Solutions',
    description: 'Offer secure public WiFi in government buildings and public spaces, and utilize digital tools for disseminating information and engaging citizens effectively, building a foundation for AI-driven public service enhancements.',
    features: [
      { title: 'Secure Public WiFi Access', description: 'Controlled and filtered internet access for citizens in public facilities and community centers.', icon: Globe },
      { title: 'Public Information Displays', description: 'Share important announcements, services, and emergency alerts via digital signage.', icon: Info },
      { title: 'Community Engagement Analytics', description: 'Understand usage patterns of public services and WiFi to improve resource allocation and service delivery.', icon: BarChart },
    ],
    cta: 'Modernize Public Services',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'city hall public wifi',
  },
  {
    id: 'attractions-museums',
    name: 'Attractions & Museums',
    icon: Landmark, // Changed from Ticket to Landmark for better semantic fit
    title: 'Engaging Visitor Experiences at Attractions & Museums',
    description: 'Enhance visits with interactive digital content, reliable guest WiFi, and location-based information at theme parks, museums, and cultural sites. Gather data for future AI-powered exhibit interactions.',
    features: [
      { title: 'Guest WiFi & Visitor Analytics', description: 'Provide seamless connectivity and understand visitor flow, dwell times, and popular exhibits for AI-enhanced insights.', icon: Wifi },
      { title: 'Interactive Digital Exhibits & Wayfinding', description: 'Use digital signage for dynamic information, multimedia content, and easy navigation.', icon: Monitor },
      { title: 'Targeted Event Promotions', description: 'Inform visitors about special events, tours, or offers via email/SMS or on-site digital displays.', icon: Megaphone },
    ],
    cta: 'Captivate Your Visitors',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'museum interactive exhibit wifi',
  },
  {
    id: 'stadiums-events',
    name: 'Stadiums & Events',
    icon: Award,
    title: 'Connected Fan Experiences for Stadiums & Live Events',
    description: 'Deliver high-performance WiFi for large crowds, power digital signage for scores and ads, and engage fans with targeted mobile interactions, preparing for AI-driven fan services.',
    features: [
      { title: 'High-Density Event WiFi', description: 'Reliable connectivity for thousands of fans, supporting streaming, social sharing, and app usage.', icon: Activity },
      { title: 'Live Scoreboards & Dynamic Advertising', description: 'Dynamic content delivery on large venue screens for scores, replays, and sponsor messages.', icon: Tv2 },
      { title: 'Fan Engagement Analytics', description: 'Gather data on fan behavior, app usage, and concession patterns to improve future event experiences and personalize offers.', icon: Users }, // BarChart previously, Users might be more about engagement
    ],
    cta: 'Amplify the Fan Experience',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'stadium fan engagement wifi',
  },
  {
    id: 'offices-workplaces',
    name: 'Offices & Workplaces',
    icon: Briefcase,
    title: 'Productive & Secure WiFi for Modern Workplaces',
    description: 'Equip your office with reliable corporate WiFi, tools for internal communication via digital signage, and insights into space utilization, with an eye towards AI-optimized environments.',
    features: [
      { title: 'Secure Corporate & Guest WiFi', description: 'Fast, secure, and segmented internet access for employees, visitors, and IoT devices.', icon: Lock },
      { title: 'Internal Communications Platform', description: 'Share company news, updates, and alerts on digital screens throughout the office.', icon: Newspaper }, // Briefcase previously, Newspaper better for comms
      { title: 'Space Utilization & Environmental Monitoring', description: 'Understand how office spaces are used with location analytics and integrate environmental sensors for smarter building management.', icon: Search },
    ],
    cta: 'Create an Intelligent Workplace',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'modern office collaboration wifi',
  },
  {
    id: 'franchises-multi-location',
    name: 'Franchises & Multi-Location Businesses',
    icon: GitFork,
    title: 'Consistent Brand Experience Across Franchise Locations',
    description: 'Standardize guest WiFi, digital marketing, and operational insights across all your franchise outlets for a unified brand presence and centrally managed services. Position for future AI-driven consistency checks.',
    features: [
      { title: 'Standardized Guest WiFi Experience', description: 'Consistent, branded, and secure WiFi access at every franchise location.', icon: Wifi }, // GitFork previously, Wifi more direct
      { title: 'Centralized Digital Marketing', description: 'Deploy consistent email/SMS promotions and digital signage content across all franchises.', icon: Send },
      { title: 'Network-Wide Performance Analytics', description: 'Track WiFi usage, customer engagement, and campaign effectiveness with a centralized dashboard.', icon: LayoutGrid },
    ],
    cta: 'Unify Your Franchise Network',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'franchise network map connected',
  },
];

// For AppFooter.tsx - Reflecting Phase 1 Structure
export const FOOTER_LINKS = {
  solutions: MAIN_NAV_LINKS.find(link => link.label === 'Our Solutions')?.subLinks?.slice(0, 4) || [
    // Fallback if MAIN_NAV_LINKS is somehow empty or 'Our Solutions' not found
      { href: '/solutions/intelligent-wifi', label: 'Intelligent WiFi', icon: Wifi },
      { href: '/solutions/location-intelligence', label: 'Location Intelligence', icon: Map },
      { href: '/solutions/digital-content-signage', label: 'Digital Signage', icon: Monitor },
      { href: '/solutions/email-sms-marketing', label: 'Email & SMS Marketing', icon: MailCheck },
  ],
  industries: INDUSTRIES_DATA.slice(0, 4).map(ind => ({ href: `/industries/${ind.id}`, label: ind.name, icon: ind.icon})) || [
      { href: '/industries/hospitality', label: 'Hospitality', icon: Building },
      { href: '/industries/retail', label: 'Retail', icon: ShoppingCart },
      { href: '/industries/healthcare', label: 'Healthcare', icon: HeartHandshake },
      { href: '/industries/airports-transit', label: 'Airports & Transit', icon: Plane },
  ],
  company: [
    { href: '/about', label: 'About Us', icon: Users },
    { href: '/contact', label: 'Contact Us', icon: Mail },
    { href: '/why-flow-networks', label: 'Why Flow Networks?', icon: Target },
    { href: '/careers', label: 'Careers', icon: Briefcase }, // Added Careers
    { href: '/legal', label: 'Legal', icon: Gavel }, // Added Legal
    { href: '/privacy-policy', label: 'Privacy Policy', icon: ShieldCheck },
    { href: '/terms-of-service', label: 'Terms of Use', icon: FileText }, // Changed from Terms of Service
    { href: '/my-data', label: 'My Data', icon: DatabaseZap }, // Added My Data
    { href: '/cookie-policy', label: 'Cookie Policy', icon: Cookie }, // Added Cookie Policy
    { href: '/standard-sla', label: 'Standard SLA', icon: Award }, // Added Standard SLA
  ],
  resources: [
    { href: '/resources', label: 'All Resources', icon: Library },
    { href: '/resources/case-studies', label: 'Case Studies', icon: BookOpen },
    { href: '/resources/guides-articles', label: 'Guides & Articles', icon: FileText },
    { href: '/resources/tools', label: 'Tools', icon: Settings2 },
    { href: '/blog', label: 'Blog', icon: Newspaper },
  ]
};

    