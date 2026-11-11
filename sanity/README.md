# Sanity CMS Setup

## Steps to complete the Sanity integration

### 1. Initialize Sanity Studio (requires authentication)

Run this in the `sanity/` folder:

```bash
cd sanity
npx sanity init
```

This will open a browser for Sanity authentication. After logging in:
- Create a new project (or select existing)
- Choose dataset name: `production`
- Select the project template: "Clean project with no schemas"
- This creates a `sanity.cli.ts` file with your project ID

### 2. Install Studio dependencies

```bash
cd sanity
pnpm install
```

### 3. Update environment variables

In `.env.local`, replace the placeholder values:

```
VITE_SANITY_PROJECT_ID=your-actual-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_USE_CDN=true
VITE_SANITY_TOKEN=your-sanity-api-token
```

Get your project ID from `sanity/sanity.cli.ts` after running `sanity init`.

### 4. Deploy Sanity Studio

```bash
cd sanity
npx sanity deploy
```

This gives you a Studio URL (e.g., `https://kayits-cms.sanity.studio`) where assigned users can manage Jobs, Projects, Legal Docs, and Blog Posts.

### 5. Add content

Log into Sanity Studio and create:
- **Job** documents (title, summary, highlights, sections, order, apply link, published)
- **Project** documents (optional, for future use)
- **Legal Document** documents (T&C, Privacy, NDA)
- **Blog Post** documents (blog page is not available on frontend)

### 6. Run the app

```bash
pnpm dev
```

The Jobs page (`/jobs`) and Job Detail pages (`/jobs/:slug`) now fetch content from Sanity CMS.

### What was migrated

- `src/pages/Jobs.tsx` — fetches published jobs from Sanity
- `src/pages/JobDetail.tsx` — fetches individual job from Sanity by slug
- `src/components/JobCard.tsx` — updated for Sanity job shape
- `src/lib/sanity.ts` — Sanity client + image URL builder
- `sanity/schemas/` — Job, Project, LegalDoc, BlogPost schemas
- `sanity/sanity.config.ts` — Studio configuration
- `.env.local` — Sanity env var placeholders

### What was NOT changed

- `jobs/` folder — left untouched as requested
- Tally form — still used for "Apply now" when no external link is set
- Blog page — not added (not available per requirements)
