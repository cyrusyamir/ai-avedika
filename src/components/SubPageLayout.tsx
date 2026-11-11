import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { SITE_NAME, SITE_URL } from '../lib/site'

const OG: Record<string, { title: string; description: string; path: string }> = {
  about: {
    title: `${SITE_NAME} — About`,
    description: 'Learn about KAYITS & Co., our mission, and the team behind our AI data services.',
    path: '/about',
  },
  jobs: {
    title: `${SITE_NAME} — Jobs`,
    description: 'Browse open roles and freelance opportunities at KAYITS & Co.',
    path: '/jobs',
  },
  projects: {
    title: `${SITE_NAME} — Projects`,
    description: 'Explore projects delivered by KAYITS & Co. for AI data, transcription and annotation.',
    path: '/projects',
  },
  terms: {
    title: `${SITE_NAME} — Terms of Service`,
    description: 'Terms of service for KAYITS & Co. AI data services.',
    path: '/terms',
  },
  privacy: {
    title: `${SITE_NAME} — Privacy Policy`,
    description: 'Privacy policy for KAYITS & Co. AI data services.',
    path: '/privacy',
  },
}

function setOG(key: string) {
  const entry = OG[key]
  if (!entry) return
  const image = `${SITE_URL}/og-kayits.png`
  const set = (name: string, value: string) => {
    let el = document.querySelector(`meta[property="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute('property', name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', value)
  }
  set('og:title', entry.title)
  set('og:description', entry.description)
  set('og:url', `${SITE_URL}${entry.path}`)
  set('og:image', image)
  set('og:image:width', '1829')
  set('og:image:height', '947')
  set('og:type', 'website')
  set('og:site_name', SITE_NAME)
  document.title = entry.title
}

export { setOG }

export default function SubPageLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()

  useEffect(() => {
    const key = Object.keys(OG).find((k) => pathname === `/${k}` || pathname.startsWith(`/${k}/`))
    if (key) setOG(key)
  }, [pathname])

  return (
    <div className="min-h-screen bg-neo-cream">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
