import type { ReactNode } from 'react'

export default function SocialBtn({ icon, className }: { icon: ReactNode; className: string }) {
  return (
    <button
      type="button"
      aria-label="social link"
      className={`w-8 h-8 border-4 border-black bg-white shadow-neo-sm flex items-center justify-center hover:opacity-80 transition-opacity ${className}`}
    >
      {icon}
    </button>
  )
}
