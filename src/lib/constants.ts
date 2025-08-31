
import {
  Home, Briefcase, Cpu, Building2, Info, Library, Mail, Layers, Lightbulb, Handshake, Shield, Gavel, Users, Wifi, CreditCard, Tv2, MailCheck, ShieldCheck, Globe,
  Megaphone, CircleDollarSign, CalendarDays, Store, Puzzle, Link2, BarChart, Plane, FerrisWheel, HeartHandshake, Hotel, ConciergeBell, Landmark, ShoppingCart,
  ShoppingBag, Drama, BuildingIcon, School, MapPin, TrainFront, BookOpen, FileText, Wrench, HelpCircle, TrendingUp, Server as ServerIcon, Monitor, Route,
  ClipboardList, Search, Tag, Presentation, Compass, Send, BarChart3, Users as UsersIcon, Map as MapIcon, Volume2, Ticket, Wallet, BarChartBig, BrainCircuit,
  Bot, Lock, DatabaseZap, GraduationCap, MessageSquare, PlusCircle, UserCheck, type LucideIcon
} from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon?: LucideIcon;
  shortDescription?: string;
};

export type NavLinkWithSubLinks = NavLink & {
  subLinks?: NavLinkWithSubLinks[];
  basePath?: string;
  category?: string;
};

