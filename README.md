# Yarra Vista

Yarra Vista is a Vue 3 + Vite multi-page style web experience with:

- Explore page (`/`)
- Map page (`/map`)
- Compare page (`/compare`)

## Local development

```bash
npm install
npm run dev
```

## One-click deploy (GitHub Pages)

This repo includes an automatic deploy workflow:

- file: `.github/workflows/deploy-gh-pages.yml`
- trigger: push to `main` (and manual run)
- output: static site deployed to GitHub Pages

### First-time setup

1. Go to **GitHub repo → Settings → Pages**
2. In **Build and deployment**, set:
   - **Source**: `GitHub Actions`
3. Merge this branch to `main` (or run workflow manually on `main`)

After deployment, your site URL will be:

- `https://<your-github-username>.github.io/<repo-name>/`

For this repository, that is expected to be:

- `https://yche0808.github.io/frontend/`
