
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { Gavel } from 'lucide-react';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';

const TermsOfUsePage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-16 md:pt-40 md:pb-20 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-4 inline-block"><Gavel className="w-12 h-12 text-accent" /></div>
            <AnimatedHeading text="Terms of Use" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" />
            <p className="mt-4 text-muted-foreground font-body">Last Updated: [Date]</p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="prose prose-invert prose-lg mx-auto font-body text-muted-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-accent prose-strong:text-foreground">
              {/* NOTE: This is placeholder legal text. It MUST be replaced by actual legal counsel. */}
              <h2>1. Agreement to Terms</h2>
              <p>By using our services, you agree to be bound by these Terms of Use. If you do not agree to these Terms, do not use the services. We may revise the Terms from time to time. The changes will not be retroactive, and the most current version of the Terms, which will always be at [URL], will govern our relationship with you.</p>
              
              <h2>2. Use of Our Services</h2>
              <p>You must follow any policies made available to you within the Services. Don’t misuse our Services. For example, don’t interfere with our Services or try to access them using a method other than the interface and the instructions that we provide.</p>
              
              <h2>3. Your Account</h2>
              <p>You may need a Flow Networks Account in order to use some of our Services. You may create your own account, or an account may be assigned to you by an administrator. If you are using an Account assigned to you by an administrator, different or additional terms may apply and your administrator may be able to access or disable your account.</p>

              {/* ... More placeholder sections ... */}

              <h2>4. Disclaimers and Limitations of Liability</h2>
              <p>The services are provided "as is." We also disclaim any warranties of merchantability, fitness for a particular purpose and non-infringement. Our aggregate liability for any claims arising out of these terms is limited to the amount you paid us to use the services.</p>
              
              <h2>5. Contact Us</h2>
              <p>If you have questions or comments about these Terms of Use, please contact us at: <a href="mailto:legal@flow-networks.com">legal@flow-networks.com</a></p>
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
