// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}', // Ensure this covers all your source files
  ],
  prefix: '', // Keeps Tailwind classes unprefixed
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        headline: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-roboto)', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // --- MASTER DESIGN BLUEPRINT COLORS ---
        brand: {
          base: '#1c203c',      // Space Indigo (Background)
          primary: '#14D8CC',   // Turquoise (Main Buttons)
          secondary: '#FFC145', // Gold (Highlights/Premium)
          accent1: '#FF4E00',   // Orange (Alerts)
          accent2: '#0496FF',   // Blue (Ambient Glows)
          text: '#F5F0F6',      // Off-White (Typography)
        }
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.0) 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)', // Assuming consistent scaling based on --radius
        sm: 'calc(var(--radius) - 4px)', // Assuming consistent scaling based on --radius
      },
      keyframes: {
        // Standard Shacdn/ui keyframes
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // Animated gradient text keyframe - Aligned with globals.css
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        // For animated-border-beam and animated-border-shimmer-gradient
        'rotate-border': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        // Keyframe for AnimatedBorder 'beam' variant
        'spin-border-beam': { // Renamed from 'border-beam' to match globals.css
          '100%': { '--angle': '360deg' }, // Uses CSS custom property for rotation
        },
        // Keyframe for AnimatedBorder 'highlight' variant
        'spin-border-highlight': {
          to: { '--border-angle': '360deg' }, // Uses CSS custom property for rotation
        },
        // Keyframe for AnimatedBorder 'highlight-sparkle' variant
        'sparkle-fade': {
          '0%': { opacity: '0' },
          '80%': { opacity: '0' },
          '90%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'shimmer': 'shimmer 1.5s infinite linear', // We can adjust duration and timing
        // Standard Shacdn/ui animations
        'gradient-move': 'gradient-move 8s ease-in-out infinite',
        // Animated border animations - Durations from globals.css
        'rotate-border': 'rotate-border var(--base-duration, 10s) linear infinite', // Default 10s from globals.css
        'spin-border-beam': 'spin-border-beam 16s linear infinite', // From globals.css
        'spin-border-highlight': 'spin-border-highlight 10s linear infinite', // From globals.css
        'pulse-highlight': 'pulse-highlight 5s ease-in-out infinite', // From globals.css
        'sparkle-fade': 'sparkle-fade var(--sparkle-duration, 10s) ease-in-out infinite', // From globals.css
      },
      transitionDuration: {
        fast: 'var(--transition-fast)',       // 200ms
        standard: 'var(--transition-standard)', // 300ms
        slow: 'var(--transition-slow)',         // 500ms
        complex: 'var(--transition-complex, 800ms)', // Added fallback, check if this variable is defined in globals.css for specific usage
      },
      transitionTimingFunction: {
        gentle: 'var(--ease-gentle)',   // cubic-bezier(0.4, 0.0, 0.2, 1)
        bounce: 'var(--ease-bounce)',   // cubic-bezier(0.68, -0.55, 0.265, 1.55)
        smooth: 'var(--ease-smooth)',   // cubic-bezier(0.25, 0.46, 0.45, 0.94)
        sharp: 'var(--ease-sharp)',     // cubic-bezier(0.55, 0.085, 0.68, 0.53)
      },
      boxShadow: {
        // Mapped directly to CSS variables for consistent glow effects
        'glow-primary': 'var(--glow-primary)',
        'glow-secondary': 'var(--glow-secondary)',
        'glow-accent': 'var(--glow-accent)',
        'glow-impact': 'var(--glow-impact)',     // From July 15 globals.css
        'glow-premium': 'var(--glow-premium)',   // From July 15 globals.css
        'glow-primary-strong': 'var(--glow-primary-strong)',
        'glow-secondary-strong': 'var(--glow-secondary-strong)',
        'glow-accent-strong': 'var(--glow-accent-strong)',
        // Shadow levels from globals.css (July 13 and June 25)
        'shadow-l1': 'var(--shadow-level-1)',
        'shadow-l2': 'var(--shadow-level-2)', // From June 25 globals.css
        'shadow-l3': 'var(--shadow-level-3)', // From June 25 globals.css
        'shadow-l4': 'var(--shadow-level-4)',
        'shadow-l5': 'var(--shadow-level-5)', // From June 25 globals.css
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    // This plugin adds the --angle CSS variable to :root for border animations
    function ({ addBase, theme }: { addBase: any, theme: any }) {
      addBase({
        ':root': {
          '--angle': '0deg',
        },
      });
    },
  ],
} satisfies Config;

export default config;