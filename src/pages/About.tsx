import SubPageLayout, { PageCard } from '../components/SubPageLayout'
import { SITE_NAME } from '../lib/site'

const stats = [
  { value: '40+', label: 'Languages covered' },
  { value: '10k+', label: 'Hours delivered' },
  { value: '99.2%', label: 'QA accuracy' },
]

export default function About() {
  return (
    <SubPageLayout>
      <PageCard>
        <span className="inline-block w-fit bg-black text-white text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
          About us
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-black">
          We turn human effort into reliable data
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
          {SITE_NAME} is the AI data-services arm of {SITE_NAME.toLowerCase()}.com. We design
          and run data collection, transcription, annotation and validation programs that power
          speech, vision and NLP systems for teams of every size.
        </p>
        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
          Built on a freelance, on-demand model, we bring together vetted specialists for every
          engagement — from studio and field recording to multi-reviewer QA. Every project runs
          on clear guidelines, documented consent, and measurable quality, so the data you ship
          into training is data you can trust.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
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
      </PageCard>
    </SubPageLayout>
  )
}
