import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2026-11-11',
  useCdn: import.meta.env.VITE_SANITY_USE_CDN === 'true',
  token: import.meta.env.VITE_SANITY_TOKEN,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

export type SanityJob = {
  _id: string
  _createdAt: string
  title: string
  slug: string
  summary: string
  highlights: string[]
  order: number
  link?: string
  sections: Array<{
    _key: string
    heading?: string
    paragraphs: string[]
    bullets: string[]
  }>
  published: boolean
}

export type SanityProject = {
  _id: string
  title: string
  slug: string
  summary: string
  description: string
  link?: string
  published: boolean
}

export type SanityLegalDoc = {
  _id: string
  title: string
  slug: string
  type: 'terms' | 'privacy' | 'nda'
  content: string
  published: boolean
}

export type SanityBlogPost = {
  _id: string
  title: string
  slug: string
  content: string
  published: boolean
}
