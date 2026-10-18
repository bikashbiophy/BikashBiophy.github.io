# Bikash's Biophysicist Personal Website

## What this is
Personal academic website for Bikash (biophysicist), live at github.com/bikashbiophy/Webpage
(GitHub Pages, branch `main`). Plain static site: `index.html` (layout) + `data.js` (all content).
No build or regeneration step.

## Files
- `data.js` — ALL CONTENT. Almost every edit happens here. Upload it to GitHub after editing.
- `index.html` — layout, CSS, SEO meta, schema.org JSON-LD, and the code that renders data.js.
  Rarely needs to change. Do not put content in it.
- `sitemap.xml`, `robots.txt`, `google1f4b6949fc50eaf8.html` — SEO/Search Console files, unchanged.
- `assets/` — images (gallery JPEGs, garden photos, bikash-portrait.jpg for social cards).
- `Biophysicist Site.dc.html` — OLD source (retired, kept only as a backup). Do not edit.
  Older variants (`- Mini`, `- VDU version`) are also not the live site.

## Where things live in data.js (edit by key name)
- Basics: `name`, `degree`, `tagline`, `email`, `updated` (footer "Updated ..." text), `copyrightYear`, `introHtml`
- Hero side box: `portrait`, `role`, `affiliation`, `formerly`
- Icons/links: `social` (orcid, linkedin, bluesky, x, scholar; `hero:true` shows it under the intro)
- Lead paragraphs: `researchLeadHtml`, `peopleLeadHtml`, `outreachLeadHtml`; footer text: `footer`
- Lists, newest first: `pubs`, `chapters`, `news` (conferences, `date` = "Mon YYYY"), `path`, `experience`
- Other lists: `focus`, `education`, `teaching`, `awards`, `skills`, `memberships`, `links`, `gallery`, `garden`, `outreach`
- Publication and conference numbers, the "16 peer-reviewed articles" count, and the "01, 02..." card numbers are automatic.
- Fields ending in `Html` may hold `<em>` and `<a>` tags. All other fields are plain text.

## Things that live in index.html, not data.js
- Page `<title>`, meta description, Open Graph tags, and the schema.org `jobTitle`/`worksFor`/`sameAs`.
  If the job or affiliation changes, update these too.
- Section headings, nav links, and the social icon artwork/hover colours.

## Design system
- Fonts: Spectral (serif, headings) + Libre Franklin (sans, labels/UI) + JetBrains Mono (metadata/dates).
- Palette: warm off-white/cream background, dark charcoal text (#1c1a17 / #211e1a), muted olive-gray secondary text (#6b665d), teal accent (#2f6f6a).
- Tone: human-written, plain, no AI-sounding filler, no em-dash overuse.
- Publications/Conferences: year headings in left column, entries at matching right margin.

## Current content highlights
- Guest faculty: Vikram Dev University, Jayapur, Odisha, "Aug 2026 – present".
- Ph.D.: IIT (ISM) Dhanbad, 2015–2020, supervisor Prof. Umakanta Tripathy. M.Phil. 2013–2014 with Prof. Naresh Chandra Mishra.
- Teaching: B.Sc. Quantum Mechanics and Application, Digital Systems (Minor), two practicals. M.Sc./PG Indian Knowledge System in Physics.
- Google Search Console verified; sitemap and robots ready.

## Workflow for future edits (keep token cost low)
1. Give a specific instruction: which key in data.js, what to add or change (old value → new value).
2. Batch several changes into one message. Start a fresh chat per batch.
3. Edit `data.js` with a targeted edit. Never rewrite the whole file or open `index.html` for a content change.
4. Check the page loads (open index.html next to the assets folder, or test with a headless browser).
5. Upload only the changed file(s) to github.com/bikashbiophy/Webpage. A text-only change means just `data.js`.
   New images go into `assets/`. Re-upload `sitemap.xml` only if it changed.

## Prompt to paste in a new chat/project
"This project has a CLAUDE.md with full context on my personal website. Open `data.js`.
I want to change: [key and exact change, e.g. 'in news, add at the top: Oct 2026, <text>, Oral'].
Edit data.js only and tell me when it's ready to upload."
