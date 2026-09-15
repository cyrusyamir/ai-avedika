import SubPageLayout, { PageCard } from '../components/SubPageLayout'
import JobCard from '../components/JobCard'
import { JOBS } from '../lib/jobs'

export default function Jobs() {
  return (
    <SubPageLayout>
      <PageCard>
        <span className="inline-block w-fit bg-neo-muted border-4 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-1deg]">
          Open roles
        </span>
        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95]">
          Active jobs
        </h1>
        <p className="mt-4 text-sm sm:text-base font-bold text-black/70 leading-relaxed max-w-2xl">
          We're always looking for curious people to join the work. Here's where we need help right
          now.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {JOBS.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>
      </PageCard>
    </SubPageLayout>
  )
}
