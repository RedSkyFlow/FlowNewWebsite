"use client"
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { StarBorder, type StarBorderVariant, type StarBorderActivationMode } from "@/components/shared/StarBorder";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "btn-accent-glow",
        secondary: "btn-secondary-glow",
        tertiary: "btn-tertiary",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  shimmer?: boolean
  glow?: boolean;
  loading?: boolean;
  starBorder?: boolean;
  starVariant?: StarBorderVariant;
  starActivationMode?: StarBorderActivationMode;
  starActivationDelay?: number;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = "primary",
    size,
    asChild = false,
    shimmer = false,
    glow,
    starBorder = false,
    starVariant = 'primary',
    starActivationMode = 'viewport-and-time',
    starActivationDelay = 2000,
    children,
    loading = false,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "button";

    const buttonContent = (
      <motion.div
        whileHover={{ y: -3, scale: starBorder ? 1.05 : 1.03 }}
        whileTap={{ y: 0, scale: 0.97 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="relative inline-flex"
      >
        <Comp
          className={cn(buttonVariants({ variant, size, className }),
            variant === 'primary' && !className?.includes('bg-') && "bg-[#14D8CC] hover:bg-[#14D8CC]/90 text-brand-base font-bold"
          )}
          ref={ref}
          disabled={props.disabled || loading}
          {...props}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
          </span>
        </Comp>

        {shimmer && (
          <div className="absolute inset-0 overflow-hidden rounded-md">
            <div className="absolute top-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        )}
      </motion.div>
    );

    if (starBorder) {
      return (
        <StarBorder
          variant={starVariant}
          activationMode={starActivationMode}
          activationDelay={starActivationDelay}
          className="inline-flex"
        >
          {buttonContent}
        </StarBorder>
      );
    }

    return buttonContent;
  }
)
EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton, buttonVariants }
