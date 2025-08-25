
'use client'

import { useEffect, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  baseOpacity: number
  color: string
  waveAngle: number
}

interface ParticleBackgroundProps {
  particleCount?: number
  colors?: string[]
  speed?: number
  className?: string
}

export function ParticleBackground({ 
  particleCount = 35,
  colors = ['#007A80', '#0282F2', '#FFCB47'],
  speed = 0.2,
  className = ''
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: -9999, y: -9999, detected: false })

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const newParticles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
        const opacity = Math.random() * 0.4 + 0.1;
        newParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * speed,
            vy: (Math.random() - 0.5) * speed,
            size: Math.random() * 1.5 + 0.5,
            opacity: opacity,
            baseOpacity: opacity,
            color: colors[Math.floor(Math.random() * colors.length)],
            waveAngle: Math.random() * Math.PI * 2,
        });
    }
    particlesRef.current = newParticles
  }, [particleCount, colors, speed])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particlesRef.current.forEach((particle) => {
      particle.waveAngle += 0.02;
      particle.x += particle.vx;
      particle.y += particle.vy + Math.sin(particle.waveAngle) * 0.1;

      const dx = mouseRef.current.x - particle.x
      const dy = mouseRef.current.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      const interactionRadius = 150;
      if (mouseRef.current.detected && distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          particle.vx -= (dx / distance) * force * 0.05;
          particle.vy -= (dy / distance) * force * 0.05;
          particle.opacity = Math.min(1, particle.baseOpacity + (1 - distance / interactionRadius) * 0.8);
      } else {
          particle.opacity -= 0.01;
          if (particle.opacity < particle.baseOpacity) {
              particle.opacity = particle.baseOpacity;
          }
      }

      if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
      if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
      if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
      if (particle.y > canvas.height + particle.size) particle.y = -particle.size;

      particle.vx = Math.max(-speed, Math.min(speed, particle.vx));
      particle.vy = Math.max(-speed, Math.min(speed, particle.vy));

      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`
      ctx.fill()
    })

    animationRef.current = requestAnimationFrame(animate)
  }, [speed])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseRef.current.detected) mouseRef.current.detected = true;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles(canvas)
    }

    handleResize()
    
    const startAnim = setTimeout(() => {
        animate()
    }, 100);

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(startAnim);
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [initParticles, animate])

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-none z-0", className)}
    />
  )
}
