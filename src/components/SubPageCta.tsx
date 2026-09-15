import type { ReactNode } from 'react'
import { ArrowUpRight, Star } from 'lucide-react'

interface SubPageCtaProps {
  bandClass?: string
  headingClass?: string
  heading: ReactNode
  actions?: ReactNode
}

export default function SubPageCta({
  bandClass = 'bg-black',
  headingClass = 'text-white',
  heading,
  actions,
}: SubPageCtaProps) {
  return (
    <section className={`relative ${bandClass} border-t-4 border-black overflow-hidden`}>
      <div className="absolute inset-0 pointer-events-none bg-halftone opacity-[0.18]" />
      <ArrowUpRight
        aria-hidden
        size={180}
        strokeWidth={3}
        className="absolute -bottom-10 -right-6 rotate-[-8deg] opacity-20 hidden md:block"
      />
      <Star
        aria-hidden
        size={40}
        fill="currentColor"
        strokeWidth={3}
        className="absolute top-8 right-10 rotate-12 hidden lg:block animate-spin-slow opacity-60"
      />
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-14 sm:py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-[0.95] max-w-2xl ${headingClass}`}
        >
          {heading}
        </h2>
        {actions && <div className="flex flex-col sm:flex-row gap-4 shrink-0">{actions}</div>}
      </div>
    </section>
  )
}