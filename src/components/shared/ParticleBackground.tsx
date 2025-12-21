"use client";

import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useParticleTheme } from "@/context/ParticleThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  baseOpacity: number;
  color: string;
  waveAngle: number;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  speed?: number;
  className?: string;
  lineDistance?: number;
}

export function ParticleBackground({
  particleCount = 60, // Increased density
  speed = 0.3, // Slightly slower for elegance
  className = "",
  lineDistance = 160,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: -9999, y: -9999, detected: false });
  const { colors } = useParticleTheme(); // Use context colors

  // Re-init particles when colors change
  const initParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < particleCount; i++) {
        const opacity = Math.random() * 0.5 + 0.3; // Increased base opacity (0.3 - 0.8)
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * 2 + 1.5, // Slightly larger particles
          opacity: opacity,
          baseOpacity: opacity,
          color: colors[Math.floor(Math.random() * colors.length)],
          waveAngle: Math.random() * Math.PI * 2,
        });
      }
      particlesRef.current = newParticles;
    },
    [particleCount, colors, speed]
  );

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dynamic Connections (Neural Network)
    ctx.lineWidth = 1.5; // Thicker lines
    for (let i = 0; i < particlesRef.current.length; i++) {
      const p1 = particlesRef.current[i];
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p2 = particlesRef.current[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < lineDistance) {
          // Opacity based on distance AND particle brightness (mouse proximity)
          const distanceFactor = 1 - dist / lineDistance;
          let opacity = distanceFactor * 0.4; // Base line opacity increased to 0.4

          // Boost line opacity if particles are excited (near mouse)
          if (p1.opacity > p1.baseOpacity || p2.opacity > p2.baseOpacity) {
            opacity += 0.3; // Significant boost for active lines
          }

          if (opacity > 0) {
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            // Use p1 and p2 colors with dynamic opacity
            const c1 = p1.color.startsWith('#') ? `${p1.color}${Math.floor(Math.min(1, opacity) * 255).toString(16).padStart(2, "0")}` : p1.color;
            const c2 = p2.color.startsWith('#') ? `${p2.color}${Math.floor(Math.min(1, opacity) * 255).toString(16).padStart(2, "0")}` : p2.color;

            gradient.addColorStop(0, c1);
            gradient.addColorStop(1, c2);
            ctx.strokeStyle = gradient;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }

    particlesRef.current.forEach((particle) => {
      // Movement
      particle.waveAngle += 0.01;
      particle.x += particle.vx;
      particle.y += particle.vy + Math.sin(particle.waveAngle) * 0.02;

      // Mouse Interaction
      const dx = mouseRef.current.x - particle.x;
      const dy = mouseRef.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const interactionRadius = 300; // Larger interaction radius

      if (mouseRef.current.detected && distance < interactionRadius) {
        const force = (interactionRadius - distance) / interactionRadius;

        // Gentle repulsion
        const repulsionX = (dx / distance) * force * 2;
        const repulsionY = (dy / distance) * force * 2;

        particle.vx -= repulsionX * 0.05;
        particle.vy -= repulsionY * 0.05;

        // Intense brightening near mouse
        particle.opacity = Math.min(1, particle.baseOpacity + force * 0.8);
      } else {
        // Return to base opacity
        if (particle.opacity > particle.baseOpacity) {
          particle.opacity -= 0.03; // Faster fade out
        }

        // Friction
        particle.vx *= 0.98;
        particle.vy *= 0.98;

        // Keep alive
        if (Math.abs(particle.vx) < Math.abs((Math.random() - 0.5) * speed) * 0.1) particle.vx += (Math.random() - 0.5) * 0.01;
        if (Math.abs(particle.vy) < Math.abs((Math.random() - 0.5) * speed) * 0.1) particle.vy += (Math.random() - 0.5) * 0.01;
      }

      // Screen Wrapping
      if (particle.x < -50) particle.x = canvas.width + 50;
      if (particle.x > canvas.width + 50) particle.x = -50;
      if (particle.y < -50) particle.y = canvas.height + 50;
      if (particle.y > canvas.height + 50) particle.y = -50;

      // Draw Particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.fill();
      ctx.globalAlpha = 1.0;
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [speed, lineDistance]); // colors are inside refs now essentially via initParticles, but animate reads from ref

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.detected = true;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas);
    };

    handleResize();

    const startAnim = setTimeout(() => {
      animate();
    }, 100);

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(startAnim);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initParticles, animate]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 pointer-events-none z-0", className)} // Changed to fixed to cover scroll
    />
  );
}
