import type { ReactNode } from 'react'
import SubPageLayout, { PageCard } from './SubPageLayout'

export default function LegalCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <SubPageLayout>
      <PageCard>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95]">{title}</h1>
        <p className="mt-3 text-xs font-black uppercase tracking-widest text-black/50">Last updated: August 2026</p>
        <div className="mt-8 flex flex-col gap-7">{children}</div>
      </PageCard>
    </SubPageLayout>
  )
}

export function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black mb-3">{title}</h2>
      <div className="flex flex-col gap-3 text-sm sm:text-base font-bold text-black/70 leading-relaxed">{children}</div>
    </section>
  )
}
