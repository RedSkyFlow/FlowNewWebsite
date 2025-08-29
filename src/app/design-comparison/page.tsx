// src/app/design-comparison/page.tsx
'use client';

import type { NextPage } from 'next';
import React from 'react';

// This page is created for comparing different design effects from previous builds.
// It will showcase various animated borders and other visual treatments
// using their original CSS implementations to help evaluate their suitability
// for the current design system.

const DesignComparisonPage: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold">Design Effects Comparison</h1>
      </div>

      {/* Section for comparing animated border effects */}
      <section className="mt-12 w-full max-w-5xl">
        <h2 className="text-2xl font-semibold mb-6">Animated Borders (Previous Implementations)</h2>
        {/* Examples of different animated border techniques will go here */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Animated Border: Beam */}
          <div className="relative rounded-lg overflow-hidden bg-card p-6 shadow-lg">
            <div className="animated-border-beam"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Animated Border: Beam</h3>
              <p className="text-muted-foreground text-sm">
                This effect uses a rotating "beam" of color.
              </p>
            </div>
          </div>

          {/* Animated Border: Shimmer Gradient */}
          <div className="relative rounded-lg overflow-hidden bg-card p-6 shadow-lg">
            <div className="animated-border-shimmer-gradient"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Animated Border: Shimmer Gradient</h3>
              <p className="text-muted-foreground text-sm">
                A rotating gradient that shimmers along the border.
              </p>
            </div>
          </div>

          {/* Animated Border: Highlight (Hover Effect) */}
          {/* Note: This effect requires the parent to have position: relative and hover states */}
          <div className="group relative rounded-lg overflow-hidden bg-card p-6 shadow-lg">
             <div className="animated-border-highlight"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Animated Border: Highlight (Hover)</h3>
              <p className="text-muted-foreground text-sm">
                A subtle highlight that animates on hover. Hover over this card to see the effect.
              </p>
            </div>
          </div>

           {/* Animated Border: Highlight Sparkle */}
           <div className="relative rounded-lg overflow-hidden bg-card p-6 shadow-lg">
             <div className="animated-border-highlight-sparkle"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Animated Border: Highlight Sparkle</h3>
              <p className="text-muted-foreground text-sm">
                Combines a rotating highlight with a sparkle effect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Define and apply global styles and keyframes */
        /* Add relevant CSS rules from the old globals.css file here */

        /* Animated Border Variables (from July 15 for animated-border-beam) */
        :global(:root) {
          --border-width: 2px;
          --border-radius: 0.75rem; /* Assuming a default radius */
          --primary: 179 100% 25%; /* Flow Primary Teal */
          --secondary: 211 98% 48%; /* Flow Action Blue */
          --accent: 45 100% 59%; /* Flow Highlight Yellow */
          --foreground: 183 100% 94%; /* #E2FDFF - Text Light */
          --base-duration: 10s; /* Default duration if not set */
          --sparkle-duration: 10s; /* Default duration if not set */
        }

        /* Styles for the animated border elements */
        .animated-border-beam,
        .animated-border-highlight-sparkle {
          position: absolute;
          inset: 0;
          border-radius: var(--border-radius);
          pointer-events: none;
          content: '';
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% + var(--border-width, 4px)); /* Default border-width if not set */
          height: calc(100% + var(--border-width, 4px));
        }

        /* Specific styles for the Beam effect */
        .animated-border-beam {
          --border-angle: 0deg; /* From July 13 */
          border: var(--border-width, 2px) solid transparent; /* from July 15 with default */
          background: conic-gradient(
            from var(--border-angle, 0deg),
            transparent 0deg 180deg,
            hsla(var(--primary) / 0.7) 180deg 200deg, /* Adjusted angle for potentially wider beam */
            transparent 190deg 360deg
          ); /* Using primary from July 13, and var for angle */
          animation: spin-border-beam 16s linear infinite; /* From July 13 */
        }
        

        .animated-border-shimmer-gradient {
          --angle: 0deg; /* Ensure variable is defined */
          background-image: conic-gradient(
            from var(--angle),
            hsla(var(--accent), 0.8),
            hsla(var(--secondary), 0.8),
            hsla(var(--primary), 0.8),
            hsla(var(--accent), 0.8)
          );
          animation: rotate-border var(--base-duration, 10s) linear infinite; /* Default base-duration */
        }

        /* Specific styles for the Highlight effect */
        .animated-border-highlight {
          /* From July 13 */
          --border-angle: 0deg;
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: conic-gradient(from var(--border-angle), transparent 0% 90%, white, transparent);
          animation: spin-border-highlight 10s linear infinite;
          opacity: 0;
          animation-delay: -2.5s; /* Stagger the animation */
        }

        .group:hover .animated-border-highlight { /* Apply to parent group hover */
           /* Note: This hover effect requires the parent to have position: relative */
          animation-name: spin-border-highlight, pulse-highlight;
          animation-timing-function: linear, ease-in-out;
          animation-iteration-count: infinite, infinite;
          animation-duration: 10s, 5s;
          opacity: 1; /* Ensure it becomes visible on hover */
        }

        /* Specific styles for the Highlight Sparkle effect */
        .animated-border-highlight-sparkle {

          background-image: radial-gradient(
            ellipse 30% 30% at 25% 0%,
            hsl(var(--foreground) / 0.8) 0%,
            transparent 100%
          );
          animation: rotate-border var(--sparkle-duration) linear infinite,
            sparkle-fade var(--sparkle-duration) ease-in-out infinite;
        }

        /* Animation Keyframes from old globals.css */
        @keyframes gradient-move {
          /* Consolidated from July 15 and July 13 */
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes rotate-border {
          /* Consolidated from July 15 and July 13 (for beam and shimmer gradient) */
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-border-beam {
          /* Specific to beam variant, from July 13 */
          from {
            --border-angle: 0deg;
          }
          to {
            --border-angle: 360deg;
          }
        }

        @keyframes spin-border-highlight {
          /* Specific to highlight variant, from July 13 */
          to {
            --border-angle: 360deg;
          }
        }

        @keyframes pulse-highlight {
          /* Specific to highlight variant, from July 13 */
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes sparkle-fade {
          /* From July 15 for animated-border-highlight-sparkle */
          0% { opacity: 0; }
          80% { opacity: 0; }
          90% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
      {/* Add sections for other effects as needed */}
    </main>
  );
};

export default DesignComparisonPage;