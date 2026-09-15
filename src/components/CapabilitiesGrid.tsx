import { CAPABILITIES } from '../lib/services'
import { useInView } from '../lib/hooks'

const CARD_STYLES = [
  'bg-white',
  'bg-neo-secondary',
  'bg-neo-muted',
]

export default function CapabilitiesGrid() {
  const { ref, visible } = useInView(0.1)

  return (
    <section id="capabilities" className="bg-neo-cream p-3 sm:p-4 md:p-6 py-16 sm:py-24 scroll-mt-6">
      <div
        ref={ref}
        className={`bg-white border-4 border-black shadow-neo-lg p-6 sm:p-8 md:p-12 transition-all duration-300 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="inline-block w-fit bg-neo-accent border-4 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-1">
          What we do
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95]">
          From Data Collection to Delivery
        </h2>
        <p className="mt-4 text-base sm:text-lg font-bold text-black/70 leading-relaxed max-w-2xl">
          Whether you need thousands of data points collected, AI training data prepared, surveys
          completed, or business workflows automated — we provide the people, processes, and
          technology to get it done.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.title}
              className={`${CARD_STYLES[i % CARD_STYLES.length]} border-4 border-black p-5 flex flex-col gap-3 shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-200 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="inline-block w-fit bg-black text-white font-black uppercase text-[10px] tracking-widest px-2.5 py-1 border-2 border-black">
                {cap.badge}
              </span>
              <h3 className="text-lg font-black uppercase tracking-tight text-black">
                {cap.title}
              </h3>
              <p className="text-sm font-bold text-black/70 leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}