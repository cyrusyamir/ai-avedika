import { Link } from 'react-router-dom'
import Logo from './Logo'
import { SITE_NAME, CONTACT_EMAIL, SITE_TAGLINE } from '../lib/site'

const PAGE_LINKS = [
  { label: 'Our story', target: '/about' },
  { label: 'Expertise', target: '/projects' },
  { label: 'Apply for work', target: '/jobs' },
  { label: 'Terms & Conditions', target: '/terms' },
  { label: 'Privacy Policy', target: '/privacy' },
]

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-neo-secondary">
      <div className="p-6 sm:p-10 flex flex-col sm:flex-row sm:items-start flex-wrap items-center justify-between gap-8 sm:gap-10">
        {/* Column 1: Brand */}
        <div className="flex flex-col items-center sm:items-start gap-3">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-lg font-black uppercase tracking-tight text-black">{SITE_NAME}</span>
          </div>
          <p className="text-sm font-bold text-black/70 max-w-xs text-center sm:text-left">{SITE_TAGLINE}</p>
        </div>

        {/* Column 2: General — page links */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <span className="text-xs font-black uppercase tracking-widest text-black/50">General</span>
          <nav className="flex flex-col items-center sm:items-start gap-1">
            {PAGE_LINKS.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                className="font-bold uppercase text-sm hover:bg-black hover:text-neo-secondary px-2 py-1 transition-colors duration-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3: Contact */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <span className="text-xs font-black uppercase tracking-widest text-black/50">Contact</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="bg-white border-4 border-black shadow-neo-sm font-bold text-sm px-4 py-2 hover:bg-neo-accent active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="border-t-4 border-black pb-6 sm:pb-10 px-6 sm:px-10">
        <p className="text-xs font-black uppercase tracking-widest text-black/60 pt-6">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}