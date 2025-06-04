
import { Home, Zap, Briefcase, MessageSquare, Network, HelpCircle, TrendingUp, Server as ServerIcon, Plane, HeartPulse, GraduationCap, Copy, Sparkles, Info, Building, ShoppingCart, Utensils, Settings, Wifi, Send, Tv2, Library, Handshake, Ticket, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type NavLinkWithSubLinks = NavLink & {
  subLinks?: NavLink[];
  basePath?: string; // For active state checking if parent href is a general path
};

// AI Gateway sub-links, will be used on the /ai-gateway page, not in main nav dropdown.
export const AI_GATEWAY_SUB_LINKS: NavLink[] = [
  { href: '/ai-gateway/what-it-is', label: 'What is the AI Gateway?', icon: HelpCircle },
  { href: '/ai-gateway/benefits', label: 'Benefits', icon: TrendingUp },
  { href: '/ai-gateway/technology', label: 'The Technology', icon: ServerIcon },
];

export const MAIN_NAV_LINKS: NavLinkWithSubLinks[] = [
  { href: '/', label: 'Home', icon: Home },
  {
    label: 'Solutions',
    icon: Briefcase,
    href: '/solutions', // Main landing page for solutions
    basePath: '/solutions',
    subLinks: [
      { href: '/ai-gateway', label: 'AI Gateway', icon: Network }, // Links to the AI Gateway hub page
      { href: '/solutions/intelligent-wifi', label: 'Intelligent Wi-Fi & Analytics', icon: Wifi },
      { href: '/solutions/automated-communication', label: 'Automated Communication', icon: Send },
      { href: '/solutions/premium-content', label: 'Premium Content', icon: Tv2 },
    ]
  },
  {
    label: 'Industries',
    icon: Zap, // Or Building2
    href: '/industries', // Main landing page for industries
    basePath: '/industries',
    subLinks: [
      { href: '/industries/hospitality', label: 'Hospitality', icon: Utensils },
      { href: '/industries/retail', label: 'Retail', icon: ShoppingCart },
      { href: '/industries/airports', label: 'Airports', icon: Plane },
      { href: '/industries/healthcare', label: 'Healthcare', icon: HeartPulse },
      { href: '/industries/education', label: 'Education', icon: GraduationCap },
      { href: '/industries/franchise-networks', label: 'Franchise Networks', icon: Copy },
      { href: '/industries/real-estate', label: 'Real Estate', icon: Building },
      { href: '/industries/stadiums', label: 'Stadiums & Venues', icon: Ticket },
      { href: '/industries/custom', label: 'Custom Solutions', icon: Settings },
    ]
  },
  { href: '/why-flow-networks', label: 'Why Flow Networks?', icon: Sparkles },
  { href: '/resources', label: 'Resources', icon: Library },
  { href: '/partners', label: 'Partners', icon: Handshake },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/contact', label: 'Contact Us', icon: MessageSquare },
];

export type Industry = {
  id: string;
  name: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: { title: string; description: string; icon: LucideIcon }[];
  cta: string;
  image: string;
  imageHint: string;
};

export const INDUSTRIES_DATA: Industry[] = [
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: Utensils,
    title: 'AI Solutions for Hospitality',
    description: 'Enhance guest experiences, streamline operations, and boost revenue with AI-powered solutions for hotels, restaurants, and travel services.',
    features: [
      { title: 'AI Concierge Chatbot', description: '24/7 guest assistance, room service, and local recommendations.', icon: Users }, // Changed from Bot
      { title: 'Personalized Guest Offers', description: 'AI-driven recommendations for upselling and cross-selling.', icon: Zap },
      { title: 'Staff Workflow Automation', description: 'Automate check-ins, housekeeping schedules, and inventory management.', icon: Settings },
    ],
    cta: 'Revolutionize Your Guest Experience',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'hotel lobby luxury',
    // href: '/industries/hospitality' // No longer needed here, path derived from id
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingCart,
    title: 'AI Solutions for Retail & E-commerce',
    description: 'Transform your retail business with AI agents that personalize shopping, optimize inventory, and improve customer service.',
    features: [
      { title: 'Personalized Shopping Assistants', description: 'Guide customers with product recommendations and style advice.', icon: Users },
      { title: 'Inventory Optimization', description: 'AI-powered demand forecasting and stock management.', icon: Zap },
      { title: 'Automated Customer Support', description: 'Handle queries, returns, and order tracking efficiently.', icon: Settings },
    ],
    cta: 'Boost Your Retail Sales',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'retail store modern',
  },
  {
    id: 'airports',
    name: 'Airports',
    icon: Plane,
    title: 'AI Solutions for Airports',
    description: 'Optimize airport operations, enhance passenger experiences, and improve efficiency with intelligent AI solutions.',
    features: [
      { title: 'AI Flight Information', description: 'Real-time flight updates, gate changes, and boarding information.', icon: Users },
      { title: 'Intelligent Wayfinding', description: 'Guide passengers to gates, lounges, and amenities seamlessly.', icon: Zap },
      { title: 'Passenger Service Automation', description: 'Automate responses to common queries and provide assistance.', icon: Settings },
    ],
    cta: 'Elevate Airport Operations',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'airport terminal modern',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HeartPulse,
    title: 'AI Solutions for Healthcare',
    description: 'Improve patient/visitor experiences and streamline administrative tasks in clinics and hospitals.',
    features: [
      { title: 'AI Patient/Visitor Assistance', description: 'Appointment check-ins, wayfinding, and FAQ responses.', icon: Users },
      { title: 'Secure Information Access', description: 'Provide access to relevant information while maintaining privacy.', icon: Zap },
      { title: 'Admin Task Automation', description: 'Streamline scheduling and patient communication.', icon: Settings },
    ],
    cta: 'Enhance Patient Care with AI',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'hospital interior clean',
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    title: 'AI Solutions for Education',
    description: 'Support students and staff on campus with AI-powered tools for learning, services, and navigation.',
    features: [
      { title: 'AI Campus Assistant', description: 'Help with course information, campus services, and event details.', icon: Users },
      { title: 'Personalized Learning Support', description: 'Offer AI tutoring or resource recommendations.', icon: Zap },
      { title: 'Streamlined Admin Queries', description: 'Automate responses to common administrative questions.', icon: Settings },
    ],
    cta: 'Transform Campus Experiences',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'university campus modern',
  },
  {
    id: 'franchise-networks',
    name: 'Franchise Networks',
    icon: Copy,
    title: 'AI Solutions for Franchise Networks',
    description: 'Ensure brand consistency and operational efficiency across distributed franchise locations with centralized AI.',
    features: [
      { title: 'Standardized AI Services', description: 'Deploy consistent AI tools for ordering, support, or training locally.', icon: Users },
      { title: 'Central Management, Local Access', description: 'Manage AI agents centrally while providing presence-verified local access.', icon: Zap },
      { title: 'Operational Consistency', description: 'Drive uniform customer experiences and operational procedures.', icon: Settings },
    ],
    cta: 'Standardize Franchise Excellence',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'multiple store fronts',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Building,
    title: 'AI Solutions for Real Estate',
    description: 'Empower your real estate business with AI agents for lead generation, property matching, and client communication.',
    features: [
      { title: 'AI Lead Qualification', description: 'Automatically qualify leads and schedule viewings.', icon: Users },
      { title: 'Smart Property Matching', description: 'Connect buyers with their ideal properties using AI algorithms.', icon: Zap },
      { title: 'Virtual Property Tours', description: 'AI-guided virtual tours and Q&A for remote clients.', icon: Settings },
    ],
    cta: 'Close More Deals with AI',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'modern house exterior',
  },
  {
    id: 'stadiums',
    name: 'Stadiums & Venues',
    icon: Ticket,
    title: 'AI Solutions for Stadiums & Large Venues',
    description: 'Enhance fan experiences, manage crowds, and optimize operations in stadiums and large event venues with AI.',
    features: [
      { title: 'AI Event Guide', description: 'Provide real-time event schedules, wayfinding to seats/amenities, and F&B ordering.', icon: Users },
      { title: 'Crowd & Operations Management', description: 'AI insights for crowd flow, security monitoring, and staff allocation.', icon: Zap },
      { title: 'Personalized Fan Engagement', description: 'Deliver targeted offers, replays, and interactive content to fans.', icon: Settings },
    ],
    cta: 'Supercharge Your Venue Experience',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'stadium crowd event',
  },
   {
    id: 'custom',
    name: 'Custom Solutions',
    icon: Settings,
    title: 'Tailored AI Agent Solutions',
    description: 'Don\'t see your industry? We build custom AI agents designed specifically for your unique business challenges and goals.',
    features: [
      { title: 'Bespoke AI Development', description: 'Agents designed from the ground up to meet your specific needs.', icon: Users },
      { title: 'Seamless Integration', description: 'Integrate custom AI agents with your existing software and workflows.', icon: Zap },
      { title: 'Ongoing Support & Optimization', description: 'Continuous improvement and support for your custom AI solutions.', icon: Settings },
    ],
    cta: 'Build Your Custom AI Agent',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'abstract technology gears',
  },
];
