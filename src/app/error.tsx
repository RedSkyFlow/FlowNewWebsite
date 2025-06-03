'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center p-4 bg-background">
      <AlertTriangle className="w-16 h-16 text-destructive mb-6" />
      <h1 className="text-4xl font-bold font-headline text-foreground mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-muted-foreground mb-8 max-w-md">
        We encountered an unexpected issue. Please try again, or contact support if the problem persists.
      </p>
      {error?.message && (
         <p className="text-sm text-destructive bg-destructive/10 p-2 rounded-md mb-6">Error: {error.message}</p>
      )}
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        Try Again
      </Button>
    </div>
  );
}
