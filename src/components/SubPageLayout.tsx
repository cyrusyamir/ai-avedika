import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export function PageCard({ children }: { children: ReactNode }) {
  return (
    <div className="p-3 sm:p-4 md:p-6">
      <div className="rounded-2xl sm:rounded-3xl bg-neutral-100 border-2 border-black p-6 sm:p-8 md:p-12 shadow-xl">
        {children}
      </div>
    </div>
  )
}

export default function SubPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <header className="p-3 sm:p-4 md:p-6 pb-2">
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
