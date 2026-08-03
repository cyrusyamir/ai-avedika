import type { ReactNode } from 'react'
import SubPageLayout, { PageCard } from './SubPageLayout'

export default function LegalCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <SubPageLayout>
      <PageCard>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">{title}</h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: August 2026</p>
        <div className="mt-8 flex flex-col gap-7">{children}</div>
      </PageCard>
    </SubPageLayout>
  )
}

export function LegalBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-black tracking-tight mb-2">{title}</h2>
      <div className="flex flex-col gap-3 text-sm text-gray-600 leading-relaxed">{children}</div>
    </section>
  )
}
