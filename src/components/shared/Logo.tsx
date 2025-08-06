// src/components/shared/Logo.tsx
'use client';

import Link from 'next/link';
import Image from "next/image";
import { cn } from '@/lib/utils';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link href="/" className={cn('inline-flex items-center', className)}>
      <Image
        src="/Images/Flow-2D-logo.png"
        alt="Flow Networks Logo"
        // DEFINITIVE FIX: Set width and height props to the desired display size.
        // This makes the props the single source of truth for dimensions, resolving
        // conflicts with CSS classes. 40px is a standard navigation logo height.
        width={40}
        height={40}
        // CORRECTED: Removed sizing classes (h-10, w-auto) to prevent conflicts.
        className="mr-3" // Retained margin for spacing.
        priority
      />
      <span className="font-headline text-xl font-bold text-foreground min-w-0 truncate">
        Flow Networks
      </span>
    </Link>
  );
};

export default Logo;
