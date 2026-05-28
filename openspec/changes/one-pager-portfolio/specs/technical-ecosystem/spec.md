## ADDED Requirements

### Requirement: Skills overview with category grid
The system SHALL display a 2-column grid of skill categories (Cloud & DevOps, Backend, Mobile, Frontend) as glass cards with icons, titles, and descriptions, alongside a text introduction and tech chips.

#### Scenario: Skill cards rendered
- **WHEN** the Tech Stack section is visible
- **THEN** it displays 4 skill category cards in a 2x2 grid with Material Symbols icons, heading, and description text

#### Scenario: Tech chips displayed
- **WHEN** the section renders
- **THEN** it shows technology chips for "React", "TypeScript", "React Native", ".NET MAUI", "ASP.NET Core", "Azure", "C#", "SQL Server", "Python", "Azure DevOps" in glass-panel pill style

### Requirement: Values and ways of working node visualization
The system SHALL display a spatial visualization area with floating value/soft-skill nodes (Agile/Scrum, Ownership, Adaptability, CI/CD, Clean Architecture, Cross-functional, Problem-first) positioned absolutely with hover-lift effects.

#### Scenario: Nodes positioned and interactive
- **WHEN** the node visualization area renders
- **THEN** it displays 7 value nodes at varied positions with hover-lift animations, blueprint grid background, and varied visual styles (glass-panel and primary filled)

### Requirement: Section header and description
The system SHALL display "The Toolkit" label, "Tech Stack" headline, and a description paragraph about versatility across web, mobile, and cloud.

#### Scenario: Header content rendered
- **WHEN** the Tech Stack section renders
- **THEN** it shows the label, two-line headline, and description in a left-aligned layout on desktop (5 of 12 columns)

### Requirement: Neural grid background
The system SHALL display a subtle SVG dot-and-line grid pattern behind the section content with reduced opacity and radial fade mask.

#### Scenario: Background pattern visible
- **WHEN** the section renders
- **THEN** a repeating SVG pattern of dots and crosshairs at 5% opacity is visible behind content with a radial gradient mask
