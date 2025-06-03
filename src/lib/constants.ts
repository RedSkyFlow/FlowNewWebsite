import { Home, Zap, Users, Briefcase, MessageSquare, Bot, Building, ShoppingCart, Utensils, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type NavLinkWithSubLinks = NavLink & {
  subLinks?: NavLink[];
};

export const MAIN_NAV_LINKS: NavLinkWithSubLinks[] = [
  { href: '/', label: 'Home', icon: Home },
  {
    href: '/ai-agents',
    label: 'AI Agents',
    icon: Zap,
    subLinks: [
      { href: '/ai-agents/hospitality', label: 'Hospitality', icon: Utensils },
      { href: '/ai-agents/retail', label: 'Retail', icon: ShoppingCart },
      { href: '/ai-agents/real-estate', label: 'Real Estate', icon: Building },
      { href: '/ai-agents/custom', label: 'Custom Solutions', icon: Settings },
    ],
  },
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
    title: 'AI Agents for Hospitality',
    description: 'Enhance guest experiences, streamline operations, and boost revenue with AI-powered solutions for hotels, restaurants, and travel services.',
    features: [
      { title: 'AI Concierge Chatbot', description: '24/7 guest assistance, room service, and local recommendations.', icon: Bot },
      { title: 'Personalized Guest Offers', description: 'AI-driven recommendations for upselling and cross-selling.', icon: Zap },
      { title: 'Staff Workflow Automation', description: 'Automate check-ins, housekeeping schedules, and inventory management.', icon: Settings },
    ],
    cta: 'Revolutionize Your Guest Experience',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'hotel lobby luxury',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingCart,
    title: 'AI Agents for Retail & E-commerce',
    description: 'Transform your retail business with AI agents that personalize shopping, optimize inventory, and improve customer service.',
    features: [
      { title: 'Personalized Shopping Assistants', description: 'Guide customers with product recommendations and style advice.', icon: Bot },
      { title: 'Inventory Optimization', description: 'AI-powered demand forecasting and stock management.', icon: Zap },
      { title: 'Automated Customer Support', description: 'Handle queries, returns, and order tracking efficiently.', icon: Settings },
    ],
    cta: 'Boost Your Retail Sales',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'retail store modern',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    icon: Building,
    title: 'AI Agents for Real Estate',
    description: 'Empower your real estate business with AI agents for lead generation, property matching, and client communication.',
    features: [
      { title: 'AI Lead Qualification', description: 'Automatically qualify leads and schedule viewings.', icon: Bot },
      { title: 'Smart Property Matching', description: 'Connect buyers with their ideal properties using AI algorithms.', icon: Zap },
      { title: 'Virtual Property Tours', description: 'AI-guided virtual tours and Q&A for remote clients.', icon: Settings },
    ],
    cta: 'Close More Deals with AI',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'modern house exterior',
  },
   {
    id: 'custom',
    name: 'Custom Solutions',
    icon: Settings,
    title: 'Tailored AI Agent Solutions',
    description: 'Don\'t see your industry? We build custom AI agents designed specifically for your unique business challenges and goals.',
    features: [
      { title: 'Bespoke AI Development', description: 'Agents designed from the ground up to meet your specific needs.', icon: Bot },
      { title: 'Seamless Integration', description: 'Integrate custom AI agents with your existing software and workflows.', icon: Zap },
      { title: 'Ongoing Support & Optimization', description: 'Continuous improvement and support for your custom AI solutions.', icon: Settings },
    ],
    cta: 'Build Your Custom AI Agent',
    image: 'https://placehold.co/1200x600.png',
    imageHint: 'abstract technology gears',
  },
];
