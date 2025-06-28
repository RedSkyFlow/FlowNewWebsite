// src/components/shared/EnhancedIPhone.tsx
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from "next/image"
import { cn } from '@/lib/utils'

interface Screen {
  id: string
  title: string
  content: React.ReactNode
}

interface EnhancediPhoneProps {
  orientation?: 'straight' | 'right' | 'left' | 'right-lean' | 'left-lean'
  screens: Screen[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export function EnhancediPhone({
  orientation = 'straight',
  screens,
  autoPlay = false,
  interval = 3000,
  className
}: EnhancediPhoneProps) {
  const [currentScreen, setCurrentScreen] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || screens.length <= 1) return

    const timer = setInterval(() => {
      setCurrentScreen(prev => (prev + 1) % screens.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, screens.length])

  const getImageSrc = () => {
    // Note: These image paths assume you have placed the phone frames in /public/images/phone-frames/
    // The blueprint provided different filenames, ensure these match what you have.
    const basePath = '/images/phone-frames/'
    switch (orientation) {
      case 'right': return `${basePath}PhoneframesforCards-facingtoright.png`
      case 'left': return `${basePath}PhoneframesforCards-facingtoleft.png`
      case 'right-lean': return `${basePath}PhoneframesforCards-facingtorightandleaningback.png`
      case 'left-lean': return `${basePath}PhoneframesforCards-facingtoleftandleaningback.png`
      default: return `${basePath}PhoneframesforCards-facingforward-straighton.png`
    }
  }

  const getTransform = () => {
    switch (orientation) {
      case 'right': return 'perspective(1000px) rotateY(15deg)'
      case 'left': return 'perspective(1000px) rotateY(-15deg)'
      case 'right-lean': return 'perspective(1000px) rotateY(15deg) rotateX(-5deg)'
      case 'left-lean': return 'perspective(1000px) rotateY(-15deg) rotateX(-5deg)'
      default: return 'perspective(1000px) rotateY(0deg)'
    }
  }

  return (
    <motion.div 
      className={cn("relative cursor-pointer", className)}
      style={{ transform: getTransform() }}
      whileHover={{ 
        scale: 1.05,
        transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
      }}
      transition={{ duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
    >
      {/* iPhone Frame */}
      <Image
        src={getImageSrc()}
        alt={`iPhone ${orientation} mockup`}
        width={200}
        height={400}
        className="drop-shadow-2xl"
        priority
      />
      
      {/* Screen Content with Transitions */}
      <div 
        className="absolute rounded-[1.2rem] overflow-hidden bg-gradient-to-br from-[#0A0903] to-[#0F0E08]"
        style={{
          top: '12%',
          left: '12%',
          right: '12%',
          bottom: '20%',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            className="h-full w-full p-3 text-[#E2FDFF]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
          >
            {screens[currentScreen]?.content}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Screen Indicators */}
      {screens.length > 1 && (
        <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 flex space-x-1">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentScreen(index)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                index === currentScreen 
                  ? "bg-[#D4AF37] scale-125" 
                  : "bg-[#E2FDFF]/30 hover:bg-[#E2FDFF]/50"
              )}
            />
          ))}
        </div>
      )}
    </motion.div>
  )
}
