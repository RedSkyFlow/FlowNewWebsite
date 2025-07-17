// src/components/ui/enhanced-button.tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';

// Define the glow variants based on button variants
const glowVariants = {
  primary: 'shadow-glow-primary',
  secondary: 'shadow-glow-secondary',
  outline: 'shadow-glow-accent', // Outline buttons will have an accent glow
  destructive: 'shadow-glow-destructive', // Assuming a destructive glow might be needed
  ghost: '',
  link: '',
  default: '',
};

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  glow?: boolean;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, size, asChild = false, glow = false, ...props }, ref) => {
    
    // Determine the glow class based on the button's variant
    const glowClass = glow ? glowVariants[variant || 'default'] || '' : '';

    return (
      <Button
        className={cn(
          'transition-all duration-standard ease-gentle',
          'hover:scale-[1.03] active:scale-[0.98]', // Add subtle lift/scale effect on hover/active
          glow && 'hover:brightness-110',
          glowClass, // Apply the determined glow class
          className
        )}
        variant={variant}
        size={size}
        ref={ref}
        {...props}
      />
    );
  }
);
EnhancedButton.displayName = 'EnhancedButton';

export { EnhancedButton };