// src/components/ui/badge.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { StarBorder, type StarBorderVariant, type StarBorderActivationMode } from "@/components/shared/StarBorder"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Added a custom accent variant for highlights
        accent: "border-transparent bg-accent text-accent-foreground hover:bg-accent/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof badgeVariants> {
  starBorder?: boolean;
  starVariant?: StarBorderVariant;
  starActivationMode?: StarBorderActivationMode;
  starActivationDelay?: number;
}

// Map badge variants to StarBorder variants
const badgeToStarVariant: Record<string, StarBorderVariant> = {
  default: 'primary',
  accent: 'accent',
  secondary: 'secondary',
};

function Badge({
  className,
  variant,
  starBorder = false,
  starVariant,
  starActivationMode = 'viewport',
  starActivationDelay = 2000,
  ...props
}: BadgeProps) {
  const badgeContent = (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );

  if (starBorder) {
    const finalStarVariant = starVariant || badgeToStarVariant[variant || 'default'] || 'primary';
    return (
      <StarBorder
        variant={finalStarVariant}
        activationMode={starActivationMode}
        activationDelay={starActivationDelay}
        className="inline-flex"
      >
        {badgeContent}
      </StarBorder>
    );
  }

  return badgeContent;
}

export { Badge, badgeVariants }