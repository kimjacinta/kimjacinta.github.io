## Why

The portfolio site has multiple layout and visual issues on mobile screens. The hero photo and floating card overflow, the timeline progress bar is misaligned, the mountain background is pixelated on small screens, and the node visualization in Tech Stack gets cut off. These issues make the site look broken on phones.

## What Changes

- **Hero section**: Scale down photo and reposition the "Building things that matter" floating card so it doesn't overflow on mobile
- **Professional Path (timeline)**: Fix the progress bar alignment on mobile and ensure cards stack properly
- **Mountain background**: Replace `background-attachment: fixed` (causes pixelation on mobile) with scroll, and improve sizing
- **Tech Stack node visualization**: Make nodes responsive so they don't get cut off on small screens

## Capabilities

### New Capabilities
- `mobile-layout`: Responsive layout fixes across Hero, Timeline, Tech Stack, and background sections for small screens

### Modified Capabilities
<!-- None -->

## Impact

- **Modified files**: `src/components/Hero.tsx`, `src/components/ProfessionalPath.tsx`, `src/components/TechnicalEcosystem.tsx`, `src/index.css`
- **No new dependencies**
- **No breaking changes** — desktop layout remains unchanged
