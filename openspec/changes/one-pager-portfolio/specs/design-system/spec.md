## ADDED Requirements

### Requirement: Tailwind v4 design tokens configured
The system SHALL configure Tailwind CSS v4 with the Alpine Eucalyptus color palette, typography scale, spacing units, and border radii as defined in DESIGN.md via `@theme` in CSS.

#### Scenario: Colors available as utilities
- **WHEN** a component uses class `bg-primary`
- **THEN** it renders with background color `#5d5699`

#### Scenario: Typography scale applied
- **WHEN** a component uses class `text-headline-xl`
- **THEN** it renders with Hanken Grotesk at 64px/72px, weight 700, letter-spacing -0.02em

### Requirement: Custom CSS utilities defined
The system SHALL provide custom CSS classes for glassmorphism (`glass-panel`), blueprint grid (`blueprint-grid`), HUD borders (`hud-border`), data stream animation (`data-stream`), hover lift (`hover-lift`), reveal animation (`reveal`/`reveal.active`), and floating animation (`animate-float`).

#### Scenario: Glass panel styling
- **WHEN** an element has class `glass-panel`
- **THEN** it renders with `rgba(255,255,255,0.65)` background, 12px backdrop blur, and 1px border at `rgba(150,143,214,0.2)`

#### Scenario: HUD border corner accents
- **WHEN** an element has class `hud-border`
- **THEN** it displays 10px corner accents in primary color at top-left and bottom-right via `::before` and `::after` pseudo-elements

### Requirement: Google Fonts loaded
The system SHALL load Hanken Grotesk (weights 600-900) and Inter (weights 400-600) from Google Fonts CDN, plus Material Symbols Outlined icon font.

#### Scenario: Fonts available on page load
- **WHEN** the page loads
- **THEN** the document `<head>` contains `<link>` elements pointing to Google Fonts for Hanken Grotesk, Inter, and Material Symbols Outlined
