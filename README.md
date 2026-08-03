# Avedika — AI Data Services Platform

A static marketing + recruitment website for **Avedika**, the AI data-services arm of avedika.com. We offer end-to-end transcription, annotation, data collection, and audio/video recording services, and run a jobs board for freelance specialists.

**Live:** https://ai.avedika.com

## Overview

- **Landing page** — full-screen hero video, services, stats, and CTA sections
- **Projects / Expertise** — case studies across 4 domains: Linguistic, Transcription, Annotation, Audio & Video recording
- **Jobs board** — markdown-driven job postings with quick-fact cards and full detail pages
- **Contact / Apply** — Tally.so popup forms (no backend)
- **Pages** — Home, About, Jobs, Job Detail, Projects, Terms & Conditions, Privacy Policy

## Tech Stack

React 18 · TypeScript · Vite 6 · React Router 7 · Tailwind CSS 3 · lucide-react · Tally.so · hosted on Vercel (GitHub auto-deploy) · DNS via Porkbun

## Local Development

```bash
npm install
npm run dev       # start dev server
npm run build     # typecheck + production build → dist/
npm run preview   # serve the built site locally
```

## Content & Configuration

- **Jobs:** add/edit `jobs/*.md` files (frontmatter `title`, `summary`, `highlights`, `order`, `link` + `##` body sections)
- **Projects & domains:** `src/lib/projects.ts`
- **Brand constants** (name, emails, tagline): `src/lib/site.ts`
- **Contact form:** `src/lib/tally.ts` (Tally form ID + popup attributes)

## Documentation

Full design system, technical process, and architecture details are in [`PROJECT.md`](./PROJECT.md).
