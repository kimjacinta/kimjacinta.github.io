## 1. Rename Repository

- [ ] 1.1 Rename repo from `portfolio-kimcsoka` to `kimjacinta.github.io` on GitHub (Settings → General → Repository name)
- [x] 1.2 Update local git remote URL to `https://github.com/kimjacinta/kimjacinta.github.io.git`

## 2. Create GitHub Actions Workflow

- [x] 2.1 Create `.github/workflows/deploy.yml` with build and deploy steps
- [x] 2.2 Configure workflow permissions (pages write, id-token write)
- [x] 2.3 Use `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages`

## 3. Verify and Enable

- [ ] 3.1 Enable GitHub Pages in repository settings (Source: GitHub Actions)
- [ ] 3.2 Push changes to `main` branch
- [ ] 3.3 Verify site is live at `https://kimjacinta.github.io/`
