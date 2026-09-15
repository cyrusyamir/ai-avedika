import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export function PageCard({ children }: { children: ReactNode }) {
  return (
    <div className="p-3 sm:p-4 md:p-6">
      <div className="bg-white border-4 border-black p-6 sm:p-8 md:p-12 shadow-neo-lg">
        {children}
      </div>
    </div>
  )
}

export default function SubPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neo-cream">
      <header className="p-3 sm:p-4 md:p-6 pb-2">
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}
