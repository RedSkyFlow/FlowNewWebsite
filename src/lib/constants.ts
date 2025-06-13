
import {
  Home, Briefcase, Cpu, Building2, Info, Library, Mail, Network, Settings2, Cloud, Shield, Layers, Server as ServerIcon, Building, Users, Newspaper, Edit3, FileText, BookOpen, Wifi, Globe, type LucideIcon,
  Map, Monitor, MailCheck, Handshake, DollarSign, Zap, Link as LinkIcon, HardDrive, Lightbulb, Phone, LifeBuoy, Book, UserCheck, BarChart, ShoppingCart, Plane, GraduationCap, Gavel, Factory,
  LayoutGrid, Calendar, Megaphone, Lock, Activity, RefreshCw, MessageSquare, CreditCard, Box, Code, GitFork, Target, TrendingUp, Compass, HeartHandshake, Puzzle, Rocket,
  Award, FlaskConical, CircleDollarSign, Fingerprint, Search, Bell, Clock, Eye, LightbulbOff, Key, DatabaseZap, ShieldCheck, HelpCircle, Send, Tv2, Tag, Sparkles, ClipboardList, CalendarCheck, Headset, CalendarDays, MapPin,
  Ticket, Landmark, Cookie
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
    icon: LayoutGrid, // Using LayoutGrid as a more general "solutions" icon
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
      { href: '/industries/airports-transit', label: 'Airports & Transit Hubs', icon: Plane },
      { href: '/industries/education', label: 'Education', icon: GraduationCap },
      { href: '/industries/government-public-sector', label: 'Government & Public Sector', icon: Gavel },
      { href: '/industries/attractions-museums', label: 'Attractions & Museums', icon: Landmark },
      { href: '/industries/stadiums-events', label: 'Stadiums & Events', icon: Award },
      { href: '/industries/offices-workplaces', label: 'Offices & Workplaces', icon: Briefcase },
      { href: '/industries/franchises-multi-location', label: 'Franchises & Multi-Location Brands', icon: GitFork },
    ]
  },
  {
    label: 'Partners',
    icon: Handshake,
    href: '/partners',
    basePath: '/partners',
  },
  {
    label: 'Resources',
    icon: Library,
    href: '/resources',
    basePath: '/resources',
    // Sub-links for resources page can be derived there or defined if static & few.
    // For Phase 1, a single resources page is fine.
  },
  {
    label: 'Company',
    icon: Info,
    href: '/about', // Main company page is About Us
    basePath: '/company', // Using basePath for active state highlighting on parent
    subLinks: [
      { href: '/about', label: 'About Us', icon: Users },
      { href: '/contact', label: 'Contact Us', icon: Mail },
      { href: '/why-flow-networks', label: 'Why Flow Networks?', icon: Target },
      // { href: '/careers', label: 'Careers', icon: Briefcase }, // To be added if a page exists in P1
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
    title: 'Enhanced Guest Connectivity & Engagement for Hospitality',
    description: 'Deliver superior guest experiences in hotels, resorts, and restaurants with high-performance WiFi, location-based promotions, and targeted marketing communications. Our solutions provide rich data, laying a foundation for future service enhancements.',
    features: [
      { title: 'Robust Guest WiFi', description: 'Secure, high-speed internet access with branded captive portals and easy onboarding for an exceptional guest experience.', icon: Wifi },
      { title: 'Location-Aware Marketing', description: 'Utilize WiFi engagement data to send relevant offers and information via email/SMS based on guest location patterns.', icon: Megaphone },
      { title: 'Operational Analytics', description: 'Gain insights from WiFi data into guest flow, facility usage, and peak times to improve operational efficiency.', icon: BarChart },
    ],
    cta: 'Elevate Your Guest Experience',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'hotel lobby wifi analytics',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingCart,
    title: 'Boost Shopper Engagement with Smart Retail Solutions',
    description: 'Leverage in-store WiFi for valuable shopper analytics, personalized marketing campaigns, and dynamic digital signage to drive sales and improve customer experience. Our platform offers potential for future AI-driven personalization insights.',
    features: [
      { title: 'Shopper Analytics & Insights', description: 'Understand foot traffic, dwell times, and movement patterns using WiFi data to optimize store layout and staffing.', icon: Search },
      { title: 'Personalized In-Store Promotions', description: 'Deliver targeted offers via WiFi landing pages, email, or SMS based on shopper behavior and demographics.', icon: Tag },
      { title: 'Dynamic Digital Signage', description: 'Showcase promotions, product information, and brand content on in-store screens, managed centrally.', icon: Monitor },
    ],
    cta: 'Optimize Your Retail Space',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'retail analytics digital signage',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HeartHandshake,
    title: 'Secure Connectivity & Enhanced Patient Experience in Healthcare',
    description: 'Provide reliable and secure WiFi for patients, visitors, and staff, alongside tools for communication and information access. Our solutions help gather data points for future AI-assisted patient support and operational improvements.',
    features: [
      { title: 'Secure Patient & Guest WiFi', description: 'Offer safe, filtered internet access compliant with healthcare standards, ensuring data privacy and easy connection.', icon: ShieldCheck },
      { title: 'Digital Wayfinding & Information Displays', description: 'Utilize digital screens to guide visitors and provide important health information and facility maps effectively.', icon: Map },
      { title: 'Staff Communication & Alert Systems', description: 'Leverage network infrastructure for efficient staff communication, critical alerts, and operational coordination.', icon: Send },
    ],
    cta: 'Enhance Healthcare Delivery',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'hospital secure wifi staff',
  },
  {
    id: 'airports-transit',
    name: 'Airports & Transit Hubs',
    icon: Plane,
    title: 'Seamless Connectivity & Traveler Information for Transit Hubs',
    description: 'Improve traveler experience in airports and stations with high-capacity WiFi, real-time updates via digital signage, and targeted travel-related offers. This creates valuable data for future operational tools and passenger flow analysis.',
    features: [
      { title: 'High-Density WiFi Coverage', description: 'Reliable connectivity for thousands of concurrent users across terminals, gates, and waiting areas.', icon: Users },
      { title: 'Real-Time Information Displays', description: 'Power digital signage for flight/train schedules, gate changes, travel alerts, and advertising.', icon: Clock },
      { title: 'Passenger Flow Analytics', description: 'Gain insights into passenger movement, dwell times, and congestion points to optimize operations and resource allocation.', icon: TrendingUp },
    ],
    cta: 'Improve Traveler Journeys',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'airport terminal passenger analytics',
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    title: 'Connected Learning Environments for Educational Institutions',
    description: 'Empower students and faculty with robust campus-wide WiFi, secure network access, content filtering, and tools for digital content delivery. Our solutions are ready for future AI learning aid integrations.',
    features: [
      { title: 'Campus-Wide Secure WiFi', description: 'Reliable internet access for learning, research, administration, and BYOD support across all campus areas.', icon: Wifi },
      { title: 'Content Filtering & Network Security', description: 'Ensure safe internet access compliant with educational policies and protect network resources from threats.', icon: Fingerprint },
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
    title: 'Reliable Public WiFi & Citizen Communication Platforms',
    description: 'Offer secure public WiFi in government buildings and public spaces. Utilize digital tools for disseminating information and engaging citizens effectively, building a foundation for data-driven public service enhancements.',
    features: [
      { title: 'Secure Public WiFi Access', description: 'Controlled and filtered internet access for citizens in public facilities, libraries, and community centers.', icon: Globe },
      { title: 'Public Information Displays & Kiosks', description: 'Share important announcements, services, and emergency alerts via digital signage and interactive kiosks.', icon: Info },
      { title: 'Community Engagement Analytics', description: 'Understand usage patterns of public services and WiFi to improve resource allocation and service delivery based on data.', icon: BarChart },
    ],
    cta: 'Modernize Public Services',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'city hall public wifi info',
  },
  {
    id: 'attractions-museums',
    name: 'Attractions & Museums',
    icon: Landmark,
    title: 'Engaging Visitor Experiences at Attractions & Museums',
    description: 'Enhance visits with interactive digital content, reliable guest WiFi, and location-based information at theme parks, museums, and cultural sites. Gather data for future personalized exhibit interactions and operational insights.',
    features: [
      { title: 'Guest WiFi & Visitor Analytics', description: 'Provide seamless connectivity and understand visitor flow, dwell times, and popular exhibits for enhanced insights.', icon: Wifi },
      { title: 'Interactive Digital Exhibits & Wayfinding', description: 'Use digital signage for dynamic information, multimedia content, and easy navigation throughout the venue.', icon: Monitor },
      { title: 'Targeted Event & Offer Promotions', description: 'Inform visitors about special events, tours, or offers via email/SMS or on-site digital displays based on their engagement.', icon: Megaphone },
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
    description: 'Deliver high-performance WiFi for large crowds, power digital signage for scores and ads, and engage fans with targeted mobile interactions. Our platform is preparing for future AI-driven fan service innovations.',
    features: [
      { title: 'High-Density Event WiFi', description: 'Reliable connectivity for thousands of fans, supporting streaming, social sharing, and in-app experiences.', icon: Activity },
      { title: 'Live Scoreboards & Dynamic Advertising Screens', description: 'Dynamic content delivery on large venue screens for scores, replays, sponsor messages, and event information.', icon: Tv2 },
      { title: 'Fan Engagement & Behavior Analytics', description: 'Gather data on fan behavior, app usage, and concession patterns to improve future event experiences and personalize offers.', icon: Users },
    ],
    cta: 'Amplify the Fan Experience',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'stadium fan engagement wifi',
  },
  {
    id: 'offices-workplaces',
    name: 'Offices & Workplaces',
    icon: Briefcase,
    title: 'Productive & Secure Connectivity for Modern Workplaces',
    description: 'Equip your office with reliable corporate WiFi, tools for internal communication via digital signage, and insights into space utilization. Our solutions have an eye towards future AI-optimized environments and smart building integrations.',
    features: [
      { title: 'Secure Corporate & Guest WiFi Networks', description: 'Fast, secure, and segmented internet access for employees, visitors, and IoT devices, with easy management.', icon: Lock },
      { title: 'Internal Communications Platform (Digital Signage)', description: 'Share company news, updates, meeting schedules, and alerts on digital screens throughout the office.', icon: Newspaper },
      { title: 'Space Utilization Analytics', description: 'Understand how office spaces, meeting rooms, and common areas are used with location analytics to optimize your workplace.', icon: Search },
    ],
    cta: 'Create an Intelligent Workplace',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'modern office collaboration wifi',
  },
  {
    id: 'franchises-multi-location',
    name: 'Franchises & Multi-Location Brands',
    icon: GitFork,
    title: 'Consistent Brand Experience & Operations Across Franchise Locations',
    description: 'Standardize guest WiFi, digital marketing, and operational insights across all your franchise outlets for a unified brand presence and centrally managed services. Position your network for future AI-driven consistency checks and performance benchmarking.',
    features: [
      { title: 'Standardized Guest WiFi Experience', description: 'Consistent, branded, and secure WiFi access with centralized management at every franchise location.', icon: Wifi },
      { title: 'Centralized Digital Marketing Campaigns', description: 'Deploy consistent email/SMS promotions and digital signage content across all franchises from a single platform.', icon: Send },
      { title: 'Network-Wide Performance Analytics Dashboard', description: 'Track WiFi usage, customer engagement, and campaign effectiveness across all locations with a centralized dashboard for actionable insights.', icon: LayoutGrid },
    ],
    cta: 'Unify Your Franchise Network',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'franchise network map connected',
  },
];


// For AppFooter.tsx
export const FOOTER_LINKS = {
  solutions: MAIN_NAV_LINKS.find(link => link.label === 'Our Solutions')?.subLinks?.slice(0, 4) || [
      { href: '/solutions/intelligent-wifi', label: 'Intelligent WiFi', icon: Wifi },
      { href: '/solutions/location-intelligence', label: 'Location Intelligence', icon: Map },
      { href: '/solutions/digital-content-signage', label: 'Digital Signage', icon: Monitor },
      { href: '/solutions/email-sms-marketing', label: 'Email & SMS Marketing', icon: MailCheck },
  ],
  industries: INDUSTRIES_DATA.slice(0, 4).map(ind => ({ href: `/industries/${ind.id}`, label: ind.name, icon: ind.icon})) || [
      { href: '/industries/hospitality', label: 'Hospitality', icon: Building },
      { href: '/industries/retail', label: 'Retail', icon: ShoppingCart },
      { href: '/industries/healthcare', label: 'Healthcare', icon: HeartHandshake },
      { href: '/industries/airports-transit', label: 'Airports & Transit Hubs', icon: Plane },
  ],
  company: [
    { href: '/about', label: 'About Us', icon: Users },
    { href: '/contact', label: 'Contact Us', icon: Mail },
    { href: '/why-flow-networks', label: 'Why Flow Networks?', icon: Target },
    { href: '/careers', label: 'Careers', icon: Briefcase },
    { href: '/legal', label: 'Legal', icon: Gavel },
    { href: '/privacy-policy', label: 'Privacy Policy', icon: ShieldCheck },
    { href: '/terms-of-service', label: 'Terms of Use', icon: FileText },
    { href: '/my-data', label: 'My Data', icon: DatabaseZap },
    { href: '/cookie-policy', label: 'Cookie Policy', icon: Cookie },
    { href: '/standard-sla', label: 'Standard SLA', icon: Award },
  ],
  resources: [
    { href: '/resources', label: 'All Resources', icon: Library },
    { href: '/resources/case-studies', label: 'Case Studies', icon: BookOpen },
    { href: '/resources/guides-articles', label: 'Guides & Articles', icon: FileText },
    { href: '/resources/tools', label: 'Tools', icon: Settings2 }, // Can be a link to a page that lists tools
    { href: '/blog', label: 'Blog', icon: Newspaper }, // Link to main blog page
  ]
};
