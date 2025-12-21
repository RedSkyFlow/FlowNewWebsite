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
    // We draw lines first so particles appear on top
    ctx.lineWidth = 1;
    for (let i = 0; i < particlesRef.current.length; i++) {
      const p1 = particlesRef.current[i];
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const p2 = particlesRef.current[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < lineDistance) {
          const opacity = (1 - dist / lineDistance) * 0.15;
          ctx.beginPath();
          // Use the color of the first particle for the line
          ctx.strokeStyle = p1.color.replace(")", `, ${opacity})`).replace("rgb", "rgba").replace("#", "") + (p1.color.startsWith("#") ? Math.floor(opacity * 255).toString(16).padStart(2, '0') : "");
          // Simple fallback for hex to rgba if needed, but for now assuming standard CSS colors or simple hex
          // Actually, let's keep it simple: use a shared connection color or gradient
          // Gradient lines look best
          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          gradient.addColorStop(0, p1.color.startsWith('#') ? `${p1.color}${Math.floor(opacity * 255).toString(16).padStart(2, "0")}` : p1.color);
          gradient.addColorStop(1, p2.color.startsWith('#') ? `${p2.color}${Math.floor(opacity * 255).toString(16).padStart(2, "0")}` : p2.color);
          ctx.strokeStyle = gradient;

          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
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
      const interactionRadius = 250;

      if (mouseRef.current.detected && distance < interactionRadius) {
        const force = (interactionRadius - distance) / interactionRadius;
        // Gentle attraction to create a "swarming" feel, or repulsion
        // User asked for "responsive". Let's do gentle repulsion for "clearing the path" feel + slight opacity boost
        const repulsionX = (dx / distance) * force * 1.5;
        const repulsionY = (dy / distance) * force * 1.5;

        particle.vx -= repulsionX * 0.05;
        particle.vy -= repulsionY * 0.05;

        // Brighten near mouse
        particle.opacity = Math.min(1, particle.baseOpacity + force * 0.5);
      } else {
        // Return to base opacity
        if (particle.opacity > particle.baseOpacity) {
          particle.opacity -= 0.02;
        }

        // Friction to return to normal speed
        // Not strictly necessary for simple float, but keeps them from flying off after mouse interaction
        particle.vx *= 0.98; // gentle friction on added velocity
        particle.vy *= 0.98;

        // Add base movement back if it gets too slow (simple keep-alive)
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
