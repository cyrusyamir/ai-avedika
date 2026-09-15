import { Star } from 'lucide-react'
import { PROCESS_STEPS } from '../lib/services'
import { useInView } from '../lib/hooks'

const STRIP_STYLES = ['bg-neo-accent', 'bg-neo-secondary', 'bg-neo-muted']

export default function ProcessSteps() {
  const { ref, visible } = useInView(0.1)

  return (
    <section
      id="how-we-work"
      className="relative bg-black border-t-4 border-black p-3 sm:p-4 md:p-6 py-16 sm:py-24 scroll-mt-6 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none bg-halftone-white opacity-10" />
      <span
        aria-hidden
        className="absolute top-8 right-4 lg:right-10 text-[7rem] lg:text-[11rem] font-black uppercase text-stroke-white leading-none opacity-40 select-none pointer-events-none"
      >
        Process
      </span>
      <Star
        aria-hidden
        size={40}
        fill="#FFD93D"
        strokeWidth={3}
        className="absolute top-8 left-8 rotate-12 hidden lg:block animate-spin-slow"
      />
      <div ref={ref} className="relative max-w-7xl mx-auto">
        <span className="inline-block w-fit bg-neo-secondary border-4 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-2deg]">
          Process
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.95] max-w-3xl">
          Simple Process. <span className="text-stroke-white inline-block">Structured Execution.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg font-bold text-white/80 leading-relaxed max-w-2xl">
          Five steps from a first conversation to a scaled operation — same engine, every project.
        </p>

        <div className="mt-10 flex flex-col gap-5 lg:grid lg:grid-cols-5 lg:gap-5">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`relative bg-white border-4 border-black p-6 flex flex-col gap-2 shadow-neo-md hover:-translate-y-1 hover:rotate-[0.3deg] hover:shadow-[12px_12px_0px_0px_#FFD93D] transition-all duration-200 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`${STRIP_STYLES[i % STRIP_STYLES.length]} h-3 w-full border-b-4 border-black`} />
              <span className="text-4xl font-black uppercase tracking-tighter text-stroke leading-none mt-2">
                {step.number}
              </span>
              <h3 className="text-lg font-black uppercase tracking-tight text-black leading-tight">
                {step.title}
              </h3>
              <p className="text-sm font-bold text-black/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}