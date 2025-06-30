'use client'

import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'secondary' | 'outline' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  glow?: boolean
}

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(({
  asChild = false,
  variant = 'secondary',
  size = 'md',
  glow = true,
  className,
  children,
  ...props
}, ref) => {
  const Comp = asChild ? motion(Slot) : motion.button

  // These variants map to the utility classes in globals.css
  const variantClasses = {
    secondary: 'btn-secondary-glow', // Blue Primary CTA
    outline: 'btn-accent-glow',    // Yellow Secondary CTA
    tertiary: 'btn-tertiary',       // Teal Tertiary Action
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg"
  }

  return (
    <Comp
      className={cn(
        "relative inline-flex items-center justify-center font-semibold",
        "transition-colors duration-fast ease-gentle",
        "group",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring/50",
        "disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      ref={ref}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </Comp>
  )
})
EnhancedButton.displayName = 'EnhancedButton'

export { EnhancedButton }
