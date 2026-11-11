import SubPageLayout from '../components/SubPageLayout'
import SubPageBanner from '../components/SubPageBanner'
import SubPageCta from '../components/SubPageCta'
import JobCard from '../components/JobCard'
import { JOBS } from '../lib/jobs'
import { CONTACT_EMAIL } from '../lib/site'
import { BTN_YELLOW } from '../lib/ui'

export default function Jobs() {
  return (
    <SubPageLayout>
      <SubPageBanner
        badge="Open roles"
        badgeClass="bg-neo-secondary"
        bandClass="bg-neo-muted"
        texture="halftone"
      >
        <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-[0.9]">
          Active{' '}
          <span className="bg-black text-neo-secondary border-4 border-black px-4 py-1 sm:px-6 shadow-neo-md rotate-[1deg] inline-block">
            jobs
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-base sm:text-lg font-bold text-black/80 leading-relaxed">
          We're always looking for curious people to join the work. Here's where we need help right
          now — each role includes guidelines, QA, and clear compensation.
        </p>
      </SubPageBanner>

      <section className="bg-neo-cream bg-grid-lines">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-10">
            {JOBS.map((job, i) => (
              <JobCard key={job.title} job={job} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      <SubPageCta
        bandClass="bg-black"
        heading={
          <>
            No role that fits?
            <br />
            Say hi anyway.
          </>
        }
        actions={
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${BTN_YELLOW} text-center`}>
            {CONTACT_EMAIL}
          </a>
        }
      />
    </SubPageLayout>
  )
}