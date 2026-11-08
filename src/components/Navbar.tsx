import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'
import Logo from './Logo'
import { TALLY_ATTRS } from '../lib/tally'
import { PROJECT_CATEGORIES } from '../lib/projects'
import { SITE_NAME_UPPER } from '../lib/site'

const NAV_ITEMS: { label: string; target: string }[] = [
  { label: 'Our story', target: '/about' },
  { label: 'Expertise', target: '/projects' },
  { label: 'Apply for work', target: '/jobs' },
]

const MENU_TRANSITION_MS = 300

export default function Navbar() {
  const navigate = useNavigate()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileMounted, setMobileMounted] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const closeTimer = useRef<number | null>(null)

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }, [])

  const openMobile = useCallback(() => {
    clearCloseTimer()
    setMobileMounted(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMobileOpen(true))
    })
  }, [clearCloseTimer])

  const closeMobile = useCallback(
    (restoreFocus = true) => {
      setMobileOpen(false)
      clearCloseTimer()
      closeTimer.current = window.setTimeout(() => {
        setMobileMounted(false)
        closeTimer.current = null
        if (restoreFocus) menuButtonRef.current?.focus()
      }, MENU_TRANSITION_MS)
    },
    [clearCloseTimer],
  )

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Lock body scroll while the mobile panel is mounted
  useEffect(() => {
    if (!mobileMounted) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileMounted])

  // Move focus into the panel and support Escape to close
  useEffect(() => {
    if (!mobileOpen) return
    closeButtonRef.current?.focus()
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen, closeMobile])

  // Clear any pending close timer on unmount
  useEffect(() => clearCloseTimer, [clearCloseTimer])

  const onNavItem = useCallback(
    (item: (typeof NAV_ITEMS)[number]) => {
      closeMobile(false)
      navigate(item.target)
    },
    [closeMobile, navigate],
  )

  const selectCategory = useCallback(
    (category: (typeof PROJECT_CATEGORIES)[number]) => {
      setServicesOpen(false)
      closeMobile(false)
      navigate(`/projects#${category.slug}`)
    },
    [closeMobile, navigate],
  )

  return (
    <>
      {/* Desktop: single bar */}
      <nav className="hidden sm:flex items-center justify-between bg-neo-cream border-b-4 border-black px-4 sm:px-6 md:px-8 py-2 w-full">
        {/* Left: Logo + brand */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <Logo />
          <span className="font-black uppercase text-lg tracking-tight">{SITE_NAME_UPPER}</span>
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

      {/* Mobile: compact bar + full-screen slide-over menu */}
      <div className="sm:hidden relative flex items-center justify-between bg-neo-cream border-b-4 border-black px-3 py-2 w-full">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <Logo />
          <span className="font-black uppercase text-lg tracking-tight">{SITE_NAME_UPPER}</span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={openMobile}
          className={`w-11 h-11 flex items-center justify-center border-4 border-black shadow-neo-sm text-black transition-colors duration-300 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
            mobileOpen ? 'bg-neo-accent' : 'bg-neo-cream'
          }`}
        >
          <span className="relative block h-3.5 w-5 overflow-hidden" aria-hidden>
            {/* burger — pushes out when opening */}
            <span
              className={`absolute inset-0 flex flex-col justify-between transition-all duration-300 ease-out ${
                mobileOpen ? '-translate-x-7 opacity-0' : 'translate-x-0 opacity-100'
              }`}
            >
              <span className="h-[2px] w-5 rounded-full bg-black" />
              <span className="h-[2px] w-5 rounded-full bg-black" />
              <span className="h-[2px] w-5 rounded-full bg-black" />
            </span>

            {/* X — pushes in when opening */}
            <span
              className={`absolute inset-0 transition-all duration-300 ease-out ${
                mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-7 opacity-0'
              }`}
            >
              <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rotate-45 rounded-full bg-black" />
              <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 -rotate-45 rounded-full bg-black" />
            </span>
          </span>
        </button>

        {mobileMounted && (
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className={`fixed inset-0 z-[60] sm:hidden flex flex-col bg-neo-cream bg-grid-lines transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none ${
              mobileOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Panel top bar */}
            <div className="flex items-center justify-between border-b-4 border-black px-3 py-2 shrink-0 bg-neo-cream">
              <Link
                to="/"
                onClick={() => closeMobile(false)}
                className="flex items-center gap-2 min-w-0"
              >
                <Logo />
                <span className="font-black uppercase text-lg tracking-tight truncate">
                  {SITE_NAME_UPPER}
                </span>
              </Link>

              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close menu"
                onClick={() => closeMobile()}
                className="w-11 h-11 shrink-0 flex items-center justify-center border-4 border-black shadow-neo-sm bg-neo-accent text-black transition-all duration-100 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable panel body */}
            <div className="flex-1 overflow-y-auto px-3 pt-1 pb-4 flex flex-col gap-4">
              {/* Main menu items */}
              <div className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => onNavItem(item)}
                    className="w-full text-left px-1 py-2 font-black uppercase text-[18px] tracking-tight hover:text-neo-accent transition-colors duration-100"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="border-t-2 border-black/20" />

              {/* Services */}
              <div className="flex flex-col">
                <p className="px-1 py-1 text-[18px] font-black uppercase tracking-wide text-black/60">
                  Services
                </p>
                {PROJECT_CATEGORIES.map((category, i) => (
                  <button
                    key={category.slug}
                    type="button"
                    onClick={() => selectCategory(category)}
                    className="flex w-full items-center gap-3 text-left px-1 py-2.5 font-black text-[14px] border-b-2 border-black last:border-b-0 hover:text-neo-accent transition-colors duration-100"
                  >
                    <span className="font-black text-[14px] text-black/40">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Pinned CTA */}
            <div className="shrink-0 border-t-2 border-black bg-neo-cream px-3 pt-3 pb-[calc(1rem+env(safe-area-inset-bottom))]">
              <button
                type="button"
                {...TALLY_ATTRS}
                onClick={() => closeMobile(false)}
                className="w-full bg-neo-accent text-black font-black uppercase text-[18px] tracking-wide px-4 py-3 border-4 border-black shadow-neo-sm hover:bg-[#ff5252] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
              >
                Start a project
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
