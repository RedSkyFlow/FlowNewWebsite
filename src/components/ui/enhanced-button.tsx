'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'premium'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  success?: boolean
  ripple?: boolean
  glow?: boolean
  children: React.ReactNode
}

export function EnhancedButton({
  variant = 'primary',
  size = 'md',
  loading = false,
  success = false,
  ripple = true,
  glow = false,
  className,
  children,
  onClick,
  ...props
}: EnhancedButtonProps) {
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

  const variants = {
    primary: cn(
      "bg-primary text-primary-foreground border border-primary/30",
      "hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
      glow && "hover:shadow-xl hover:shadow-primary/40"
    ),
    secondary: cn(
      "bg-secondary text-secondary-foreground border border-secondary/30",
      "hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/25",
      glow && "hover:shadow-xl hover:shadow-secondary/40"
    ),
    tertiary: cn(
      "bg-transparent text-accent border border-accent/30 backdrop-blur-md",
      "hover:bg-accent/10 hover:text-foreground hover:border-accent/50"
    ),
    premium: cn(
      "bg-gradient-to-r from-accent to-[#FFCB47] text-accent-foreground",
      "hover:from-accent/90 hover:to-[#FFCB47]/90",
      "hover:shadow-xl hover:shadow-accent/30"
    )
  }

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg"
  }

  return (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center font-semibold",
        "transition-all duration-300 transform-gpu will-change-transform overflow-hidden",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring/50",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ y: 0, scale: 0.98 }}
      onClick={handleClick}
      disabled={loading}
      {...props}
    >
      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none"
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
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center space-x-2"
          >
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Loading...</span>
          </motion.div>
        ) : success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center space-x-2"
          >
            <CheckCircle className="h-4 w-4" />
            <span>Success!</span>
          </motion.div>
        ) : (
          <motion.div
            key="default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
