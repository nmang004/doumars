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
        // Core Brand Colors (Tailwind v3 syntax with hardcoded values)
        'primary-red': '#A51931',
        'primary-red-hover': '#8A1527',
        'primary-yellow': '#F9E152', 
        'primary-yellow-hover': '#F0D942',
        'primary-navy': '#003164',
        'primary-navy-hover': '#002347',
        
        // Neutral Colors
        'neutral-off-white': '#FDFBF7',
        'neutral-cream': '#F7F4EE',
        'neutral-white': '#FFFFFF',
        'neutral-black': '#1A1A1A',
        'neutral-gray-dark': '#4A4A4A',
        'neutral-gray-medium': '#6B6B6B',
        'neutral-gray-light': '#8B8B8B',
        'neutral-gray-lighter': '#E0E0E0',
        
        // Semantic Colors
        'semantic-success': '#0E7C3F',
        'semantic-success-light': '#E8F5E9',
        'semantic-error': '#C62828',
        'semantic-error-light': '#FFEBEE',
        'semantic-warning': '#F57C00',
        'semantic-warning-light': '#FFF3E0',
        'semantic-info': '#0277BD',
        'semantic-info-light': '#E1F5FE',
        
        // Legacy mappings for compatibility
        'doumar-red': '#A51931',
        'doumar-cream': '#FDFBF7',
        'doumar-blue': '#003164',
        'doumar-black': '#1A1A1A',
        
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#A51931",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#003164",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#FDFBF7",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#F9E152",
          foreground: "#1A1A1A",
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