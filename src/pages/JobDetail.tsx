import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Star } from 'lucide-react'
import SubPageLayout from '../components/SubPageLayout'
import SubPageBanner from '../components/SubPageBanner'
import { JOBS, jobSlug } from '../lib/jobs'
import { TALLY_ATTRS } from '../lib/tally'
import { BTN_RED } from '../lib/ui'

export default function JobDetail() {
  const { slug } = useParams()
  const job = JOBS.find((j) => jobSlug(j) === slug)

  return (
    <SubPageLayout>
      {job ? (
        <>
          <SubPageBanner
            badge="Job opening"
            badgeClass="bg-neo-secondary"
            bandClass="bg-black"
            texture="grid"
            starClass="text-white"
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                  {job.title}
                </h1>
              </div>
            </div>
            <div className="mt-8 -rotate-1 bg-white border-4 border-black shadow-neo-lg max-w-3xl">
              <div className="h-3 w-16 border-b-4 border-black bg-neo-secondary" />
              <p className="p-5 sm:p-6 text-sm sm:text-base font-bold text-black/75 leading-relaxed">
                {job.summary}
              </p>
            </div>
            {job.highlights.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {job.highlights.map((highlight, h) => (
                  <li
                    key={h}
                    className="bg-white text-black font-black uppercase text-[11px] tracking-widest px-3 py-1.5 border-4 border-black rotate-[-1deg]"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </SubPageBanner>

          <section className="bg-neo-cream bg-grid-lines" id="apply">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-14 sm:py-20">
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 bg-white text-black border-4 border-black shadow-neo-sm font-black uppercase text-xs tracking-widest px-4 py-2.5 hover:bg-neo-secondary active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100"
              >
                <ArrowLeft size={16} strokeWidth={3} />
                Back to all jobs
              </Link>

              <div className="mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-10 lg:gap-12 items-start">
                {/* Description sections */}
                <div className="flex flex-col gap-12">
                  {job.sections.map((section, s) => (
                    <section
                      key={s}
                      className="relative bg-white border-4 border-black shadow-neo-sm p-6 sm:p-8 pt-10 sm:pt-10"
                    >
                      <span className="absolute -top-6 -left-4 sm:-left-6 w-14 h-14 bg-neo-accent border-4 border-black shadow-neo-sm rotate-[-3deg] flex items-center justify-center font-black text-xl text-black">
                        {String(s + 1).padStart(2, '0')}
                      </span>
                      {section.heading && (
                        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black leading-tight">
                          {section.heading}
                        </h2>
                      )}
                      {section.paragraphs.map((paragraph, p) => (
                        <p
                          key={p}
                          className="mt-4 text-sm sm:text-base font-bold text-black/70 leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                      {section.bullets.length > 0 && (
                        <ul className="mt-5 flex flex-col gap-3">
                          {section.bullets.map((bullet, b) => (
                            <li
                              key={b}
                              className="group flex gap-3 text-sm font-bold text-black/70 leading-relaxed"
                            >
                              <span className="w-2.5 h-2.5 bg-black rotate-45 shrink-0 mt-1 group-hover:rotate-[135deg] group-hover:bg-neo-accent transition-all duration-300" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>

                {/* Sticky apply sidebar */}
                <aside className="relative lg:sticky lg:top-6 bg-neo-muted border-4 border-black shadow-neo-lg p-6 sm:p-7 lg:-rotate-1">
                  <Star
                    aria-hidden
                    size={28}
                    fill="#000"
                    strokeWidth={3}
                    className="absolute top-4 right-4 rotate-12 animate-spin-slow"
                  />
                  <span className="inline-block w-fit bg-black text-white border-4 border-black px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-2deg]">
                    Quick facts
                  </span>
                  <ul className="mt-6 flex flex-col gap-3">
                    {job.highlights.map((highlight, h) => (
                      <li
                        key={h}
                        className="bg-white text-black font-black uppercase text-[11px] tracking-widest px-3 py-2 border-4 border-black"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    {job.link ? (
                      <a
                        href={job.link}
                        target={job.link.startsWith('http') ? '_blank' : undefined}
                        rel={job.link.startsWith('http') ? 'noreferrer' : undefined}
                        className={`${BTN_RED} flex w-full items-center justify-center gap-2`}
                      >
                        Apply now
                        <ArrowUpRight size={18} strokeWidth={3} />
                      </a>
                    ) : (
                      <button
                        type="button"
                        {...TALLY_ATTRS}
                        className={`${BTN_RED} flex w-full items-center justify-center gap-2`}
                      >
                        Apply now
                        <ArrowUpRight size={18} strokeWidth={3} />
                      </button>
                    )}
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-black/70 text-center">
                      We reply to every serious application
                    </p>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </>
      ) : (
        <SubPageBanner
          badge="404"
          badgeClass="bg-neo-accent"
          bandClass="bg-neo-secondary"
          texture="halftone"
        >
          <h1 className="max-w-4xl text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-[0.9]">
            Job{' '}
            <span className="text-stroke inline-block">not found</span>
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg font-bold text-black/80 leading-relaxed">
            This job may have been filled or removed. Check the latest openings.
          </p>
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 mt-8 bg-black text-white border-4 border-black shadow-neo-sm font-black uppercase text-sm tracking-wide px-6 py-3 hover:bg-[#1a1a1a] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
          >
            <ArrowLeft size={16} strokeWidth={3} />
            Browse all jobs
          </Link>
        </SubPageBanner>
      )}
    </SubPageLayout>
  )
}