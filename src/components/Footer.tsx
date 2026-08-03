import { Link } from 'react-router-dom'
import Logo from './Logo'
import { SITE_NAME, CONTACT_EMAIL, JOBS_EMAIL, SITE_TAGLINE } from '../lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="p-6 sm:p-10 flex flex-wrap items-center justify-start gap-x-10 gap-y-5">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-lg font-semibold tracking-tight text-black">{SITE_NAME}</span>
          </div>
          <p className="text-sm text-gray-600 max-w-xs">{SITE_TAGLINE}</p>
        </div>

        <div className="flex flex-col gap-1 text-sm">
          <span className="text-xs uppercase tracking-wider text-gray-400">General</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-blue-600 font-semibold hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          <span className="text-xs uppercase tracking-wider text-gray-400 mt-1">For jobs</span>
          <a href={`mailto:${JOBS_EMAIL}`} className="text-blue-600 font-semibold hover:underline">
            {JOBS_EMAIL}
          </a>
        </div>

        <nav className="flex flex-col gap-y-2 text-sm">
          <span className="text-xs uppercase tracking-wider text-gray-400">Menu</span>
          <Link to="/terms" className="font-bold text-gray-900 hover:text-black transition-colors">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="font-bold text-gray-900 hover:text-black transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>

      <div className="pb-6 sm:pb-10 px-6 sm:px-10">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
