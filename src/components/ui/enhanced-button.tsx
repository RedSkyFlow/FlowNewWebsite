'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

// This defines the base styles and variants for the button.
// It uses CSS variables from globals.css for colors.
const buttonVariants = cva(
  'relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors duration-standard ease-gentle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden',
  {
    variants: {
      variant: {
        primary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        secondary: 'bg-[hsl(var(--impact))] text-[hsl(var(--impact-foreground))] hover:bg-[hsl(var(--impact))]/90',
        tertiary: 'bg-transparent text-primary border border-primary/30 hover:bg-primary/10',
        outline: 'bg-transparent text-accent border border-accent/40 hover:bg-accent/10',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:bg-accent/10 hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  glow?: boolean;
  loading?: boolean;
  success?: boolean;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, glow = false, loading = false, success = false, children, ...props }, ref) => {
    
    // Defines the glow effect class based on the button variant.
    const glowClasses = {
      primary: 'hover:shadow-[var(--glow-secondary-strong)]',
      secondary: 'hover:shadow-[var(--glow-impact)]',
      tertiary: 'hover:shadow-[var(--glow-primary)]',
      outline: 'hover:shadow-[var(--glow-accent)]',
      destructive: 'hover:shadow-[var(--glow-destructive)]',
      ghost: '',
      link: '',
    };
    
    // Combines all the necessary Tailwind classes.
    const buttonClassNames = cn(buttonVariants({ variant, size, className }), glow && glowClasses[variant || 'primary']);

    // **THIS IS THE CRITICAL FIX**
    // If 'asChild' is true, we render a different structure.
    if (asChild) {
      return (
        // The motion.div provides the hover/tap animations.
        <motion.div
          className="inline-block" // Ensures it behaves like a button in the layout.
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ y: 0, scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {/* Slot merges its props and className onto its single direct child (the <Link> component). */}
          <Slot className={buttonClassNames} {...props}>
            {children}
          </Slot>
        </motion.div>
      );
    }

    // This is the default rendering path for a standard <button>.
    return (
      <motion.button
        className={buttonClassNames}
        ref={ref}
        disabled={loading || props.disabled}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        {...props}
      >
        <AnimatePresence mode="wait" initial={false}>
          {loading ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Loader2 className="h-4 w-4 animate-spin" />
            </motion.span>
          ) : success ? (
            <motion.span
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <CheckCircle className="h-4 w-4" />
            </motion.span>
          ) : null}
        </AnimatePresence>
        <span className={cn('transition-opacity', (loading || success) && 'opacity-0')}>
          {children}
        </span>
      </motion.button>
    );
  }
);
EnhancedButton.displayName = 'EnhancedButton';

export { EnhancedButton, buttonVariants };