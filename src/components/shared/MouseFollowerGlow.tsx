
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseFollowerGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for performance
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-1 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsla(var(--primary), 0.15), transparent 80%)`,
      }}
    />
  );
};

export default MouseFollowerGlow;
