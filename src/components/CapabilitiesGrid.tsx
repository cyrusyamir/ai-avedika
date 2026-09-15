import { CAPABILITIES } from '../lib/services'
import { useInView } from '../lib/hooks'

const TILE_STYLES = [
  'bg-white',
  'bg-neo-accent',
  'bg-neo-secondary',
  'bg-neo-muted',
]

const ROTATIONS = ['rotate-0', '-rotate-1', 'rotate-1']

export default function CapabilitiesGrid() {
  const { ref, visible } = useInView(0.1)

  return (
    <section
      id="capabilities"
      className="relative bg-black p-3 sm:p-4 md:p-6 py-16 sm:py-24 scroll-mt-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-halftone opacity-10" />
      <span
        aria-hidden
        className="absolute bottom-6 left-2 lg:left-6 text-[7rem] lg:text-[11rem] font-black uppercase text-stroke-white leading-none opacity-40 select-none pointer-events-none"
      >
        What we do
      </span>
      <div ref={ref} className="relative max-w-7xl mx-auto">
        <span className="inline-block w-fit bg-neo-secondary border-4 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-1">
          What we do
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95] max-w-3xl">
          From Data Collection <span className="inline-block bg-neo-secondary text-black border-4 border-black px-3 py-1 rotate-[1deg] shadow-neo-sm">to delivery</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg font-bold text-white/80 leading-relaxed max-w-2xl">
          Whether you need thousands of data points collected, AI training data prepared, surveys
          completed, or business workflows automated — we provide the people, processes, and
          technology to get it done.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.title}
              className={`${TILE_STYLES[i % TILE_STYLES.length]} ${ROTATIONS[i % ROTATIONS.length]} border-4 border-black p-5 sm:p-6 flex flex-col gap-3 shadow-neo-sm hover:-translate-y-1 hover:rotate-0 hover:shadow-neo-md transition-all duration-200 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="inline-block w-fit bg-black text-white font-black uppercase text-[10px] tracking-widest px-2.5 py-1 border-2 border-black">
                {cap.badge}
              </span>
              <h3 className="text-lg font-black uppercase tracking-tight text-black leading-tight">
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