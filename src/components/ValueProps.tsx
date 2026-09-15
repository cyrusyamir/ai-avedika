import { VALUE_PROPS } from '../lib/services'
import { useInView } from '../lib/hooks'

export default function ValueProps() {
  const { ref, visible } = useInView(0.1)

  return (
    <section id="why-us" className="p-3 sm:p-4 md:p-6 py-14 sm:py-20">
      <div
        ref={ref}
        className={`rounded-2xl sm:rounded-3xl bg-white border-2 border-black p-6 sm:p-8 md:p-12 shadow-xl transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <span className="inline-block w-fit bg-black text-white text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
          Why us
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-black">
          Flexible by Design. Reliable by Process.
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUE_PROPS.map((prop, i) => (
            <div
              key={prop.title}
              className={`rounded-2xl bg-neutral-100 border border-gray-200 p-5 flex flex-col gap-2 transition-all duration-500 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="text-base font-semibold text-black tracking-tight">{prop.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
