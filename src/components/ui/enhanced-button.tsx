"use client"
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";

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
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  // FIX 1: We need to accept the 'children' prop here
  ({ className, variant, size, asChild = false, shimmer = false, glow, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Conditionally remove the glow prop when asChild is true
    const buttonProps = asChild ? props : { ...props, glow };

    return (
      <motion.div
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ y: 0, scale: 0.97 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="relative"
      >
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {/* FIX 2: We now render the children inside the button component and removed glow when asChild*/}
          {children}
        </Comp>
        {shimmer && (
          <div className="absolute inset-0 overflow-hidden rounded-md">
            <div className="absolute top-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </div>
        )}
      </motion.div>
    )
  }
)
EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton, buttonVariants }