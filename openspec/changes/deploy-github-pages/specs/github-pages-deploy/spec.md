## ADDED Requirements

### Requirement: Automated deployment on push
The system SHALL automatically build and deploy the site to GitHub Pages when code is pushed to the `main` branch.

#### Scenario: Successful deployment after push
- **WHEN** a developer pushes a commit to the `main` branch
- **THEN** GitHub Actions builds the Vite app and deploys the output to GitHub Pages within 5 minutes

#### Scenario: Build failure prevents deployment
- **WHEN** a developer pushes code that fails TypeScript compilation or Vite build
- **THEN** the deployment does not proceed and the existing live site remains unchanged

### Requirement: Correct asset path resolution
The site SHALL resolve all assets (JS, CSS, images) correctly when served from the GitHub Pages subdirectory path.

#### Scenario: Assets load correctly at root URL
- **WHEN** a user visits `https://kimjacinta.github.io/`
- **THEN** all JavaScript bundles, CSS files, and images load successfully with no 404 errors

### Requirement: Workflow uses GitHub-provided permissions
The workflow SHALL use the built-in `GITHUB_TOKEN` with minimal permissions (pages write, id-token write) and SHALL NOT require additional secrets or tokens.

#### Scenario: No additional secrets needed
- **WHEN** the workflow runs in any fork or the original repository
- **THEN** it succeeds using only the automatically-provided `GITHUB_TOKEN` without manual secret configuration
