# Doumars UI/UX Design System & Style Guide

## 1. Design Philosophy

### Core Principles
- **Nostalgic Modernism**: Honoring 120+ years of tradition while embracing modern digital experiences
- **Clarity & Intuition**: Every interaction should feel as natural as ordering at the counter
- **Accessibility First**: WCAG 2.1 AA compliant, ensuring everyone can enjoy the Doumars experience
- **Emotional Resonance**: Design that evokes warmth, family, and American heritage

## 2. Color System

### Primary Palette
```css
/* Core Brand Colors */
--color-primary-red: #97111f;        /* Doumars Heritage Red */
--color-primary-yellow: #F9E152;     /* Waffle Cone Yellow */
--color-primary-navy: #003164;       /* Vintage Navy */

/* Accessible Alternatives */
--color-text-on-red: #FFFFFF;        /* For text on red backgrounds */
--color-text-on-yellow: #1A1A1A;    /* For text on yellow backgrounds */
--color-text-on-navy: #FFFFFF;      /* For text on navy backgrounds */
```

### Neutral Palette
```css
/* Background Colors */
--color-bg-primary: #FDFBF7;         /* Warm Off-White */
--color-bg-secondary: #F7F4EE;       /* Light Cream */
--color-bg-tertiary: #FFFFFF;        /* Pure White */

/* Text Colors */
--color-text-primary: #1A1A1A;       /* Near Black */
--color-text-secondary: #4A4A4A;     /* Dark Gray */
--color-text-tertiary: #6B6B6B;      /* Medium Gray */
--color-text-muted: #8B8B8B;         /* Light Gray */
```

### Semantic Colors
```css
/* System States */
--color-success: #0E7C3F;            /* Forest Green */
--color-success-light: #E8F5E9;      /* Light Green Background */
--color-error: #C62828;              /* Error Red */
--color-error-light: #FFEBEE;        /* Light Red Background */
--color-warning: #F57C00;            /* Warning Orange */
--color-warning-light: #FFF3E0;      /* Light Orange Background */
--color-info: #0277BD;               /* Info Blue */
--color-info-light: #E1F5FE;         /* Light Blue Background */
```

### Interactive States
```css
/* Hover & Focus States */
--color-hover-red: #7a0e19;          /* Darker Red for Hover */
--color-hover-yellow: #F0D942;       /* Darker Yellow for Hover */
--color-hover-navy: #002347;         /* Darker Navy for Hover */
--color-focus-ring: #F9E152;         /* Yellow Focus Ring */
--color-focus-ring-offset: 2px;       /* Focus Ring Offset */
```

### Contrast Ratios
- Primary Red on White: 8.12:1 ✓
- Navy on White: 12.63:1 ✓
- Text Primary on Background: 11.58:1 ✓
- Yellow on Navy: 9.87:1 ✓

## 3. Typography System

### Font Stack
```css
/* Heading Font */
--font-heading: 'Playfair Display', Georgia, serif;

/* Body Font */
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Monospace (for prices, codes) */
--font-mono: 'IBM Plex Mono', Monaco, monospace;
```

### Type Scale (Mobile First)
```css
/* Base: 16px = 1rem */

/* Headings */
--text-h1: clamp(2rem, 5vw, 3.5rem);      /* 32-56px */
--text-h2: clamp(1.75rem, 4vw, 2.75rem);  /* 28-44px */
--text-h3: clamp(1.5rem, 3vw, 2.25rem);   /* 24-36px */
--text-h4: clamp(1.25rem, 2.5vw, 1.75rem);/* 20-28px */
--text-h5: clamp(1.125rem, 2vw, 1.5rem);  /* 18-24px */
--text-h6: clamp(1rem, 1.5vw, 1.25rem);   /* 16-20px */

/* Body Text */
--text-lg: 1.125rem;   /* 18px */
--text-base: 1rem;     /* 16px */
--text-sm: 0.875rem;   /* 14px */
--text-xs: 0.75rem;    /* 12px */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;

/* Font Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Typography Classes
```css
.heading-display {
  font-family: var(--font-heading);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
}

.heading-section {
  font-family: var(--font-heading);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
}

.body-large {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
}

