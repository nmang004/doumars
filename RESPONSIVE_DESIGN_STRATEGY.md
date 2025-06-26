# Responsive Design Strategy Document: Doumar's Website

## 1. Core Philosophy & Strategy

**Persona:** Senior Front-End & UX Engineer.

**Philosophy:** Mobile-first, desktop-aware. The user experience must be flawless and intuitive from small mobile screens to large desktops.

**Strategy:** We will build a fluid and adaptive layout using Tailwind CSS. The design will originate from the mobile view and gracefully expand, optimizing usability and aesthetics at each breakpoint. Performance and touch-friendliness are paramount on mobile devices.

**Core Breakpoints:**
- **Mobile (default):** `< 640px`
- **Small Tablet (sm):** `≥ 640px`
- **Tablet (md):** `≥ 768px`
- **Laptop (lg):** `≥ 1024px`
- **Large Desktop (xl):** `≥ 1280px`

---

## 2. Tailwind CSS Implementation Guide

This section translates the design directives into specific, reusable Tailwind CSS utility classes for key components.

### Global Elements

#### Header (`<header>`)
- **Structure:** A `nav` element containing the logo, navigation links, and the "Order Online" button.
- **Mobile (default):**
  ```html
  <nav class="p-4 flex justify-between items-center">
    <!-- Logo -->
    <div class="flex-shrink-0">...</div>
    <!-- Order & Menu Toggle -->
    <div class="flex items-center space-x-4">
      <a href="/order" class="... button-primary ...">Order Online</a>
      <button class="md:hidden ...">
        <!-- Hamburger Icon -->
      </button>
    </div>
    <!-- Nav Links (Hidden on Mobile) -->
    <div class="hidden md:flex items-center space-x-6">...</div>
  </nav>
  ```
- **`md:` Breakpoint:** The hamburger menu is hidden, and navigation links become visible.
  - `md:flex` on the navigation link container.
  - `md:hidden` on the hamburger button.
- **`lg:` Breakpoint:** Increase spacing for a more comfortable desktop layout.
  - `lg:space-x-8` on nav links container.
  - `lg:p-6` on the root `nav` element.

#### Footer (`<footer>`)
- **Structure:** A main container with nested columns for different link categories.
- **Mobile (default):** Single-column, stacked layout.
  ```html
  <footer class="p-8 bg-gray-900 text-white">
    <div class="container mx-auto grid grid-cols-1 gap-8 text-center">
      <!-- Column 1: Links -->
      <div>...</div>
      <!-- Column 2: Contact -->
      <div>...</div>
      <!-- Column 3: Newsletter -->
      <div>...</div>
    </div>
  </footer>
  ```
- **`md:` Breakpoint:** Transition to a two or three-column layout.
  - `md:grid-cols-3 md:text-left` on the grid container.
- **`lg:` Breakpoint:** Widen the layout and potentially increase columns if needed.
  - `lg:grid-cols-4` for more granular sections.

### Page-Specific Components

#### Home Page: Hero Section
- **Structure:** A full-height container with a background image/video and centered text content.
- **Mobile (default):**
  ```html
  <section class="relative h-screen min-h-[600px] flex items-center justify-center text-white text-center p-4">
    <!-- Background Image/Video -->
    <div class="absolute inset-0 bg-cover bg-center ..."></div>
    <!-- Content -->
    <div class="relative z-10">
      <h1 class="text-4xl font-bold">...</h1>
      <p class="mt-4 text-lg">...</p>
    </div>
  </section>
  ```
- **`lg:` Breakpoint:** Reposition text to the side for a cinematic feel.
  - `lg:justify-start lg:text-left lg:p-24` on the main section.
  - `lg:text-6xl` on the `h1`.

#### Home Page: Featured Menu Items
- **Structure:** A section containing a grid of item cards.
- **Mobile (default):** Single-column stack.
  ```html
  <div class="grid grid-cols-1 gap-6 p-4">
    <!-- Item Card -->
    <div class="... card ...">...</div>
    <div class="... card ...">...</div>
  </div>
  ```
- **`sm:` Breakpoint:** 2-column grid.
  - `sm:grid-cols-2`
- **`md:` Breakpoint:** 2x2 grid.
  - `md:grid-cols-2`
- **`lg:` Breakpoint:** 3 or 4-column horizontal layout.
  - `lg:grid-cols-3 xl:grid-cols-4`

#### Menu Page: Layout & Navigation
- **Structure:** A main grid containing category navigation and the menu item display.
- **Mobile (default):** Accordion or stacked list for categories.
  ```html
  <!-- Using a simple stacked approach -->
  <div class="p-4 space-y-8">
    <!-- Category 1 -->
    <div>
      <h2 class="text-2xl font-bold border-b pb-2">...</h2>
      <div class="mt-4 grid grid-cols-1 gap-4">...</div>
    </div>
    <!-- Category 2 -->
    ...
  </div>
  ```
