
import Link from 'next/link';
import Image from "next/image";

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/Images/Flow-2D-logo.png.png" // Using the correct 2D gold-on-dark logo path
        alt="Flow Networks Logo"
        width={40} 
        height={40}
        className="mr-2 h-10 w-auto" // w-auto respects aspect ratio
        priority 
      />
      <span className="font-headline text-xl font-bold text-foreground min-w-0 truncate">
        Flow Networks
      </span>
    </Link>
  );
};

export default Logo;
