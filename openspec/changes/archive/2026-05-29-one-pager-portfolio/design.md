## Context

The project is a fresh Vite + React + TypeScript scaffold (React 19, Vite 8). The reference design exists as a single HTML file with CDN Tailwind, which needs to be converted into a proper component-based React app with a build-time Tailwind configuration. The design is fully specified with exact tokens, typography, spacing, and component styles in DESIGN.md.

## Goals / Non-Goals

**Goals:**
- Pixel-faithful implementation of the reference HTML design as a React SPA
- Proper Tailwind v4 integration via Vite plugin with design tokens in config
- Component-based architecture for maintainability
- Smooth scroll animations and glassmorphism effects matching the reference
- Fully responsive (desktop 12-col grid, mobile single-col)

**Non-Goals:**
- CMS or dynamic content (all content is hardcoded)
- Contact form backend (mailto link only)
- Dark mode (design specifies light mode only)
- SEO optimization beyond basic meta tags
- Analytics or tracking
- Image hosting (will use the same external image URLs from reference)

## Decisions

### 1. Tailwind CSS v4 via Vite plugin
**Decision:** Use `@tailwindcss/vite` plugin with CSS-based configuration (Tailwind v4 approach).
**Rationale:** The project uses Vite 8, and Tailwind v4 integrates natively via its Vite plugin — no PostCSS config needed. Design tokens go into `@theme` in CSS.
**Alternative:** Tailwind v3 with `tailwind.config.js` — rejected because v4 is the current standard and has better Vite integration.

### 2. Single-file App component with section components
**Decision:** Split the page into section components (`Hero`, `ProfessionalPath`, `TechnicalEcosystem`, `Projects`, `Contact`, `Navigation`, `Footer`) each in their own file under `src/components/`.
**Rationale:** The page is a one-pager but has enough complexity per section that monolithic code would be hard to maintain. Each section maps to a capability.
**Alternative:** Single monolithic component — rejected for readability.

### 3. Vanilla scroll handling via useEffect
**Decision:** Use native `scroll` event listeners with `useEffect` for reveal animations and navbar transitions.
**Rationale:** The animations are simple (opacity + translate on scroll, navbar bg toggle). A library like Framer Motion or GSAP would be overkill for this.
**Alternative:** Intersection Observer API — could use for reveals but the timeline progress line needs continuous scroll position, so a unified scroll handler is simpler.

### 4. External image URLs retained
**Decision:** Keep the Google-hosted image URLs from the reference design as-is.
**Rationale:** These are placeholder/AI-generated images. The user can replace them later with real photos. No need to download and bundle them.

### 5. Google Fonts via `<link>` in index.html
**Decision:** Load Hanken Grotesk, Inter, and Material Symbols Outlined via Google Fonts CDN links in `index.html`.
**Rationale:** Simple, cacheable, and consistent with how most portfolios load fonts. No need for self-hosting complexity.

## Risks / Trade-offs

- **External image dependency** → Images may become unavailable if Google removes them. Mitigation: user replaces with own photos.
- **CDN font loading** → FOUT on slow connections. Mitigation: `display=swap` in font URL.
- **No SSR/SSG** → Not indexable by all crawlers. Mitigation: acceptable for a personal portfolio; can add later if needed.
- **Hardcoded content** → Content changes require code edits. Mitigation: this is intentional per non-goals; keeps complexity low.
