import { useState } from 'react'
import { X } from 'lucide-react'

export default function UnderConstructionBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="pt-2 px-3 flex justify-center">
      <div className="flex items-center gap-2 sm:gap-3 bg-neo-secondary border-4 border-black rounded-full pl-3 sm:pl-4 pr-1.5 sm:pr-2 py-1.5 font-bold text-sm shadow-neo-sm">
        <span className="relative flex w-2.5 h-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>
        <span className="text-xs sm:text-sm whitespace-nowrap">
          Full website is under construction, 100% operational
        </span>
        <button
          type="button"
          aria-label="Close"
          onClick={() => setVisible(false)}
          className="w-7 h-7 shrink-0 rounded-full bg-white border-2 border-black flex items-center justify-center hover:bg-neo-accent transition-colors duration-100"
        >
          <X size={13} />
        </button>
      </div>
    </div>
  )
}