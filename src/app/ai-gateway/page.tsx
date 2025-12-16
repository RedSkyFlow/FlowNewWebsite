import type { Metadata } from 'next';
import AIGatewayClientPage from './client-page';

export const metadata: Metadata = {
  title: 'The AI Gateway | Flow Networks',
  description: 'Explore the Flow Networks AI Gateway - transforming venues with intelligent, presence-verified services through secure WiFi authentication.',
};

export default function AIGatewayPage() {
  return <AIGatewayClientPage />;
}
