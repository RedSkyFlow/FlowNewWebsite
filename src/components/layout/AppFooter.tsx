import { Github, Linkedin, Twitter } from 'lucide-react';
import Logo from '@/components/shared/Logo';
import Link from 'next/link';

const AppFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">
              Empowering businesses with intelligent AI solutions.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Solutions</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="/ai-agents/hospitality" className="text-sm text-muted-foreground hover:text-primary">Hospitality AI</Link></li>
                <li><Link href="/ai-agents/retail" className="text-sm text-muted-foreground hover:text-primary">Retail AI</Link></li>
                <li><Link href="/ai-agents/custom" className="text-sm text-muted-foreground hover:text-primary">Custom Agents</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="/#about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                <li><Link href="/#pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h4>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} FlowAI Gateway. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="Github" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
