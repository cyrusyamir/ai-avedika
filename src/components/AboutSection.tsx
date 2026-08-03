import { SITE_NAME } from '../lib/site'

export default function AboutSection() {
  const stats = [
    { value: '40+', label: 'Languages covered' },
    { value: '10k+', label: 'Hours delivered' },
    { value: '99.2%', label: 'QA accuracy' },
  ]
  return (
    <section id="about" className="p-3 sm:p-4 md:p-6 py-16 sm:py-24 scroll-mt-6">
      <div className="rounded-2xl sm:rounded-3xl bg-white border-2 border-black p-6 sm:p-8 md:p-12 shadow-xl">
        <div className="max-w-3xl">
          <span className="inline-block w-fit bg-black text-white text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
            About us
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-black">
            We turn human effort into reliable data
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
            {SITE_NAME} is the AI data-services arm of {SITE_NAME.toLowerCase()}.com. We design
            and run data collection, transcription, annotation and validation programs that power
            speech, vision and NLP systems for teams of every size.
          </p>
          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
            Built on a freelance, on-demand model, we bring together vetted specialists for every
            engagement — from studio and field recording to multi-reviewer QA. Every project runs
            on clear guidelines, documented consent, and measurable quality, so the data you ship
            into training is data you can trust.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-neutral-100 border border-gray-200 p-5 text-center"
              >
                <p className="text-3xl font-semibold tracking-tight text-black">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
