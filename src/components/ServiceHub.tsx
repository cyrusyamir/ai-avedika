import { useState } from 'react'
import { ArrowUpRight, Star } from 'lucide-react'
import { SERVICES } from '../lib/services'
import { TALLY_ATTRS } from '../lib/tally'
import { BTN_RED } from '../lib/ui'

const ACCENTS = ['bg-neo-accent', 'bg-neo-secondary', 'bg-neo-muted']

export default function ServiceHub() {
  const [active, setActive] = useState(0)
  const service = SERVICES[active]

  return (
    <section id="services" className="relative bg-neo-cream bg-grid-lines p-3 sm:p-4 md:p-6 py-16 sm:py-24 scroll-mt-6 overflow-hidden">
      <span
        aria-hidden
        className="absolute top-10 right-2 lg:right-10 text-[7rem] lg:text-[11rem] font-black uppercase text-stroke leading-none opacity-40 select-none pointer-events-none"
      >
        Services
      </span>
      <div className="relative max-w-7xl mx-auto">
        <span className="inline-block w-fit bg-neo-accent border-4 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-1">
          What we offer
        </span>
        <h2 className="mt-6 max-w-3xl text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-black leading-[0.95]">
          Five Services, <span className="inline-block bg-neo-secondary border-4 border-black px-3 py-1 rotate-[-1deg] shadow-neo-sm">one team</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg font-bold text-black/70 leading-relaxed max-w-2xl">
          Pick a service to see what we deliver. Every one runs on the same engine — vetted people,
          documented process, and measurable quality.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start" role="tablist" aria-label="Services">
          {/* Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-6">
            {SERVICES.map((s, i) => {
              const isActive = i === active
              return (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${i}`}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-4 text-left font-black uppercase border-4 border-black px-5 py-4 transition-all duration-100 ${
                    isActive
                      ? 'bg-black text-neo-secondary shadow-neo-md active:translate-x-1 active:translate-y-1 active:shadow-none'
                      : 'bg-white text-black shadow-neo-sm hover:-translate-y-0.5 hover:bg-neo-secondary hover:shadow-neo-md'
                  }`}
                >
                  <span className={`text-2xl font-black leading-none ${isActive ? 'text-neo-accent' : 'text-stroke'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm sm:text-base tracking-wide">{s.badge}</span>
                </button>
              )
            })}
          </div>

          {/* Panel */}
          <div key={service.id} className="lg:col-span-8 animate-neo-pop">
            <div className={`${ACCENTS[active % ACCENTS.length]} border-4 border-black p-6 sm:p-8 shadow-neo-sm`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <span className="inline-block w-fit bg-black text-white border-2 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-1deg]">
                  {service.badge}
                </span>
                <Star aria-hidden size={24} fill="#000" strokeWidth={3} className="rotate-12 animate-spin-slow" />
              </div>
              <h3 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black leading-[0.95] max-w-2xl">
                {service.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base font-bold text-black/70 leading-relaxed max-w-2xl">
                {service.subtitle}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {service.items.map((item, i) => (
                <div
                  key={item.title}
                  className="relative bg-white border-4 border-black shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md hover:rotate-[0.3deg] transition-all duration-200 ease-out p-5 flex flex-col gap-2 overflow-hidden"
                >
                  <span
                    aria-hidden
                    className="absolute -top-4 right-1 font-black text-stroke select-none pointer-events-none text-[3.5rem] leading-none opacity-60"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="font-black uppercase text-[15px] tracking-tight text-black leading-snug pr-10">
                    {item.title}
                  </h4>
                  <p className="font-bold text-sm text-black/70 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button type="button" {...TALLY_ATTRS} className={`${BTN_RED} inline-flex items-center gap-2`}>
                {service.ctaLabel ?? 'Start a project'}
                <ArrowUpRight size={18} strokeWidth={3} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}