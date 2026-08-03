import { Link } from 'react-router-dom'
import type { Job } from '../lib/jobs'
import { jobSlug } from '../lib/jobs'
import { TALLY_ATTRS } from '../lib/tally'

export default function JobCard({ job }: { job: Job }) {
  return (
    <article className="bg-white text-black rounded-2xl sm:rounded-3xl border border-gray-200 p-5 sm:p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold tracking-tight">{job.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-2">{job.summary}</p>
      {job.highlights.length > 0 && (
        <ul className="flex flex-wrap gap-2">
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
      {job.link ? (
        <a
          href={job.link}
          target={job.link.startsWith('http') ? '_blank' : undefined}
          rel={job.link.startsWith('http') ? 'noreferrer' : undefined}
          className="mt-auto inline-block text-center text-sm font-semibold py-2.5 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Apply Now
        </a>
      ) : (
        <button
          type="button"
          {...TALLY_ATTRS}
          className="mt-auto w-full text-center text-sm font-semibold py-2.5 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Apply Now
        </button>
      )}
      <Link
        to={`/jobs/${jobSlug(job)}`}
        className="text-center text-sm font-medium text-blue-600 hover:underline"
      >
        View full details →
      </Link>
    </article>
  )
}
