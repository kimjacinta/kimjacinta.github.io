## ADDED Requirements

### Requirement: Hero headline and introduction
The system SHALL display a full-screen hero section with "Hi, I'm Kim." headline (primary-colored italic on "I'm Kim."), a subtitle describing the role, and an "Available for new challenges" status badge with animated ping indicator.

#### Scenario: Hero content visible on load
- **WHEN** the page loads
- **THEN** the hero section shows the status badge, "Hi, I'm Kim." headline, role description paragraph, "Engineer @ Rio Tinto" label, "Explore my work" link, and location coordinates

### Requirement: Hero photo with decorative frame
The system SHALL display a profile photo on the right side (desktop) with decorative corner borders, HUD-style frame, and a floating glass card at the bottom of the image showing "Building things that matter." with a node status indicator.

#### Scenario: Photo and floating card on desktop
- **WHEN** the viewport is ≥1024px
- **THEN** the hero displays the profile image in a rounded container with corner accent borders and a floating animated glass panel overlay at the bottom showing "NODE_STATUS · ACTIVE", "Building things that matter.", and "Scalable systems, clean code, real impact."

### Requirement: Parallax background text
The system SHALL render a large vertical "ENGINEER" text in the background that translates vertically at 15% of scroll speed for a parallax effect.

#### Scenario: Background text moves on scroll
- **WHEN** the user scrolls the page
- **THEN** the vertical "ENGINEER" text shifts downward at 15% of the scroll distance

### Requirement: Hero responsive layout
The system SHALL use a 12-column grid on desktop (7 columns for text, 5 for photo) and stack vertically on mobile.

#### Scenario: Mobile stacking
- **WHEN** the viewport is <1024px
- **THEN** the hero content stacks with text above and photo below, both full-width
