# Vikas Gupta — Personal Site

Static personal website for Vikas Gupta: policy commentator, AI governance
writer, and author of the *AI Trilogy* and *AI and India Trilogy*.

## Structure

```
index.html            Single-page site (hero, about, works, focus, speaking, contact)
assets/css/styles.css  Styles
assets/js/main.js      Nav scroll state + scroll-in animations
assets/images/         Book cover art
assets/favicon.svg     Site favicon
```

## Running locally

No build step — it's plain HTML/CSS/JS. Serve the directory with any static
file server, e.g.:

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploying

The site is a static bundle and can be hosted as-is on GitHub Pages, Netlify,
Vercel, or any static host — just point it at the repository root.

## Content

- **Contact**: `hello@vikasgupta.world` and LinkedIn are wired as real links.
- **Buy on Amazon** links on each book are placeholders (`#`) — replace with
  the live Amazon listing URLs when available.
- **Speaking & Media** section ships with placeholder cards; replace them
  with real talks, articles, and press mentions as they come in.