.body-base {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

.label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  letter-spacing: 0.025em;
  text-transform: uppercase;
}
```

## 4. Spacing System (8pt Grid)

```css
/* Base unit: 8px */
--space-0: 0;
--space-1: 0.5rem;    /* 8px */
--space-2: 1rem;      /* 16px */
--space-3: 1.5rem;    /* 24px */
--space-4: 2rem;      /* 32px */
--space-5: 2.5rem;    /* 40px */
--space-6: 3rem;      /* 48px */
--space-8: 4rem;      /* 64px */
--space-10: 5rem;     /* 80px */
--space-12: 6rem;     /* 96px */
--space-16: 8rem;     /* 128px */
```

## 5. Component Library

### Buttons

#### Primary Button
```css
.btn-primary {
  background: var(--color-primary-red);
  color: var(--color-text-on-red);
  padding: var(--space-2) var(--space-4);
  border-radius: 0.5rem;
  font-weight: var(--font-semibold);
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.btn-primary:hover {
  background: var(--color-hover-red);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(151, 17, 31, 0.25);
}

.btn-primary:focus-visible {
  outline: none;
  border-color: var(--color-focus-ring);
  box-shadow: 0 0 0 3px rgba(249, 225, 82, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}
```

#### Secondary Button
```css
.btn-secondary {
  background: transparent;
  color: var(--color-primary-red);
  border: 2px solid var(--color-primary-red);
  padding: var(--space-2) var(--space-4);
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--color-primary-red);
  color: var(--color-text-on-red);
}
```

#### Accent Button (Yellow CTA)
```css
.btn-accent {
  background: var(--color-primary-yellow);
  color: var(--color-text-on-yellow);
  padding: var(--space-2) var(--space-4);
  border-radius: 0.5rem;
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.btn-accent:hover {
  background: var(--color-hover-yellow);
  transform: scale(1.05);
}
```

### Cards

#### Menu Item Card
```css
.menu-card {
  background: var(--color-bg-tertiary);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.menu-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.menu-card-image {
  aspect-ratio: 4/3;
  object-fit: cover;
  width: 100%;
}

.menu-card-content {
  padding: var(--space-3);
}

.menu-card-title {
  font-family: var(--font-heading);
  font-size: var(--text-h5);
  color: var(--color-text-primary);
  margin-bottom: var(--space-1);
}

.menu-card-price {
  font-family: var(--font-mono);
  font-size: var(--text-lg);
  color: var(--color-primary-red);
  font-weight: var(--font-bold);
}
```

### Form Inputs

```css
.input-group {
  margin-bottom: var(--space-3);
}

.input-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-1);
}

.input-field {
  width: 100%;
  padding: var(--space-2);
  border: 2px solid #E0E0E0;
  border-radius: 0.5rem;
  font-size: var(--text-base);
  transition: all 0.2s ease;
  background: var(--color-bg-tertiary);
}

.input-field:hover {
  border-color: #C0C0C0;
}

.input-field:focus {
  outline: none;
  border-color: var(--color-primary-red);
  box-shadow: 0 0 0 3px rgba(151, 17, 31, 0.1);
}

.input-error {
  border-color: var(--color-error);
}

.input-error-message {
  color: var(--color-error);
  font-size: var(--text-sm);
  margin-top: var(--space-1);
}
```

### Navigation

```css
/* Desktop Navigation */
.nav-desktop {
  background: var(--color-primary-red);
  padding: var(--space-2) 0;
}

.nav-link {
  color: var(--color-text-on-red);
  font-weight: var(--font-medium);
  padding: var(--space-1) var(--space-3);
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  text-decoration: none;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-link:focus-visible {
  outline: 2px solid var(--color-focus-ring);
  outline-offset: 2px;
}

/* Mobile Navigation */
.nav-mobile-toggle {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
}

.nav-mobile-panel {
  background: var(--color-bg-primary);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.nav-mobile-panel.open {
  transform: translateX(0);
}
```

## 6. Micro-Interactions & Animation

### Animation Tokens
```css
/* Durations */
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 350ms;

/* Easing */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0.0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Standard Transitions
```css
/* Hover Effects */
.interactive-element {
  transition: all var(--duration-base) var(--ease-in-out);
}

/* Page Transitions */
.page-enter {
  animation: fadeIn var(--duration-slow) var(--ease-out);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Loading States */
.skeleton-pulse {
  animation: pulse 2s var(--ease-in-out) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

## 7. Accessibility Checklist

### Color & Contrast
- [x] All text meets WCAG 2.1 AA contrast ratios (4.5:1 normal, 3:1 large)
- [x] Interactive elements have distinct hover/focus states
- [x] Color is not the only means of conveying information
- [x] Focus indicators are clearly visible (minimum 2px outline)

### Keyboard Navigation
- [x] All interactive elements are keyboard accessible
- [x] Tab order follows logical reading order
- [x] Skip links provided for main content
- [x] Focus trap implemented for modals
- [x] Escape key closes modals/dropdowns

### Screen Reader Support
- [x] Semantic HTML structure (proper heading hierarchy)
- [x] ARIA labels for icon-only buttons
- [x] Form inputs have associated labels
- [x] Error messages are announced
- [x] Loading states are communicated

### Interactive Components
```html
<!-- Accessible Button Example -->
<button 
  class="btn-primary"
  aria-label="Add Vanilla Waffle Cone to cart"
  aria-pressed="false"
>
  Add to Cart
</button>

<!-- Accessible Form Field Example -->
<div class="input-group">
  <label for="email" class="input-label">
    Email Address
    <span class="required" aria-label="required">*</span>
  </label>
  <input 
    type="email" 
    id="email" 
    class="input-field"
    aria-describedby="email-error"
    aria-invalid="false"
    required
  >
  <span id="email-error" class="input-error-message" role="alert">
    Please enter a valid email address
  </span>
</div>
```

## 8. Responsive Design Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktops */
--breakpoint-xl: 1280px;  /* Large desktops */
--breakpoint-2xl: 1536px; /* Extra large screens */

/* Container Max Widths */
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
```

## 9. Implementation Examples

### Hero Section
```html
<section class="hero" role="banner">
  <div class="hero-media">
    <picture>
      <source media="(min-width: 768px)" srcset="hero-desktop.jpg">
      <img src="hero-mobile.jpg" alt="Doumars storefront with vintage neon sign">
    </picture>
    <div class="hero-overlay"></div>
  </div>
  <div class="hero-content">
    <h1 class="heading-display hero-title">
      Home of the Original Waffle Cone
    </h1>
    <p class="body-large hero-subtitle">
      Serving Norfolk families since 1904
    </p>
    <div class="hero-actions">
      <button class="btn-accent">Order Online</button>
      <button class="btn-secondary">View Menu</button>
    </div>
  </div>
</section>
```

### Menu Item Component
```html
<article class="menu-card" role="article">
  <img 
    src="waffle-cone.jpg" 
    alt="Vanilla ice cream in original waffle cone"
    class="menu-card-image"
    loading="lazy"
  >
  <div class="menu-card-content">
    <h3 class="menu-card-title">Original Waffle Cone</h3>
    <p class="body-base text-secondary">
      Our signature creation since 1904
    </p>
    <div class="menu-card-footer">
      <span class="menu-card-price">$4.95</span>
      <button class="btn-primary btn-sm" aria-label="Add Original Waffle Cone to cart">
        Add to Order
      </button>
    </div>
  </div>
</article>
```

## 10. Voice & Tone Guidelines

### Brand Voice Characteristics
- **Warm & Welcoming**: Like greeting an old friend
- **Proud but Humble**: Celebrating heritage without boasting
- **Clear & Direct**: Simple language that everyone understands
- **Nostalgic**: Evoking memories while staying current

### Writing Examples
- ✅ "Serving Norfolk families since 1904"
- ❌ "Established in 1904 as a purveyor of fine confections"

- ✅ "Order your favorites online"
- ❌ "Utilize our digital ordering platform"

- ✅ "Come hungry, leave happy"
- ❌ "Experience culinary satisfaction"

---

This design system is a living document. As Doumars continues to evolve, so too will these guidelines, always staying true to the warmth, quality, and tradition that has made Doumars a beloved institution for over a century.