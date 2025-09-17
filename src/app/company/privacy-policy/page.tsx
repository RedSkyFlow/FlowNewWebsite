
'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

import AnimatedHeading from '@/components/shared/AnimatedHeading';
import ScrollAnimatedSection from '@/components/shared/ScrollAnimatedSection';
import { ParticleBackground } from '@/components/shared/ParticleBackground';

const PrivacyPolicyPage: NextPage = () => {
  return (
    <div className="bg-background text-foreground relative isolate overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <div className="relative z-10">

        <ScrollAnimatedSection as="section" className="pt-32 pb-16 md:pt-40 md:pb-20 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-4 inline-block"><ShieldCheck className="w-12 h-12 text-accent" /></div>
            <AnimatedHeading text="Privacy Policy" as="h1" className="text-4xl sm:text-5xl md:text-6xl font-extrabold !leading-tight tracking-tighter" />
            <p className="mt-4 text-muted-foreground font-body">Last Updated: [Date]</p>
          </div>
        </ScrollAnimatedSection>

        <ScrollAnimatedSection as="section" className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="prose prose-invert prose-lg mx-auto font-body text-muted-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-accent prose-strong:text-foreground">
              {/* NOTE: This is placeholder legal text. It MUST be replaced by actual legal counsel. */}
              <h2>1. Introduction</h2>
              <p>Welcome to Flow Networks. We are committed to protecting your privacy and handling your data in an open and transparent manner. This privacy policy sets out how we collect, use, and safeguard the information you provide to us and that we collect about you.</p>
              
              <h2>2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul>
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              </ul>

              <h2>3. Use of Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to...</p>
              {/* ... More placeholder sections ... */}

              <h2>4. Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows...</p>

              <h2>5. Security of Your Information</h2>
              <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
              
              <h2>6. Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@flow-networks.com">privacy@flow-networks.com</a></p>
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
