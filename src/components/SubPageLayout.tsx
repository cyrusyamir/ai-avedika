import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function SubPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neo-cream">
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}