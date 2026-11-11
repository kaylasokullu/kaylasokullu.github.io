# kayla-sok-website ✿

Personal site — Next.js (static export), liquid-glass design, hosted on GitHub Pages.

## Update content
Edit **`content/site.js`** (projects, experience, hobbies, links). Put your résumé at `public/resume.pdf`.
Then:
```bash
git add -A && git commit -m "Update projects" && git push
```
Every push to `main` rebuilds and redeploys the site (~1–2 min) and counts as GitHub activity.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## First-time GitHub setup
1. On github.com → **New repository**. Name it **`<your-username>.github.io`** so the site lives at `https://<your-username>.github.io` (any other name works too, it'll be at `/<repo-name>`). Leave it empty (no README).
2. In this folder:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. Repo → **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Check the **Actions** tab — when the run goes green, your site is live.

Optional custom domain: Settings → Pages → Custom domain, then add the DNS records GitHub shows.

## Where things live
| File | What it is |
|---|---|
| `content/site.js` | All the text and links |
| `app/globals.css` | Design tokens (colors, glass, radius) at the top — mirror your Figma variables here |
| `components/Doodles.js` | Doodle SVGs — replace with your own Figma exports |
| `app/page.js` | Page layout / sections |
| `.github/workflows/deploy.yml` | Auto-deploy to GitHub Pages |
