import { useEffect, useState } from 'react'
import SubPageLayout from '../components/SubPageLayout'
import SubPageBanner from '../components/SubPageBanner'
import SubPageCta from '../components/SubPageCta'
import JobCard from '../components/JobCard'
import { sanityClient } from '../lib/sanity'
import { CONTACT_EMAIL } from '../lib/site'
import { BTN_YELLOW } from '../lib/ui'

export default function Jobs() {
  const [jobs, setJobs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "job" && published == true] | order(order asc, title asc) {
            _id,
            title,
            slug,
            summary,
            highlights,
            order,
            link,
            sections
          }`
        )
        setJobs(data)
      } catch (err) {
        console.error('Failed to fetch jobs from Sanity:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  if (loading) {
    return (
      <SubPageLayout>
        <SubPageBanner badge="Open roles" badgeClass="bg-neo-secondary" bandClass="bg-neo-muted" texture="halftone">
          <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-[0.9]">
            Active{' '}
            <span className="bg-black text-neo-secondary border-4 border-black px-4 py-1 sm:px-6 shadow-neo-md rotate-[1deg] inline-block">
              jobs
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-base sm:text-lg font-bold text-black/80 leading-relaxed">
            Loading openings…
          </p>
        </SubPageBanner>
        <section className="bg-neo-cream bg-grid-lines min-h-[40vh] flex items-center justify-center">
          <p className="text-black/60 font-bold">Fetching jobs from CMS…</p>
        </section>
        <SubPageCta bandClass="bg-black" heading={<>No role that fits?<br />Say hi anyway.</>} actions={<a href={`mailto:${CONTACT_EMAIL}`} className={`${BTN_YELLOW} text-center`}>{CONTACT_EMAIL}</a>} />
      </SubPageLayout>
    )
  }

  return (
    <SubPageLayout>
      <SubPageBanner badge="Open roles" badgeClass="bg-neo-secondary" bandClass="bg-neo-muted" texture="halftone">
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

      {jobs.length === 0 ? (
        <section className="bg-neo-cream bg-grid-lines min-h-[40vh] flex items-center justify-center">
          <p className="text-black/60 font-bold">No open roles right now. Check back soon.</p>
        </section>
      ) : (
        <section className="bg-neo-cream bg-grid-lines">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-16 sm:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 pb-10">
              {jobs.map((job, i) => (
                <JobCard key={job._id} job={job} index={i + 1} />
              ))}
            </div>
          </div>
        </section>
      )}

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
