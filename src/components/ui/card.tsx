import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Define the styles for the card variants using CVA
const cardVariants = cva(
  "flex flex-col gap-6 rounded-xl",
  {
    variants: {
      variant: {
        glass: "glass-card",
        perspex: "perspex-card",
      },
      // CHANGED: Renamed the 'color' variant to 'colorVariant' to avoid conflicts
      colorVariant: {
        default: "border-border/50 shadow-black/20 hover:shadow-glow-primary",
        primary: "border-primary/70 shadow-black/20 hover:shadow-glow-primary",
        secondary: "border-secondary/70 shadow-black/20 hover:shadow-glow-secondary",
        accent: "border-accent/70 shadow-black/20 hover:shadow-glow-accent",
        impact: "border-flow-orange/70 shadow-black/20 hover:shadow-glow-impact",
      },
    },
    defaultVariants: {
      variant: "glass",
      colorVariant: "default",
    },
  }
);

// Define the props interface, extending HTMLDivElement and adding our variants
export interface CardProps
  // CHANGED: Omitted the conflicting 'color' prop from HTMLAttributes
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof cardVariants> {}

// Main Card component
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  // CHANGED: Destructured and used 'colorVariant' instead of 'color'
  ({ className, variant, colorVariant, ...props }, ref) => (
    <div
      ref={ref}
      // CHANGED: Passed 'colorVariant' to the CVA function
      className={cn(cardVariants({ variant, colorVariant }), className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

// Card sub-components remain the same
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };