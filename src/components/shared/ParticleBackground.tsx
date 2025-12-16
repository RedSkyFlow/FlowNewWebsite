
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
  lineDistance?: number
}

export function ParticleBackground({
  particleCount = 50, // Increased density for network effect
  colors = ['#14D8CC', '#0496FF', '#FFC145'], // Brand Palette: Primary, Secondary, Accent
  speed = 0.4,
  className = '',
  lineDistance = 150
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: -9999, y: -9999, detected: false })

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const newParticles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      const opacity = Math.random() * 0.5 + 0.2;
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: Math.random() * 2 + 1,
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

    // Update and Draw Particles
    particlesRef.current.forEach((particle, i) => {
      particle.waveAngle += 0.02;
      particle.x += particle.vx;
      particle.y += particle.vy + Math.sin(particle.waveAngle) * 0.05;

      // Mouse Interaction
      const dx = mouseRef.current.x - particle.x
      const dy = mouseRef.current.y - particle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      const interactionRadius = 200;
      if (mouseRef.current.detected && distance < interactionRadius) {
        const force = (interactionRadius - distance) / interactionRadius;
        particle.vx -= (dx / distance) * force * 0.02; // Gentle repulsion
        particle.vy -= (dy / distance) * force * 0.02;
        particle.opacity = Math.min(1, particle.baseOpacity + (1 - distance / interactionRadius) * 0.5);
      } else {
        // Return to base opacity
        if (particle.opacity > particle.baseOpacity) {
          particle.opacity -= 0.01;
        }
      }

      // Screen Wrapping
      if (particle.x < -50) particle.x = canvas.width + 50;
      if (particle.x > canvas.width + 50) particle.x = -50;
      if (particle.y < -50) particle.y = canvas.height + 50;
      if (particle.y > canvas.height + 50) particle.y = -50;

      // Draw Particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = particle.color
      ctx.globalAlpha = particle.opacity
      ctx.fill()
      ctx.globalAlpha = 1.0

      // Draw Connections (Neural Network)
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p2 = particlesRef.current[j];
        const dx2 = particle.x - p2.x;
        const dy2 = particle.y - p2.y;
        const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

        if (dist2 < lineDistance) {
          ctx.beginPath();
          const opacity = (1 - dist2 / lineDistance) * 0.2; // Subtle lines
          ctx.strokeStyle = `rgba(20, 216, 204, ${opacity})`; // Teal connection lines
          ctx.lineWidth = 1;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
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
