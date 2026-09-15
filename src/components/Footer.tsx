import { Link } from 'react-router-dom'
import Logo from './Logo'
import { SITE_NAME, CONTACT_EMAIL, SITE_TAGLINE } from '../lib/site'

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-neo-secondary">
      <div className="p-6 sm:p-10 flex flex-col sm:flex-row sm:items-start flex-wrap items-center justify-between gap-8 sm:gap-10">
        <div className="flex flex-col items-center sm:items-start gap-3">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-lg font-black uppercase tracking-tight text-black">{SITE_NAME}</span>
          </div>
          <p className="text-sm font-bold text-black/70 max-w-xs text-center sm:text-left">{SITE_TAGLINE}</p>
        </div>

        <div className="flex flex-col items-center sm:items-start gap-2 text-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-black/50">General</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="bg-white border-4 border-black shadow-neo-sm font-bold text-sm px-4 py-2 hover:bg-neo-accent active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <nav className="flex flex-col items-center sm:items-end gap-y-2 text-sm">
          <span className="text-xs font-bold uppercase tracking-widest text-black/50">Additional links</span>
          <Link to="/terms" className="font-bold text-sm uppercase hover:bg-black hover:text-neo-secondary px-2 py-1 transition-colors duration-100">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="font-bold text-sm uppercase hover:bg-black hover:text-neo-secondary px-2 py-1 transition-colors duration-100">
            Privacy Policy
          </Link>
        </nav>
      </div>

      <div className="border-t-4 border-black pb-6 sm:pb-10 px-6 sm:px-10">
        <p className="text-xs font-bold uppercase tracking-widest text-black/60 pt-6">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}