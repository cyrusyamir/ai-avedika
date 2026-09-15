import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { TALLY_ATTRS } from '../lib/tally'
import { DOMAINS, DOMAIN_SLUGS, type Domain } from '../lib/projects'

const NAV_ITEMS: { label: string; target: string }[] = [
  { label: 'Our story', target: '/about' },
  { label: 'Expertise', target: '/projects' },
  { label: 'Apply for work', target: '/jobs' },
]

export default function Navbar() {
  const navigate = useNavigate()
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

  const onNavItem = (item: (typeof NAV_ITEMS)[number]) => {
    setMobileOpen(false)
    navigate(item.target)
  }

  const selectDomain = (domain: Domain) => {
    setDomainsOpen(false)
    setMobileOpen(false)
    navigate(`/projects/${DOMAIN_SLUGS[domain]}`)
  }

  return (
    <>
      {/* Desktop: single bar */}
      <nav className="hidden sm:flex items-center justify-between bg-neo-cream border-4 border-black shadow-neo-sm px-4 py-2 w-full">
        {/* Left: Logo + brand */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <Logo />
          <span className="font-black uppercase text-sm tracking-tight">Avedika</span>
        </Link>

        {/* Center: links */}
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => onNavItem(item)}
              className="font-bold uppercase text-sm tracking-wide px-3 py-1.5 border-2 border-transparent hover:border-black hover:bg-neo-accent hover:shadow-neo-sm transition-all duration-100 whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right: Domains + CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <div ref={domainsRef} className="relative">
            <button
              type="button"
              onClick={() => setDomainsOpen((open) => !open)}
              className="flex items-center gap-1 bg-white text-black font-bold uppercase text-sm px-4 py-2 border-4 border-black shadow-neo-sm hover:bg-neo-secondary transition-colors duration-100 whitespace-nowrap active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Domains
              <ChevronDown
                size={14}
                className={`transition-transform duration-100 ${domainsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {domainsOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border-4 border-black shadow-neo-md p-1.5 z-50">
                {DOMAINS.map((domain) => (
                  <button
                    key={domain}
                    type="button"
                    onClick={() => selectDomain(domain)}
                    className="block w-full text-left px-3 py-2 font-bold text-sm hover:bg-neo-secondary transition-colors duration-100 whitespace-nowrap"
                  >
                    {domain}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            {...TALLY_ATTRS}
            className="bg-neo-accent text-black font-bold uppercase text-sm px-5 py-2 border-4 border-black shadow-neo-sm hover:bg-[#ff5252] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
          >
            Start a project
          </button>
        </div>
      </nav>

      {/* Mobile: hamburger + dropdown */}
      <div ref={mobileRef} className="sm:hidden relative flex items-center justify-between bg-neo-cream border-4 border-black shadow-neo-sm px-3 py-2 w-full">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <Logo />
          <span className="font-black uppercase text-sm tracking-tight">Avedika</span>
        </Link>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className={`w-11 h-11 flex items-center justify-center border-4 border-black shadow-neo-sm transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
            mobileOpen ? 'bg-neo-accent text-white' : 'bg-neo-cream text-black'
          }`}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {mobileOpen && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-white border-4 border-black shadow-neo-lg p-2 z-50">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => onNavItem(item)}
                className="block w-full text-left px-3 py-2.5 font-bold uppercase text-sm hover:bg-neo-secondary transition-colors duration-100"
              >
                {item.label}
              </button>
            ))}

            <div className="h-1 bg-black my-2" />

            <p className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-black/50">Domains</p>
            {DOMAINS.map((domain) => (
              <button
                key={domain}
                type="button"
                onClick={() => selectDomain(domain)}
                className="block w-full text-left px-3 py-2 font-bold text-sm hover:bg-neo-secondary transition-colors duration-100"
              >
                {domain}
              </button>
            ))}

            <div className="h-1 bg-black my-2" />

            <button
              type="button"
              {...TALLY_ATTRS}
              onClick={() => setMobileOpen(false)}
              className="w-full bg-neo-accent text-black font-bold uppercase text-sm px-4 py-2.5 border-4 border-black shadow-neo-sm active:translate-x-1 active:translate-y-1 active:shadow-none hover:bg-[#ff5252] transition-all duration-100"
            >
              Start a project
            </button>
          </div>
        )}
      </div>
    </>
  )
}