import { Star } from 'lucide-react'
import { VALUE_PROPS } from '../lib/services'
import { useInView } from '../lib/hooks'

const STRIP_STYLES = ['bg-neo-accent', 'bg-neo-muted', 'bg-black']

export default function ValueProps() {
  const { ref, visible } = useInView(0.1)

  return (
    <section
      id="why-us"
      className="relative bg-neo-secondary border-t-4 border-black p-3 sm:p-4 md:p-6 py-16 sm:py-24 scroll-mt-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-halftone opacity-10" />
      <span
        aria-hidden
        className="absolute top-8 right-4 lg:right-12 text-[7rem] lg:text-[10rem] font-black uppercase text-stroke leading-none opacity-40 select-none pointer-events-none"
      >
        Why us
      </span>
      <div ref={ref} className="relative max-w-7xl mx-auto">
        <span className="inline-block w-fit bg-neo-accent border-4 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-1">
          Why us
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-black leading-[0.95] max-w-3xl">
          Flexible by design. <span className="inline-block bg-black text-neo-secondary border-4 border-black px-3 py-1 rotate-[-1deg] shadow-neo-sm">Reliable by process.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg font-bold text-black/70 leading-relaxed max-w-2xl">
          Here's what makes working with us feel different — and stay productive at scale.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {VALUE_PROPS.map((prop, i) => (
            <div
              key={prop.title}
              className={`relative bg-white border-4 border-black shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-200 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`${STRIP_STYLES[i % STRIP_STYLES.length]} h-3 w-full border-b-4 border-black`} />
              <div className="p-5 flex flex-col gap-2">
                <span className="font-black text-xs tracking-widest text-black/50">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-black uppercase tracking-tight text-black leading-tight">
                  {prop.title}
                </h3>
                <p className="text-sm font-bold text-black/70 leading-relaxed">{prop.description}</p>
              </div>
              {i === 0 && (
                <Star
                  aria-hidden
                  size={20}
                  fill="#000"
                  strokeWidth={3}
                  className="absolute top-3 right-3 rotate-12"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}