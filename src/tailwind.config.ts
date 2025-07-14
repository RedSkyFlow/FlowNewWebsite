import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
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
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'], // Can be a different font if desired
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
        // Custom brand colors for direct use if needed
        'flow-teal': 'hsl(var(--primary))',
        'flow-blue': 'hsl(var(--secondary))',
        'flow-yellow': 'hsl(var(--accent))',
        'flow-orange': 'hsl(var(--impact))',
        'flow-gold': 'hsl(var(--premium))',
        'flow-purple': 'hsl(var(--innovation))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'rotate-border': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'gradient-move': 'gradient-move 10s ease infinite',
        'rotate-border': 'rotate-border 6s linear infinite',
      },
      transitionDuration: {
        fast: 'var(--transition-fast)',
        standard: 'var(--transition-standard)',
        slow: 'var(--transition-slow)',
        complex: 'var(--transition-complex)',
      },
      transitionTimingFunction: {
        gentle: 'var(--ease-gentle)',
        bounce: 'var(--ease-bounce)',
        smooth: 'var(--ease-smooth)',
        sharp: 'var(--ease-sharp)',
      },
      boxShadow: {
        'glow-primary': 'var(--glow-primary)',
        'glow-secondary': 'var(--glow-secondary)',
        'glow-accent': 'var(--glow-accent)',
        'glow-impact': 'var(--glow-impact)',
        'glow-premium': 'var(--glow-premium)',
        'glow-primary-strong': 'var(--glow-primary-strong)',
        'glow-secondary-strong': 'var(--glow-secondary-strong)',
        'glow-accent-strong': 'var(--glow-accent-strong)',
        'shadow-l1': 'var(--shadow-level-1)',
        'shadow-l2': 'var(--shadow-level-2)',
        'shadow-l3': 'var(--shadow-level-3)',
        'shadow-l4': 'var(--shadow-level-4)',
        'shadow-l5': 'var(--shadow-level-5)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;