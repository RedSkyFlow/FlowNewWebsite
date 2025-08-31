// src/components/shared/Logo.tsx
'use client';

import Link from 'next/link';
import Image from "next/image";
import { cn } from '@/lib/utils';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link href="/" className={cn('inline-flex items-center', className)}>
      <Image
        src="/images/logos/Flow-2D-logo.png"
        alt="Flow Networks Logo"
        width={40}
        height={40}
        className="mr-3" 
        priority
      />
      <span className="font-headline text-xl font-bold text-foreground min-w-0 truncate">
        Flow Networks
      </span>
    </Link>
  );
};

export default Logo;
