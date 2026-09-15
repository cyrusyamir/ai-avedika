import { VALUE_PROPS } from '../lib/services'
import { useInView } from '../lib/hooks'

const STRIP_STYLES = ['bg-neo-accent', 'bg-neo-secondary', 'bg-neo-muted']

export default function ValueProps() {
  const { ref, visible } = useInView(0.1)

  return (
    <section id="why-us" className="bg-neo-cream p-3 sm:p-4 md:p-6 py-16 sm:py-24 scroll-mt-6">
      <div
        ref={ref}
        className={`bg-white border-4 border-black shadow-neo-lg p-6 sm:p-8 md:p-12 transition-all duration-300 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="inline-block w-fit bg-neo-secondary border-4 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-1deg]">
          Why us
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95]">
          Flexible by Design. Reliable by Process.
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {VALUE_PROPS.map((prop, i) => (
            <div
              key={prop.title}
              className={`border-4 border-black bg-neo-cream shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-200 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className={`${STRIP_STYLES[i % STRIP_STYLES.length]} h-3 w-full border-b-4 border-black`} />
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-black uppercase tracking-tight text-black">
                  {prop.title}
                </h3>
                <p className="text-sm font-bold text-black/70 leading-relaxed">{prop.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}