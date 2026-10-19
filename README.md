# Anmol Saluja — Data & Business Analytics Portfolio

Personal portfolio for Data Analyst, Business Analyst and Business Intelligence opportunities.

**Website:** https://anmol1722.github.io/

The homepage features Laptop Intelligence, followed by Tableau restaurant analytics, pricing strategy in R and PetFinder adoption modelling. It includes experience, education, a short About section, visual evidence and a downloadable résumé.

## Run locally

```sh
python3 -m http.server 8788 --bind 127.0.0.1
```

Open http://localhost:8788/. No build step, API key, database or Node installation is required.

## Make updates

- `index.html`: homepage structure, skill badges, navigation and application screenshots.
- `assets/content.js`: profile, contact details, skills, experience, education and project descriptions.
- `assets/hiring.css`: typography and shared visual hierarchy.
- `assets/gallery.js` and `assets/gallery.css`: shared full-image viewer.
- `assets/Anmol-Saluja-Resume.pdf`: downloadable résumé; keep it synchronized with profile changes.

Push changes to `main` to publish them automatically. GitHub Pages uses **Deploy from a branch → main → /(root)**. `.nojekyll` keeps the existing HTML, CSS, JavaScript and assets intact. Only this static portfolio is hosted here; the live Laptop Intelligence application runs separately on Oracle Cloud.

The original local portfolio checkout can still be used for content edits and résumé generation. Copy its updated `dist/` contents to this repository, review the diff and push to update the public site.

## Project evidence

Project images are selected extracts from the supplied reports and presentation. Three Tableau screenshots use SVG viewports to display only the chart area; source pixels are preserved. The pricing chart is a labelled recreation of reported coefficients. Source notes and asset hashes are in `assets/projects/evidence-sources.json`.

Laptop results describe a historical research dataset and the project's documented benchmarks. Matching consistency is a guard audit, sentiment accuracy uses star-derived labels, and price comparisons apply to the priced subset. The sentiment and RAG checks are not guarantees of production accuracy.

## Credits

Bundled fonts include Manrope and Instrument Serif under their included SIL Open Font License notices in `assets/fonts/licenses/`.

© Anmol Saluja. Project materials are presented for portfolio review.
