## ADDED Requirements

### Requirement: Contact CTA section
The system SHALL display a large "LET'S CONNECT." headline, invitation paragraph mentioning tech and animals, and a primary-colored email button ("Send me an email" linking to mailto:kimjacintasoka@gmail.com), centered on a white background with blueprint grid and data stream overlays.

#### Scenario: Contact section rendered
- **WHEN** the Contact section is visible
- **THEN** it shows the headline, description, and email CTA button with mail icon, all centered

#### Scenario: Email button links to mailto
- **WHEN** the user clicks "Send me an email"
- **THEN** it opens the default email client with `kimjacintasoka@gmail.com` as recipient

### Requirement: Footer with branding and social links
The system SHALL display a footer with the KIM.DEV logo, "Fullstack Software Engineer" tagline, social links (LinkedIn and GitHub as SVG icons), a "Download CV" text link, and a copyright notice.

#### Scenario: Footer content rendered
- **WHEN** the footer is visible
- **THEN** it displays logo, tagline, LinkedIn and GitHub SVG icons, Download CV link, and copyright text in a row layout on desktop

#### Scenario: Footer responsive layout
- **WHEN** the viewport is <768px
- **THEN** footer items stack vertically with appropriate spacing
