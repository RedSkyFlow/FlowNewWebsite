
// src/components/ui/enhanced-button.tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Loader2 } from 'lucide-react'; // Import a loader icon

// Define the glow variants based on button variants
const glowVariants = {
  primary: 'hover:shadow-glow-primary',
  secondary: 'hover:shadow-glow-secondary',
  outline: 'hover:shadow-glow-accent', // Outline buttons will have an accent glow
  destructive: 'hover:shadow-glow-destructive', // Assuming a destructive glow might be needed
  default: 'hover:shadow-glow-primary', // Default can use the primary glow
  ghost: '',
  link: '',
  tertiary: 'hover:shadow-glow-primary' // Added for completeness
};

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  glow?: boolean;
  shimmer?: boolean;
  loading?: boolean; // Add loading prop
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, size, asChild = false, glow = false, shimmer = false, loading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    // Determine the glow class based on the button's variant
    const glowClass = glow ? glowVariants[variant as keyof typeof glowVariants || 'default'] || '' : '';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          'transition-all duration-standard ease-gentle',
          'hover:scale-[1.03] active:scale-[0.98]',
          'flex items-center justify-center gap-2', // Center content
          glow && 'hover:brightness-110',
          glowClass,
          shimmer && 'relative overflow-hidden group',
          loading && 'cursor-not-allowed opacity-70', // Style for loading state
          className
        )}
        ref={ref}
        disabled={loading || props.disabled} // Disable button when loading
        {...props}
      >
        <>
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {children}
          {shimmer && !loading && (
            <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:animate-shimmer" />
          )}
        </>
      </Comp>
    );
  }
);
EnhancedButton.displayName = 'EnhancedButton';

export { EnhancedButton };
