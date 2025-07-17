
import type { Timestamp } from 'firebase/firestore';

/**
 * @fileOverview Defines the TypeScript types for all Firestore collections.
 * This ensures type safety and provides a single source of truth for our data models.
 */

// =================================================================
// users Collection
// =================================================================
export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: 'sales_agent' | 'admin';
}

// =================================================================
// clients Collection
// =================================================================
export interface Client {
  id?: string; // Firestore document ID
  name: string;
  industry: 'Hospitality' | 'Retail' | 'Education' | 'Events' | 'Corporate' | 'Other';
  contactPerson: string;
  contactEmail: string;
  notes: string;
}

// =================================================================
// venueOS_modules Collection
// =================================================================
export interface VenueOSModule {
  id?: string; // Firestore document ID
  name: string;
  description: string;
  pricingModel: 'subscription' | 'one-time' | 'per_user' | 'usage-based';
  basePrice: number;
  tags: string[]; // e.g., ['wifi', 'analytics', 'monetization']
}

// =================================================================
// content_library Collection
// =================================================================
export interface ContentBlock {
  id?: string; // Firestore document ID
  type: 'case_study' | 'team_bio' | 'legal_clause' | 'executive_summary' | 'product_description';
  title: string;
  content: string; // Markdown-enabled text
  tags: string[]; // e.g., ['hospitality', 'large_venue', 'GDPR']
}

// =================================================================
// proposals Collection
// =================================================================

/**
 * Represents a single section within a proposal document.
 */
export interface ProposalSection {
  title: string;
  content: string; // Can be markdown, HTML, or plain text
  type: 'manual' | 'ai_generated' | 'template';
}

/**
 * Represents the main proposal document.
 */
export interface Proposal {
  id?: string; // Firestore document ID
  title: string;
  status: 'draft' | 'sent' | 'viewed' | 'accepted' | 'signed' | 'declined';
  salesAgentId: string; // Reference to a user's uid in the `users` collection
  clientId: string; // Reference to a document ID in the `clients` collection
  version: number;
  totalPrice: number;
  createdAt: Timestamp;
  lastModified: Timestamp;
  sections: ProposalSection[];
  selectedModules: VenueOSModule[]; // A snapshot of the selected modules at the time of proposal creation

  // Engagement and lifecycle tracking data
  engagementData: {
    views: number;
    timeOnPage: number; // in seconds
    lastViewed: Timestamp | null;
  };
  signatureData: {
    status: 'pending' | 'signed';
    signedAt: Timestamp | null;
    auditTrailUrl: string | null;
  };
  paymentData: {
    status: 'pending' | 'paid';
    paymentLink: string | null;
    paidAt: Timestamp | null;
  };

  // Optional AI-generated content
  meetingTranscript?: string;
}