- **`md:` Breakpoint:** Introduce a sidebar for categories.
  ```html
  <div class="grid grid-cols-1 md:grid-cols-12 gap-8 p-8">
    <!-- Category Sidebar -->
    <aside class="md:col-span-4 lg:col-span-3">...</aside>
    <!-- Menu Items -->
    <main class="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-6">...</main>
  </div>
  ```
- **`lg:` Breakpoint:** Refine the grid for more items.
  - `lg:grid-cols-3` on the `main` element.

#### About Us Page: Historical Layout
- **Structure:** Interleaved text and images.
- **Mobile (default):** Single vertical column.
  ```html
  <div class="p-4 space-y-6">
    <img src="..." alt="..." class="w-full rounded-lg">
    <p>...</p>
    <img src="..." alt="..." class="w-full rounded-lg">
    <p>...</p>
  </div>
  ```
- **`lg:` Breakpoint:** Magazine-style grid layout.
  ```html
  <div class="p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <!-- Use order classes to alternate sides -->
    <div class="lg:order-2"><img ...></div>
    <div class="lg:order-1"><p>...</p></div>
    
    <div><img ...></div>
    <div><p>...</p></div>
  </div>
  ```

#### Forms & Interactive Elements
- **Principle:** All interactive elements must have a minimum touch target size.
- **Implementation:** Use padding and min-height/width utilities.
  - **Buttons/Inputs:** `class="... min-h-12 p-3 ..."`
  - **Quantity Selectors:** Ensure the `+` and `-` buttons are individually tappable with sufficient padding.

---

## 3. React Component Structure

- **Props for Layout:** Components can accept props to control layout, which can be tied to breakpoints. However, **prefer CSS-based solutions** with Tailwind's responsive prefixes to keep logic out of JavaScript.

  *Bad Practice (Avoid if possible):*
  ```jsx
  const isDesktop = useBreakpoint('lg');
  return <Card layout={isDesktop ? 'horizontal' : 'vertical'} />;
  ```

  *Good Practice (CSS-first):*
  ```jsx
  // The Card component uses responsive classes internally
  <div class="flex flex-col lg:flex-row">...</div>
  ```

- **Conditional Rendering:** For complex components that are fundamentally different on mobile vs. desktop (e.g., a mobile drawer vs. a desktop sidebar), it is acceptable to use a breakpoint hook (`useBreakpoint`) to render the correct component.

  ```jsx
  const isDesktop = useBreakpoint('lg');
  return isDesktop ? <DesktopCart /> : <MobileCartDrawer />;
  ```

---

## 4. Framer Motion & Animation

- **Goal:** Ensure animations are smooth and do not degrade performance on mobile devices.
- **Strategy:**
  1. **Reduce Motion:** Always respect the user's preference for reduced motion.
     ```jsx
     import { useReducedMotion } from "framer-motion";
     
     function MyComponent() {
       const shouldReduceMotion = useReducedMotion();
       // ... use this to disable or simplify animations
     }
     ```
  2. **Simplify on Mobile:** Complex animations (e.g., involving `filter`, `box-shadow`, or complex layout changes) can be disabled or simplified on smaller screens. A `useBreakpoint` hook can be useful here.
     ```jsx
     const isMobile = useBreakpoint('md', 'down');
     
     <motion.div
       animate={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: isMobile ? 10 : 20 }} // Simpler transition on mobile
     >
       ...
     </motion.div>
     ```
  3. **Hardware Acceleration:** Prioritize animating `transform` and `opacity` as they are typically hardware-accelerated by the browser.

---

## 5. Responsive Testing Checklist

A comprehensive testing plan is critical to ensure a flawless user experience.

### Phase 1: Emulation & Tooling
- [ ] **Browser DevTools:** Test on standard device presets (iPhone, Pixel, iPad) in Chrome, Firefox, and Safari.
- [ ] **Fluid Resizing:** Slowly resize the browser window from minimum to maximum width to catch awkward layout breaks between breakpoints.
- [ ] **Orientation Change:** Test both portrait and landscape modes for each device.
- [ ] **Lighthouse Audit:** Run a Lighthouse performance audit using the "Mobile" profile to check for layout shift (CLS), asset loading, and other performance bottlenecks.

### Phase 2: Real Device Testing
- [ ] **Mobile (iOS):** Test on a physical iPhone (latest and an older model if possible).
- [ ] **Mobile (Android):** Test on a physical Android device (e.g., Samsung, Google Pixel).
- [ ] **Tablet (iOS/Android):** Test on a physical iPad and/or Android tablet.

### Phase 3: Interaction & Content Verification
- [ ] **Touch Targets:** Confirm all buttons, links, and form inputs are easily tappable.
- [ ] **Hover vs. Active States:** Ensure hover effects on desktop do not interfere with touch interactions on mobile.
- [ ] **Gestures:** Verify that carousels and galleries are swipeable.
- [ ] **No Horizontal Scroll:** Confirm that no page has horizontal scrolling at any breakpoint.
- [ ] **Readability:** Check that font sizes are legible and line-heights are comfortable on all devices.
- [ ] **Image Integrity:** Ensure images are not distorted, stretched, or pixelated.
- [ ] **Forms:** Test the entire form submission flow on a mobile device to ensure a smooth experience.
