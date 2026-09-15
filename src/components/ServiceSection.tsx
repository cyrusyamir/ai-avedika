import type { ServiceItem } from '../lib/services'
import { useInView } from '../lib/hooks'

interface Props {
  id: string
  badge: string
  title: string
  subtitle: string
  items: ServiceItem[]
  accent: string
  index: number
}

export default function ServiceSection({ id, badge, title, subtitle, items, accent, index }: Props) {
  const { ref, visible } = useInView(0.06)
  const coloredLeft = index % 2 === 0

  const infoCard = (
    <div className={`${accent} border-4 border-black p-6 sm:p-8 flex flex-col gap-4 shadow-neo-sm shrink-0 lg:w-[380px]`}>
      <span className="inline-block w-fit bg-black text-white border-2 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-1deg]">
        {badge}
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-black leading-[0.95]">
        {title}
      </h2>
      <p className="text-sm sm:text-base font-bold text-black/70 leading-relaxed">
        {subtitle}
      </p>
    </div>
  )

  const listCard = (
    <div className="bg-white border-4 border-black p-5 sm:p-6 shadow-neo-sm flex-1 min-w-0">
      {/* Mobile: vertical stack */}
      <div className="grid grid-cols-1 sm:hidden gap-4">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="border-4 border-black bg-neo-cream p-5 flex flex-col gap-2 shadow-neo-sm transition-all duration-200 ease-out"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <h3 className="text-base font-black uppercase tracking-tight text-black">
              {item.title}
            </h3>
            <p className="text-sm font-bold text-black/70 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
      {/* Desktop: horizontal scroll */}
      <div className="hidden sm:flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory pb-4 -mx-1 px-1">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="min-w-[280px] shrink-0 snap-start border-4 border-black bg-neo-cream p-5 flex flex-col gap-2 shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-200 ease-out"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            <h3 className="text-base font-black uppercase tracking-tight text-black">
              {item.title}
            </h3>
            <p className="text-sm font-bold text-black/70 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section id={id} className="bg-neo-cream p-3 sm:p-4 md:p-6 py-16 sm:py-24 scroll-mt-6">
      <div
        ref={ref}
        className={`flex flex-col lg:flex-row transition-all duration-300 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {coloredLeft ? (
          <>
            {infoCard}
            {listCard}
          </>
        ) : (
          <>
            {listCard}
            {infoCard}
          </>
        )}
      </div>
    </section>
  )
}