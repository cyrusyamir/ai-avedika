import type { ReactNode } from 'react'
import { Star } from 'lucide-react'

interface SubPageBannerProps {
  badge: string
  badgeClass?: string
  bandClass?: string
  texture?: 'halftone' | 'halftone-white' | 'grid'
  starClass?: string
  children: ReactNode
}

export default function SubPageBanner({
  badge,
  badgeClass = 'bg-neo-secondary',
  bandClass = 'bg-neo-accent',
  texture = 'halftone',
  starClass = 'text-black',
  children,
}: SubPageBannerProps) {
  return (
    <section className={`relative ${bandClass} border-b-4 border-black overflow-hidden`}>
      <div
        className={`absolute inset-0 pointer-events-none ${
          texture === 'grid' ? 'bg-grid-lines opacity-[0.3]' : texture === 'halftone-white' ? 'bg-halftone-white opacity-10' : 'bg-halftone opacity-10'
        }`}
      />
      <span
        aria-hidden
        className="absolute -top-2 right-8 lg:right-16 w-16 h-16 lg:w-24 lg:h-24 border-4 border-black rotate-12 hidden md:block"
      />
      <span
        aria-hidden
        className="absolute top-10 right-24 lg:right-40 w-8 h-8 lg:w-12 lg:h-12 border-4 border-black -rotate-6 hidden lg:block"
      />
      <Star
        aria-hidden
        size={44}
        fill="currentColor"
        strokeWidth={3}
        className={`absolute bottom-6 left-[6%] rotate-12 hidden lg:block animate-spin-slow ${starClass}`}
      />
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-14 sm:py-20 md:py-24">
        <span
          className={`inline-block w-fit ${badgeClass} border-4 border-black rounded-full px-4 py-1.5 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-3deg]`}
        >
          {badge}
        </span>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  )
}