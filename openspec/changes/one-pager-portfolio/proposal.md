## Why

The project needs a polished one-page portfolio website for Kim, a software engineer at Rio Tinto. The site will showcase professional experience, technical skills, and projects — serving as a personal brand presence with an "Alpine Eucalyptus" design system that fuses Swiss precision with Australian warmth.

## What Changes

- Implement the full one-pager with 5 sections: Hero/About, Professional Path (timeline), Technical Ecosystem, Projects, and Contact
- Configure Tailwind CSS with the Alpine Eucalyptus design tokens (colors, typography, spacing, border radii)
- Add glassmorphism effects, scroll-based animations, and a floating navigation bar
- Include responsive layouts (12-column grid on desktop, single-column on mobile)
- Integrate Google Fonts (Hanken Grotesk + Inter) and Material Symbols icons

## Capabilities

### New Capabilities
- `hero-section`: Full-screen hero with animated status badge, large headline, photo with HUD-style frame, and floating glass card
- `professional-path`: Timeline section with alternating cards showing career journey (Swisscom → Zetron → Full Stack → Rio Tinto) with scroll-driven progress line
- `technical-ecosystem`: Skills grid with glass cards, tech chips, and an interactive node visualization showing the tech stack
- `projects-showcase`: Project cards in varied layouts (wide, accent, glass, dark) highlighting SAP Suite, AI-SDD, JSON Forms Engine, and C&C v2
- `contact-footer`: Contact CTA section with email link and CV download, plus footer with social links
- `design-system`: Tailwind configuration with Alpine Eucalyptus tokens, custom CSS utilities (glassmorphism, animations, blueprint grid, HUD borders)
- `navigation`: Fixed top nav with backdrop blur on scroll, responsive with mobile menu toggle

### Modified Capabilities

## Impact

- Replaces default Vite React boilerplate with full portfolio implementation
- Adds Tailwind CSS as a dependency (currently using CDN in reference — will use proper Vite plugin)
- Adds Google Fonts and Material Symbols via CDN links
- All changes are self-contained within this single-page app
