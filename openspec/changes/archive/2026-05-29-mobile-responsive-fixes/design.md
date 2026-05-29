## Context

The site uses Tailwind CSS v4 with responsive utilities (sm/md/lg breakpoints). Most components use a 12-column grid with `lg:` breakpoints for desktop layout. Mobile issues stem from desktop-first sizing, absolute positioning that doesn't adapt, and a CSS property (`background-attachment: fixed`) that's broken on mobile browsers.

## Goals / Non-Goals

**Goals:**
- All sections render cleanly on 375px–430px wide screens (iPhone SE through iPhone Pro Max)
- No horizontal overflow or content clipping on mobile
- Mountain background renders sharply on mobile
- Desktop layout remains unchanged

**Non-Goals:**
- Redesigning the layout for mobile (just fixing what's broken)
- Adding new mobile-specific features or interactions
- Tablet-specific breakpoints (existing md: breakpoint handles this)

## Decisions

### 1. Mountain background: remove `background-attachment: fixed` on mobile

**Choice**: Use a media query to set `background-attachment: scroll` below 768px.

**Rationale**: Mobile browsers (especially iOS Safari) don't support `background-attachment: fixed` properly — they render it as a tiny stretched image, causing pixelation. Using `scroll` fixes this with no visual downside on mobile.

### 2. Hero floating card: reposition on mobile

**Choice**: Hide or reposition the "Building things that matter" card on small screens using responsive utility classes.

**Rationale**: The card is positioned with `absolute bottom-10 -right-16` which overflows the viewport on mobile. Moving it below the photo or hiding it prevents layout breakage.

### 3. Node visualization: switch from absolute positioning to flow layout on mobile

**Choice**: On small screens, render nodes as a wrapped flex/grid layout instead of absolute-positioned floating elements.

**Rationale**: Absolute positioning with percentage-based coordinates causes nodes to overlap and get cut off on narrow screens. A flow layout ensures all nodes are visible.

### 4. Timeline progress bar: fix left positioning on mobile

**Choice**: Align the progress bar with the mobile card layout (left-aligned instead of center).

**Rationale**: On mobile the timeline cards stack full-width without the center line, but the progress bar still uses `left: 50%` positioning. It needs to match the mobile layout or be hidden.

## Risks / Trade-offs

- [Node visualization loses spatial character on mobile] → Acceptable since readability matters more than aesthetic on small screens
- [Floating card hidden on mobile] → Users still see the main content; the card is decorative
