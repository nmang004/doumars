# Doumar's Cones and BBQ - Modern Heritage Website

🍦 **Home of the World's First Waffle Cone Since 1904** 🍦

A modern, responsive website for Doumar's Cones and BBQ that honors 120+ years of family tradition while delivering a seamless digital experience.

## 🎯 Project Overview

This is a complete modern rebuild of the Doumar's website, featuring:
- ✨ Contemporary responsive design honoring classic Doumar's branding
- 🛒 Integrated online ordering system with Toast POS
- 📱 Mobile-first, fully responsive experience
- ⚡ Lightning-fast performance with Next.js 15
- 🎬 Smooth animations and polished micro-interactions
- 📖 Rich storytelling with interactive heritage timeline
- 🏆 Accessible design meeting WCAG 2.1 AA standards

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.3.4 with App Router and Turbopack
- **Language**: TypeScript with strict type checking
- **Styling**: Tailwind CSS with custom Doumar's design system
- **Components**: Shadcn/UI for consistent, accessible components
- **Animations**: Framer Motion for smooth, professional interactions
- **Icons**: Lucide React for crisp, scalable icons
- **Typography**: Inter (body) & Playfair Display (headings)

### Backend & Database
- **Database**: Supabase (PostgreSQL) with real-time capabilities
- **Authentication**: Supabase Auth with secure JWT tokens
- **Storage**: Supabase Storage for optimized image delivery
- **Payments**: Stripe integration for secure transactions

### Development & Deployment
- **Production**: Vercel with global edge network
- **Development**: Hot reload with Turbopack for instant updates
- **Code Quality**: ESLint 9 with Next.js best practices
- **Version Control**: Git with conventional commits

## 🎨 Design System

### Brand Colors
- **Heritage Red**: `#97111f` (Primary brand color - updated 2024)
- **Waffle Cone Yellow**: `#F9E152` (Accent color)
- **Vintage Navy**: `#003164` (Secondary color)
- **Warm Off-White**: `#FDFBF7` (Background)
- **Rich Black**: `#1A1A1A` (Text)

### Typography Scale
- **Headings**: Playfair Display (elegant serif for heritage feel)
- **Body Text**: Inter (clean, readable sans-serif)
- **Responsive**: Clamp-based scaling from mobile to desktop
- **Accessibility**: WCAG AA contrast ratios (8.12:1 for red on white)

### Component System
- Consistent 8pt grid system for spacing
- Unified border radius and shadow tokens
- Accessible focus states with visible indicators
- Smooth transitions and hover effects

## 🏗️ Project Structure

```
doumars-website/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── about/              # Heritage story and timeline
│   │   ├── auth/               # Login and signup pages
│   │   ├── contact/            # Contact form and location
│   │   ├── menu/               # Interactive menu display
│   │   ├── news/               # News and announcements
│   │   ├── page.tsx            # Enhanced homepage
│   │   ├── layout.tsx          # Root layout with providers
│   │   └── globals.css         # Global styles and CSS variables
│   ├── components/
│   │   ├── layout/             # Header, footer, main layout
│   │   ├── sections/           # Page-specific sections
│   │   │   ├── hero.tsx        # Video hero with controls
│   │   │   ├── family-story.tsx # Heritage storytelling
│   │   │   ├── timeline.tsx    # Interactive milestone timeline
│   │   │   ├── awards.tsx      # Recognition and achievements
│   │   │   └── photo-gallery.tsx # Optimized image gallery
│   │   └── ui/                 # Reusable UI components (shadcn/ui)
│   ├── contexts/               # React contexts for state management
│   ├── lib/                    # Utilities and configurations
│   │   ├── motion.ts           # Framer Motion animation variants
│   │   ├── supabase.ts         # Database client configuration
│   │   └── utils.ts            # Utility functions and helpers
│   ├── styles/
│   │   └── design-system.css   # CSS custom properties and utilities
│   └── types/                  # TypeScript type definitions
├── public/
│   ├── images/                 # Organized image assets
│   │   ├── historical/         # Heritage photos and documents
│   │   ├── food/              # Menu item photography
│   │   └── restaurant/        # Current restaurant photos
│   └── videos/                # Hero background video
├── DESIGN-SYSTEM.md           # Comprehensive design documentation
├── CLAUDE.md                  # AI development context and guidelines
└── tailwind.config.ts         # Tailwind configuration with design tokens
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ (recommended: 20+)
- **npm** or **yarn** package manager
- **Git** for version control

### Quick Start

1. **Clone and Install**
   ```bash
   git clone https://github.com/nmang004/doumars.git
   cd doumars-website
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.local.example .env.local
   # Add your Supabase and Stripe credentials
   ```

3. **Start Development**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Commands

```bash
# Development server with Turbopack (fast refresh)
npm run dev

