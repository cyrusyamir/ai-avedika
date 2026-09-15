# Avedika — AI Data Services Platform (Product Requirements Document)

Live: **https://ai.avedika.com** · Parent site: `avedika.com`

---

## 1. Overview

Avedika is the AI data-services arm of avedika.com — offering end-to-end transcription,
annotation, data collection, and audio/video recording services at scale, powered by vetted
freelance specialists.

This product is **a single static marketing + recruitment website**. It serves two distinct
audiences from one surface:

1. **Clients / buyers** of AI training data — who evaluate Avedika's credibility, explore
   capabilities, and start a project.
2. **Freelance specialists / job seekers** — who browse open roles, review requirements, and apply.

The site is intentionally backend-free: all content lives in code and markdown, and all form
capture happens through an external popup widget (Tally.so). It is not a full hiring platform
or applicant-tracking system.

---

## 2. Problem Statement

Avedika must win client engagements and recruit freelance specialists, but has neither an
existing hiring infrastructure nor a need for a custom backend.

- **Clients cannot easily assess** Avedika's range of data services, its domain expertise, or
  its quality bar before reaching out — so the site must position Avedika as a credible vendor.
- **Freelancers cannot discover** open work or understand what a role involves — so the site must
  make roles findable, reviewable, and easy to apply to.
- **The team needs to publish and edit job postings quickly** without engineering involvement
  or deployment friction.

The site solves all three with a fast, static, content-as-code approach — no servers, databases,
or login systems to maintain.

---

## 3. Target Users & Personas

| Persona | Description | Primary needs |
|---|---|---|
| **Data Buyer / ML Engineer** | Someone sourcing training data for speech, vision, or NLP systems at any company size. | Assess capability and credibility; understand service scope; request a quote/start a project. |
| **Freelance Specialist / Job Seeker** | A prospective worker (e.g. transcriptionist, annotator, linguist, recorder). | Discover open roles; understand requirements and pay/format; apply. |
| **Site Admin / Recruiter** | The Avedika team member who manages content. | Publish/edit job postings and site copy fast and safely. |

---

## 4. User Stories

- As a **data buyer**, I can view the services and case studies on the site so I can quickly
  assess whether Avedika can handle my project.
- As a **data buyer**, I can open the "Start a project" form so I can request a plan for
  collection, transcription, or annotation.
- As a **job seeker**, I can browse the list of open roles so I can find relevant opportunities.
- As a **job seeker**, I can open a role's detail page so I can review responsibilities,
  requirements, and highlights before applying.
- As a **job seeker**, I can hit "Apply Now" so I can submit my application via the linked form.
- As an **admin**, I can add or edit a job by writing a markdown file so I can publish roles
  without code changes or a backend.
- As an **admin**, I can reach every page and form from the persistent navbar/footer so
  visitors can navigate the full site.

---

## 5. Feature Requirements

### 5.1 Client-facing

- **Home** (`/`)
  - Full-screen autoplay hero video with a glass headline card ("Turning Human Input Into
    *Valuable Data*"), service summary, and an "Apply for job" CTA that routes to the jobs board.
  - Dismissible "under construction" banner (home only).
  - CTA section ("Let's build your next dataset") that opens the "Start a project" Tally form.
- **Projects / Expertise** (`/projects`, `/projects/:domain`)
  - Explore work by 4 domains: **Linguistic**, **Transcription**, **Annotation**,
    **Audio & Video recording**.
  - Each domain lists case studies with summary, key details, and capability tags.
- **About** (`/about`)
  - Brand story, positioning ("We turn human effort into reliable data"), and credibility stats
    (40+ languages, 10k+ hours delivered, 99.2% QA accuracy).
- **Contact form (Tally.so popup)**
  - Triggered by "Start a project" buttons (navbar, CTA section). Modal popup, no backend.

### 5.2 Recruitment-facing

- **Jobs board** (`/jobs`)
  - Grid of short job cards showing title, clamped summary, and highlight pills.
- **Job detail** (`/jobs/:slug`)
  - Full structured posting (responsibilities, requirements, sections) with highlight pills.
  - "Apply Now" button — either a per-job external link or a Tally.so popup fallback.
  - Graceful "job not found" state.

### 5.3 Admin / content management

- **Content-as-code:**
  - **Jobs:** add/edit `jobs/*.md` (frontmatter `title`, `summary`, `highlights`, `order`,
    `link` + `##` body sections). Parsed at build time; ordering via `order`; slugs derived
    from title.
  - **Projects & domains:** `src/lib/projects.ts`.
  - **Brand constants** (name, emails, tagline): `src/lib/site.ts`.

### 5.4 Platform

- **Legal pages:** Terms & Conditions (`/terms`), Privacy Policy (`/privacy`).
- **Routing:** SPA with deep-link support (all paths rewritten to `index.html` so
  `/jobs/:slug`, `/projects/:domain` work on refresh).
- **Navigation:** persistent frosted-glass navbar (links, "Domains" dropdown, "Start a project"
  button) and footer (brand, emails, additional links, copyright).
- **SEO:** page title, meta description/keywords, Open Graph tags, author, robots.

---

## 6. Non-Functional Requirements

- **Architecture:** Fully static SPA. No backend, no database, no environment variables.
- **Tech stack:** React 18 + TypeScript + Vite + React Router + Tailwind CSS; hosted on Vercel
  with GitHub auto-deploy; DNS via Porkbun.
- **Performance:** Minimal payload — hero video kept small (~3.7 MB, 1080p) to keep the landing
  page fast.
- **Responsive design:** Full experience across mobile, tablet, and desktop.
- **Accessibility & quality:** Semantic markup, keyboard/touch-friendly interactions, consistent
  focus states.
- **Security:** No secrets in the repo; external forms only; standard `.gitignore`.

---

## 7. Success Metrics

**Qualitative**
- Site establishes Avedika as a credible AI data-services vendor (clients reach out).
- New job postings can be published in minutes with no engineering involvement.
- Visitors can complete the intended journey (browse → evaluate → contact/apply).

**Quantitative (to instrument)**
- Number of Tally.so form submissions ("Start a project") and job applications ("Apply Now").
- Traffic and engagement per page (Home, Projects, Jobs, Job Detail).
- Job → application conversion; reduce drop-off between role view and apply.

---

## 8. Non-Goals / Out of Scope

- No user authentication or login.
- No applicant tracking / candidate management / application dashboard.
- No payments, billing, or invoicing.
- No backend, database, or external data storage of submissions.
- No job search or filtering beyond the existing grid ordering.
- No dynamic/changing content requiring a CMS at runtime.

---

## 9. Future Considerations

- Web analytics / conversion tracking (e.g., form-event forwarding is already enabled).
- Job search and/or filtering on the jobs board.
- A Journal / blog section for company updates and expertise development.
- Stronger applicant workflow (e.g., a lightweight intake form) while remaining backend-free.
- Additional case studies and domain content as the portfolio grows.

---

*Derived from `README.md` (overview) and `PROJECT.md` (technical process), the technical
requirement documents for this product.*
