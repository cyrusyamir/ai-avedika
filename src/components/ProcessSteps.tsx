import { PROCESS_STEPS } from '../lib/services'
import { useInView } from '../lib/hooks'

const CARD_STYLES = ['bg-white', 'bg-neo-secondary', 'bg-neo-muted']

export default function ProcessSteps() {
  const { ref, visible } = useInView(0.1)

  return (
    <section id="how-we-work" className="bg-neo-cream p-3 sm:p-4 md:p-6 py-16 sm:py-24 scroll-mt-6">
      <div
        ref={ref}
        className={`bg-white border-4 border-black shadow-neo-lg p-6 sm:p-8 md:p-12 transition-all duration-300 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="inline-block w-fit bg-neo-muted border-4 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-1">
          Process
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95]">
          Simple Process. Structured Execution.
        </h2>

        <div className="mt-10 flex flex-col gap-5 lg:grid lg:grid-cols-5 lg:gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`${CARD_STYLES[i % CARD_STYLES.length]} border-4 border-black p-6 flex flex-col gap-2 shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-200 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="text-4xl font-black uppercase tracking-tighter text-stroke leading-none">
                {step.number}
              </span>
              <h3 className="text-lg font-black uppercase tracking-tight text-black">
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