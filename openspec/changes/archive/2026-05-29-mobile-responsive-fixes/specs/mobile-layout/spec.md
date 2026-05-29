## ADDED Requirements

### Requirement: Hero section fits mobile viewport without overflow
The Hero section SHALL render without any horizontal overflow or clipped content on screens 375px and wider.

#### Scenario: Photo and floating card on mobile
- **WHEN** the site is viewed on a screen narrower than 768px
- **THEN** the hero photo scales to fit within the viewport and the floating card does not extend beyond the screen edge

### Requirement: Mountain background renders sharply on mobile
The Professional Path section background SHALL render without pixelation on mobile devices.

#### Scenario: Background on iOS Safari
- **WHEN** the site is viewed on a mobile browser
- **THEN** the mountain background image displays at proper resolution without stretching or pixelation artifacts

### Requirement: Timeline progress bar aligns centered on all screen sizes
The timeline line, progress bar, and dots SHALL be centered horizontally on both mobile and desktop screens.

#### Scenario: Progress bar position on mobile
- **WHEN** the site is viewed on a screen narrower than 768px
- **THEN** the timeline line, animated progress bar, and entry dots are centered horizontally within the timeline container

#### Scenario: Progress bar position on desktop
- **WHEN** the site is viewed on a screen 768px or wider
- **THEN** the timeline line, animated progress bar, and entry dots remain centered with cards alternating left and right

### Requirement: Mobile navigation menu is functional
The hamburger menu button SHALL open a full-screen navigation overlay on mobile screens.

#### Scenario: Opening the mobile menu
- **WHEN** a user taps the hamburger menu icon on a screen narrower than 768px
- **THEN** a full-screen overlay appears with all navigation links and body scroll is disabled

#### Scenario: Closing the mobile menu via link
- **WHEN** a user taps a navigation link within the mobile menu overlay
- **THEN** the overlay closes, body scroll is re-enabled, and the page scrolls to the target section

#### Scenario: Closing the mobile menu via close button
- **WHEN** a user taps the close (X) button in the mobile menu overlay
- **THEN** the overlay closes and body scroll is re-enabled

### Requirement: Tech Stack node visualization is fully visible on mobile
All nodes in the Tech Stack visualization SHALL be visible and readable on mobile screens without being clipped.

#### Scenario: Nodes on narrow screen
- **WHEN** the site is viewed on a screen narrower than 768px
- **THEN** all node labels are fully visible and none are cut off by the container boundaries
