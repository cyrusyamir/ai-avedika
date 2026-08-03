import SubPageLayout, { PageCard } from '../components/SubPageLayout'
import JobCard from '../components/JobCard'
import { JOBS } from '../lib/jobs'

export default function Jobs() {
  return (
    <SubPageLayout>
      <PageCard>
        <span className="inline-block w-fit bg-black text-white text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
          Open roles
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-black">
          Active jobs
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
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
