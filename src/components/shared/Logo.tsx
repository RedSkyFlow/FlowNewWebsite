import Link from 'next/link';
import Image from 'next/image';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <Image
        src="/logo.png" // Assuming the logo is saved as logo.png in the public folder
        alt="Flow Networks Logo"
        width={40} // Adjust width as needed for visual balance
        height={40} // Adjust height as needed for visual balance
        className="mr-2"
        priority // Add priority if it's above the fold on most pages
      />
      <span className="font-headline text-xl font-bold text-primary">
        FlowAI Gateway
      </span>
    </Link>
  );
};

export default Logo;
