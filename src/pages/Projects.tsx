import { Link, useParams } from 'react-router-dom'
import SubPageLayout from '../components/SubPageLayout'
import SubPageBanner from '../components/SubPageBanner'
import SubPageCta from '../components/SubPageCta'
import { TALLY_ATTRS } from '../lib/tally'
import { DOMAINS, DOMAIN_SLUGS, PROJECTS, domainFromSlug } from '../lib/projects'
import { BTN_RED } from '../lib/ui'

const STRIP_STYLES = ['bg-neo-secondary', 'bg-neo-muted', 'bg-neo-accent']

export default function Projects() {
  const { domain: slug } = useParams()
  const domain = domainFromSlug(slug)
  const projects = PROJECTS[domain]

  return (
    <SubPageLayout>
      <SubPageBanner
        badge="Projects"
        badgeClass="bg-neo-accent"
        bandClass="bg-black"
        texture="grid"
        starClass="text-white"
      >
        <h1 className="max-w-5xl text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.9]">
          Explore work{' '}
          <span className="text-stroke-white inline-block">by domain</span>
        </h1>
        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg font-bold text-white/80 leading-relaxed">
          Select a domain to see the projects and deliverables we run end-to-end — real programs
          with vetted people, documented process, and measurable quality.
        </p>
      </SubPageBanner>

      <section className="relative bg-neo-cream bg-grid-lines">
        {/* Filter cluster overlapping the black band */}
        <div className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <div className="bg-white border-4 border-black shadow-neo-lg p-4 sm:p-5 flex flex-wrap gap-3 rotate-[-0.5deg]">
            {DOMAINS.map((d) => {
              const active = d === domain
              return (
                <Link
                  key={d}
                  to={`/projects/${DOMAIN_SLUGS[d]}`}
                  className={`font-black uppercase text-xs tracking-widest px-4 py-2 border-4 border-black shadow-neo-sm hover:rotate-1 hover:bg-neo-secondary transition-all duration-100 ${
                    active
                      ? 'bg-black text-neo-secondary active:translate-x-1 active:translate-y-1 active:shadow-none'
                      : 'bg-white text-black'
                  }`}
                >
                  {d}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 pb-6 pt-12 sm:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, i) => (
              <article
                key={project.title}
                className="relative bg-white border-4 border-black shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-200 ease-out md:even:translate-y-12"
              >
                <span
                  aria-hidden
                  className="absolute -top-7 right-2 font-black text-stroke select-none pointer-events-none text-[5.5rem] leading-none opacity-70"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div
                  className={`${STRIP_STYLES[i % STRIP_STYLES.length]} h-3 w-full border-b-4 border-black`}
                />
                <div className="p-6 sm:p-8 flex flex-col gap-4">
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black leading-tight pr-12">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-bold text-black/70 leading-relaxed">
                    {project.summary}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {project.details.map((detail, d) => (
                      <li
                        key={d}
                        className="group flex gap-3 text-sm font-bold text-black/70 leading-relaxed"
                      >
                        <span className="w-2.5 h-2.5 bg-black rotate-45 shrink-0 mt-1 group-hover:rotate-[135deg] group-hover:bg-neo-accent transition-all duration-300" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-black uppercase text-[11px] tracking-widest px-3 py-1 border-4 border-black bg-neo-cream text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SubPageCta
        bandClass="bg-neo-muted"
        heading={
          <>
            Know what you need?
            <br />
            Let's scope it.
          </>
        }
        actions={
          <button type="button" {...TALLY_ATTRS} className={`${BTN_RED} text-center`}>
            Start a project
          </button>
        }
      />
    </SubPageLayout>
  )
}