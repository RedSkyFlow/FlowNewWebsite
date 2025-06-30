
import { Metadata } from 'next';
import AnimatedHeading from '@/components/shared/AnimatedHeading';
import ContactForm from '@/components/shared/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | FlowAI Gateway',
  description: 'Get in touch with the FlowAI Gateway team for demos, support, or inquiries.',
};

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedHeading 
          text="Get in Touch" 
          as="h1" 
          className="text-4xl font-bold text-center text-foreground sm:text-5xl md:text-6xl mb-6 !font-headline"
        />
        <p className="mx-auto max-w-2xl text-center text-muted-foreground md:text-lg mb-12">
          We're here to help you unlock the power of AI. Reach out to us for demos, support, or any questions you might have.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold font-headline text-foreground mb-4">Contact Information</h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-primary" />
                  123 AI Avenue, Innovation City, TX 75001
                </p>
                <p className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-primary" />
                  <a href="mailto:info@flowaigateway.com" className="hover:text-primary">info@flowaigateway.com</a>
                </p>
                <p className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-primary" />
                  <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a>
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold font-headline text-foreground mb-4">Office Hours</h2>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM (CST)</p>
              <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
            </div>
          </div>
          
          <ContactForm />

        </div>
      </div>
    </div>
  );
}
