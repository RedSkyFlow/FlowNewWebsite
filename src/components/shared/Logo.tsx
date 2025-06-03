import Link from 'next/link';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
        aria-label="FlowAI Gateway Logo"
      >
        <rect width="200" height="200" rx="40" fill="url(#logoGradient)" />
        <path
          d="M60 150C80 130 100 130 120 150M60 120C80 100 100 100 120 120M80 90C90 80 110 80 120 90M140 50C120 70 100 70 80 50"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="hsl(var(--primary))"/>
            <stop offset="1" stopColor="hsl(var(--accent))"/>
          </linearGradient>
        </defs>
      </svg>
      <span className="font-headline text-xl font-bold text-primary">
        FlowAI Gateway
      </span>
    </Link>
  );
};

export default Logo;
