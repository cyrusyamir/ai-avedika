export interface Job {
  title: string
  summary: string
  details: string[]
  order: number
  link?: string
}

const jobModules = import.meta.glob('/jobs/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function parseJob(raw: string): Job {
  let body = raw.replace(/\r\n/g, '\n')
  let title = ''
  let summary = ''
  let order = 0
  let link = ''

  const fm = body.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/)
  if (fm) {
    body = body.slice(fm[0].length)
    for (const line of fm[1].split('\n')) {
      const idx = line.indexOf(':')
      if (idx === -1) continue
      const key = line.slice(0, idx).trim()
      const value = line.slice(idx + 1).trim().replace(/^["']|["']$/g, '')
      if (key === 'title') title = value
      if (key === 'summary') summary = value
      if (key === 'order') order = Number(value) || 0
      if (key === 'link') link = value
    }
  }

  const details = body
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^[-*]\s+/.test(line))
    .map((line) => line.replace(/^[-*]\s+/, '').trim())

  if (!title) title = body.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? 'Untitled'
  if (!summary) {
    summary =
      body
        .split('\n')
        .map((line) => line.trim())
        .find((line) => line.length > 0 && !line.startsWith('#') && !/^[-*]\s+/.test(line)) ?? ''
  }

  return { title, summary, details, order, link: link || undefined }
}

export const JOBS: Job[] = Object.values(jobModules)
  .map((raw) => parseJob(raw as string))
  .filter((job) => job.title && job.summary)
  .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title))

export function jobSlug(job: Job) {
  return job.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
