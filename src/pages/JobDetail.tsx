import { Link, useParams } from 'react-router-dom'
import SubPageLayout, { PageCard } from '../components/SubPageLayout'
import { JOBS, jobSlug } from '../lib/jobs'
import { TALLY_ATTRS } from '../lib/tally'

export default function JobDetail() {
  const { slug } = useParams()
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
            {job.highlights.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.highlights.map((highlight, h) => (
                  <li
                    key={h}
                    className="rounded-full bg-neutral-100 border border-gray-200 px-3 py-1 text-xs text-gray-700"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8 max-w-2xl flex flex-col gap-8">
              {job.sections.map((section, s) => (
                <section key={s}>
                  {section.heading && (
                    <h2 className="text-lg font-semibold text-black tracking-tight mb-3">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((paragraph, p) => (
                    <p key={p} className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets.length > 0 && (
                    <ul className="flex flex-col gap-2.5">
                      {section.bullets.map((bullet, b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-gray-700">
                          <span className="text-black mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
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
                  {...TALLY_ATTRS}
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
