import { Link } from 'react-router-dom'
import type { Job } from '../lib/jobs'
import { jobSlug } from '../lib/jobs'
import { TALLY_ATTRS } from '../lib/tally'

export default function JobCard({ job }: { job: Job }) {
  return (
    <article className="bg-white text-black border-4 border-black p-5 sm:p-6 flex flex-col gap-4 shadow-neo-sm hover:-translate-y-1 hover:shadow-neo-md transition-all duration-200 ease-out">
      <h3 className="text-lg font-black uppercase tracking-tight">{job.title}</h3>
      <p className="text-sm font-bold text-black/70 leading-relaxed line-clamp-2">{job.summary}</p>
      {job.highlights.length > 0 && (
        <ul className="flex flex-wrap gap-2">
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
      {job.link ? (
        <a
          href={job.link}
          target={job.link.startsWith('http') ? '_blank' : undefined}
          rel={job.link.startsWith('http') ? 'noreferrer' : undefined}
          className="mt-auto inline-block text-center text-sm font-black uppercase tracking-wide py-3 border-4 border-black bg-neo-accent text-black shadow-neo-sm hover:bg-[#ff5252] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
        >
          Apply Now
        </a>
      ) : (
        <button
          type="button"
          {...TALLY_ATTRS}
          className="mt-auto w-full text-center text-sm font-black uppercase tracking-wide py-3 border-4 border-black bg-neo-accent text-black shadow-neo-sm hover:bg-[#ff5252] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
        >
          Apply Now
        </button>
      )}
      <Link
        to={`/jobs/${jobSlug(job)}`}
        className="text-center text-sm font-bold uppercase tracking-wide text-black w-fit mx-auto px-2 py-1 hover:bg-black hover:text-neo-secondary transition-colors duration-100"
      >
        View full details →
      </Link>
    </article>
  )
}
