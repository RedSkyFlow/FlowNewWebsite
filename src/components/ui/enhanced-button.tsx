
// src/components/ui/enhanced-button.tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const glowVariants = {
  primary: 'hover:shadow-glow-primary',
  secondary: 'hover:shadow-glow-secondary',
  outline: 'hover:shadow-glow-accent',
  destructive: 'hover:shadow-glow-destructive',
  default: 'hover:shadow-glow-primary',
  ghost: '',
  link: '',
  tertiary: 'hover:shadow-glow-primary'
};

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  glow?: boolean;
  shimmer?: boolean;
  loading?: boolean;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, size, asChild = false, glow = false, shimmer = false, loading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const glowClass = glow ? glowVariants[variant as keyof typeof glowVariants || 'default'] || '' : '';

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          'transition-all duration-standard ease-gentle',
          'hover:scale-[1.03] active:scale-[0.98]',
          'flex items-center justify-center gap-2',
          glow && 'hover:brightness-110',
          glowClass,
          shimmer && 'relative overflow-hidden group',
          loading && 'cursor-not-allowed opacity-70',
          className
        )}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            {children}
          </div>
        ) : (
          <>
            {children}
            {shimmer && (
              <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:animate-shimmer" />
            )}
          </>
        )}
      </Comp>
    );
  }
);
EnhancedButton.displayName = 'EnhancedButton';

export { EnhancedButton };
