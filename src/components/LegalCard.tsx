import { Children, cloneElement, isValidElement, type ReactNode } from 'react'
import type { ReactElement } from 'react'
import SubPageLayout from './SubPageLayout'
import SubPageBanner from './SubPageBanner'

interface LegalCardProps {
  title: string
  badge?: string
  badgeClass?: string
  bandClass?: string
  children: ReactNode
}

export default function LegalCard({
  title,
  badge = 'Legal',
  badgeClass = 'bg-neo-accent',
  bandClass = 'bg-neo-muted',
  children,
}: LegalCardProps) {
  return (
    <SubPageLayout>
      <SubPageBanner badge={badge} badgeClass={badgeClass} bandClass={bandClass} texture="halftone">
        <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-[0.9]">
          {title}
        </h1>
        <span className="mt-8 inline-block bg-white border-4 border-black shadow-neo-sm rotate-[-1deg] px-4 py-2 font-black uppercase text-xs tracking-widest text-black">
          Last updated: September 2026
        </span>
      </SubPageBanner>

      <section className="bg-neo-cream bg-grid-lines">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-16 sm:py-20">
          <div className="flex flex-col">
            {Children.map(children, (child, i) => {
              if (!isValidElement(child)) return child
              const childProps = child.props as { title?: string }
              const contact = childProps.title?.toLowerCase().startsWith('contact')
              return cloneElement(child as ReactElement<{ index?: number; variant?: string }>, {
                index: i + 1,
                variant: contact ? 'contact' : 'card',
              })
            })}
          </div>
        </div>
      </section>
    </SubPageLayout>
  )
}

interface LegalBlockProps {
  title: string
  children: ReactNode
  index?: number
  variant?: 'card' | 'contact'
}

export function LegalBlock({ title, children, index = 1, variant = 'card' }: LegalBlockProps) {
  const dark = variant === 'contact'
  return (
    <section
      className={`relative mt-10 lg:mt-12 border-4 border-black ${
        index % 2 === 0 ? 'lg:translate-x-8' : ''
      } ${dark ? 'bg-black shadow-neo-lg' : 'bg-white shadow-neo-sm'}`}
    >
      <span
        className={`absolute -top-6 -left-4 sm:-left-6 w-14 h-14 border-4 border-black shadow-neo-sm rotate-[-3deg] flex items-center justify-center font-black text-xl ${
          dark ? 'bg-neo-secondary text-black' : 'bg-neo-accent text-black'
        }`}
      >
        {String(index).padStart(2, '0')}
      </span>
      <div
        className={`h-3 w-full border-b-4 border-black ${
          dark ? 'bg-neo-secondary' : index % 2 === 0 ? 'bg-neo-muted' : 'bg-neo-accent'
        }`}
      />
      <div className="p-6 sm:p-8 pt-8 sm:pt-9">
        <h2
          className={`text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight pl-14 sm:pl-16 ${
            dark ? 'text-neo-secondary' : 'text-black'
          }`}
        >
          {title}
        </h2>
        <div
          className={`mt-4 flex flex-col gap-3 text-sm sm:text-base font-bold leading-relaxed ${
            dark ? 'text-white/80' : 'text-black/70'
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  )
}