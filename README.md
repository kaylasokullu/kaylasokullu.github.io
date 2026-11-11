# kayla-sok-website ✿

My portfolio as a digital collage board — lace, ticking stripes, bows, polaroids, postcards —
with liquid-glass pop-ups. Next.js (static export), hosted on GitHub Pages.

## How the site is organized
The board (light grey ticking stripes · baby blue · butter yellow) has three zones — **about me** (pennant, photo, note), **work** (index cards on the ribbon,
off-the-clock card, ace = tech stack, Western pennant) and **projects** (postcards, envelope = contact,
résumé = PDF). Click anything for a glass pop-up. Below the board, everything is listed neatly
(experience timeline, projects, leadership, education, skills, about).

Scroll effects: items pin on at load, the board tilts back as you scroll, sections slide in,
the timeline ribbon "sews" itself down, and the dock highlights where you are.

## Update content
Edit **`content/site.js`** (text, links, projects, photos). Put your résumé at `public/resume.pdf`.

**Add your photo:** put it in `public/board/` (e.g. `kayla.jpg`, ~800px wide) and set
`photo: "/board/kayla.jpg"` in `profile` in `content/site.js`.

**Rearrange the board:** run the site, open `http://localhost:3000/?edit`, drag things where you want,
click **copy layout** in the dock, and paste it over everything in `content/layout.js`.
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
| `content/site.js` | All the text, links and photos |
| `content/layout.js` | Where each item sits on the board |
| `app/globals.css` | Colors + glass settings at the top |
| `components/Board.js` | The board and every item on it |
| `components/Decor.js` | Bows, pearls, teddy, hearts — swap for your own Figma SVG exports |
| `components/Details.js` | The neat section below the board |
| `components/ScrollFx.js` | Scroll animations |
| `components/Cursor.js` | Trailing cursor ring (cursor drawings are at the bottom of `app/globals.css`) |
| `public/resume.pdf` | Résumé PDF linked from the site |
| `.github/workflows/deploy.yml` | Auto-deploy to GitHub Pages |
