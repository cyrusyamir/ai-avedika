import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { TALLY_ATTRS } from '../lib/tally'
import { PROJECT_CATEGORIES } from '../lib/projects'

const NAV_ITEMS: { label: string; target: string }[] = [
  { label: 'Our story', target: '/about' },
  { label: 'Expertise', target: '/projects' },
  { label: 'Apply for work', target: '/jobs' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
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

  const selectCategory = (category: (typeof PROJECT_CATEGORIES)[number]) => {
    setServicesOpen(false)
    setMobileOpen(false)
    navigate(`/projects#${category.slug}`)
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
          <div ref={servicesRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((open) => !open)}
              className="flex items-center gap-1 bg-white text-black font-bold uppercase text-sm px-4 py-2 border-4 border-black shadow-neo-sm hover:bg-neo-secondary transition-colors duration-100 whitespace-nowrap active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-100 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {servicesOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border-4 border-black shadow-neo-md p-1.5 z-50">
                {PROJECT_CATEGORIES.map((category, i) => (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => selectCategory(category)}
                    className="flex w-full items-center gap-3 text-left px-3 py-2 font-bold text-sm hover:bg-neo-secondary transition-colors duration-100 whitespace-nowrap"
                  >
                    <span className="font-black text-xs text-black/40">{String(i + 1).padStart(2, '0')}</span>
                    {category.label}
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

            <p className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-black/50">Services</p>
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category.slug}
                type="button"
                onClick={() => selectCategory(category)}
                className="block w-full text-left px-3 py-2 font-bold text-sm hover:bg-neo-secondary transition-colors duration-100"
              >
                {category.label}
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