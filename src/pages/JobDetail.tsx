import { Link, useParams } from 'react-router-dom'
import SubPageLayout, { PageCard } from '../components/SubPageLayout'
import { JOBS, jobSlug } from '../lib/jobs'
import { useForm } from '../context/FormContext'

export default function JobDetail() {
  const { slug } = useParams()
  const { openForm } = useForm()
  const job = JOBS.find((j) => jobSlug(j) === slug)

  return (
    <SubPageLayout>
      <PageCard>
        <Link to="/jobs" className="text-sm font-medium text-blue-600 hover:underline">
          ← Back to all jobs
        </Link>
        {job ? (
          <>
            <h1 className="mt-6 text-3xl sm:text-4xl font-semibold tracking-tight text-black">
              {job.title}
            </h1>
            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl">{job.summary}</p>
            <div className="mt-8 max-w-2xl">
              <h2 className="text-lg font-semibold text-black tracking-tight mb-3">
                What you'll do
              </h2>
              <ul className="flex flex-col gap-2.5">
                {job.details.map((detail, d) => (
                  <li key={d} className="flex gap-2.5 text-sm text-gray-700">
                    <span className="text-black mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 max-w-sm">
              {job.link ? (
                <a
                  href={job.link}
                  target={job.link.startsWith('http') ? '_blank' : undefined}
                  rel={job.link.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-block w-full text-center text-sm font-semibold py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  Apply Now
                </a>
              ) : (
                <button
                  type="button"
                  onClick={openForm}
                  className="w-full text-center text-sm font-semibold py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors"
                >
                  Apply Now
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-black">Job not found</h1>
            <p className="mt-3 text-sm text-gray-600">
              This job may have been filled or removed. Check the latest openings.
            </p>
          </>
        )}
      </PageCard>
    </SubPageLayout>
  )
}
