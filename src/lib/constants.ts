
import {
  Home, Briefcase, Cpu, Building2, Info, Library, Mail, Network, Settings2, Cloud, Shield, Layers, Server as ServerIcon, Building, Users, Newspaper, Edit3, FileText, BookOpen, Wifi, Globe, type LucideIcon,
  Map, Monitor, MailCheck, Handshake, DollarSign, Zap, Link as LinkIcon, HardDrive, Lightbulb, Phone, LifeBuoy, Book, UserCheck, BarChart, ShoppingCart, Plane, GraduationCap, Gavel, Factory,
  LayoutGrid, Calendar, Megaphone, Lock, Activity, RefreshCw, MessageSquare, CreditCard, Box, Code, GitFork, Target, TrendingUp, Compass, HeartHandshake, Puzzle, Rocket,
  Award, FlaskConical, CircleDollarSign, Fingerprint, Search, Bell, Clock, Eye, LightbulbOff, Key, DatabaseZap, ShieldCheck, HelpCircle, Send, Tv2, Tag, Sparkles, ClipboardList, CalendarCheck, Headset, CalendarDays, MapPin,
  Ticket, Landmark, Cookie, Package, ShoppingBag, Brain, BadgeCheck, Link2, Bot, PlugZap, AreaChart, FerrisWheel, Hotel, ConciergeBell, ScrollText, Store, Bus, Train, Wrench, FileCheck, ExternalLink, UserCog, PackageSearch, View, HandCoins, Presentation, Users2, BuildingIcon, Route, Drama, School, TrainFront, UsersRound, UserSquare, FolderGit2, FileBadge, UserCircle2, BookUser, MessageSquareText, ShieldAlert, BadgeInfo, FileQuestion, BookCopy, Rss, Share2, MailOpen, Gift // Added Gift here
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
  basePath?: string; // Used for highlighting parent nav item
};

