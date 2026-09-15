import { PROCESS_STEPS } from '../lib/services'
import { useInView } from '../lib/hooks'

export default function ProcessSteps() {
  const { ref, visible } = useInView(0.1)

  return (
    <section id="how-we-work" className="p-3 sm:p-4 md:p-6 py-14 sm:py-20">
      <div
        ref={ref}
        className={`rounded-2xl sm:rounded-3xl bg-white border-2 border-black p-6 sm:p-8 md:p-12 shadow-xl transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="inline-block w-fit bg-black text-white text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
          Process
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-black">
          Simple Process. Structured Execution.
        </h2>

        <div className="mt-8 flex flex-col gap-4 sm:grid sm:grid-cols-5 sm:gap-3">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`relative rounded-2xl border border-gray-200 bg-neutral-100 p-5 flex flex-col gap-2 transition-all duration-500 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-3xl font-semibold text-black/10 tracking-tight">
                {step.number}
              </span>
              <h3 className="text-base font-semibold text-black tracking-tight">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
