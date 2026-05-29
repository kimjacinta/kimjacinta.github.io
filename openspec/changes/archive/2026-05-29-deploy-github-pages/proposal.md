## Why

The portfolio site is built but not publicly accessible. Hosting on GitHub Pages provides free, reliable hosting directly from the existing GitHub repository with automatic deployments on push.

## What Changes

- Rename the GitHub repository to `kimjacinta.github.io` so the site is served at the root URL
- Add a GitHub Actions workflow that builds and deploys the Vite site to GitHub Pages on push to `main`
- Enable GitHub Pages in the repository settings (source: GitHub Actions)

## Capabilities

### New Capabilities
- `github-pages-deploy`: Automated CI/CD pipeline that builds the Vite/React app and deploys to GitHub Pages on every push to main

### Modified Capabilities
<!-- No existing capabilities are modified -->

## Impact

- **New file**: `.github/workflows/deploy.yml` — GitHub Actions workflow
- **Repository rename**: `portfolio-kimcsoka` → `kimjacinta.github.io`
- **Repository settings**: GitHub Pages must be enabled with source set to "GitHub Actions"
- **Dependencies**: None added; uses standard GitHub-provided actions
