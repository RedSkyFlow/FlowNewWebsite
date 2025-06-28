import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        // Exact Brand Guide Colors
        background: 'rgb(10, 9, 3)', // #0A0903
        foreground: 'rgb(226, 253, 255)', // #E2FDFF
        card: {
          DEFAULT: 'rgb(15, 14, 8)', // #0F0E08
          foreground: 'rgb(226, 253, 255)', // #E2FDFF
        },
        popover: {
          DEFAULT: 'rgb(15, 14, 8)', // #0F0E08
          foreground: 'rgb(226, 253, 255)', // #E2FDFF
        },
        primary: {
          DEFAULT: 'rgb(2, 130, 242)', // #0282F2
          foreground: 'rgb(226, 253, 255)', // #E2FDFF
        },
        secondary: {
          DEFAULT: 'rgb(244, 96, 54)', // #F46036
          foreground: 'rgb(10, 9, 3)', // #0A0903
        },
        muted: {
          DEFAULT: 'rgb(45, 44, 39)', // #2D2C27
          foreground: 'rgb(226, 253, 255)', // #E2FDFF
        },
        accent: {
          DEFAULT: 'rgb(212, 175, 55)', // #D4AF37
          foreground: 'rgb(10, 9, 3)', // #0A0903
        },
        destructive: {
          DEFAULT: 'rgb(220, 53, 69)', // #DC3545
          foreground: 'rgb(255, 255, 255)', // #FFFFFF
        },
        border: 'rgb(45, 44, 39)', // #2D2C27
        input: 'rgb(15, 14, 8)', // #0F0E08
        ring: 'rgb(2, 130, 242)', // #0282F2
        
        // Brand Specific Colors
        'flow-primary-teal': 'rgb(0, 122, 128)', // #007A80
        'flow-accent-gold': 'rgb(212, 175, 55)', // #D4AF37
        'flow-action-blue': 'rgb(2, 130, 242)', // #0282F2
        'flow-impact-orange': 'rgb(244, 96, 54)', // #F46036
        'flow-highlight-yellow': 'rgb(255, 203, 71)', // #FFCB47
        'text-light': 'rgb(226, 253, 255)', // #E2FDFF
        'background-dark-primary': 'rgb(10, 9, 3)', // #0A0903
        'background-dark-secondary': 'rgb(15, 14, 8)', // #0F0E08
      },
      borderRadius: {
        lg: '0.75rem',
        md: 'calc(0.75rem - 2px)',
        sm: 'calc(0.75rem - 4px)',
      },
      keyframes: {
        // Exact Brand Guide Animations
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'float-brand': {
          '0%, 100%': { 
            transform: 'translateY(0) translateZ(0)' 
          },
          '50%': { 
            transform: 'translateY(-10px) translateZ(0)' 
          },
        },
        'glow-pulse-brand': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 122, 128, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 122, 128, 0.6)' 
          },
        },
        'slide-up-brand': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px) translateZ(0)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) translateZ(0)' 
          },
        },
        'fade-in-brand': {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95) translateZ(0)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1) translateZ(0)' 
          },
        },
        'gradient-shift-brand': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        // Exact Brand Guide Animations
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float-brand': 'float-brand 6s ease-in-out infinite',
        'glow-pulse-brand': 'glow-pulse-brand 2s ease-in-out infinite',
        'slide-up-brand': 'slide-up-brand 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'fade-in-brand': 'fade-in-brand 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'gradient-shift-brand': 'gradient-shift-brand 3s ease-in-out infinite',
      },
      // Exact Brand Guide Box Shadows
      boxShadow: {
        'brand-sm': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'brand-md': '0 4px 16px rgba(0, 0, 0, 0.15)',
        'brand-lg': '0 8px 24px rgba(0, 0, 0, 0.2)',
        'brand-xl': '0 12px 32px rgba(0, 0, 0, 0.25)',
        'brand-2xl': '0 20px 40px rgba(0, 0, 0, 0.3)',
        'glow-teal': '0 0 20px rgba(0, 122, 128, 0.3)',
        'glow-teal-strong': '0 0 30px rgba(0, 122, 128, 0.5)',
        'glow-blue': '0 0 20px rgba(2, 130, 242, 0.3)',
        'glow-blue-strong': '0 0 30px rgba(2, 130, 242, 0.5)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.3)',
        'glow-gold-strong': '0 0 30px rgba(212, 175, 55, 0.5)',
      },
      // Exact Brand Guide Transitions
      transitionTimingFunction: {
        'brand-gentle': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'brand-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'brand-smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'brand-sharp': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      },
      transitionDuration: {
        'brand-fast': '200ms',
        'brand-standard': '300ms',
        'brand-slow': '500ms',
        'brand-complex': '800ms',
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
