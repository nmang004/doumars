# Doumars Website - AI Assistant Context

## Project Overview
Restaurant website for Doumars, built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase
- **Payments**: Stripe
- **Email**: Resend

## Key Commands
```bash
npm run dev        # Start development server
npm run build      # Build for production (includes TypeScript checking)
npm run lint       # Run ESLint
```

## Project Structure
```
src/
├── app/           # Next.js app directory (pages)
├── components/    # React components
│   ├── layout/    # Header, Footer, etc.
│   ├── sections/  # Page sections
│   └── ui/        # UI components (shadcn)
├── lib/           # Utilities and configs
└── types/         # TypeScript types
```

## Important Files
- `src/lib/supabase/client.ts` - Supabase client configuration
- `src/lib/stripe.ts` - Stripe configuration
- `src/components/ui/*` - shadcn/ui components
- `.env.local` - Environment variables (not tracked)

## Current Features
- Authentication (login/signup)
- Menu display
- Merchandise store with checkout
- About page with timeline and awards
- Photo gallery
- News/blog section

## Design System
- **Colors**: Primary brand colors defined in Tailwind config
- **Typography**: Custom fonts configured
- **Components**: Consistent use of shadcn/ui components
- **Responsive**: Mobile-first design approach

## Development Notes
- Always run lint and type-check before committing
- Follow existing component patterns in the codebase
- Use shadcn/ui components when available
- Maintain consistent styling with Tailwind classes