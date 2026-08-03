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
        <span className="inline-block w-fit bg-black text-white text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full">
          Projects
        </span>
        <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-black">
          Explore work by domain
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Select a domain to see the projects and deliverables we run end-to-end.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {DOMAINS.map((d) => {
            const active = d === domain
            return (
              <Link
                key={d}
                to={`/projects/${DOMAIN_SLUGS[d]}`}
                className={`text-xs font-medium px-4 py-2 rounded-xl border transition-colors ${
                  active
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-black'
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
              className="bg-white text-black rounded-2xl sm:rounded-3xl border border-gray-200 p-5 sm:p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.summary}</p>
              <ul className="flex flex-col gap-2.5">
                {project.details.map((detail, d) => (
                  <li key={d} className="flex gap-2.5 text-sm text-gray-700">
                    <span className="text-black mt-0.5">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-black text-white"
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
