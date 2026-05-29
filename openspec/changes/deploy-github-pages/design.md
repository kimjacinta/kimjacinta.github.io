## Context

This is a Vite + React + TypeScript portfolio site (`kimcsoka-portfolio`) hosted on GitHub at `kimjacinta/portfolio-kimcsoka`. The site builds to a static `dist/` folder. It needs to be publicly accessible via GitHub Pages.

## Goals / Non-Goals

**Goals:**
- Automated deployment to GitHub Pages on every push to `main`
- Zero-config for the developer after initial setup — push and it's live
- Correct asset path resolution under the GitHub Pages URL

**Non-Goals:**
- Custom domain configuration (can be added later)
- Preview deployments for pull requests
- Build caching or optimization beyond what GitHub Actions provides by default

## Decisions

### 1. Deployment method: GitHub Actions (not branch-based)

**Choice**: Use GitHub Actions workflow with `actions/deploy-pages` instead of deploying from a `gh-pages` branch.

**Rationale**: The Actions-based approach is GitHub's recommended method, keeps the repo clean (no build artifacts in git history), and provides build logs in the Actions tab. Branch-based deployment requires pushing built files to a branch, which pollutes history.

### 2. Rename repository to `kimjacinta.github.io`

**Choice**: Rename the repo so it becomes a GitHub Pages "user site" served at the root (`https://kimjacinta.github.io`).

**Rationale**: User sites are served at the root path, so no `base` path configuration is needed in Vite (defaults to `'/'`). This gives a cleaner URL without the repo name as a subdirectory.

### 3. Workflow trigger: push to main only

**Choice**: Trigger deployment only on push to `main`, not on PRs or other branches.

**Rationale**: Simplest setup for a personal portfolio. No need for staging environments or preview deployments.

## Risks / Trade-offs

- [Repo name is special] → The name `kimjacinta.github.io` is the user's one allowed user-site repo. If it's already taken by another repo, that must be renamed first. Mitigation: check before renaming.
- [Remote URL changes] → After rename, the local git remote must be updated. Mitigation: include as a task step.
- [GitHub Pages must be enabled] → The workflow will fail until Pages is enabled in repo settings with source "GitHub Actions". Mitigation: document this in the tasks as a manual step.
