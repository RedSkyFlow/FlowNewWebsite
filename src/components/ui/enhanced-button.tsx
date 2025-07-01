
'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react';

export interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'primary' | 'secondary' | 'accent' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  glow?: boolean
  loading?: boolean
}

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(({
  asChild = false,
  variant = 'secondary',
  size = 'md',
  glow = true,
  loading = false,
  className,
  children,
  ...props
}, ref) => {
  const Comp = asChild ? motion(Slot) : motion.button

  const variantClasses = {
    primary: 'glass-card-secondary text-secondary-foreground hover-glow-secondary', // Primary CTA (Blue)
    secondary: 'glass-card-accent text-accent-foreground hover-glow-accent',     // Secondary CTA (Yellow)
    accent: 'glass-card-accent text-accent-foreground hover-glow-accent', // Kept for consistency, same as secondary
    tertiary: 'glass-card text-foreground hover-glow-primary',  // Tertiary/Foundational Action (Teal)
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-2.5 text-base rounded-lg",
    lg: "px-8 py-3 text-lg rounded-xl"
  }

  return (
    <Comp
      className={cn(
        "relative inline-flex items-center justify-center font-semibold",
        "group disabled:pointer-events-none disabled:opacity-50",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      ref={ref}
      whileHover={!loading ? { y: -2, scale: 1.02 } : {}}
      whileTap={!loading ? { y: 0, scale: 0.98 } : {}}
      transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
      disabled={loading}
      {...props}
    >
      <span className="contents">
        <span className={cn("relative z-10 flex items-center justify-center gap-2", { 'opacity-0': loading })}>
          {children}
        </span>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        )}
      </span>
    </Comp>
  )
})
EnhancedButton.displayName = 'EnhancedButton'

export { EnhancedButton }
