
'use client'; // Required for useEffect and useState

import { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import { useState, useEffect } from 'react';

// export const metadata: Metadata = { // Metadata should be static or generated via generateMetadata
//   title: 'Privacy Policy | FlowAI Gateway',
//   description: 'Read the Privacy Policy for FlowAI Gateway.',
// };
// For dynamic titles based on date, metadata generation needs to be handled differently if server-side date is okay
// For now, keeping it simple and focusing on fixing client-side hydration for displayed date.

export default function PrivacyPolicyPage() {
  const [lastUpdatedDate, setLastUpdatedDate] = useState('');

  useEffect(() => {
    setLastUpdatedDate(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading 
        text="Privacy Policy" 
        as="h1" 
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-12 !font-headline"
      />
      <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
        <p><strong>Last Updated: {lastUpdatedDate || 'Loading...'}</strong></p>
        
        <h2 className="font-headline text-foreground">1. Introduction</h2>
        <p>Welcome to FlowAI Gateway ("we", "our", "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@flowaigateway.com.</p>

        <h2 className="font-headline text-foreground">2. Information We Collect</h2>
        <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
        <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following: Name, Email Address, Company Name, Phone Number, and any other information you choose to provide.</p>

        <h2 className="font-headline text-foreground">3. How We Use Your Information</h2>
        <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
        <ul>
          <li>To send administrative information to you.</li>
          <li>To respond to your inquiries and solve any potential issues you might have with the use of our Services.</li>
          <li>To send you marketing and promotional communications.</li>
          <li>For other business purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and to evaluate and improve our Services, products, marketing, and your experience.</li>
        </ul>

        <h2 className="font-headline text-foreground">4. Will Your Information Be Shared With Anyone?</h2>
        <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>

        <h2 className="font-headline text-foreground">5. How Long Do We Keep Your Information?</h2>
        <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>
        
        <h2 className="font-headline text-foreground">6. How Do We Keep Your Information Safe?</h2>
        <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

        <h2 className="font-headline text-foreground">7. Your Privacy Rights</h2>
        <p>In some regions (like the European Economic Area and the UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.</p>

        <h2 className="font-headline text-foreground">8. Updates to This Notice</h2>
        <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

        <h2 className="font-headline text-foreground">9. How Can You Contact Us About This Notice?</h2>
        <p>If you have questions or comments about this notice, you may email us at privacy@flowaigateway.com or by post to:</p>
        <p>FlowAI Gateway<br />
        Attn: Privacy Officer<br />
        123 AI Avenue<br />
        Innovation City, TX 75001<br />
        United States</p>
      </div>
    </div>
  );
}
