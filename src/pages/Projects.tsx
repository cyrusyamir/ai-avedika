import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SubPageLayout from '../components/SubPageLayout'
import SubPageBanner from '../components/SubPageBanner'
import SubPageCta from '../components/SubPageCta'
import { TALLY_ATTRS } from '../lib/tally'
import { PROJECT_CATEGORIES } from '../lib/projects'
import { BTN_BLACK } from '../lib/ui'

const BANDS = ['bg-neo-accent', 'bg-neo-secondary', 'bg-neo-muted', 'bg-white', 'bg-black']
const STRIP_STYLES = ['bg-neo-secondary', 'bg-neo-muted', 'bg-neo-accent']

export default function Projects() {
  const { hash } = useLocation()
  const [active, setActive] = useState(() => hash.slice(1))

  useEffect(() => {
    const id = hash.slice(1)
    setActive(id)
    if (!id) return
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [hash])

  const jump = (slug: string) => {
    window.history.replaceState(null, '', `#${slug}`)
    setActive(slug)
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
          Real work.{' '}
          <span className="text-stroke-white inline-block">Real results.</span>
        </h1>
        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg font-bold text-white/80 leading-relaxed">
          Example work across every service we run — annotation programs, survey operations,
          remote teams, transcription, and build-it-for-you technology.
        </p>
      </SubPageBanner>

      <section className="bg-neo-cream bg-grid-lines">
        {/* Sticky quick-jump tabs */}
        <div className="sticky top-2 z-30 px-3 sm:px-4 md:px-6 pt-6">
          <div className="max-w-7xl mx-auto bg-white border-4 border-black shadow-neo-lg p-3 flex flex-wrap gap-2">
            {PROJECT_CATEGORIES.map((c) => {
              const isActive = active === c.slug
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => jump(c.slug)}
                  className={`font-black uppercase text-xs tracking-widest px-3 py-2 border-4 border-black shadow-neo-sm transition-all duration-100 ${
                    isActive
                      ? 'bg-black text-neo-secondary active:translate-x-1 active:translate-y-1 active:shadow-none'
                      : 'bg-white text-black hover:bg-neo-secondary hover:rotate-1'
                  }`}
                >
                  {c.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Category sections */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16">
          {PROJECT_CATEGORIES.map((category, i) => {
            const band = BANDS[i % BANDS.length]
            const dark = band === 'bg-black'
            return (
              <section key={category.slug} id={category.slug} className="scroll-mt-28 py-8 sm:py-10">
                <div className={`${band} border-4 border-black shadow-neo-sm p-6 sm:p-8`}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <span
                      className={`text-5xl sm:text-6xl font-black leading-none ${
                        dark ? 'text-stroke-white' : 'text-stroke'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`inline-block font-black uppercase text-xs tracking-widest px-3 py-1.5 border-4 border-black rotate-[-2deg] ${
                        dark ? 'bg-neo-secondary text-black' : 'bg-black text-white'
                      }`}
                    >
                      {category.projects.length} example projects
                    </span>
                  </div>
                  <h2
                    className={`mt-4 text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter leading-[0.95] ${
                      dark ? 'text-white' : 'text-black'
                    }`}
                  >
                    {category.label}
                  </h2>
                  <p
                    className={`mt-3 max-w-2xl text-sm sm:text-base font-bold leading-relaxed ${
                      dark ? 'text-white/80' : 'text-black/70'
                    }`}
                  >
                    {category.intro}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {category.projects.map((project, p) => (
                    <article
                      key={project.title}
                      className="relative bg-white border-4 border-black shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md hover:rotate-[0.3deg] transition-all duration-200 ease-out"
                    >
                      <span
                        aria-hidden
                        className="absolute -top-6 right-2 font-black text-stroke select-none pointer-events-none text-[4.5rem] leading-none opacity-70"
                      >
                        {String(p + 1).padStart(2, '0')}
                      </span>
                      <div
                        className={`${STRIP_STYLES[(i + p) % STRIP_STYLES.length]} h-3 w-full border-b-4 border-black`}
                      />
                      <div className="p-6 sm:p-7 flex flex-col gap-4">
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black leading-tight pr-12">
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
              </section>
            )
          })}
        </div>
      </section>

      <SubPageCta
        bandClass="bg-neo-accent"
        headingClass="text-black"
        heading={
          <>
            Know what you need?
            <br />
            Let's scope it.
          </>
        }
        actions={
          <>
            <button type="button" {...TALLY_ATTRS} className={`${BTN_BLACK} text-center`}>
              Start a project
            </button>
            <a
              href="#ai-data"
              className="bg-white text-black font-black uppercase text-sm tracking-wide px-6 py-3 border-4 border-black shadow-neo-sm hover:bg-neo-secondary active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100 text-center"
            >
              Jump to work
            </a>
          </>
        }
      />
    </SubPageLayout>
  )
}