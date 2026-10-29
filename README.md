# matyasbalcar.dev

A black-and-white personal portfolio for Matyáš Balcar, with English and Czech content. Plain HTML, CSS, and JavaScript; no dependencies, installation, or build step.

## Run locally

From this folder, run:

```powershell
node serve.mjs
```

Open **http://localhost:3000**. `npm start` and `npm run dev` run the same server. Stop it with Ctrl+C. To use another port in PowerShell:

```powershell
$env:PORT = '3001'
node serve.mjs
```

You can also open `index.html` directly. Clipboard access depends on the browser; the site includes a selection fallback. The local server binds to loopback only and serves an allowlist of public files.

## Site files

- `index.html` — portfolio content, project illustrations, navigation, contact, and metadata.
- `styles.css` — responsive monochrome design, mobile layout, reduced-motion behavior, and print styles.
- `app.js` — English/Czech translations, project dialogs, email copying, and the routing experiment.
- `resume.html` — English/Czech résumé with A4 print styling. Use **Print / save PDF** to download a PDF through the browser.
- `assets/favicon.svg` — original vector monogram.
- `assets/social-card.png` — social sharing image rendered from the site.
- `robots.txt`, `sitemap.xml` — search engine discovery for the intended domain.
- `serve.mjs`, `package.json` — optional dependency-free local preview server.

## Publishing later

Upload these public files to a static web host, preserving the folder structure:

```text
index.html
styles.css
app.js
resume.html
robots.txt
sitemap.xml
assets/
```

Set the host's publish directory to the folder containing `index.html`; no build command is required. `serve.mjs` is for local preview, not a production server. Domain and DNS setup are left to you. Canonical URLs, the sitemap, and sharing metadata already use `https://matyasbalcar.dev`.

The site uses system fonts and local assets. There are no analytics, cookies, contact-form services, or remote runtime requests. Language choice is stored locally when the browser allows it. The contact link opens the visitor's email application.

## Content and project sources

Personal details, employment dates, education, technologies, and CodeDuel capabilities come from the supplied CV. No clients, user counts, achievements, or deployment claims have been invented.

- [GitHub profile](https://github.com/MatyasBalcar)
- [Gridline source and README](https://github.com/MatyasBalcar/robot-solver)
- [CodeDuel source and README](https://github.com/matyasbalcar/codeduel)

Project visuals are original HTML/CSS illustrations, labeled below each preview. They are not screenshots or live applications. The small homepage experiment is a separate JavaScript implementation of prioritized space-time A* with cell and edge reservations. It validates the complete schedule for cell conflicts and head-on swaps. It is not the full Gridline Java simulator, has no inventory or pickup/delivery model, and does not implement CBS. Three predefined maps keep the experiment bounded.

## Editing

Most English text lives in `index.html`; Czech translations and bilingual project notes are in `app.js`. The résumé's two language sections are in `resume.html`. Keep these in sync when updating your experience. Append `?lang=en` or `?lang=cs` to either page to choose its initial language explicitly. Animation pauses for reduced-motion preferences, when the canvas is offscreen, and when the tab is hidden; it can also be paused manually.
