# Avedika — AI Data Services Platform

Production site: **https://ai.avedika.com** (Vercel subdomain). Parent site `avedika.com` is already live and independent.

Avedika is the AI data-services arm of avedika.com — a static marketing + recruitment site covering transcription, annotation, data collection, and audio/video recording services, plus a jobs board.

---

## 1. Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (`^18.3.1`) + TypeScript (`^5.6.3`) |
| Build tool | Vite `^6` (output: `dist/`, `npm run build` = `tsc -b && vite build`) |
| Routing | react-router-dom `^7` (`BrowserRouter`) |
| Styling | Tailwind CSS `^3.4` + Google Fonts (Inter, Instrument Serif) |
| Icons | lucide-react `^0.462` |
| Forms | Tally.so popup widget (external script, no backend) |
| Jobs content | Markdown files parsed at build time via `import.meta.glob` |
| Hosting / CDN | Vercel (static SPA) |
| Git / CI | GitHub (`cyrusyamir/ai-avedika`), Vercel Git integration (auto-deploy on push) |
| DNS | Porkbun (CNAME `ai` → `cname.vercel-dns.com`) |

**No backend, no database, no environment variables.** The site is a fully static SPA; all content lives in TypeScript constants or Markdown files.

---

## 2. Design Style

### Brand
- **Name:** Avedika (formerly Forma)
- **Tagline:** "Turning human input into valuable data"
- **Emails:** `contact.ai@avedika.com` (general), `info.ai@avedika.com` (jobs)
- **Logo:** inline SVG — a black geometric "A" built from two triangles (`src/components/Logo.tsx`)

### Typography
- Primary: **Inter** (300–700) — all body and headings
- Accent: **Instrument Serif (italic)** — used for the emphasized word in the hero headline ("*Valuable Data*")
- Loaded once via `@import` in `src/index.css`

### Color palette
- Background: white (`#fff`), off-white accent `#FDFCF9` (active mobile menu)
- Ink: black (primary buttons, headings, logo), gray-600/700 (body), gray-400/500 (muted)
- Links: blue-600
- Surfaces: `neutral-100` cards/chips, `bg-white` cards with `border-gray-200`
- Status: green-500 pulsing dot (under-construction banner)
- Glass: `bg-white/50` + `backdrop-blur-2xl` + `backdrop-saturate-150` + `border-white/25` (navbar pills, hero heading card)

### Shapes & rhythm
- Corner radii: `rounded-xl` (buttons/chips), `rounded-2xl`/`rounded-3xl` (cards/sections)
- Buttons: solid black bg / white text, `hover:bg-gray-800`; inverse (white on black) in the CTA section
- Cards: `shadow-sm`, `hover:shadow-lg` transition
- Job highlights: pill chips (`rounded-full bg-neutral-100 border-gray-200`)
- Consistent padding scale `p-3 → p-6` at `sm`/`md` breakpoints

### Layout & components
- **Home hero:** full-screen autoplay video loop (`public/hero_video.mp4`, muted, playsInline), overlay navbar + glass headline card, "Apply for job" CTA
- **Navbar:** frosted-glass pill containing logo + links ("Our story", "Expertise", "Apply for work"), "Domains" dropdown, "Start a project" button; mobile hamburger (black circle, active = `#FDFCF9` + 1px border)
- **UnderConstructionBanner:** home only, absolute top-center, pulsing green dot, dismissible
- **Footer:** horizontal/left-aligned two rows — logo + tagline, labeled emails, "Additional links" (Terms & Conditions, Privacy Policy), copyright row
- **Pages:** `/` Home, `/about`, `/jobs`, `/jobs/:slug`, `/projects`, `/projects/:domain`, `/terms`, `/privacy`; unknown paths fall back to Home

### Forms (Tally)
- Tally embed script in `index.html`: `<script async src="https://tally.so/widgets/embed.js">`
- Trigger buttons carry `data-tally-open="jar6JJ"` + `data-tally-layout="modal"` + `data-tally-width="400"` + `data-tally-auto-close="0"` + `data-tally-form-events-forwarding="1"` (shared `TALLY_ATTRS` in `src/lib/tally.ts`)
- Applied to: navbar desktop + mobile "Start a project", CTASection, and JobCard/JobDetail "Apply Now" fallbacks

---

## 3. Project Structure

```
├── public/hero_video.mp4        # hero background loop (1080p, ~3.7 MB)
├── jobs/*.md                    # job postings (markdown, parsed at build)
├── src/
│   ├── lib/
│   │   ├── site.ts              # SITE_NAME, emails, tagline
│   │   ├── projects.ts          # DOMAINS + PROJECTS data (typed)
│   │   ├── jobs.ts              # markdown parser → Job[] + jobSlug()
│   │   └── tally.ts             # TALLY_ATTRS (popup form config)
│   ├── components/              # Logo, Navbar, Footer, JobCard, SubPageLayout,
│   │                            # CTASection, AboutSection, UnderConstructionBanner, ...
│   └── pages/                   # Home, About, Jobs, JobDetail, Projects, Terms, Privacy
├── index.html                   # meta/SEO + Tally embed script
├── vite.config.ts
├── vercel.json                  # SPA rewrites → index.html
└── tailwind.config.js
```

---

## 4. Technical Process

### Job postings (content-as-code)
1. Add a file to `jobs/` — frontmatter + `##` sections:
   ```md
   ---
   title: UK & European Consumer Finance Surveys
   summary: One or two sentences.
   highlights:
     - Remote – India
     - No experience required
   order: 1
   link: https://tally.so/r/rjRkv5
   ---
   ## Key Responsibilities
   - Bullet item
   ```
2. `src/lib/jobs.ts` parses frontmatter (`highlights` list + scalar fields) and splits the body into `{ heading, paragraphs, bullets }` sections.
3. **JobCard** shows only title + clamped summary + highlight pills (short grid cards). **JobDetail** renders the full sections.
4. Ordering via `order` field; slugs derived from the title.

### Routing & SPA
- `BrowserRouter` with a `<ScrollToTop/>` helper on route change.
- `vercel.json` rewrites every path to `/index.html` so deep links (e.g. `/jobs/uk-european-consumer-finance-surveys`) work on refresh. Static assets are still served directly.

### Deployment (Vercel)
1. Push to GitHub `main` → Vercel Git integration builds `npm run build`, serves `dist/`.
2. Domain: Vercel project → Settings → Domains → `ai.avedika.com`; Porkbun DNS **CNAME** `ai` → `cname.vercel-dns.com` (TTL 600). SSL auto-provisioned; Porkbun nameservers unchanged.

### Local commands
```bash
npm install     # install deps
npm run dev     # local dev server
npm run build   # typecheck (tsc -b) + production build → dist/
npm run preview # serve the built dist/ locally
```

---

## 5. Notes & Gotchas

- `jobs/*.md` must live at repo root (`/jobs`) — `import.meta.glob('/jobs/*.md')` depends on the path.
- The hero video was re-encoded 44 MB (4K/29 Mbps) → 3.7 MB (1080p, CRF 26, H.264, `+faststart`); keep it small.
- `.gitignore` covers `node_modules/`, `dist/`, `*.tsbuildinfo`, `.vercel/`, `.env*`.
- Tally is async — popup clicks within ~1s of page load before `embed.js` finishes may not open.
- `dist/` and `node_modules/` are intentionally untracked; Vercel builds from source.
