# Vikas Gupta — Personal Site

Static personal website for Vikas Gupta: policy commentator, AI governance
writer, and author of the *AI Trilogy* and *AI and India Trilogy*.

## Structure

```
index.html     Single-page site (hero, works, about, focus, speaking, contact)
styles.css     Styles
script.js      Nav scroll state + scroll-in animations
images/        Book cover art
favicon.svg    Site favicon
CNAME          GitHub Pages custom domain (author.vikasgupta.world)
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
- **The AI Trilogy** and **The AI and India Trilogy** link out to
  `aitrilogy.vikasgupta.world` and `aiimpact.vikasgupta.world`.
- **Speaking & Media** section ships with placeholder cards; replace them
  with real talks, articles, and press mentions as they come in.
