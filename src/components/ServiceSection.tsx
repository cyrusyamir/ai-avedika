import type { ServiceItem } from '../lib/services'
import { useInView } from '../lib/hooks'

interface Props {
  id: string
  badge: string
  title: string
  subtitle: string
  items: ServiceItem[]
  accent: string
}

export default function ServiceSection({ id, badge, title, subtitle, items, accent }: Props) {
  const { ref, visible } = useInView(0.06)

  return (
    <section id={id} className="bg-neo-cream p-3 sm:p-4 md:p-6 py-16 sm:py-24 scroll-mt-6">
      <div
        ref={ref}
        className={`bg-white border-4 border-black shadow-neo-lg p-6 sm:p-8 md:p-12 transition-all duration-300 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span
          className={`inline-block w-fit ${accent} border-4 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-1deg]`}
        >
          {badge}
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95]">
          {title}
        </h2>
        <p className="mt-4 text-base sm:text-lg font-bold text-black/70 leading-relaxed max-w-2xl">
          {subtitle}
        </p>

        {/* Mobile: vertical stack | Desktop: horizontal scroll */}
        <div className="mt-10 grid grid-cols-1 sm:hidden gap-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`border-4 border-black bg-neo-cream p-5 flex flex-col gap-2 shadow-neo-sm transition-all duration-200 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <h3 className="text-base font-black uppercase tracking-tight text-black">
                {item.title}
              </h3>
              <p className="text-sm font-bold text-black/70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 hidden sm:flex overflow-x-auto gap-5 scroll-smooth snap-x snap-mandatory pb-5 -mx-1 px-1">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`min-w-[300px] md:min-w-[340px] shrink-0 snap-start border-4 border-black bg-neo-cream p-6 flex flex-col gap-2 shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-200 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
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
    </section>
  )
}