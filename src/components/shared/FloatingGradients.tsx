// src/components/shared/FloatingGradients.tsx
'use client';

import { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface FloatingGradientsProps {
  variant?: 'subtle' | 'intense';
}

const FloatingGradients: React.FC<FloatingGradientsProps> = ({ variant = 'subtle' }) => {
  const blobs = useMemo(() => [
    // Primary (Teal)
    { id: 1, color: 'hsl(var(--primary))', size: 'w-[40vw] h-[40vw]', top: '10vh', left: '5vw', animation: 'animate-float-1' },
    // Secondary (Blue)
    { id: 2, color: 'hsl(var(--secondary))', size: 'w-[50vw] h-[50vw]', top: '30vh', left: '60vw', animation: 'animate-float-2' },
    // Accent (Yellow)
    { id: 3, color: 'hsl(var(--accent))', size: 'w-[35vw] h-[35vw]', top: '70vh', left: '20vw', animation: 'animate-float-3' },
     // Innovation (Purple) - for a touch of extra color
    { id: 4, color: 'hsl(var(--innovation))', size: 'w-[30vw] h-[30vw]', top: '50vh', left: '80vw', animation: 'animate-float-4' },
  ], []);

  const opacityClass = variant === 'subtle' ? 'opacity-5' : 'opacity-10';

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        {blobs.map(blob => (
          <div
            key={blob.id}
            className={cn(
              'absolute rounded-full mix-blend-screen filter blur-3xl',
              blob.animation,
              blob.size,
              opacityClass
            )}
            style={{
              top: blob.top,
              left: blob.left,
              background: `radial-gradient(circle at center, ${blob.color}, transparent 60%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Add keyframes to globals.css or a new CSS file to make this work.
/*
@keyframes float-1 {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(10vw, -15vh) rotate(180deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}
@keyframes float-2 {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-15vw, 10vh) rotate(-180deg); }
  100% { transform: translate(0, 0) rotate(-360deg); }
}
@keyframes float-3 {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(5vw, 15vh) rotate(150deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
}
@keyframes float-4 {
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(-10vw, -10vh) rotate(-150deg); }
  100% { transform: translate(0, 0) rotate(-360deg); }
}

.animate-float-1 { animation: float-1 35s infinite ease-in-out; }
.animate-float-2 { animation: float-2 45s infinite ease-in-out; }
.animate-float-3 { animation: float-3 40s infinite ease-in-out; }
.animate-float-4 { animation: float-4 30s infinite ease-in-out; }
*/

export default FloatingGradients;
