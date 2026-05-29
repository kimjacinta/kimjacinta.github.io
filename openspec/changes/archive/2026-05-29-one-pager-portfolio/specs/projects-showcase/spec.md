## ADDED Requirements

### Requirement: Project cards in mixed layout
The system SHALL display 4 project cards in a 12-column grid: SAP Integration Suite (8-col wide card with image), AI-Supported SDD (4-col primary-colored accent card), JSON Forms Engine (4-col glass card), Command & Control v2 (8-col dark card with image).

#### Scenario: All project cards rendered
- **WHEN** the Projects section is visible
- **THEN** it displays 4 distinct project cards with varying visual treatments (wide+image, accent-colored, glass-panel, dark+image)

### Requirement: SAP Integration Suite card
The system SHALL display a wide card with a left-side grayscale image (color on hover), "Enterprise Integration" label, project title, description, and Details/GitHub links.

#### Scenario: Image interaction
- **WHEN** the user hovers over the SAP card image
- **THEN** the image transitions from grayscale to full color over 700ms

### Requirement: AI-Supported SDD card
The system SHALL display a primary-colored card with science icon, title, description, "Python / GPT-4" tech tag, and GitHub link with an external link icon.

#### Scenario: Card styling
- **WHEN** the AI-SDD card renders
- **THEN** it uses primary background color, white text, and elevated shadow with primary tint

### Requirement: Command & Control v2 card
The system SHALL display a dark-background card with "In Progress" label, title, description, action icons, and a square image that scales on hover.

#### Scenario: Image hover scale
- **WHEN** the user hovers over the C&C v2 card
- **THEN** the contained image scales to 110% over 700ms

### Requirement: Section header centered
The system SHALL display "Archive 02" label, "Projects." headline, and description text centered above the cards grid.

#### Scenario: Header centered
- **WHEN** the Projects section renders
- **THEN** the section header is centered with max-width constraint and text-center alignment
