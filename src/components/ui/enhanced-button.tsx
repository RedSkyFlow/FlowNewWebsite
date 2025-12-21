"use client"
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

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
}

// Update imports to include StarBorder if needed, or handle it via children in parent
// Actually, user wants "StarBorder integration options directly into the button component".
// But StarBorder wraps the button usually. 
// Let's modify EnhancedButton to optionally wrap itself in StarBorder or render it internally.
// A cleaner approach for "Standardization" is to force the style.

const EnhancedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size, asChild = false, shimmer = false, glow, starBorder = false, children, loading = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Force primary to use brand-primary (Turquoise) via specific class if not already
    // The cva already matches 'default'/'primary' to 'bg-primary', which is mapped to 179 82% 46% (#14D8CC) in globals.css.
    // So distinct 'primary' class isn't strictly needed if variable is correct, but let's ensure it.

    // If starBorder is true, we render the "StarBorder" visuals manually or wrap it.
    // Since Component logic can be complex, let's just apply the styles or assume the user wraps it?
    // User said "Add StarBorder integration options directly into the button component".
    // Let's try to wrap the content if `starBorder` is true.

    const buttonContent = (
      <Comp
        className={cn(buttonVariants({ variant, size, className }),
          variant === 'primary' && !className?.includes('bg-') && "bg-[#14D8CC] hover:bg-[#14D8CC]/90 text-brand-base font-bold", // Enforce Turquoise
          // StarBorder styles: relative for positioning.
          // Note: clip styles moved to wrapper to support asChild.
          starBorder && "border-none bg-[#14D8CC]/10 hover:bg-[#14D8CC]/20 text-[#14D8CC] transition-all duration-300"
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
    );

    // Removed the "if (starBorder)" wrapper block since we handle it internally now
    return (
      <motion.div
        whileHover={{ y: -3, scale: starBorder ? 1.05 : 1.03 }}
        whileTap={{ y: 0, scale: 0.97 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className={cn("relative inline-flex", starBorder && "overflow-hidden rounded-md")} // Wrapper handles clipping for stars
      >
        {/* StarBorder Visuals - Moved outside Comp to support Slot/asChild */}
        {starBorder && (
          <>
            <div className="absolute w-[400%] h-[30%] opacity-100 bottom-[-11px] right-[-250%] rounded-full z-20 star-border-glow animate-star-movement-bottom blur-sm pointer-events-none" />
            <div className="absolute w-[400%] h-[30%] opacity-100 top-[-10px] left-[-250%] rounded-full z-20 star-border-glow animate-star-movement-top blur-sm pointer-events-none" />
          </>
        )}

        {buttonContent}

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