// IA v5.2 - Definitive Information Architecture with Hierarchical Products
export const MAIN_NAV_LINKS: NavLinkWithSubLinks[] = [
  { href: '/', label: 'Home', icon: Home },
  {
    label: 'Products',
    href: '/products',
    basePath: '/products',
    icon: Layers,
    subLinks: [
      {
        href: '/products/intelligent-wifi',
        label: 'Intelligent WiFi',
        icon: Wifi,
        shortDescription: 'Connectivity, Analytics & Engagement.',
        category: 'Core Platform',
        subLinks: [
          { href: '/products/intelligent-wifi/connect', label: 'Connect: The Welcome', icon: Link2, shortDescription: 'Branded Captive Portals' },
          { href: '/products/intelligent-wifi/capture', label: 'Capture: The Data', icon: DatabaseZap, shortDescription: 'First-Party Data Collection' },
          { href: '/products/intelligent-wifi/engage', label: 'Engage: The Conversation', icon: MessageSquare, shortDescription: 'Marketing Automation Triggers' },
          { href: '/products/intelligent-wifi/location-intelligence', label: 'Location Intelligence', icon: BarChart3, shortDescription: 'Venue Analytics & Heatmaps' },
          { href: '/products/intelligent-wifi/secure-access', label: 'Secure Access', icon: ShieldCheck, shortDescription: 'Enterprise-Grade Security' },
          { href: '/products/intelligent-wifi/ai-gateway', label: 'AI Gateway Foundation', icon: Cpu, shortDescription: 'The Path to a Sentient Venue' },
          { 
            href: '/products/intelligent-wifi/add-ons', 
            label: 'Add-Ons', 
            icon: PlusCircle, 
            shortDescription: 'Extend platform capabilities.',
            subLinks: [
              { href: '/products/intelligent-wifi/add-ons/paid-wifi', label: 'Paid WiFi', icon: CircleDollarSign },
              { href: '/products/intelligent-wifi/add-ons/surveys', label: 'Surveys', icon: FileText },
              { href: '/products/intelligent-wifi/add-ons/shield', label: 'Shield', icon: Shield },
              { href: '/products/intelligent-wifi/add-ons/securepass', label: 'SecurePass', icon: UserCheck },
            ]
          },
        ]
      },
      {
        href: '/products/allxs',
        label: 'Allxs Platform',
        icon: CreditCard,
        shortDescription: 'Cashless Payments & Events.',
        category: 'Core Platform',
        subLinks: [
           { href: '/products/allxs/cashless-payments', label: 'Cashless Payments', icon: Wallet },
           { href: '/products/allxs/event-management', label: 'Event Management', icon: CalendarDays },
           { href: '/products/allxs/education-commerce', label: 'Education Commerce', icon: School },
        ]
      },
      {
        href: '/products/cnntap',
        label: 'CNNTAP',
        icon: Tv2,
        shortDescription: 'Premium Content & Ad Delivery.',
        category: 'Core Platform',
        subLinks: [
           { href: '/products/cnntap/brand-partnerships', label: 'Brand Partnerships', icon: Handshake },
           { href: '/products/cnntap/global-exposure', label: 'Global Exposure', icon: Globe },
        ]
      },
      { href: '/products/everlytic', label: 'Everlytic', icon: MailCheck, shortDescription: 'Multi-channel Marketing Automation.', category: 'Core Platform' },
      { href: '/products/friendly-wifi', label: 'Friendly WiFi', icon: ShieldCheck, shortDescription: 'Certified Safe Browsing.', category: 'Add-Ons & Services' },
      { href: '/products/internet-connectivity', label: 'Internet Connectivity', icon: Globe, shortDescription: 'High-speed Internet Services.', category: 'Add-Ons & Services' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    basePath: '/solutions',
    icon: Lightbulb,
    subLinks: [
      { href: '/solutions/wifi-marketing', label: 'WiFi Marketing', icon: Megaphone, shortDescription: 'Engage visitors directly.', category: 'Business Solutions' },
      { href: '/solutions/wifi-monetisation', label: 'WiFi Monetisation', icon: CircleDollarSign, shortDescription: 'Generate revenue from WiFi.', category: 'Business Solutions' },
      { href: '/solutions/sponsored-wifi', label: 'Sponsored WiFi', icon: Handshake, shortDescription: 'Partner-funded connectivity.', category: 'Business Solutions' },
      { href: '/solutions/event-wifi', label: 'Event WiFi', icon: CalendarDays, shortDescription: 'High-density event solutions.', category: 'Business Solutions' },
      { href: '/solutions/smb-wifi', label: 'SMB WiFi', icon: Store, shortDescription: 'Solutions for small business.', category: 'Business Solutions' },
      { href: '/solutions/ai-gateway', label: 'AI Gateway Vision', icon: Cpu, shortDescription: 'The future of intelligent venues.', category: 'Vision & Innovation' },
      { href: '/solutions/ai-integrations', label: 'AI Integrations', icon: Puzzle, shortDescription: 'Connecting intelligent systems.', category: 'Technical Solutions' },
      { href: '/solutions/digital-marketing', label: 'Digital Marketing', icon: BarChart, shortDescription: 'Promote your venue.', category: 'Services' },
      { href: '/solutions/3rd-party-integrations', label: '3rd Party Integrations', icon: Link2, shortDescription: 'Connect your existing tools.', category: 'Technical Solutions' },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    basePath: '/industries',
    icon: Building2,
    subLinks: [
      { href: '/industries/retail', label: 'Retail', icon: ShoppingCart, shortDescription: 'Drive sales with in-store analytics.', category: 'Commerce & Corporate' },
      { href: '/industries/shopping-malls', label: 'Shopping Malls', icon: ShoppingBag, shortDescription: 'Intelligence for large retail spaces.', category: 'Commerce & Corporate' },
      { href: '/industries/offices', label: 'Offices', icon: BuildingIcon, shortDescription: 'Smart solutions for workplaces.', category: 'Commerce & Corporate' },
      { href: '/industries/education', label: 'Education', icon: School, shortDescription: 'Connected and safe learning.', category: 'Commerce & Corporate' },
      { href: '/industries/airports', label: 'Airports', icon: Plane, shortDescription: 'Solutions for transportation hubs.', category: 'Travel & Public Venues' },
      { href: '/industries/public-transport', label: 'Public Transport', icon: TrainFront, shortDescription: 'Connectivity on the move.', category: 'Travel & Public Venues' },
      { href: '/industries/towns-cities', label: 'Towns & Cities', icon: MapPin, shortDescription: 'Public and municipal WiFi.', category: 'Travel & Public Venues' },
      { href: '/industries/stadiums', label: 'Stadiums', icon: Drama, shortDescription: 'High-density fan connectivity.', category: 'Travel & Public Venues' },
      { href: '/industries/hotels', label: 'Hotels', icon: Hotel, shortDescription: 'Enhance the guest experience.', category: 'Hospitality & Leisure' },
      { href: '/industries/hospitality', label: 'Hospitality', icon: ConciergeBell, shortDescription: 'Solutions for restaurants & cafes.', category: 'Hospitality & Leisure' },
      { href: '/industries/attractions', label: 'Attractions', icon: FerrisWheel, shortDescription: 'Engage guests at leisure sites.', category: 'Hospitality & Leisure' },
      { href: '/industries/museums', label: 'Museums', icon: Landmark, shortDescription: 'Interactive digital experiences.', category: 'Hospitality & Leisure' },
      { href: '/industries/healthcare', label: 'Healthcare', icon: HeartHandshake, shortDescription: 'Connectivity for medical facilities.', category: 'Hospitality & Leisure' },
    ],
  },
  {
    label: 'AI Gateway',
    href: '/ai-gateway',
    basePath: '/ai-gateway',
    icon: Cpu,
    subLinks: [
      { href: '/ai-gateway/what-it-is', label: 'What It Is', icon: HelpCircle, shortDescription: 'Understand the core concepts.', category: 'The Vision' },
      { href: '/ai-gateway/benefits', label: 'Benefits', icon: TrendingUp, shortDescription: 'The value for you and your users.', category: 'The Vision' },
      { href: '/ai-gateway/technology', label: 'Technology', icon: ServerIcon, shortDescription: 'Our architectural approach.', category: 'The Vision' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    basePath: '/resources',
    icon: Library,
    subLinks: [
      { href: '/resources/case-studies', label: 'Case Studies', icon: BookOpen, shortDescription: 'Real-world success stories.', category: 'Knowledge Base' },
      { href: '/resources/guides-articles', label: 'Guides & Articles', icon: FileText, shortDescription: 'In-depth analysis.', category: 'Knowledge Base' },
      { href: '/resources/tools', label: 'Tools', icon: Wrench, shortDescription: 'Calculators and estimators.', category: 'Utilities' },
    ],
  },
  {
    label: 'Company',
    href: '/company/about-us',
    basePath: '/company',
    icon: Info,
    subLinks: [
      { href: '/company/about-us', label: 'About Us', icon: Users, shortDescription: 'Our mission and story.', category: 'Corporate Info' },
      { href: '/company/careers', label: 'Careers', icon: Briefcase, shortDescription: 'Join our innovative team.', category: 'Corporate Info' },
      { href: '/company/partners', label: 'Partners', icon: Handshake, shortDescription: 'Our technology & channel partners.', category: 'Ecosystem' },
      { href: '/company/privacy-policy', label: 'Privacy Policy', icon: Shield, shortDescription: 'Our commitment to your data.', category: 'Legal' },
      { href: '/company/terms-of-use', label: 'Terms of Use', icon: Gavel, shortDescription: 'Service usage terms.', category: 'Legal' },
    ],
  },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export const AI_GATEWAY_SUB_LINKS = MAIN_NAV_LINKS.find(link => link.label === 'AI Gateway')?.subLinks || [];

export type IndustryFeature = {
  title: string;
  description: string;
  iconName: keyof typeof ICONS;
};

export type Industry = {
  id: string;
  name: string;
  iconName: keyof typeof ICONS;
  title: string;
  description: string;
  features: IndustryFeature[];
  cta: string;
  image: string;
  imageHint: string;
};

export const ICONS = {
  Plane, Wifi, Monitor, Route, ConciergeBell, ClipboardList, Megaphone, ShoppingCart, Search, Tag, Presentation,
  HeartHandshake, ShieldCheck, Compass, Send, GraduationCap, Hotel, Tv2, FerrisWheel, MapIcon, MessageSquare, Landmark,
  Volume2, BuildingIcon, BarChart3, TrainFront, ShoppingBag, CircleDollarSign, Drama, UsersIcon, MapPin, Store,
} as const;

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'airports',
    name: 'Airports',
    iconName: 'Plane',
    title: 'Enhanced Connectivity & Traveler Experience for Airports',
    description: 'Provide robust, high-capacity WiFi for travelers, power real-time information displays, and gather passenger flow insights to optimize operations. Our platform supports future AI-driven enhancements for operational efficiency.',
    features: [
      { title: 'High-Density Traveler WiFi', description: 'Seamless and reliable internet access across terminals and gates, designed for thousands of concurrent users.', iconName: 'Wifi' },
      { title: 'Real-Time Flight Information Displays', description: 'Power digital signage for flight schedules, gate changes, travel alerts, and airport wayfinding.', iconName: 'Monitor' },
      { title: 'Passenger Flow Analytics', description: 'Understand passenger movement and dwell times to improve queue management, resource allocation, and retail opportunities.', iconName: 'Route' },
    ],
    cta: 'Optimize Airport Operations',
    image: '/images/industries/airports-hero.jpg',
    imageHint: 'airport terminal analytics',
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    iconName: 'ConciergeBell',
    title: 'Modern Connectivity Solutions for the Hospitality Sector',
    description: 'Empower restaurants, cafes, pubs, and various hospitality venues with reliable guest WiFi, digital menus, and marketing automation tools to improve customer experience and operational efficiency.',
    features: [
      { title: 'Reliable Customer WiFi', description: 'Offer seamless internet access to patrons, enhancing their visit and enabling digital engagement.', iconName: 'Wifi' },
      { title: 'Digital Menu & Ordering Integration', description: 'Support QR-code menus and online ordering systems through robust network infrastructure.', iconName: 'ClipboardList' },
      { title: 'Automated Customer Marketing', description: 'Utilize captured data for targeted email/SMS campaigns, loyalty programs, and special offers.', iconName: 'Megaphone' },
    ],
    cta: 'Boost Hospitality Services',
    image: '/images/industries/hospitality-hero.jpg',
    imageHint: 'restaurant cafe wifi',
  },
  {
    id: 'retail',
    name: 'Retail',
    iconName: 'ShoppingCart',
    title: 'Smart WiFi & Analytics for Enhanced Retail Performance',
    description: 'Leverage in-store WiFi for shopper analytics, personalized marketing, and dynamic digital signage to drive sales and improve customer experience. Our system supports future AI-driven personalization.',
    features: [
      { title: 'Shopper Behavior Analytics', description: 'Understand foot traffic, dwell times, and popular zones using WiFi data to optimize store layout and merchandising.', iconName: 'Search' },
      { title: 'Personalized In-Store Marketing', description: 'Deliver targeted offers and product recommendations via WiFi landing pages, email, or SMS.', iconName: 'Tag' },
      { title: 'Dynamic Product & Promotion Displays', description: 'Utilize digital signage for eye-catching promotions, new arrivals, and brand storytelling.', iconName: 'Presentation' },
    ],
    cta: 'Optimize Retail Spaces',
    image: '/images/industries/retail-hero.jpg',
    imageHint: 'retail store analytics',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    iconName: 'HeartHandshake',
    title: 'Secure & Reliable Connectivity for Healthcare Facilities',
    description: 'Deliver secure WiFi for patients, visitors, and staff, alongside tools for communication and information access. Our systems ensure data privacy and support future integration of AI-assisted patient services.',
    features: [
      { title: 'Secure Patient & Staff WiFi', description: 'HIPAA-compliant, filtered internet access, ensuring data security and easy connectivity for all users.', iconName: 'ShieldCheck' },
      { title: 'Digital Wayfinding & Patient Information', description: 'Implement digital screens for easy navigation, health advisories, and service information within facilities.', iconName: 'Compass' },
      { title: 'Critical Staff Communication', description: 'Leverage the network for efficient internal communication, alerts, and coordination, improving response times.', iconName: 'Send' },
    ],
    cta: 'Enhance Patient Care',
    image: '/images/industries/healthcare-hero.jpg',
    imageHint: 'hospital patient wifi',
  },
  {
    id: 'education',
    name: 'Education',
    iconName: 'GraduationCap',
    title: 'Connected Learning Environments for Educational Institutions',
    description: 'Empower students and faculty with robust campus-wide WiFi, secure network access, content filtering, and tools for digital content delivery. Our solutions are built for the future of education, including AI learning aids.',
    features: [
      { title: 'Campus-Wide Secure WiFi', description: 'Reliable internet for learning, research, and administration, supporting BYOD policies across all areas.', iconName: 'Wifi' },
      { title: 'Content Filtering & Network Security', description: 'Ensure safe internet usage with CIPA-compliant filtering and protect network resources from threats.', iconName: 'ShieldCheck' },
      { title: 'Digital Signage for Announcements & Events', description: 'Communicate campus news, event schedules, and emergency alerts effectively via digital displays.', iconName: 'Megaphone' },
    ],
    cta: 'Future-Proof Your Campus',
    image: '/images/industries/education-hero.jpg',
    imageHint: 'university students library wifi',
  },
  {
    id: 'hotels',
    name: 'Hotels',
    iconName: 'Hotel',
    title: 'Digital Experience Solutions for Hotels & Resorts',
    description: 'Enhance the entire guest journey with seamless WiFi, integrated PMS authentication, premium in-room content, and personalized engagement tools that drive loyalty and ancillary revenue.',
    features: [
      { title: 'Premium Guest WiFi & Connectivity', description: 'Deliver fast, reliable, and secure WiFi with a branded login experience, tiered access, and seamless PMS integration.', iconName: 'Wifi' },
      { title: 'Enhanced In-Room Experience', description: 'Partner with CNNTAP to provide guests with premium, curated content on their own devices, reinforcing your hotel\'s quality.', iconName: 'Tv2' },
      { title: 'Personalized Guest Engagement', description: 'Leverage captured data for personalized welcome messages, targeted offers for your amenities, and post-stay feedback surveys.', iconName: 'ConciergeBell' },
    ],
    cta: 'Elevate Your Guest Experience',
    image: '/images/products/Hotel concierge.png',
    imageHint: 'luxury hotel room'
  },
  {
    id: 'attractions',
    name: 'Attractions',
    iconName: 'FerrisWheel',
    title: 'Creating Magical & Modern Visitor Experiences',
    description: 'Infuse digital convenience and magic into physical fun. Provide venue-wide WiFi, interactive digital wayfinding, and contextual notifications to amplify the visitor experience and gather valuable operational insights.',
    features: [
      { title: 'Venue-Wide Guest WiFi', description: 'Robust, high-capacity WiFi that enables guests to share their experiences on social media and engage with your digital platforms.', iconName: 'Wifi' },
      { title: 'Interactive Digital Wayfinding', description: 'Help guests navigate large spaces with ease, showing real-time queue lengths, show times, and points of interest on interactive maps.', iconName: 'MapIcon' },
      { title: 'Contextual Notifications', description: 'Use location intelligence to send relevant push notifications, such as a special offer for a nearby food stall or an event reminder.', iconName: 'MessageSquare' },
    ],
    cta: 'Design a Smarter Attraction',
    image: '/images/industries/attractions-hero.jpg',
    imageHint: 'theme park interactive map'
  },
  {
    id: 'museums',
    name: 'Museums & Galleries',
    iconName: 'Landmark',
    title: 'Bringing Stories to Life with Digital Layers',
    description: 'Engage a new generation of visitors by layering rich, interactive digital content onto your physical exhibits. Enhance accessibility with digital audio guides and gather invaluable insights about your audience.',
    features: [
      { title: 'Reliable Visitor & Research WiFi', description: 'Provide seamless connectivity for guests to share their experience and for researchers to access digital archives.', iconName: 'Wifi' },
      { title: 'Interactive Exhibit Guides', description: 'Use digital wayfinding to create interactive maps that guide visitors and provide rich, multimedia content for specific exhibits.', iconName: 'MapIcon' },
      { title: 'Enhanced Accessibility', description: 'Deliver digital audio guides, translated content, and accessible routes directly to a visitor\'s own device.', iconName: 'Volume2' },
    ],
    cta: 'Enrich Your Exhibits',
    image: '/images/industries/museums-hero.jpg',
    imageHint: 'museum augmented reality'
  },
  {
    id: 'offices',
    name: 'Offices & Corporate',
    iconName: 'BuildingIcon',
    title: 'Designing the Smart & Secure Modern Workplace',
    description: 'Deliver flawless, secure connectivity for employees and a seamless, professional welcome for guests. Gain powerful analytics to optimize your workspace utilization and make data-driven real estate decisions.',
    features: [
      { title: 'Secure Corporate & Guest Networks', description: 'Deploy a robust network for your staff, completely isolated from a seamless and secure WiFi network for visitors.', iconName: 'Wifi' },
      { title: 'Enterprise-Grade Security', description: 'Protect your sensitive corporate data with advanced security protocols and compliant data handling for guest access.', iconName: 'ShieldCheck' },
      { title: 'Workspace Utilization Analytics', description: 'Understand how your office space is truly being used to identify popular zones, optimize layouts, and make informed real estate decisions.', iconName: 'BarChart3' },
    ],
    cta: 'Build a Smarter Workplace',
    image: '/images/industries/offices-hero.jpg',
    imageHint: 'modern corporate office'
  },
  {
    id: 'public-transport',
    name: 'Public Transport',
    iconName: 'TrainFront',
    title: 'Connecting the Journey, Enhancing the Experience',
    description: 'Provide reliable, safe, and consistent internet connectivity for passengers on trains, buses, and ferries. Turn travel time into productive or entertaining time while opening new channels for communication.',
    features: [
      { title: 'Reliable On-the-Go Connectivity', description: 'Deliver stable and reliable internet throughout the journey, turning travel time into productive or entertaining time.', iconName: 'Wifi' },
      { title: 'Certified Safe & Secure', description: 'Ensure a safe browsing experience for all passengers with Friendly WiFi certified content filtering, a critical feature for public transport.', iconName: 'ShieldCheck' },
      { title: 'Passenger Communication Channel', description: 'Use the captive portal to deliver real-time service alerts, next-stop information, and promotional messages.', iconName: 'Megaphone' },
    ],
    cta: 'Upgrade Your Fleet',
    image: '/images/industries/transport-hero.jpg',
    imageHint: 'passenger on train wifi'
  },
  {
    id: 'shopping-malls',
    name: 'Shopping Malls',
    iconName: 'ShoppingBag',
    title: 'Reimagining the Retail Destination',
    description: 'Understand shoppers as a cohesive audience, optimize your physical space with visitor analytics, and create powerful, mall-wide marketing opportunities to support tenant success and drive revenue.',
    features: [
      { title: 'Shopper Journey Analytics', description: 'Gain a macro-level view of your property. Use location intelligence to understand popular zones, common paths, and dwell times.', iconName: 'Route' },
      { title: 'Mall-Wide Marketing & Engagement', description: 'Build a powerful marketing database of your shoppers. Send mall-wide promotions, event notifications, and targeted offers.', iconName: 'Megaphone' },
      { title: 'Support Tenant Success & Drive Revenue', description: 'Provide tenants with valuable footfall data and create new revenue by offering sponsored WiFi or premium advertising.', iconName: 'CircleDollarSign' },
    ],
    cta: 'Build a Smarter Mall',
    image: '/images/industries/malls-hero.jpg',
    imageHint: 'shopping mall heatmap'
  },
  {
    id: 'stadiums',
    name: 'Stadiums & Arenas',
    iconName: 'Drama',
    title: 'Powering the Ultimate Fan Experience',
    description: 'We specialize in the complex challenge of high-density connectivity, building robust digital platforms that handle immense demands while creating new opportunities for fan engagement and commerce.',
    features: [
      { title: 'Extreme High-Density WiFi', description: 'Carrier-grade networks engineered to provide reliable, high-speed connectivity to tens of thousands of fans simultaneously.', iconName: 'Wifi' },
      { title: 'Enhanced Concessions & Commerce', description: 'Enable mobile ordering, in-seat delivery, and cashless payments to reduce queues and increase per-capita spend.', iconName: 'ShoppingCart' },
      { title: 'Interactive Fan Engagement', description: 'Power second-screen experiences, live polls, fan cams, and loyalty programs that keep your audience engaged.', iconName: 'UsersIcon' },
    ],
    cta: 'Power Your Venue',
    image: '/images/industries/stadiums-hero.jpg',
    imageHint: 'stadium fan engagement'
  },
  {
    id: 'towns-cities',
    name: 'Towns & Cities',
    iconName: 'MapPin',
    title: 'Building the Connected Community of Tomorrow',
    description: 'Deploy and manage large-scale public WiFi networks that provide equitable access, support local businesses, and generate data for smarter, more efficient urban planning and public services.',
    features: [
      { title: 'Public WiFi & Digital Inclusion', description: 'Provide equitable, secure, and filtered internet access in public spaces like parks, libraries, and town squares.', iconName: 'Wifi' },
      { title: 'Support for Local Businesses', description: 'Empower local businesses by providing them with access to footfall data and co-operative marketing opportunities.', iconName: 'Store' },
      { title: 'Data-Driven Public Services', description: 'Leverage anonymized location analytics to understand citizen flow, optimize public transport, and improve urban planning.', iconName: 'BarChart3' },
    ],
    cta: 'Build a Smarter City',
    image: '/images/industries/cities-hero.jpg',
    imageHint: 'smart city connectivity'
  },
];
