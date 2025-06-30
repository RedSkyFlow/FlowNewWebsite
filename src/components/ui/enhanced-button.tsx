
'use client'

import { useState, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Slot } from '@radix-ui/react-slot'
import { Loader2, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'premium'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  success?: boolean
  ripple?: boolean
  glow?: boolean // This prop is now cosmetic; the glow is part of the variant class
}

const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(({
  asChild = false,
  variant = 'primary',
  size = 'md',
  loading = false,
  success = false,
  ripple = true,
  glow = true,
  className,
  children,
  onClick,
  ...props
}, ref) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple && !loading) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const newRipple = { id: Date.now(), x, y }
      
      setRipples(prev => [...prev, newRipple])
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id))
      }, 600)
    }
    
    onClick?.(e)
  }

  const Comp = asChild ? Slot : 'button'

  // Variants now map to the CSS utility classes from globals.css
  const variants = {
    primary: "btn-primary-glow", // Solid Teal Button
    secondary: "btn-secondary-glow", // Solid Blue Button (Primary CTA)
    tertiary: cn("bg-transparent text-primary border border-primary/30 hover:bg-primary/10 hover:border-primary/50", glow && "hover:shadow-lg hover:shadow-primary/20"), // Teal Outline (Tertiary CTA)
    outline: "btn-accent-glow", // Yellow Outline (Secondary CTA)
    premium: cn(
      "bg-gradient-to-r from-accent to-[#FFCB47] text-accent-foreground",
      "hover:from-accent/90 hover:to-[#FFCB47]/90",
      glow && "hover:shadow-xl hover:shadow-accent/30"
    )
  }

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg"
  }

  return (
    <Comp
      className={cn(
        "relative inline-flex items-center justify-center font-semibold",
        "transition-all duration-fast ease-gentle",
        "transform-gpu will-change-transform overflow-hidden",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring/50",
        "disabled:pointer-events-none disabled:opacity-50",
        "hover:-translate-y-[2px] hover:scale-[1.02]",
        "active:scale-[0.98]",
        variants[variant],
        sizes[size],
        className
      )}
      onClick={handleClick}
      disabled={loading || success}
      ref={ref}
      {...props}
    >
      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none z-0"
          style={{
            left: ripple.x,
            top: ripple.y,
            x: "-50%",
            y: "-50%",
          }}
          initial={{ scale: 0, opacity: 1, width: 20, height: 20 }}
          animate={{ scale: 15, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
        />
      ))}

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center"
            >
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Loading...
            </motion.span>
          ) : success ? (
            <motion.span
              key="success"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              Success!
            </motion.span>
          ) : (
            <motion.span
              key="default"
              initial={false}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center justify-center gap-2"
            >
              {children}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </Comp>
  )
})
EnhancedButton.displayName = 'EnhancedButton'

export { EnhancedButton }

    