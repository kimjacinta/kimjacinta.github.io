## ADDED Requirements

### Requirement: Fixed navigation bar with scroll effect
The system SHALL render a fixed top navigation bar that transitions from transparent (height 80px) to glass-panel style (white/80 opacity, backdrop blur, shadow, height 64px) when the user scrolls past 50px.

#### Scenario: Nav transparent at top
- **WHEN** the page scroll position is 0
- **THEN** the navbar has height 80px with no background color or shadow

#### Scenario: Nav blurred on scroll
- **WHEN** the page scroll position exceeds 50px
- **THEN** the navbar shows white background at 80% opacity, backdrop blur, a subtle shadow, and reduces to 64px height

### Requirement: Navigation links
The system SHALL display navigation links to About, Experience, Stack, Projects sections and a "Let's Chat" CTA button on desktop viewports. On mobile, it SHALL display a menu icon button.

#### Scenario: Desktop nav links visible
- **WHEN** the viewport width is ≥768px
- **THEN** the nav shows links "About", "Experience", "Stack", "Projects" and a primary-colored "Let's Chat" button

#### Scenario: Mobile nav shows hamburger
- **WHEN** the viewport width is <768px
- **THEN** the nav shows only the logo and a menu icon button

### Requirement: Brand logo display
The system SHALL display a brand mark consisting of a purple circle with "K" initial and "KIM.EDIT" text in the navigation bar.

#### Scenario: Logo rendered
- **WHEN** the navigation bar renders
- **THEN** it displays a primary-colored circle with white "K" letter and adjacent "KIM.EDIT" text in bold tracking-tight style
