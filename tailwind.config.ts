import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
      colors: {
        // Core Brand Colors (using CSS custom properties for Tailwind v4)
        'primary-red': 'var(--color-primary-red)',
        'primary-red-hover': 'var(--color-primary-red-hover)', 
        'primary-yellow': 'var(--color-primary-yellow)',
        'primary-yellow-hover': 'var(--color-primary-yellow-hover)',
        'primary-navy': 'var(--color-primary-navy)',
        'primary-navy-hover': 'var(--color-primary-navy-hover)',
        
        // Neutral Colors (using CSS custom properties)
        'neutral-off-white': 'var(--color-bg-primary)',
        'neutral-cream': 'var(--color-bg-secondary)',
        'neutral-white': 'var(--color-bg-tertiary)',
        'neutral-black': 'var(--color-text-primary)',
        'neutral-gray-dark': 'var(--color-text-secondary)',
        'neutral-gray-medium': 'var(--color-text-tertiary)',
        'neutral-gray-light': 'var(--color-text-muted)',
        'neutral-gray-lighter': 'var(--color-border)',
        
        // Semantic Colors (using CSS custom properties)
        'semantic-success': 'var(--color-success)',
        'semantic-success-light': 'var(--color-success-light)',
        'semantic-error': 'var(--color-error)',
        'semantic-error-light': 'var(--color-error-light)',
        'semantic-warning': 'var(--color-warning)',
        'semantic-warning-light': 'var(--color-warning-light)',
        'semantic-info': 'var(--color-info)',
        'semantic-info-light': 'var(--color-info-light)',
        
        // Legacy mappings for compatibility
        'doumar-red': 'var(--color-primary-red)',
        'doumar-cream': 'var(--color-bg-primary)',
        'doumar-blue': 'var(--color-primary-navy)',
        'doumar-black': 'var(--color-text-primary)',
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--color-primary-red)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "var(--color-primary-navy)",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "var(--color-bg-primary)",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "var(--color-primary-yellow)",
          foreground: "var(--color-text-primary)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        // Typography System
        'heading': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'Monaco', 'monospace'],
      },
      fontSize: {
        // Responsive Type Scale
        'h1': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.25' }],
        'h2': ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.25' }],
        'h3': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.25' }],
        'h4': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.3' }],
        'h5': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.4' }],
        'h6': ['clamp(1rem, 1.5vw, 1.25rem)', { lineHeight: '1.5' }],
      },
      spacing: {
        // 8pt Grid System
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "scale-up": {
          from: { transform: "scale(0.95)" },
          to: { transform: "scale(1)" },
        },
        "pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.35s ease-out",
        "slide-in-left": "slide-in-left 0.35s ease-out",
        "slide-in-right": "slide-in-right 0.35s ease-out",
        "scale-up": "scale-up 0.25s ease-out",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;