
'use client';

import { useEffect } from 'react';

const MousePositionUpdater = () => {
  useEffect(() => {
    // This effect should only run on the client
    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for performance optimization
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return null; // This component renders nothing, it's just for the effect
};

export default MousePositionUpdater;
