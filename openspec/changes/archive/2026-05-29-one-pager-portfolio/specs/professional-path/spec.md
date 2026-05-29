## ADDED Requirements

### Requirement: Timeline layout with alternating cards
The system SHALL display career history as a vertical timeline with cards alternating left and right on desktop, and stacked on mobile. A vertical center line connects the entries.

#### Scenario: Desktop alternating layout
- **WHEN** the viewport is ≥768px
- **THEN** timeline entries alternate between left-aligned and right-aligned relative to a center vertical line, with dot indicators on the line

#### Scenario: Mobile stacked layout
- **WHEN** the viewport is <768px
- **THEN** all timeline cards stack vertically in a single column

### Requirement: Career entries displayed
The system SHALL show 4 career entries: Rio Tinto (Full-Stack Software Engineer, Feb 2024-Present), Zetron (Software Engineer Intern, Jan 2023-May 2023), Swisscom (Management Assistant, Enterprise Architecture & IT Clouds, Aug 2018-Nov 2019), and Swisscom (Business Administration Apprentice, Aug 2015-Jul 2018).

#### Scenario: All entries rendered
- **WHEN** the Professional Path section is visible
- **THEN** it displays all 4 career entries with company name, role title, date label, and description text in glass-panel cards

### Requirement: Scroll-driven progress line
The system SHALL animate a progress line along the timeline center that fills based on scroll position through the section.

#### Scenario: Progress fills on scroll
- **WHEN** the user scrolls through the timeline section
- **THEN** a primary-colored line with glow effect progresses from 0% to 100% height as the section scrolls into and through the viewport

### Requirement: Section header
The system SHALL display "My Journey" label and "How I Got Here." headline above the timeline, with a local alpine background image (public/mountain.png) and subtle blur overlay.

#### Scenario: Header rendered with background
- **WHEN** the Professional Path section renders
- **THEN** it shows the section label, headline, and has a local mountain background image with white overlay and blur
