# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KhojIQ website - a single-page responsive landing page for vision-based product search for boutiques. Hosted on GitHub Pages at khojiq.github.io.

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - Pre-built accessible UI components (40+ components in `src/components/ui/`)
- **Lucide React** - Icon library
- **pnpm** - Package manager

## Commands

```bash
pnpm install    # Install dependencies
pnpm dev        # Start development server (http://localhost:5173)
pnpm build      # TypeScript compile + Vite build (outputs to dist/)
pnpm lint       # Run ESLint
pnpm preview    # Preview production build locally
```

## Project Structure

- `src/main.tsx` - React app entry point
- `src/App.tsx` - Main landing page component with all sections
- `src/index.css` - Tailwind imports, CSS variables, and custom animations
- `src/components/ui/` - shadcn/ui component library
- `src/lib/utils.ts` - Utility functions (cn for class merging)

## Styling

Custom theme defined in `src/index.css` with CSS variables:
- Warm color palette with primary (terracotta) and accent colors
- Custom fonts: DM Sans (sans-serif) and Playfair Display (serif)
- Custom animations: `animate-fade-up`, `animate-fade-in`, `animate-slide-left`, `animate-slide-right`
- Delay utilities: `delay-100` through `delay-500`

## Deployment

Automatic deployment to GitHub Pages via `.github/workflows/deploy.yml` on push to main branch. Uses Node 20 and pnpm.
