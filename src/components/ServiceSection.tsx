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
    <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-neo-sm flex-1 min-w-0">
      <ul className="flex flex-col gap-x-8 gap-y-5 lg:grid lg:grid-cols-2">
        {items.map((item) => (
          <li key={item.title} className="group flex gap-3">
            <span className="w-3 h-3 bg-black rotate-45 shrink-0 mt-1.5 group-hover:rotate-[135deg] group-hover:bg-neo-accent transition-all duration-300" />
            <div className="flex flex-col gap-1">
              <h3 className="font-black uppercase text-[15px] tracking-tight text-black leading-snug">
                {item.title}
              </h3>
              <p className="font-bold text-sm text-black/70 leading-relaxed">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
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