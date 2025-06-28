
import Link from 'next/link';
import Image from "next/image";

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.png" // Using the new 2D gold-on-dark logo
        alt="Flow Networks Logo"
        width={48} 
        height={48}
        className="mr-2 h-10 w-auto" // Adjust size for nav bar
        priority 
      />
      <span className="font-headline text-xl font-bold text-foreground min-w-0 truncate">
        Flow Networks
      </span>
    </Link>
  );
};

export default Logo;
