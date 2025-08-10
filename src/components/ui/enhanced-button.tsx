// src/components/ui/enhanced-button.tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

// Define the glow variants based on button variants
const glowVariants = {
  primary: 'hover:shadow-glow-primary',
  secondary: 'hover:shadow-glow-secondary',
  outline: 'hover:shadow-glow-accent', // Outline buttons will have an accent glow
  destructive: 'hover:shadow-glow-destructive', // Assuming a destructive glow might be needed
  default: 'hover:shadow-glow-primary', // Default can use the primary glow
  ghost: '',
  link: '',
};

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  glow?: boolean; // Adds a glow effect on hover
  shimmer?: boolean; // Adds a shimmer effect
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, size, asChild = false, glow = false, shimmer = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    // Determine the glow class based on the button's variant
    const glowClass = glow ? glowVariants[variant || 'default'] || '' : '';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }), // 1. This applies the base button styles
          'transition-all duration-standard ease-gentle',
          'hover:scale-[1.03] active:scale-[0.98]',
          'flex items-center gap-2', // 2. This correctly aligns icons and text
          glow && 'hover:brightness-110',
          glowClass,
          shimmer && 'relative overflow-hidden group',
          className // Allows for additional classes to be passed in
        )}
        ref={ref}
        {...props}
      >
        {props.children}
        {shimmer && (
          <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:animate-shimmer" />
        )}
      </Comp> // 3. This is the single, correct closing tag for the component
    );
  }
);
EnhancedButton.displayName = 'EnhancedButton';

export { EnhancedButton };