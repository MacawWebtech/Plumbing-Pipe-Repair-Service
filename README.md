# PipeCare Plumbing – Website Template

## Run
Open `index.html` in a browser, or serve the folder (`python3 -m http.server`). No build step, no dependencies (Google Fonts only).

## Structure
- `index.html` / `pages/*.html` – each page shares the same header/footer markup.
- `assets/css/style.css` – styles; colors are CSS variables in `:root`.
- `assets/css/dark-mode.css` – dark theme (system preference + toggle, saved as `pc-theme`).
- `assets/css/rtl.css` – RTL extras (layout uses logical CSS properties; toggle saved as `pc-dir`).
- `assets/js/main.js` – edit the `S` array (services/prices) and `P` object (problem finder); booking form validation.

## Customize
- Phone/email: search & replace `+15550100`, `+1 555 0100`, `hello@example.com`.
- Images: add files to `assets/images/` and replace the emoji/gradient hero in the page HTML.
- Forms: in `main.js`, replace the `setTimeout` in the submit handler with a `fetch` to Formspree/Netlify Forms.
- Maps / newsletter / booking calendar / payments: not wired yet; add embeds where needed.
- Domain: replace `https://example.com` in canonical tags, `sitemap.xml`, `robots.txt`.

## Not included yet
Photos; WebP assets; Bootstrap; Google Maps embed; maintenance packages on Pricing.

## Design (v3)
- **Home 1 · Classic** (`index.html` / `pages/home-1.html`): light hero with photo + floating badges, feature strip, photo service cards, about collage, emergency band, 4-step process, problem finder, reviews, plans, recent work, FAQ, service areas.
- **Home 2 · Modern** (`pages/home-2.html`): dark hero with quick-booking form + stat bar, scrolling service ticker, quick-diagnosis grid, bento services, emergency timeline, "why act fast" stats, postcode checker, featured review, tips, two-column FAQ, big call CTA.
- Fonts: Outfit (headings) + DM Sans (body). Brand colours are CSS variables at the top of `style.css`.
- Icons are inline SVG (no emoji, no icon library). Shared top bar, header and footer are on every page.
- Photos are Unsplash links – swap for your own; each photo box shows a gradient if an image fails to load.
- v3.1: photo avatars + testimonials, dark “How it works” cards, photo-background CTAs, live Google Maps embeds (change `q=New+York,+NY` in the iframes to your address), tighter section spacing.
- v3.2: header “Pages” menu removed (Blog is now a direct link), team photos + redesigned About page (new “Our guarantee” section), redesigned Emergency page (uses the same photo banner as About), pricing-card contrast fix.

## Changelog
3.0.0 – Full visual redesign, two distinct home pages, new header/footer, SVG icons, Pages menu.
1.0.0 – Initial template.
