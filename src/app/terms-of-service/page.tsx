import { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';

export const metadata: Metadata = {
  title: 'Terms of Service | FlowAI Gateway',
  description: 'Read the Terms of Service for FlowAI Gateway.',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <AnimatedHeading 
        text="Terms of Service" 
        as="h1" 
        className="text-4xl font-bold text-center text-foreground sm:text-5xl mb-12 !font-headline"
      />
      <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

        <h2 className="font-headline text-foreground">1. Agreement to Terms</h2>
        <p>By accessing or using FlowAI Gateway (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Service.</p>

        <h2 className="font-headline text-foreground">2. Use of Service</h2>
        <p>FlowAI Gateway grants you a non-exclusive, non-transferable, revocable license to use the Service strictly in accordance with these Terms. You agree not to use the Service for any purpose that is unlawful or prohibited by these Terms.</p>
        <p>You may not: (a) modify, disassemble, decompile or reverse engineer the Service; (b) rent, lease, loan, resell, sublicense, distribute or otherwise transfer the Service to any third party; (c) make any copies of the Service; (d) remove, circumvent, disable, damage or otherwise interfere with security-related features of the Service.</p>

        <h2 className="font-headline text-foreground">3. User Accounts</h2>
        <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
        <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>

        <h2 className="font-headline text-foreground">4. Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of FlowAI Gateway and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>

        <h2 className="font-headline text-foreground">5. Termination</h2>
        <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
        <p>Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>

        <h2 className="font-headline text-foreground">6. Limitation of Liability</h2>
        <p>In no event shall FlowAI Gateway, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

        <h2 className="font-headline text-foreground">7. Disclaimer</h2>
        <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>

        <h2 className="font-headline text-foreground">8. Governing Law</h2>
        <p>These Terms shall be governed and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.</p>

        <h2 className="font-headline text-foreground">9. Changes to Terms</h2>
        <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
        <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

        <h2 className="font-headline text-foreground">10. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at legal@flowaigateway.com.</p>
      </div>
    </div>
  );
}
