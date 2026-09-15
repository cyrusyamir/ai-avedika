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
        <Link
          to="/jobs"
          className="inline-block text-sm font-bold uppercase tracking-wide text-black px-2 py-1 hover:bg-black hover:text-neo-secondary transition-colors duration-100"
        >
          ← Back to all jobs
        </Link>
        {job ? (
          <>
            <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95] max-w-3xl">
              {job.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base font-bold text-black/70 leading-relaxed max-w-2xl">{job.summary}</p>
            {job.highlights.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {job.highlights.map((highlight, h) => (
                  <li
                    key={h}
                    className="rounded-full bg-neo-cream border-4 border-black px-3 py-1 text-xs font-black uppercase tracking-wide text-black"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-9 max-w-2xl flex flex-col gap-8">
              {job.sections.map((section, s) => (
                <section key={s}>
                  {section.heading && (
                    <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black mb-3">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((paragraph, p) => (
                    <p key={p} className="text-sm sm:text-base font-bold text-black/70 leading-relaxed mb-3">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets.length > 0 && (
                    <ul className="flex flex-col gap-2.5">
                      {section.bullets.map((bullet, b) => (
                        <li key={b} className="group flex gap-3 text-sm font-bold text-black/70 leading-relaxed">
                          <span className="w-2.5 h-2.5 bg-black rotate-45 shrink-0 mt-1 group-hover:rotate-[135deg] group-hover:bg-neo-accent transition-all duration-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
            <div className="mt-10 max-w-sm">
              {job.link ? (
                <a
                  href={job.link}
                  target={job.link.startsWith('http') ? '_blank' : undefined}
                  rel={job.link.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-block w-full text-center text-sm font-black uppercase tracking-wide py-3 border-4 border-black bg-neo-accent text-black shadow-neo-sm hover:bg-[#ff5252] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
                >
                  Apply Now
                </a>
              ) : (
                <button
                  type="button"
                  {...TALLY_ATTRS}
                  className="w-full text-center text-sm font-black uppercase tracking-wide py-3 border-4 border-black bg-neo-accent text-black shadow-neo-sm hover:bg-[#ff5252] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
                >
                  Apply Now
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <h1 className="mt-6 text-3xl font-black uppercase tracking-tight text-black">Job not found</h1>
            <p className="mt-3 text-sm font-bold text-black/70">
              This job may have been filled or removed. Check the latest openings.
            </p>
          </>
        )}
      </PageCard>
    </SubPageLayout>
  )
}
