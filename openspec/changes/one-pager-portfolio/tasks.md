## 1. Project Setup & Design System

- [x] 1.1 Install Tailwind CSS v4 (`@tailwindcss/vite`, `tailwindcss`) and configure the Vite plugin
- [x] 1.2 Configure design tokens in `src/index.css` using `@theme` — colors, typography, spacing, border radii from DESIGN.md
- [x] 1.3 Add custom CSS utilities (glass-panel, blueprint-grid, hud-border, data-stream, hover-lift, reveal, animate-float)
- [x] 1.4 Add Google Fonts links (Hanken Grotesk, Inter, Material Symbols Outlined) to `index.html`
- [x] 1.5 Clean out default Vite boilerplate from App.tsx, App.css, and index.css

## 2. Navigation Component

- [x] 2.1 Create `src/components/Navigation.tsx` with fixed navbar, logo, desktop links, and mobile menu button
- [x] 2.2 Implement scroll-based navbar transition (transparent → glass on scroll > 50px)

## 3. Hero Section

- [x] 3.1 Create `src/components/Hero.tsx` with status badge, headline, description, role label, and CTA link
- [x] 3.2 Add profile photo with decorative frame (corner borders, HUD border, shadow offset)
- [x] 3.3 Add floating glass card ("Clean Architecture" with node status)
- [x] 3.4 Implement parallax vertical "ENGINEER" background text

## 4. Professional Path Section

- [x] 4.1 Create `src/components/ProfessionalPath.tsx` with section header and alpine background
- [x] 4.2 Implement alternating timeline layout with 4 career entries (glass-panel cards)
- [x] 4.3 Add scroll-driven progress line animation along timeline center

## 5. Technical Ecosystem Section

- [x] 5.1 Create `src/components/TechnicalEcosystem.tsx` with section header, description, and tech chips
- [x] 5.2 Implement 2x2 skill category grid (Cloud Native, Systems Code, Integrations, Modern UI)
- [x] 5.3 Add node visualization area with 5 floating tech nodes, SVG connection lines, and blueprint grid background

## 6. Projects Section

- [x] 6.1 Create `src/components/Projects.tsx` with centered section header
- [x] 6.2 Implement SAP Integration Suite wide card (image + content, grayscale hover effect)
- [x] 6.3 Implement AI-Supported SDD accent card (primary bg, white text)
- [x] 6.4 Implement JSON Forms Engine glass card
- [x] 6.5 Implement Command & Control v2 dark card (image scale on hover)

## 7. Contact & Footer

- [x] 7.1 Create `src/components/Contact.tsx` with headline, description, email CTA button, and CV download link
- [x] 7.2 Create `src/components/Footer.tsx` with logo, tagline, social links, and copyright

## 8. Assembly & Scroll Behavior

- [x] 8.1 Wire all section components into App.tsx in correct order
- [x] 8.2 Implement global scroll handler for reveal animations (opacity + translateY on viewport entry)
- [x] 8.3 Verify responsive behavior at mobile and desktop breakpoints
