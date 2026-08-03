import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { useForm } from '../context/FormContext'
import { DOMAINS, DOMAIN_SLUGS, type Domain } from '../lib/projects'
import { smoothScrollTo } from '../lib/scroll'

const NAV_ITEMS: { label: string; type: 'section' | 'page'; target: string }[] = [
  { label: 'Our story', type: 'section', target: 'about' },
  { label: 'Expertise', type: 'page', target: '/projects' },
  { label: 'Our work', type: 'page', target: '/jobs' },
]

export default function Navbar() {
  const { openForm } = useForm()
  const navigate = useNavigate()
  const location = useLocation()
  const [domainsOpen, setDomainsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const domainsRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (domainsRef.current && !domainsRef.current.contains(e.target as Node)) {
        setDomainsOpen(false)
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const goSection = (id: string) => {
    if (location.pathname === '/') {
      smoothScrollTo(id)
    } else {
      navigate('/')
      setTimeout(() => smoothScrollTo(id), 60)
    }
  }

  const onNavItem = (item: (typeof NAV_ITEMS)[number]) => {
    setMobileOpen(false)
    if (item.type === 'page') navigate(item.target)
    else goSection(item.target)
  }

  const selectDomain = (domain: Domain) => {
    setDomainsOpen(false)
    setMobileOpen(false)
    navigate(`/projects/${DOMAIN_SLUGS[domain]}`)
  }

  return (
    <nav className="flex items-center justify-between gap-3 w-full">
      <div className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 flex items-center gap-3 sm:gap-6">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => onNavItem(item)}
              className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden sm:flex bg-white/60 backdrop-blur-xl rounded-2xl shadow-sm px-2 sm:px-3 py-2 items-center gap-2 sm:gap-3">
        <div ref={domainsRef} className="relative">
          <button
            type="button"
            onClick={() => setDomainsOpen((open) => !open)}
            className="flex items-center gap-1 bg-white text-gray-900 text-sm font-medium px-3 sm:px-4 py-2 rounded-xl border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Domains
            <ChevronDown
              size={14}
              className={`transition-transform ${domainsOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {domainsOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-1.5 z-50">
              {DOMAINS.map((domain) => (
                <button
                  key={domain}
                  type="button"
                  onClick={() => selectDomain(domain)}
                  className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  {domain}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={openForm}
          className="bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 transition-colors"
        >
          Start a project
        </button>
      </div>

      <div ref={mobileRef} className="sm:hidden relative">
        <button
          type="button"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            mobileOpen
              ? 'bg-[#FDFCF9] text-black border border-gray-900'
              : 'bg-black text-white border border-black'
          }`}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {mobileOpen && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => onNavItem(item)}
                className="block w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-800 hover:bg-gray-100 transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="h-px bg-gray-200 my-2" />

            <p className="px-3 py-1 text-xs uppercase tracking-wider text-gray-400">Domains</p>
            {DOMAINS.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => selectDomain(domain)}
                className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 transition-colors"
              >
                {domain}
              </button>
            ))}

            <div className="h-px bg-gray-200 my-2" />

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false)
                openForm()
              }}
              className="w-full bg-black text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Start a project
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
