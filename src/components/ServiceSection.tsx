import type { ServiceItem } from '../lib/services'
import { useInView } from '../lib/hooks'

interface Props {
  id: string
  badge: string
  title: string
  subtitle: string
  items: ServiceItem[]
}

export default function ServiceSection({ id, badge, title, subtitle, items }: Props) {
  const { ref, visible } = useInView(0.08)

  return (
    <section id={id} className="p-3 sm:p-4 md:p-6 py-14 sm:py-20">
      <div
        ref={ref}
        className={`rounded-2xl sm:rounded-3xl bg-white border-2 border-black p-6 sm:p-8 md:p-12 shadow-xl transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="inline-block w-fit bg-black text-white text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
          {badge}
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-black">
          {title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>

        {/* Mobile: vertical stack | Desktop: horizontal scroll */}
        <div className="mt-8 grid grid-cols-1 sm:hidden gap-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-2xl border border-gray-200 bg-neutral-100 p-5 flex flex-col gap-2 transition-all duration-500 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <h3 className="text-base font-semibold text-black tracking-tight">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 hidden sm:flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory pb-4 -mx-1 px-1">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`min-w-[300px] md:min-w-[340px] shrink-0 snap-start rounded-2xl border border-gray-200 bg-neutral-100 p-5 flex flex-col gap-2 transition-all duration-500 ease-out hover:shadow-lg ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <h3 className="text-base font-semibold text-black tracking-tight">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
