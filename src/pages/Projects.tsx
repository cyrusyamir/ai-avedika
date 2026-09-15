import { Link, useParams } from 'react-router-dom'
import SubPageLayout, { PageCard } from '../components/SubPageLayout'
import { DOMAINS, DOMAIN_SLUGS, PROJECTS, domainFromSlug } from '../lib/projects'

export default function Projects() {
  const { domain: slug } = useParams()
  const domain = domainFromSlug(slug)
  const projects = PROJECTS[domain]

  return (
    <SubPageLayout>
      <PageCard>
        <span className="inline-block w-fit bg-neo-accent border-4 border-black rounded-full px-4 py-1 font-black uppercase text-xs tracking-widest shadow-neo-sm rotate-[-1deg]">
          Projects
        </span>
        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-black leading-[0.95]">
          Explore work by domain
        </h1>
        <p className="mt-4 text-sm sm:text-base font-bold text-black/70 leading-relaxed max-w-2xl">
          Select a domain to see the projects and deliverables we run end-to-end.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {DOMAINS.map((d) => {
            const active = d === domain
            return (
              <Link
                key={d}
                to={`/projects/${DOMAIN_SLUGS[d]}`}
                className={`font-black uppercase text-xs tracking-wide px-4 py-2 border-4 border-black shadow-neo-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-100 ${
                  active
                    ? 'bg-black text-neo-secondary'
                    : 'bg-white text-black hover:bg-neo-secondary'
                }`}
              >
                {d}
              </Link>
            )
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="bg-white text-black border-4 border-black p-5 sm:p-6 flex flex-col gap-4 shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-200 ease-out"
            >
              <h3 className="text-lg font-black uppercase tracking-tight">{project.title}</h3>
              <p className="text-sm font-bold text-black/70 leading-relaxed">{project.summary}</p>
              <ul className="flex flex-col gap-2.5">
                {project.details.map((detail, d) => (
                  <li key={d} className="group flex gap-3 text-sm font-bold text-black/70 leading-relaxed">
                    <span className="w-2.5 h-2.5 bg-black rotate-45 shrink-0 mt-1 group-hover:rotate-[135deg] group-hover:bg-neo-accent transition-all duration-300" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-black uppercase tracking-wide px-3 py-1 border-4 border-black bg-neo-cream text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </PageCard>
    </SubPageLayout>
  )
}
