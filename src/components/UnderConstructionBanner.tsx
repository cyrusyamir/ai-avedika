import { useState } from 'react'
import { X } from 'lucide-react'

export default function UnderConstructionBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="pt-2 px-3 flex justify-center">
      <div className="flex items-center gap-2 sm:gap-3 bg-neutral-100 border border-gray-200 rounded-full pl-2.5 sm:pl-4 pr-1.5 sm:pr-2 py-1 text-sm text-gray-800 shadow-sm">
        <span className="relative flex w-2 h-2 sm:w-2.5 sm:h-2.5 shrink-0">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-500"></span>
        </span>
        <span className="text-xs sm:text-sm whitespace-nowrap">
          Full Web site is under construction, 100% operational
        </span>
        <button
          type="button"
          aria-label="Close"
          onClick={() => setVisible(false)}
          className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 rounded-full bg-white border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <X size={13} />
        </button>
      </div>
    </div>
  )
}