# Production build with optimization
npm run build

# Start production server
npm run start

# Code linting and formatting
npm run lint

# Type checking
npm run type-check
```

## ✨ Key Features

### 🎥 **Enhanced Hero Section**
- High-quality background video with playback controls
- Accessible video controls with play/pause and mute
- Smooth scroll indicator to guide user journey
- Mobile-optimized video loading and autoplay handling

### 📜 **Interactive Heritage Story**
- Expandable statistics grid (1904 Founded, 4 Generations, 120+ Years, 1M+ Cones)
- Interactive timeline showcasing key milestones from 1904 to today
- Hover animations and visual feedback throughout
- Norfolk Historic Institution recognition badge

### 🍽️ **Modern Menu Experience**
- Featured menu items with high-quality photography
- Hover effects and smooth transitions
- Direct integration with Toast POS for online ordering
- Mobile-optimized card layouts

### 🏆 **Awards & Recognition**
- Dedicated section highlighting James Beard Award
- Professional presentation of accolades and press coverage
- Trust signals for new customers

### 📍 **Location & Contact**
- Embedded Google Maps with custom styling
- Quick action buttons (directions, phone, online ordering)
- Operating hours and contact information
- Special features callouts (curb service, live demonstrations)

### 🎨 **Design Excellence**
- Consistent visual hierarchy with Playfair Display headings
- Smooth micro-interactions powered by Framer Motion
- Responsive typography that scales beautifully across devices
- WCAG 2.1 AA accessibility compliance

## 📱 Responsive Design

### Mobile-First Approach
- **320px+**: Optimized for small mobile devices
- **640px+**: Enhanced layouts for larger phones
- **768px+**: Tablet-optimized spacing and typography
- **1024px+**: Desktop layouts with sidebar content
- **1280px+**: Large desktop with expanded grids

### Performance Optimizations
- Next.js automatic image optimization
- Lazy loading for below-the-fold content
- Optimized font loading with display: swap
- Turbopack for lightning-fast development builds

## 🔧 Recent Updates

### 2024-12-26: Brand Color Refresh
- Updated primary red from `#A51931` to `#97111f` for improved brand identity
- Enhanced contrast ratio to 8.12:1 for better accessibility
- Consistent application across all components and documentation

### 2024-12-26: Mobile Layout Improvements
- Streamlined navigation by removing Sign In button for cleaner UX
- Repositioned Order Online button to prominent far-right location
- Optimized legacy section spacing and eliminated visual clutter
- Improved timeline responsiveness with mobile-specific sizing

### 2024-12-26: Homepage Enhancement
- Expanded statistics from 2 to 4 compelling data points
- Added interactive heritage timeline with hover effects
- Introduced Norfolk Historic Institution badge for credibility
- Better space utilization with 5-column responsive grid

## 🚀 Deployment

### Production (Vercel)
- Automatic deployments from `main` branch
- Global CDN with edge caching
- Automatic HTTPS and domain management
- Performance monitoring and analytics

### Environment Variables
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe Configuration (for future e-commerce)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: All green metrics
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Image Optimization**: Next.js automatic WebP conversion and sizing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Project Information

- **Client**: Doumar's Cones and BBQ - Norfolk's Historic Institution Since 1904
- **Status**: ✅ Production Ready
- **Framework**: Next.js 15 with TypeScript
- **Deployment**: Vercel Production Environment
- **Repository**: [GitHub](https://github.com/nmang004/doumars)

---

**Built with ❤️ for Doumar's Cones and BBQ**  
*Preserving 120+ years of tradition with modern web technology*

For support or questions, please contact the development team or create an issue in this repository.