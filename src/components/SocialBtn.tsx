import type { ReactNode } from 'react'

export default function SocialBtn({ icon, className }: { icon: ReactNode; className: string }) {
  return (
    <button
      type="button"
      aria-label="social link"
      className={`w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity ${className}`}
    >
      {icon}
    </button>
  )
}
