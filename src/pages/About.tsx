import SubPageLayout, { PageCard } from '../components/SubPageLayout'
import { SITE_NAME } from '../lib/site'

const stats = [
  { value: '40+', label: 'Languages covered' },
  { value: '10k+', label: 'Hours delivered' },
  { value: '99.2%', label: 'QA accuracy' },
]

const STRIP_STYLES = ['bg-neo-accent', 'bg-neo-secondary', 'bg-neo-muted']

export default function About() {
  return (
    <SubPageLayout>
      <PageCard>
        <span className="inline-block w-fit bg-neo-secondary border-4 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-1deg]">
          About us
        </span>
        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95] max-w-3xl">
          We turn human effort into reliable data
        </h1>
        <p className="mt-6 text-sm sm:text-base font-bold text-black/70 leading-relaxed max-w-2xl">
          {SITE_NAME} is the AI data-services arm of {SITE_NAME.toLowerCase()}.com. We design
          and run data collection, transcription, annotation and validation programs that power
          speech, vision and NLP systems for teams of every size.
        </p>
        <p className="mt-3 text-sm sm:text-base font-bold text-black/70 leading-relaxed max-w-2xl">
          Built on a freelance, on-demand model, we bring together vetted specialists for every
          engagement — from studio and field recording to multi-reviewer QA. Every project runs
          on clear guidelines, documented consent, and measurable quality, so the data you ship
          into training is data you can trust.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="border-4 border-black bg-white shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-200 ease-out"
            >
              <div className={`${STRIP_STYLES[i % STRIP_STYLES.length]} h-3 w-full border-b-4 border-black`} />
              <div className="p-5 text-center flex flex-col gap-1">
                <p className="text-3xl font-black tracking-tight text-black">{stat.value}</p>
                <p className="text-sm font-bold text-black/70">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </PageCard>
    </SubPageLayout>
  )
}
