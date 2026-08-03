import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo'
import { smoothScrollTo } from '../lib/scroll'
import { SITE_NAME, CONTACT_EMAIL, JOBS_EMAIL, SITE_TAGLINE } from '../lib/site'

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  const goSection = (id: string) => {
    if (location.pathname === '/') {
      smoothScrollTo(id)
    } else {
      navigate('/')
      setTimeout(() => smoothScrollTo(id), 60)
    }
  }

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="p-6 sm:p-10 flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-lg font-semibold tracking-tight text-black">{SITE_NAME}</span>
        </div>
        <p className="text-sm text-gray-600 max-w-md">{SITE_TAGLINE}</p>
        <div className="flex flex-col items-center gap-1.5 text-sm text-gray-600">
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
          <span className="mt-1">Available worldwide · Remote-first · Freelance friendly</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-700">
          <Link to="/" className="hover:text-black transition-colors">
            Home
          </Link>
          <Link to="/jobs" className="hover:text-black transition-colors">
            Active Jobs
          </Link>
          <Link to="/projects" className="hover:text-black transition-colors">
            Projects
          </Link>
          <button onClick={() => goSection('about')} className="hover:text-black transition-colors">
            About
          </button>
          <Link to="/terms" className="hover:text-black transition-colors">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>
        </nav>
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