// MAIN_NAV_LINKS reflecting the new sitemap
export const MAIN_NAV_LINKS: NavLinkWithSubLinks[] = [
  { href: '/', label: 'Home', icon: Home },
  {
    label: 'Products',
    icon: Package,
    href: '/products', // Main products overview page
    basePath: '/products',
    subLinks: [
      { href: '/products/guest-wifi/connect', label: 'Guest WiFi - Connect', icon: Wifi, shortDescription: "Essential guest WiFi access." },
      { href: '/products/guest-wifi/capture', label: 'Guest WiFi - Capture', icon: PackageSearch, shortDescription: "Capture user data through WiFi." },
      { href: '/products/guest-wifi/engage', label: 'Guest WiFi - Engage', icon: Megaphone, shortDescription: "Engage users with WiFi marketing." },
      { href: '/products/guest-wifi/add-ons', label: 'Guest WiFi - Add-Ons', icon: Layers, shortDescription: "Enhance your guest WiFi." },
      { href: '/products/guest-wifi/plans', label: 'Guest WiFi - View All Plans', icon: View, shortDescription: "Compare all Guest WiFi plans." },
      { href: '/products/intelligent-venue-wifi', label: 'Intelligent Venue WiFi (Purple)', icon: Brain, shortDescription: "Advanced WiFi by Purple." },
      { href: '/products/intelligent-venue-wifi/plans/connect', label: 'Purple WiFi - Connect Plan', icon: Wifi, shortDescription: "Purple's foundational WiFi plan." },
      { href: '/products/intelligent-venue-wifi/plans/capture', label: 'Purple WiFi - Capture Plan', icon: PackageSearch, shortDescription: "Purple's data capture WiFi plan." },
      { href: '/products/intelligent-venue-wifi/plans/engage', label: 'Purple WiFi - Engage Plan', icon: Megaphone, shortDescription: "Purple's engagement-focused WiFi plan." },
      { href: '/products/intelligent-venue-wifi/add-ons/paid-wifi', label: 'Purple Add-On: Paid WiFi', icon: HandCoins, shortDescription: "Monetize WiFi access." },
      { href: '/products/intelligent-venue-wifi/add-ons/surveys', label: 'Purple Add-On: Surveys', icon: ClipboardList, shortDescription: "Gather feedback via WiFi." },
      { href: '/products/intelligent-venue-wifi/add-ons/shield', label: 'Purple Add-On: Shield', icon: Shield, shortDescription: "Enhanced WiFi security." },
      { href: '/products/intelligent-venue-wifi/add-ons/securepass', label: 'Purple Add-On: SecurePass', icon: Lock, shortDescription: "Secure network access." },
      { href: '/products/intelligent-venue-wifi/add-ons/professional-services', label: 'Purple Add-On: Pro Services', icon: Settings2, shortDescription: "Expert support for Purple." },
      { href: '/products/intelligent-venue-wifi/plans', label: 'Purple WiFi - Compare Plans', icon: View, shortDescription: "All Purple WiFi plans." },
      { href: '/products/all-axxess-event-management', label: 'All Axxess Events', icon: Ticket, shortDescription: "Event management platform." },
      { href: '/products/everlytic-messaging', label: 'Everlytic Messaging', icon: Send, shortDescription: "Bulk messaging automation." },
      { href: '/products/cnntap-advertising', label: 'CNNTAP Advertising', icon: Tv2, shortDescription: "CNN travel advertising." },
      { href: '/products/friendly-wifi-certification', label: 'Friendly WiFi Certification', icon: ShieldCheck, shortDescription: "Safe WiFi for families." },
      { href: '/products/internet-connectivity', label: 'Internet Connectivity', icon: Globe, shortDescription: "Reliable internet solutions." },
    ]
  },
  {
    label: 'Solutions',
    icon: Lightbulb,
    href: '/solutions',
    basePath: '/solutions',
    subLinks: [
      { href: '/solutions/flow-ai-gateway', label: 'Flow AI Gateway (Vision)', icon: Bot, shortDescription: "Future-focused AI orchestration.", description: "Our vision for the Flow AI Gateway: a future-ready platform to orchestrate bespoke AI agents for hyper-personalized services and operational excellence. Explore our roadmap for this transformative technology." },
      { href: '/solutions/ai-integrations', label: 'AI Integrations', icon: Puzzle, shortDescription: "Connecting AI to your systems." },
      { href: '/solutions/wifi-monetisation', label: 'WiFi Monetisation', icon: DollarSign, shortDescription: "Generate revenue from WiFi." },
      { href: '/solutions/sponsored-wifi', label: 'Sponsored WiFi', icon: Gift, shortDescription: "Offer WiFi via sponsorships." },
      { href: '/solutions/wifi-marketing', label: 'WiFi Marketing', icon: Megaphone, shortDescription: "Marketing through your WiFi." },
      { href: '/solutions/event-wifi', label: 'Event WiFi', icon: CalendarDays, shortDescription: "Connectivity for events." },
      { href: '/solutions/smb-wifi', label: 'SMB WiFi', icon: Store, shortDescription: "WiFi for small businesses." },
      { href: '/solutions/3rd-party-integrations', label: '3rd Party Integrations', icon: PlugZap, shortDescription: "Connect with other services." },
      { href: '/solutions/digital-marketing', label: 'Digital Marketing', icon: AreaChart, shortDescription: "Broader digital marketing services." },
    ]
  },
  {
    label: 'Industries',
    icon: Building2,
    href: '/industries',
    basePath: '/industries',
    subLinks: [
      { href: '/industries/airports', label: 'Airports', icon: Plane },
      { href: '/industries/attractions', label: 'Attractions', icon: FerrisWheel },
      { href: '/industries/healthcare', label: 'Healthcare', icon: HeartHandshake },
      { href: '/industries/hotels', label: 'Hotels', icon: Hotel },
      { href: '/industries/retail', label: 'Retail', icon: ShoppingCart },
      { href: '/industries/stadiums', label: 'Stadiums', icon: Landmark }, // Changed from Stadium
      { href: '/industries/offices', label: 'Offices', icon: Briefcase },
      { href: '/industries/schools-college-campuses', label: 'Schools & Campuses', icon: School },
    ]
  },
  {
    label: 'Partners',
    icon: Handshake,
    href: '/partners',
    basePath: '/partners',
    subLinks: [
      { href: '/partners/technology#purple', label: 'Purple WiFi', icon: Wifi, shortDescription: "Intelligent WiFi partner." },
      { href: '/partners/technology#everlytic', label: 'Everlytic', icon: Send, shortDescription: "Messaging automation partner." },
      { href: '/partners/technology#cnninternational', label: 'CNN International', icon: Tv2, shortDescription: "Content and advertising partner." },
      { href: '/partners/technology#allixs', label: 'All Axxess', icon: Ticket, shortDescription: "Event management partner." },
      { href: '/partners/technology#coolideas', label: 'Coolideas', icon: Cloud, shortDescription: "Connectivity partner." },
      { href: '/partners/technology#axxess', label: 'Axxess', icon: Network, shortDescription: "ISP and connectivity partner." },
      { href: '/partners/technology#miro', label: 'Miro', icon: Settings2, shortDescription: "Hardware distribution partner." },
      { href: '/partners/technology#friendlywifi', label: 'Friendly WiFi', icon: ShieldCheck, shortDescription: "Family-safe WiFi certification." },
      { href: '/partners/resellers', label: 'Resellers', icon: Users2, shortDescription: "Join our reseller network." },
      { href: '/partners/agents', label: 'Agents', icon: UserSquare, shortDescription: "Become a Flow Networks agent." },
      { href: '/partners/affiliates', label: 'Affiliates', icon: Share2, shortDescription: "Partner through affiliation." },
    ]
  },
  {
    label: 'Resources',
    icon: Library,
    href: '/resources',
    basePath: '/resources',
    subLinks: [
      { href: '/resources/case-studies', label: 'Case Studies', icon: BookOpen, shortDescription: "Real-world success stories." },
      { href: '/resources/guides-articles', label: 'Guides & Articles', icon: FileText, shortDescription: "In-depth insights and tips." },
      { href: '/resources/tools', label: 'Tools', icon: Wrench, shortDescription: "Helpful resources and utilities." },
    ]
  },
  {
    label: 'Company',
    icon: Info,
    href: '/about',
    basePath: '/company',
    subLinks: [
      { href: '/about', label: 'About Us', icon: Users, shortDescription: "Learn about Flow Networks." },
      { href: '/legal', label: 'Legal', icon: Gavel, shortDescription: "Legal information." },
      { href: '/privacy-policy', label: 'Privacy Policy', icon: Shield, shortDescription: "Our commitment to your privacy." },
      { href: '/terms-of-service', label: 'Terms of Use', icon: FileBadge, shortDescription: "Terms for using our services." },
      { href: '/my-data', label: 'My Data', icon: DatabaseZap, shortDescription: "Manage your data preferences." },
      { href: '/cookie-policy', label: 'Cookie Policy', icon: Cookie, shortDescription: "How we use cookies." },
      { href: '/company/integrations', label: 'Integrations Philosophy', icon: LinkIcon, shortDescription: "Our approach to integrations." },
      { href: '/blog', label: 'Blogs', icon: Rss, shortDescription: "Latest news and articles." },
      { href: '/standard-sla', label: 'Standard SLA', icon: FileCheck, shortDescription: "Our service level agreement." },
    ]
  },
  {
    label: 'Links',
    icon: HelpCircle,
    href: '/contact',
    basePath: '/support',
    subLinks: [
      { href: 'https://support.purplewifi.com', label: 'Purple Support', icon: Headset, shortDescription: "External Purple WiFi support." },
      { href: 'https://wa.me/yourwhatsappnumber', label: 'WhatsApp Support', icon: MessageSquareText, shortDescription: "Contact us on WhatsApp." },
      { href: '/contact', label: 'Contact Us', icon: MailOpen, shortDescription: "Get in touch with our team." },
      { href: 'https://purpleportal.com', label: 'Purple Portal', icon: ExternalLink, shortDescription: "Access the Purple WiFi portal." },
      { href: '/my-data-portal', label: 'My Data Portal', icon: UserCog, shortDescription: "Manage your personal data." },
      { href: '/partner-portal', label: 'Partner Portal', icon: UsersRound, shortDescription: "Portal for our partners." },
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
    id: 'attractions',
    name: 'Attractions',
    icon: FerrisWheel,
    title: 'Engaging Visitor Experiences at Tourist Attractions',
    description: 'Elevate the guest experience at theme parks, zoos, and entertainment venues with reliable WiFi, interactive digital content, and location-based information. Collect data for future personalized promotions.',
    features: [
      { title: 'Seamless Guest WiFi', description: 'Provide easy-to-access, high-performance WiFi to enhance visitor engagement and social sharing.', icon: Wifi },
      { title: 'Interactive Digital Maps & Guides', description: 'Utilize digital signage and mobile experiences for wayfinding, exhibit information, and event schedules.', icon: MapPin },
      { title: 'Visitor Behavior Insights', description: 'Analyze foot traffic and popular zones to optimize layouts, staffing, and promotional efforts.', icon: Users },
    ],
    cta: 'Captivate Your Visitors',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'theme park interactive map',
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
    id: 'hotels',
    name: 'Hotels',
    icon: Hotel,
    title: 'Superior Guest WiFi & Personalized Services for Hotels',
    description: 'Offer exceptional, high-speed WiFi throughout your property, from rooms to common areas. Utilize insights for personalized guest communication and service offers, with potential for future AI-driven concierge services.',
    features: [
      { title: 'High-Performance Guest WiFi', description: 'Reliable, fast internet access with easy onboarding and branded portals for an enhanced stay.', icon: Wifi },
      { title: 'Targeted Guest Communication', description: 'Send personalized welcome messages, service offers, and local recommendations via email or SMS.', icon: MailCheck },
      { title: 'Conference & Event Connectivity', description: 'Provide robust WiFi solutions for meetings, conferences, and events hosted at your hotel.', icon: Presentation },
    ],
    cta: 'Elevate Guest Stays',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'hotel room smart wifi',
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
    id: 'museums',
    name: 'Museums',
    icon: Landmark,
    title: 'Interactive & Informative Experiences for Museums',
    description: 'Enhance cultural visits with reliable guest WiFi for interactive exhibit guides, location-based content delivery, and visitor analytics. Lay the groundwork for future AI-powered exhibit interpretation.',
    features: [
      { title: 'Visitor WiFi & Engagement Analytics', description: 'Provide connectivity for app-based guides and understand visitor paths and exhibit popularity.', icon: Wifi },
      { title: 'Digital Exhibit Information', description: 'Use digital signage and mobile integration for rich multimedia content and detailed exhibit information.', icon: Monitor },
      { title: 'Location-Aware Content Delivery', description: 'Offer contextual information or augmented reality experiences based on visitor location within the museum.', icon: Map },
    ],
    cta: 'Enrich Cultural Journeys',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'museum exhibit interactive',
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
    id: 'shopping-malls',
    name: 'Shopping Malls',
    icon: Store,
    title: 'Seamless Connectivity & Mall Intelligence for Shopping Centers',
    description: 'Provide mall-wide WiFi, support tenant services, offer digital wayfinding, and gather insights into shopper behavior across the entire complex. Prepare for future AI-enhanced mall management tools.',
    features: [
      { title: 'Mall-Wide Guest WiFi', description: 'Offer consistent, high-performance internet access throughout the shopping mall for visitors and tenants.', icon: Wifi },
      { title: 'Digital Wayfinding & Tenant Directory', description: 'Implement interactive kiosks and digital signage for easy navigation and store information.', icon: Compass },
      { title: 'Shopper Traffic & Behavior Analysis', description: 'Analyze overall mall traffic, popular zones, and visit durations to optimize tenant mix and marketing efforts.', icon: BarChart },
    ],
    cta: 'Elevate the Mall Experience',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'shopping mall interior wifi',
  },
  {
    id: 'stadiums',
    name: 'Stadiums',
    icon: Landmark, // Changed from Stadium
    title: 'Connected Fan Experiences for Stadiums & Arenas',
    description: 'Deliver high-density WiFi for large crowds, power digital scoreboards and advertising, and engage fans with targeted mobile interactions. Our infrastructure supports future AI-driven fan services.',
    features: [
      { title: 'High-Density Fan WiFi', description: 'Robust connectivity for tens of thousands of concurrent users, supporting streaming, social media, and venue apps.', icon: Users },
      { title: 'Digital Scoreboards & Advertising', description: 'Power large-screen displays for live game feeds, replays, sponsor messages, and fan engagement content.', icon: Tv2 },
      { title: 'Mobile Ticketing & Concessions Integration', description: 'Ensure reliable network support for mobile entry, in-seat ordering, and cashless payments.', icon: Ticket },
    ],
    cta: 'Amplify Fan Engagement',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'stadium sports fans wifi',
  },
  {
    id: 'offices',
    name: 'Offices',
    icon: Briefcase,
    title: 'Secure & Productive Connectivity for Modern Workplaces',
    description: 'Equip your corporate environment with reliable, secure WiFi, tools for internal communication via digital displays, and insights into space utilization. Future-proof your office with AI-ready infrastructure.',
    features: [
      { title: 'Secure Corporate & Guest Networks', description: 'Fast, segmented, and secure internet access for employees, visitors, and IoT devices with centralized management.', icon: Lock },
      { title: 'Digital Internal Communications', description: 'Use digital signage for company announcements, meeting schedules, and real-time updates across the office.', icon: Newspaper },
      { title: 'Workspace Utilization Analytics', description: 'Understand how office spaces, meeting rooms, and amenities are used to optimize layout and resource allocation.', icon: Search },
    ],
    cta: 'Build an Intelligent Workplace',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'modern office workspace',
  },
  {
    id: 'schools-college-campuses',
    name: 'Schools & College Campuses',
    icon: School,
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
  {
    id: 'towns-cities',
    name: 'Towns & Cities',
    icon: BuildingIcon,
    title: 'Smart City Connectivity & Public Services',
    description: 'Offer secure public WiFi in municipal buildings, parks, and public spaces. Utilize digital tools for citizen communication and information dissemination. Build a data foundation for future AI-driven urban planning.',
    features: [
      { title: 'Public WiFi Hotspots', description: 'Provide controlled and secure internet access for citizens and visitors in designated public areas.', icon: Globe },
      { title: 'Digital Community Information Boards', description: 'Share public announcements, local events, service updates, and emergency alerts via outdoor/indoor digital signage.', icon: Info },
      { title: 'Usage Analytics for Service Optimization', description: 'Understand WiFi and digital service usage patterns to improve resource allocation and public service delivery.', icon: BarChart },
    ],
    cta: 'Connect Your Community',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'city park public wifi',
  },
  {
    id: 'public-transport',
    name: 'Public Transport',
    icon: TrainFront,
    title: 'Reliable Connectivity for Public Transportation',
    description: 'Provide WiFi on buses, trains, and at stations to enhance passenger experience. Offer real-time travel information and gather ridership data for service improvements, with an eye on AI-powered scheduling.',
    features: [
      { title: 'On-Board & Station WiFi', description: 'Offer seamless internet connectivity for passengers during their commute and while waiting at hubs.', icon: Wifi },
      { title: 'Real-Time Transit Information Displays', description: 'Power digital screens with live departure/arrival times, route maps, service alerts, and advertising.', icon: Clock },
      { title: 'Ridership & Network Performance Analytics', description: 'Gather data on passenger numbers, popular routes, and network usage to optimize transport services.', icon: TrendingUp },
    ],
    cta: 'Improve Commuter Journeys',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'bus interior passenger wifi',
  },
];


export const FOOTER_LINKS = {
  products: MAIN_NAV_LINKS.find(link => link.label === 'Products')?.subLinks?.filter(sl => !sl.label.includes('Add-On') && !sl.label.includes('Purple WiFi -') && !sl.label.includes('Guest WiFi -')).slice(0, 5) || [],
  solutions: MAIN_NAV_LINKS.find(link => link.label === 'Solutions')?.subLinks?.slice(0, 5) || [],
  industries: INDUSTRIES_DATA.slice(0, 5).map(ind => ({ href: `/industries/${ind.id}`, label: ind.name, icon: ind.icon })) || [],
  company: MAIN_NAV_LINKS.find(link => link.label === 'Company')?.subLinks?.filter(sl => ['About Us', 'Legal', 'Privacy Policy', 'Terms of Use', 'Blogs'].includes(sl.label)).slice(0,5) || [],
  resources: MAIN_NAV_LINKS.find(link => link.label === 'Resources')?.subLinks?.slice(0, 5) || [],
  support_contact: MAIN_NAV_LINKS.find(link => link.label === 'Links')?.subLinks?.filter(sl => ['Contact Us', 'Purple Support', 'Partner Portal'].includes(sl.label)).slice(0,5) || [],
};

// AI Gateway sub-pages are now part of Solutions. If these specific pages/links are still needed, they should be adjusted or confirmed.
// For now, this array is kept for reference but might be deprecated by the new MAIN_NAV_LINKS structure.
export const AI_GATEWAY_SUB_LINKS = [
  { href: '/ai-gateway/what-it-is', label: 'What is the AI Gateway?', icon: HelpCircle, description: 'Understand the core concepts of the AI Gateway.' },
  { href: '/ai-gateway/benefits', label: 'Benefits', icon: TrendingUp, description: 'Discover the advantages for venues and end-users.' },
  { href: '/ai-gateway/technology', label: 'Technology', icon: ServerIcon, description: 'Overview of the infrastructure and architecture.' },
];
